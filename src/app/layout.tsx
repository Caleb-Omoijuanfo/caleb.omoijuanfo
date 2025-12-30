import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caleb Omoijuanfo | Web Developer & Designer",
  description:
    "Portfolio of Caleb Omoijuanfo - Full-stack web developer specializing in modern web technologies, mobile applications, and SaaS platforms.",
  keywords: [
    "web developer",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Caleb Omoijuanfo" }],
  openGraph: {
    title: "Caleb Omoijuanfo | Web Developer & Designer",
    description:
      "Full-stack web developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
