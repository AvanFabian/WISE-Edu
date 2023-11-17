import React from 'react'
import dynamic from "next/dynamic";
import Image from "next/image";

import {
    biologilecture,
    calendar,
    achievement,
    performabelajar,
    kompetisi_trophy,
    panah_ikut_kompetisi,
  } from "@/public/assets/right-icons";

  const MapelImage = [{ icon: biologilecture, mapel: "Biologi" }];

  const PelajaranMenu = dynamic(() => import("./PelajaranMenu"), {
    ssr: false,
  });

const RightPageTopMenu = () => {
  return (
    <div className="flex flex-row gap-8 mt-7 ml-5">
    <div className="flex flex-row cursor-pointer m-auto">
      <PelajaranMenu mapel={MapelImage} />
    </div>
    <div className="flex flex-row items-center m-auto">
      <Image src={calendar} width={30} height={35} alt="WISE Edu Logo" />
      <span className="font-bold text-xs text-[#5e5e5eab]">12</span>
    </div>
    <div className="flex flex-row items-center m-auto">
      <Image src={achievement} width={30} height={35} alt="WISE Edu Logo" />
      <span className="font-bold text-xs text-[#FFB501]">122</span>
    </div>
    <div className="flex flex-row items-center m-auto">
      <Image
        src={performabelajar}
        width={30}
        height={35}
        alt="WISE Edu Logo"
      />
      <span className="font-bold text-xs text-[#31a13b]">Good</span>
    </div>
  </div>
  )
}

export default RightPageTopMenu