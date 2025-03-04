import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import { MobileNavBar, NavBar } from "@/app/navbar";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Paesani MBX",
    description: "MBX library for molecular dynamics simulations",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${quicksand.className} antialiased`}
            >
                <div className="hidden md:block">
                    <NavBar />
                </div>
                <div className="block md:hidden">
                    <MobileNavBar />
                </div>
                {children}
            </body>
        </html>
    );
}
