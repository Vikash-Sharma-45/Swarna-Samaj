import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swarn Samaj | सवर्ण समाज — Strength in Unity, Progress through Service",
  description:
    "Swarn Samaj is a dignified Indian community organization dedicated to honoring cultural heritage, empowering youth through education, and advocating for our community's rights against oppressive policies.",
  keywords: [
    "Swarn Samaj",
    "सवर्ण समाज",
    "Indian community",
    "cultural organization",
    "rights advocacy",
    "youth education",
    "heritage",
  ],
  authors: [{ name: "Swarn Samaj" }],
  openGraph: {
    title: "Swarn Samaj | सवर्ण समाज",
    description:
      "Honoring heritage, empowering youth, and building an inclusive community.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarn Samaj | सवर्ण समाज",
    description: "Honoring heritage, empowering youth, and building an inclusive community.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${inter.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}
