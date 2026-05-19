import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archana Web Developer | Jasa Pembuatan Website Modern & Profesional",
  description:
    "Archana Web Developer - Jasa pembuatan website, landing page, web app, dan sistem informasi modern. Solusi digital premium untuk bisnis Anda.",
  keywords:
    "jasa pembuatan website, web developer, landing page, web app, sistem informasi, UI/UX design",
  openGraph: {
    title: "Archana Web Developer | Jasa Pembuatan Website Modern & Profesional",
    description:
      "Solusi digital premium untuk bisnis Anda. Website, landing page, web app, dan sistem informasi modern.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
