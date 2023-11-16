import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
        <body className="overflow-y-auto overflow-x-hidden max-w-screen max-h-screen">
          {children}
        </body>
    </html>
  );
}
