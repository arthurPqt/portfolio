import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets:  ["latin"],
  variable: "--font-syne",
  weight:   ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-dm-sans",
  weight:   ["300", "400", "500"],
});

const jetbrains = JetBrains_Mono({
  subsets:  ["latin"],
  variable: "--font-jetbrains",
  weight:   ["400", "500"],
});

export const metadata: Metadata = {
  title:       "Arthur Picquot — Développeur Full-Stack",
  description: "Portfolio de Arthur Picquot, développeur Full-Stack basé à Rouen. Next.js, React, Tailwind CSS, PHP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
