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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmad Farhan",
    alternateName: "Farhan.dev",
    url: "https://my-portfolio-pi-sable.vercel.app",
    jobTitle: "Full-Stack Web & Mobile Developer",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "Supabase",
      "Tailwind CSS",
    ],
    sameAs: [
      "https://www.linkedin.com/in/ahmadfarhan-dev",
      // Jika mau tambahkan link GitHub, tulis di bawah baris ini:
      // "https://github.com/username-github-kamu",
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
