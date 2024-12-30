'use client'
import React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";

import { fire } from "@/public/assets/tantangan_icons";

const TantanganBanner = dynamic(
  () => import("@/components/TantanganStuff/TantanganBanner"),
  {

  }
);

const ProgressBar = dynamic(
  () => import("@/components/MainpageStuff/ProgressBar"),
  {

  }
);

const page = () => {

  const [progressVal, setProgressVal] = React.useState(0);

  return (
    <div className="flex flex-col items-end w-full lg:w-[630px] gap-9 lg:gap-8">
      <TantanganBanner />
      <div className="relative flex flex-col w-[85%] mx-auto">
        <div className="w-full flex flex-row mb-2 ">
          <div className="w-full">
            <h2 className="text-[#414040] text-base md:text-2xl font-bold">Tantangan Harian</h2>
          </div>
          <div className="w-full text-end">
            <h2 className="text-[#414040] text-base md:text-2xl font-extrabold">Semangat!</h2>
          </div>
        </div>
        <div className="w-full p-4 mb-9 flex flex-row border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl">
          <div className="flex basis-1/6">
            <Image
              src={fire}
              width={100}
              height={100}
              alt="WISE Edu Logo w-[75px] h-[75px] lg:w-[100] lg:h-[100]"
            />
          </div>
          <div className="flex basis-5/6">
            <div className="w-full ml-5 flex flex-col align-middle">

              <h2 className="text-[#414040] text-base md:text-xl font-bold my-auto">Selesaikan 5 Soal Aljabar Berikut</h2>
              <div className='w-full flex flex-row'>
                <ProgressBar progressVal={progressVal} />
                <span className='text-[#414040] text-xs lg:text-sm font-normal'>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default page;
