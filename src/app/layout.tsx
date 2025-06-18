import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalFluidCursor from "@/components/ui/ConditionalFluidCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Mohamed | Web Developer & AI Enthusiast",
  description:
    "Explore the portfolio of Hamza Mohamed — showcasing projects in web development, AI, and creative technology using React, Next.js, and Firebase.",
  keywords: [
    "Hamza Mohamed Yasin",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript",
    "AI Projects",
    "Machine Learning",
    "Firebase",
    "TypeScript",
  ],
  authors: [
    {
      name: "Hamza Mohamed Yasin",
      url: "https://my-portfolio-three-lime-11.vercel.app/",
    },
  ],
  creator: "Hamza Mohamed Yasin",
  openGraph: {
    title: "Hamza Mohamed Yasin | Web Developer & AI Enthusiast",
    description:
      "Personal portfolio of Hamza Mohamed showcasing modern web and AI projects.",
    url: "https://my-portfolio-three-lime-11.vercel.app/",
    siteName: "Hamza Mohamed Portfolio",
    // images: [
    //   {
    //     url: "https://hamza-portfolio.vercel.app/og-image.png", // only if you have one
    //     width: 1200,
    //     height: 630,
    //     alt: "Hamza Mohamed Yasin Portfolio",
    //   },
    // ],
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
        <ConditionalFluidCursor />

        {children}
      </body>
    </html>
  );
}
