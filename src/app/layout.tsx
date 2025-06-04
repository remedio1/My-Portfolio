import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";




export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-family">
      <body className="bg-gray-900 text-gray-100">
        <Header/>
        {children}
      </body>
    </html>
  );
}
