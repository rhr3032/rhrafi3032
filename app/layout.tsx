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
        default: "Raisul Rafi – UI/UX Designer",
        template: "%s | Raisul Rafi",
    },
    description:
        "Raisul Rafi is a UI/UX designer with 4+ years of experience crafting research-led, accessible digital products.",
    keywords: [
        "ui ux designer",
        "product designer",
        "design systems",
        "ux research",
        "interaction design",
        "mobile app design",
        "portfolio",
        "raisul hasan rafi",
        "ui ux designer",
        "product designer",
        "design systems",
        "ux research",
        "interaction design",
        "mobile app design",
        "portfolio",
        "raisul rafi",
        "ui designer",
        "ux designer",
        "user interface designer",
        "user experience designer",
        "digital product designer",
        "web designer",
        "app designer",
        "freelance designer",
        "remote designer",
        "rhr3032",
        "rhrafi3032",
        "nuysdev",
        "nuysdzin"
        
    ],
    authors: [{ name: "Raisul Rafi" }],
    creator: "Raisul Rafi",
    applicationName: "Raisul Rafi Portfolio",
    appleWebApp: {
        title: "Raisul Rafi",
        capable: true,
        statusBarStyle: "default",
    },
    openGraph: {
        title: "Raisul Rafi – UI/UX Designer",
        description:
            "Research-led UX, accessible interfaces and scalable design systems for web and mobile products.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Raisul Rafi – UI/UX Designer",
        description:
            "Research-led UX, accessible interfaces and scalable design systems for web and mobile products.",
    },
    icons: {
        icon: "/fabicon.ico",
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
