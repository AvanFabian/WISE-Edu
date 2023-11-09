'use client'
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';

const Rightpage_Home = dynamic(() => import("@/components/rightpage_eachroute/RightPageHome"), { ssr: false });
const Rightpage_Papanskor = dynamic(() => import("@/components/rightpage_eachroute/RightPagePapanSkor"), { ssr: false });
const Rightpage_Misi = dynamic(() => import("@/components/rightpage_eachroute/RightPageMisi"), { ssr: false });
const Rightpage_Akunkamu = dynamic(() => import("@/components/rightpage_eachroute/RightPageAkunKamu"), { ssr: false });

const rightpage = () => {
  const pathname = usePathname()

  const routeComponents: any = {
    '/': <Rightpage_Home />,
    '/papan-skor': <Rightpage_Papanskor />,
    '/daftar-pengajar': <Rightpage_Home />,
    '/misi': <Rightpage_Misi />,
    '/profile-akun': <Rightpage_Akunkamu />,
  }

  // Check if the current route exists in the object, if not, use a default component
  const selectedComponent = routeComponents[pathname] || <Rightpage_Home />
  console.log(`pathname: ${pathname}`)

  return (
    <>
      {selectedComponent}
    </>
  );
};

export default rightpage;
