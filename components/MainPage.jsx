import React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";
import panduan from "@/public/assets/panduan.png";
import Link from "next/link";

const ButtonGroup = dynamic(
  () => import("@/components/MainpageStuff/ButtonGroup"),
  {

  }
);

const mainpage = () => {
  return (
    <div className="flex flex-col w-full lg:w-[630px] mr-1 lg:mr-6">
      <div className="flex flex-col self-end max-w-full w-full align-top">
        <div className="w-[90%] mx-auto lg:w-full bg-gradient-to-l from-[#bc998e] to-[#8B6B61] mt-4 py-4 lg:py-5 px-5 lg:px-4 rounded-xl shadow-xl">
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col align-middle my-auto">
              <h1 className="text-[#d4d1c1] text-base md:text-2xl font-extrabold mb-2 capitalize subpixel-antialiased">
                Matematika bagian 1
              </h1>
              <h2 className="lg:text-[#fffdf1] text-[#ecebea] lg:text-lg text-[14px] font-semibold lg:font-normal subpixel-antialiased text-justify">
                Aljabar merupakan salah satu cabang matematika yang mempelajari
                tentang operasi-operasi yang dapat dilakukan pada bilangan dan
                variabel.
              </h2>
            </div>
            <div className="flex justify-end items-center">
              <Link href="https://www.youtube.com/watch?v=lScgN1qnirY">
                <div className="flex flex-row w-max gap-2 cursor-pointer items-center px-2 py-2 h-max bg-transparent border-[3px] border-b-[5px] hover:opacity-75 border-[#49494962] rounded-xl">
                  <Image
                    src={panduan}
                    width={30}
                    height={32}
                    alt="WISE Edu Logo"
                  />
                  <h2 className="text-[#ffffff] lg:text-[14px] text-[12px] font-bold uppercase">
                    Panduan Belajar
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-6 lg:mb-16">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default mainpage;
