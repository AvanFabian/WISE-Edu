'use client'
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';

const Rightpage_Home = dynamic(() => import("@/components/RightPageEachRoute/RightPageHome"), { ssr: false });
const Rightpage_Home_M = dynamic(() => import("@/components/RightPageEachRoute/RightPageHomeM"), { ssr: false });
const Rightpage_Papanskor = dynamic(() => import("@/components/RightPageEachRoute/RightPagePapanSkor"), { ssr: false });
// const Rightpage_Papanskor_M = dynamic(() => import("@/components/RightPageEachRoute/RightPagePapanSkorM"), { ssr: false });
const Rightpage_Tantangan = dynamic(() => import("@/components/RightPageEachRoute/RightPageTantangan"), { ssr: false });
// const Rightpage_Tantangan_M = dynamic(() => import("@/components/RightPageEachRoute/RightPageTantanganM"), { ssr: false });
const Rightpage_Akunkamu = dynamic(() => import("@/components/RightPageEachRoute/RightPageAkunKamu"), { ssr: false });
// const Rightpage_Akunkamu_M = dynamic(() => import("@/components/RightPageEachRoute/RightPageAkunKamuM"), { ssr: false });

const rightpage = () => {
  const pathname = usePathname()

  const routeComponents = {
    '/': <Rightpage_Home_M />,
    '/papan-skor': <Rightpage_Home_M />,
    '/daftar-pengajar': <Rightpage_Home_M />,
    '/tantangan': <Rightpage_Home_M />,
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
