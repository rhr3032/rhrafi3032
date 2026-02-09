import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";

const sora = Sora({
    variable: "--font-sans",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Rafi Rahman – UI/UX Designer",
        template: "%s | Rafi Rahman",
    },
    description:
        "Rafi Rahman is a UI/UX designer with 4+ years of experience crafting research-led, accessible digital products.",
    keywords: [
        "ui ux designer",
        "product designer",
        "design systems",
        "ux research",
        "interaction design",
        "mobile app design",
        "portfolio",
    ],
    authors: [{ name: "Rafi Rahman" }],
    creator: "Rafi Rahman",
    applicationName: "Rafi Rahman Portfolio",
    appleWebApp: {
        title: "Rafi Rahman",
        capable: true,
        statusBarStyle: "default",
    },
    openGraph: {
        title: "Rafi Rahman – UI/UX Designer",
        description:
            "Research-led UX, accessible interfaces and scalable design systems for web and mobile products.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rafi Rahman – UI/UX Designer",
        description:
            "Research-led UX, accessible interfaces and scalable design systems for web and mobile products.",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sora.variable} ${spaceGrotesk.variable}`}>
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
