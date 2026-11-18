import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Farhan (Farhan.dev) - Full-Stack Web & Mobile Developer",
  description:
    "Portofolio resmi Ahmad Farhan. Full-Stack Web & Mobile Developer spesialis Next.js, React, Flutter, dan Supabase.",
  verification: {
    google: "c9_o3OMV6VZo7zCO6oH8QK98J6RPn0wDW_BbgLpIzfw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
