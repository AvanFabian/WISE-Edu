import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";


export const metadata: Metadata = {
  title: "WISE Education",
  description: "Terobosan baru sekolah-sekolah dalam memfasilitasi siswa-siswinya untuk belajar secara mandiri, berkesinambungan, dan terkontrol.",
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
        <body className="overflow-y-auto overflow-x-hidden max-w-screen max-h-screen">
          {children}
        </body>
      </Theme>
    </html>
  );
}
