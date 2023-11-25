'use client'
import React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";

import { fire } from "@/public/assets/tantangan_icons";

const TantanganBanner = dynamic(
  () => import("@/components/TantanganStuff/TantanganBanner"),
  {
    ssr: false,
  }
);

const ProgressBar = dynamic(
  () => import("@/components/TantanganStuff/ProgressBar"),
  {
    ssr: false,
  }
);

const page = () => {

   const [progressVal, setProgressVal] = React.useState(0);


  return (
    <div className="flex flex-col items-end w-[630px] gap-8">
      <TantanganBanner />
      <div className="relative flex flex-col w-full">
        <div className="w-full flex flex-row mb-2">
          <div className="w-full">
            <h2 className="text-[#414040] text-base font-bold">Tantangan Harian</h2>
          </div>
          <div className="w-full text-end">
            <h2 className="text-[#414040] text-base font-bold">Semangat!</h2>
          </div>
        </div>
        <div className="w-full p-4 flex flex-row border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl">
          <div className="flex basis-1/6">
            <Image 
              src={fire}
              width={100}
              height={100}
              alt="WISE Edu Logo"
            />
          </div>
          <div className="flex basis-5/6">
            <div className="w-full ml-5 flex flex-col align-middle">
              
              <h2 className="text-[#414040] text-sm font-bold my-auto">[Selesaikan 5 Soal Integral]</h2>
              <div className='w-full flex flex-row'>
                <ProgressBar progressVal={progressVal} />
                <span className='text-[#414040] text-sm font-normal'>[Gambar]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default page;
