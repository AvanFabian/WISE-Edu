import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from '@/app/context/SessionProvider';
import { getServerSession } from "next-auth";
export const metadata: Metadata = {
  title: "SchEducation",
  description:
    "Terobosan baru sekolah-sekolah dalam memfasilitasi siswa-siswinya untuk belajar secara mandiri, berkesinambungan, dan terkontrol.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    // hydration pass
    <html lang="en" className="scroll-smooth min-h-screen">
      <body className="min-h-screen">
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
