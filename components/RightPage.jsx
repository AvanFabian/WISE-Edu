'use client'
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';

const Rightpage_Home = dynamic(() => import("@/components/RightPageEachRoute/RightPageHome"), { ssr: false });
const Rightpage_Papanskor = dynamic(() => import("@/components/RightPageEachRoute/RightPagePapanSkor"), { ssr: false });
const Rightpage_Tantangan = dynamic(() => import("@/components/RightPageEachRoute/RightPageTantangan"), { ssr: false });
const Rightpage_Akunkamu = dynamic(() => import("@/components/RightPageEachRoute/RightPageAkunKamu"), { ssr: false });

const rightpage = () => {
  const pathname = usePathname()

  const routeComponents = {
    '/': <Rightpage_Home />,
    '/papan-skor': <Rightpage_Papanskor />,
    '/daftar-pengajar': <Rightpage_Home />,
    '/tantangan': <Rightpage_Tantangan />,
    '/profile-akun': <Rightpage_Akunkamu />,
  }

  // Check if the current route exists in the object, if not, use a default component
  const selectedComponent = routeComponents[pathname] || <Rightpage_Home />

  return (
    <>
      {selectedComponent}
    </>
  );
};

export default rightpage;
