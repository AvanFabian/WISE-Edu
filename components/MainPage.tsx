import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import panduan from "@/public/assets/panduan.png";

const ButtonGroup: any = dynamic( () => import("@/components/MainpageStuff/ButtonGroup"), {
  ssr: false,
});

const mainpage = () => {
  return (
    <div className="flex flex-col w-full lg:w-[630px] mr-1 lg:mr-6">
      <div className="flex flex-col self-end max-w-full w-full align-top">
        <div className="w-full bg-gradient-to-l from-[#bc998e] to-[#8B6B61] mt-4 py-5 px-4 rounded-xl shadow-xl">
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col align-middle my-auto">
              <h1 className="text-[#d4d1c1] text-md font-bold mb-2 capitalize subpixel-antialiased">
                Matematika bagian 1
              </h1>
              <h2 className="text-[#fffdf1] text-xs font-normal subpixel-antialiased">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
            <div className="flex justify-end items-center">
              <div className="flex flex-row w-max gap-2 cursor-pointer items-center px-2 py-2 h-max bg-transparent border-[3px] border-b-[5px] hover:opacity-75 border-[#49494962] rounded-xl">
                <Image
                  src={panduan}
                  width={30}
                  height={32}
                  alt="WISE Edu Logo"
                />
                <h2 className="text-[#ffffff] text-[14px] font-bold uppercase">
                  Panduan Belajar
                </h2>
              </div>
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
