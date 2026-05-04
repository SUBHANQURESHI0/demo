import type { Metadata } from "next";
import { Geist_Mono, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MODERNUK | Luxury Essentials",
  description:
    "Premium British-inspired fashion storefront with elevated shopping and admin experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary/20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
