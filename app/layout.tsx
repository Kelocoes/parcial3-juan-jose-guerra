import type { Metadata } from "next";

import Navbar from "@/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Solar Explorer",
  description: "Explore the planets of the solar system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-200">
        <Navbar />
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
