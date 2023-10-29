import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "WISE Edu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // hydration pass
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Theme>
        <body className=''>{children}</body>
      </Theme>
    </html>
  );
}
