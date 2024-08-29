import type { Metadata } from "next";
import {  Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HBD J ",
  description: "Here’s a little gift from me, I hope that it brings a smile to your face. All I want is to see you happy, no matter where you are.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
