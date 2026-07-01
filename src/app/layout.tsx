/** @format */

import type { Metadata } from "next";
import "@/style/globals.css";


export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-safiul.vercel.app"),
    title: "Md Safiullah | Senior Full Stack Developer",
    description:
        "Portfolio of Md Safiullah, a backend-focused full stack developer building Laravel, Next.js, React, Vue, API, dashboard, ERP, e-commerce, and booking applications.",
    keywords: [
        "Md Safiullah",
        "Full Stack Developer",
        "Laravel Developer",
        "Next.js Developer",
        "React Developer",
        "Vue Developer",
        "Backend Developer",
        "Bangladesh Developer",
        "Portfolio",
    ],
    authors: [{ name: "Md Safiullah" }],
    creator: "Md Safiullah",
    openGraph: {
        title: "Md Safiullah | Senior Full Stack Developer",
        description:
            "Explore full stack projects, backend architecture work, APIs, dashboards, and production applications built by Md Safiullah.",
        type: "website",
        images: [
            {
                url: "/image.png",
                width: 1200,
                height: 630,
                alt: "Md Safiullah portfolio preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Md Safiullah | Senior Full Stack Developer",
        description: "Backend-focused full stack portfolio featuring Laravel, Next.js, React, Vue, dashboards, APIs, and production systems.",
        images: ["/image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
                    {children}
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
