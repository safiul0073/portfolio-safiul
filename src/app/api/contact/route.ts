import { NextRequest, NextResponse } from "next/server";
import { personalInfo } from "@/data/portfolio";
import { verifyToken } from "@/utils/jwt";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
    website?: unknown;
};

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

type ContactMessage = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    submittedAt: string;
    ipAddress: string;
};

const globalForContact = globalThis as typeof globalThis & {
    contactRateLimits?: Map<string, RateLimitEntry>;
};

const rateLimits = globalForContact.contactRateLimits ?? new Map<string, RateLimitEntry>();
globalForContact.contactRateLimits = rateLimits;
const localContactsPath = path.join(process.cwd(), "data", "contacts.json");

const cleanText = (value: unknown) =>
    typeof value === "string" ? value.trim().replace(/\r\n/g, "\n") : "";

const escapeHtml = (value: string) =>
    value.replace(
        /[&<>"']/g,
        (character) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;",
            })[character] ?? character,
    );

const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;

const getClientIp = (request: NextRequest) =>
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

const isRateLimited = (key: string) => {
    const now = Date.now();
    const current = rateLimits.get(key);

    if (!current || current.resetAt <= now) {
        rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
        return true;
    }

    current.count += 1;
    return false;
};

const isAdminRequest = (request: NextRequest) => {
    const token = request.cookies.get("ttll")?.value;
    return token ? Boolean(verifyToken(token)) : false;
};

const redisRequest = async <T,>(command: unknown[]): Promise<T | null> => {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!redisUrl || !redisToken) {
        return null;
    }

    const response = await fetch(redisUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${redisToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(command),
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Redis request failed with status ${response.status}`);
    }

    const data = (await response.json()) as { result: T };
    return data.result;
};

const readLocalMessages = async () => {
    try {
        const fileData = await fs.readFile(localContactsPath, "utf8");
        return fileData ? (JSON.parse(fileData) as ContactMessage[]) : [];
    } catch {
        return [];
    }
};

const writeLocalMessages = async (messages: ContactMessage[]) => {
    await fs.mkdir(path.dirname(localContactsPath), { recursive: true });
    await fs.writeFile(localContactsPath, JSON.stringify(messages, null, 2));
};

const saveContactMessage = async (message: ContactMessage) => {
    const storedInRedis = await redisRequest<number>([
        "LPUSH",
        "portfolio:contact-messages",
        JSON.stringify(message),
    ]);

    if (storedInRedis !== null) {
        await redisRequest<number>(["LTRIM", "portfolio:contact-messages", 0, 199]);
        return "redis";
    }

    const messages = await readLocalMessages();
    await writeLocalMessages([message, ...messages].slice(0, 200));
    return "local";
};

const getContactMessages = async () => {
    const redisMessages = await redisRequest<string[]>([
        "LRANGE",
        "portfolio:contact-messages",
        0,
        199,
    ]);

    if (redisMessages !== null) {
        return redisMessages
            .map((item) => {
                try {
                    return JSON.parse(item) as ContactMessage;
                } catch {
                    return null;
                }
            })
            .filter(Boolean) as ContactMessage[];
    }

    return readLocalMessages();
};

const deleteContactMessage = async (id: string) => {
    const messages = await getContactMessages();
    const message = messages.find((item) => item.id === id);

    if (!message) {
        return false;
    }

    const removedFromRedis = await redisRequest<number>([
        "LREM",
        "portfolio:contact-messages",
        1,
        JSON.stringify(message),
    ]);

    if (removedFromRedis !== null) {
        return removedFromRedis > 0;
    }

    await writeLocalMessages(messages.filter((item) => item.id !== id));
    return true;
};

export async function GET(request: NextRequest) {
    if (!isAdminRequest(request)) {
        return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    try {
        const messages = await getContactMessages();
        return NextResponse.json(messages);
    } catch (error) {
        console.error("Contact messages could not be loaded:", error);
        return NextResponse.json({ message: "Messages could not be loaded." }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    if (!isAdminRequest(request)) {
        return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    try {
        const { id } = (await request.json()) as { id?: string };

        if (!id) {
            return NextResponse.json({ message: "Message id is required." }, { status: 400 });
        }

        const deleted = await deleteContactMessage(id);
        return NextResponse.json({
            message: deleted ? "Message deleted successfully." : "Message not found.",
        });
    } catch (error) {
        console.error("Contact message could not be deleted:", error);
        return NextResponse.json({ message: "Message could not be deleted." }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > 15_000) {
        return NextResponse.json({ message: "Message is too large." }, { status: 413 });
    }

    let payload: ContactPayload;

    try {
        payload = (await request.json()) as ContactPayload;
    } catch {
        return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    }

    // A filled website field indicates an automated submission.
    if (cleanText(payload.website)) {
        return NextResponse.json({ message: "Message received." });
    }

    const name = cleanText(payload.name);
    const email = cleanText(payload.email).toLowerCase();
    const subject = cleanText(payload.subject).replace(/[\r\n]+/g, " ");
    const message = cleanText(payload.message);
    const ipAddress = getClientIp(request);

    if (name.length < 2 || name.length > 80) {
        return NextResponse.json(
            { message: "Please enter a name between 2 and 80 characters." },
            { status: 400 },
        );
    }

    if (!isValidEmail(email)) {
        return NextResponse.json(
            { message: "Please enter a valid email address." },
            { status: 400 },
        );
    }

    if (subject.length < 3 || subject.length > 120) {
        return NextResponse.json(
            { message: "Please enter a subject between 3 and 120 characters." },
            { status: 400 },
        );
    }

    if (message.length < 20 || message.length > 5_000) {
        return NextResponse.json(
            { message: "Please enter a message between 20 and 5,000 characters." },
            { status: 400 },
        );
    }

    if (isRateLimited(ipAddress)) {
        return NextResponse.json(
            { message: "Too many messages were sent. Please try again in 15 minutes." },
            {
                status: 429,
                headers: { "Retry-After": "900" },
            },
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || personalInfo.email;
    const fromEmail =
        process.env.CONTACT_FROM_EMAIL || "Md Safiullah Portfolio <onboarding@resend.dev>";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const submittedAt = new Date().toISOString();
    const contactMessage: ContactMessage = {
        id: crypto.randomUUID(),
        name,
        email,
        subject,
        message,
        submittedAt,
        ipAddress,
    };

    let storageMode: "redis" | "local" | null = null;

    try {
        storageMode = await saveContactMessage(contactMessage);
    } catch (error) {
        console.error("Contact message could not be stored:", error);
    }

    try {
        if (!apiKey) {
            console.error("Contact form email delivery is not configured: RESEND_API_KEY is missing.");
            if (storageMode) {
                return NextResponse.json({
                    message:
                        storageMode === "redis"
                            ? "Message received successfully."
                            : "Message saved locally. Email delivery is not configured yet.",
                });
            }

            return NextResponse.json(
                {
                    message:
                        "Email delivery is not configured yet. Please contact me directly by email.",
                },
                { status: 503 },
            );
        }

        const response = await fetch(RESEND_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "Idempotency-Key": crypto.randomUUID(),
            },
            body: JSON.stringify({
                from: fromEmail,
                to: [toEmail],
                reply_to: email,
                subject: `Portfolio inquiry: ${subject}`,
                text: [
                    "New portfolio inquiry",
                    "",
                    `Name: ${name}`,
                    `Email: ${email}`,
                    `Subject: ${subject}`,
                    `Submitted: ${submittedAt}`,
                    "",
                    message,
                ].join("\n"),
                html: `
                    <div style="background:#f5f5f5;padding:32px;font-family:Arial,sans-serif;color:#171717">
                        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d4d4d4">
                            <div style="background:#171717;color:#ffffff;padding:24px 28px">
                                <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#a3a3a3">Portfolio inquiry</p>
                                <h1 style="margin:0;font-size:24px;line-height:1.3">${safeSubject}</h1>
                            </div>
                            <div style="padding:28px">
                                <table style="width:100%;border-collapse:collapse;font-size:14px">
                                    <tr><td style="padding:8px 0;color:#737373;width:90px">From</td><td style="padding:8px 0;font-weight:600">${safeName}</td></tr>
                                    <tr><td style="padding:8px 0;color:#737373">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}" style="color:#171717">${safeEmail}</a></td></tr>
                                    <tr><td style="padding:8px 0;color:#737373">Received</td><td style="padding:8px 0">${submittedAt}</td></tr>
                                </table>
                                <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e5e5e5;font-size:16px;line-height:1.7">${safeMessage}</div>
                            </div>
                        </div>
                    </div>
                `,
            }),
            cache: "no-store",
        });

        if (!response.ok) {
            const providerError = await response.text();
            console.error("Resend contact delivery failed:", response.status, providerError);
            return NextResponse.json(
                {
                    message:
                        "The message could not be delivered. Please try again or contact me directly by email.",
                },
                { status: 502 },
            );
        }

        return NextResponse.json({ message: "Message sent successfully." });
    } catch (error) {
        console.error("Contact form request failed:", error);
        return NextResponse.json(
            {
                message:
                    "The message could not be delivered. Please try again or contact me directly by email.",
            },
            { status: 502 },
        );
    }
}
