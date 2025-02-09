import type { Metadata } from "next";
import { Courgette } from "next/font/google";
import "./globals.css";

const geistSans = Courgette({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be My Valentine!!",
  description: "A Valentine's Day card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-rose-200">
      <body className={`${geistSans.className}`}>{children}</body>
    </html>
  );
}
