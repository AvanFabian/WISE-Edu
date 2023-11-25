import React from "react";
import Image from "next/image";
import {
  bintang_level,
  gembok_level,
  bubblechat_mulai,
} from "@/public/assets/mainpage_icons";

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
    <div className="relative px-2 overflow-visible flex flex-row">
      <Image
        src={bubblechat_mulai}
        width={100}
        height={32}
        alt="WISE Edu Logo"
        className="absolute w-[120px] left-0 top-[-40px] z-30 animate-bounce"
      />
      <UnlockedButton />
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className="grid grid-rows-3 gap-12 mt-16">
      <div className="ml-12 items-start flex flex-col">
        <MulaiButton />
      </div>
      <div className="items-center flex flex-col">
        <LockedButton />
      </div>
      <div className="mr-12 items-end flex flex-col">
        <LockedButton />
      </div>
      <div className="items-center flex flex-col">
        <LockedButton />
      </div>
      <div className="ml-12 items-start flex flex-col">
        <LockedButton />
      </div>
      <div className="items-center flex flex-col">
        <LockedButton />
      </div>
      <div className="mr-12 items-end flex flex-col">
        <LockedButton />
      </div>
    </div>
  );
};

export default ButtonGroup;
