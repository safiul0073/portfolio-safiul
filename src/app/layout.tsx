/** @format */

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/style/globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500"],
    variable: "--font-mono",
});

// Runs before first paint. Sets the theme class (no flash) and `js`, which
// gates the scroll-reveal pre-hide in globals.css. It deliberately does not
// write to localStorage, so the system preference keeps being honoured until
// the user picks a theme explicitly.
const themeScript = `(function(){try{
var d=document.documentElement;
d.classList.add('js');
var t=localStorage.getItem('theme');
if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
d.classList.toggle('dark',t==='dark');
d.style.colorScheme=t;
}catch(e){document.documentElement.classList.add('js');}})();`;

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
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
            </head>
            <body>{children}</body>
        </html>
    );
}
