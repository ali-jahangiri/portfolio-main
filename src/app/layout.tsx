import type { Metadata } from "next";
import "./globals.css";

import { Outfit } from "next/font/google";
import Navbar from "@/components/features/navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Jahangiri.dev",
  description: "Ali Jahangiri's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="ltr" lang="en">
      <body className={`${outfit.className} antialiased`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
