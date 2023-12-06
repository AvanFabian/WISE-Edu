import React from 'react'
import dynamic from "next/dynamic";
import Image from "next/image";
import { StaticImageData } from 'next/image';

import {
    biologilecture,
    calendar,
    achievement,
    performabelajar,
  } from "@/public/assets/right-icons";

  const PelajaranMenu = dynamic(() => import("./PelajaranMenu"), {
    ssr: false,
  });

type Mapel = {
    icon: StaticImageData;
    mapel: string;
  };

const MapelImage: Mapel[] = [
  { icon: biologilecture, mapel: "Biologi" },
  // other items...
];

const RightPageTopMenu = () => {
  return (
    <div className="w-full flex justify-center flex-row lg:gap-8 mt-5 lg:mt-7 mx-auto lg:ml-5">
    <div className="flex flex-row cursor-pointer m-auto">
      <PelajaranMenu mapel={MapelImage} />
    </div>
    <div className="flex flex-row items-center m-auto">
      <Image src={calendar} width={30} height={35} alt="WISE Edu Logo"
      className='w-[36px] lg:w-[30px]'
      />
      <span className="font-bold text-xs text-[#5e5e5eab]">12</span>
    </div>
    <div className="flex flex-row items-center m-auto">
      <Image src={achievement} width={30} height={35} alt="WISE Edu Logo"
      className='w-[36px] lg:w-[30px]'
      />
      <span className="font-bold text-xs text-[#FFB501]">122</span>
    </div>
    <div className="flex flex-row items-center m-auto">
      <Image
        src={performabelajar}
        width={30}
        height={35}
        alt="WISE Edu Logo"
        className='w-[36px] lg:w-[30px]'
      />
      <span className="font-bold text-xs text-[#31a13b]">Good</span>
    </div>
  </div>
  )
}

export default RightPageTopMenu