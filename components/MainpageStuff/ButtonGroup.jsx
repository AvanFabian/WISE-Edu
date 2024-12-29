'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  bintang_level,
  gembok_level,
  bubblechat_mulai,
} from "@/public/assets/mainpage_icons";

import {  
  Onlinelearning,
  raisinghand,
  Teacherstudent,
  Winners,
} 

from "@/public/assets/mainpage_icons";

const UnlockedButton = () => {
  return (
    <div className="flex flex-col">
      <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#8B6B61]">
        <Image src={bintang_level} width={35} height={32} alt="WISE Edu Logo" />
      </button>
      <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#b98879]">
        <Image src={bintang_level} width={35} height={32} alt="WISE Edu Logo" />
      </button>
    </div>
  );
};

const LockedButton = () => {
  return (
    <div className="flex flex-col">
      <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
        <Image src={gembok_level} width={35} height={32} alt="WISE Edu Logo" />
      </button>
      <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
        <Image src={gembok_level} width={35} height={32} alt="WISE Edu Logo" />
      </button>
    </div>
  );
};

const MulaiButton = () => {
  return (
    <>
    <button 
    className="relative px-2 overflow-visible flex flex-row">
      <Image
        src={bubblechat_mulai}
        width={100}
        height={32}
        alt="WISE Edu Logo"
        className="absolute w-[120px] left-0 top-[-40px] z-30 animate-bounce"
      />
      <UnlockedButton />
    </button>
    </>
  );
};

const ButtonGroup = () => {
  return (
    <div className="grid grid-rows-3 gap-12 mt-16">
      <div className="ml-12 items-start flex flex-col">
        <Link href="/soal">
          <MulaiButton />
        </Link>
      </div>
      <div className="items-center flex flex-col">
        <LockedButton />
      </div>
      <div className="relative mr-12 items-end flex flex-col">
        <LockedButton />  
        <Image 
         src={Onlinelearning}
          width={255}
          height={32}
          alt="WISE Edu Logo"
          className="invisible lg:visible absolute lg:left-[-60px] lg:top-[-120px] z-30"
        />
      </div>
      <div className="items-center flex flex-col">
        <LockedButton />
      </div>
      <div className="relative ml-12 items-start flex flex-col">
        <LockedButton />
        <Image 
         src={raisinghand}
          width={255}
          height={32}
          alt="WISE Edu Logo"
          className="invisible lg:visible absolute lg:right-[-60px] lg:top-[-120px] z-30"
        />
      </div>
      <div className="items-center flex flex-col">
        <LockedButton />
      </div>
      <div className="relative mr-12 items-end flex flex-col">
        <LockedButton />
        <Image 
         src={Teacherstudent}
          width={255}
          height={32}
          alt="WISE Edu Logo"
          className="invisible lg:visible absolute lg:left-[-60px] lg:top-[-120px] z-30"
        />
      </div>
      <div className="items-center flex flex-col">
        <LockedButton />
      </div>
      <div className="relative ml-12 items-start flex flex-col">
        <LockedButton />
        <Image 
         src={Winners}
          width={255}
          height={32}
          alt="WISE Edu Logo"
          className="invisible lg:visible absolute lg:right-[-60px] lg:top-[-120px] z-30"
        />        
      </div>
    </div>
  );
};

export default ButtonGroup;
