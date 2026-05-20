import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "PT Akira Prima Karya | Advertising, Signage & Acrylic Fabrication",
    template: "%s | PT Akira Prima Karya"
  },
  description:
    "PT Akira Prima Karya melayani pembuatan neon box custom, letter timbul, signage, display akrilik, rak kulkas custom, dan kebutuhan branding visual untuk bisnis, retail, F&B, dan area komersial.",
  keywords: [
    "neon box gresik",
    "letter timbul gresik",
    "advertising gresik",
    "custom acrylic",
    "display akrilik",
    "signage",
    "rak kulkas akrilik",
    "branding visual",
    "neon box surabaya",
    "letter timbul surabaya"
  ],
  icons: {
    icon: "/logo-akira.jpg",
    shortcut: "/logo-akira.jpg",
    apple: "/logo-akira.jpg"
  },
  openGraph: {
    title: "PT Akira Prima Karya",
    description: "Solusi advertising, signage, dan custom acrylic fabrication untuk kebutuhan bisnis Anda.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "PT Akira Prima Karya",
    description: "Solusi advertising, signage, dan custom acrylic fabrication untuk kebutuhan bisnis Anda."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-white">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <ScrollToTop />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
