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
  title: "Caleb Omoijuanfo | Full Stack Software Engineer",
  description:
    "Portfolio of Caleb Omoijuanfo - Full Stack Software Engineer with 7+ years of experience building scalable web and mobile applications. Specializing in React, React Native, Node.js, and TypeScript.",
  keywords: [
    "web developer",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Caleb Omoijuanfo" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Caleb Omoijuanfo | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with 7+ years of experience building scalable web and mobile applications.",
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
