import React from 'react'
import Image from 'next/image';
import {
  trophy_papanskor,
  award,
} from "@/public/assets/mainpage_icons";

const page = () => {
  return (
    <div className='flex justify-center mt-14 flex-col max-w-full max-h-screen'>
      <div className='w-full flex flex-row justify-center'>
        <Image 
          src={award}
          width={140}
          height={35}
          alt="WISE Edu Logo"
          className='z-10 -rotate-45 opacity-90'
        />
        <Image 
          src={award}
          width={140}
          height={35}
          alt="WISE Edu Logo"
          className='z-50 opacity-95'
        />
        <Image 
          src={award}
          width={140}
          height={35}
          alt="WISE Edu Logo"
          className='z-10 rotate-45 opacity-90'
        />

      </div>
      <div className='w-full flex flex-col text-center mt-8'>
        <span className='text-xl text-[#1f1f1f] font-medium mb-3'>
          Lihat Detail Papan Skor!
        </span>
        <span className='text-sm text-[#414040] font-normal'>
          Selesaikan Latihan Soal sebanyak-banyaknya <br /> untuk meningkatkan peringkatmu!
        </span>
      </div>
    </div>
  )
}

export default page