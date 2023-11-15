"use client";
import React from "react";
import Image from "next/image";
import {
  kompetisi_trophy,
  performabelajar,
  pasfoto,
} from "@/public/assets/right-icons";

const TeacherProperty = [
  { properti: "Nama", titik: ":" },
  { properti: "Peringkat", titik: ":" },
]

const page = () => {
  return (
    <>
      <div className="relative flex flex-row mt-12 w-[650px] gap-4 mx-auto overflow-visible border-[3px] border-[#c4bfbf62] bg-[#ebe2cd] rounded-2xl flex-nowrap">
        <div className="flex basis-1/6 p-2">
          <Image
            src={pasfoto}
            width={155}
            height={55}
            alt="WISE Edu Logo"
            className="rounded-full "
          />
        </div>
        <div className="flex flex-col gap-1 basis-5/6 my-2 ">
          <div className="flex flex-col my-auto gap-3">
            <div className="flex flex-row w-[120px] ">
              <span className="text-[#414040] text-sm font-semibold subpixel-antialiased">
                Nama
              </span>
              <span className="text-[#414040] text-sm font-semibold ml-auto subpixel-antialiased">
                :
              </span>
            </div>
            <div className="flex flex-row w-[120px]">
              <span className="text-[#414040] text-sm font-semibold subpixel-antialiased">
                Peringkat
              </span>
              <span className="text-[#414040] text-sm font-semibold ml-auto  subpixel-antialiased">
                :
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
