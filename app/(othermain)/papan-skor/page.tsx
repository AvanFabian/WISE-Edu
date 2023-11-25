import React from "react";
import Image from "next/image";
import {
  trophy_papanskor,
  medal_no1,
  medal_no2,
  medal_no3,
  profile,
} from "@/public/assets/mainpage_icons";

const page = () => {
  return (
    <div className="flex mt-9 flex-col w-[630px]">
      {/* Image tropi */}
      <div className="w-full flex flex-row justify-center">
        <Image
          src={trophy_papanskor}
          width={130}
          height={35}
          alt="WISE Edu Logo"
          className="z-10 -rotate-45 opacity-90"
        />
        <Image
          src={trophy_papanskor}
          width={130}
          height={35}
          alt="WISE Edu Logo"
          className="z-50 opacity-95"
        />
        <Image
          src={trophy_papanskor}
          width={130}
          height={35}
          alt="WISE Edu Logo"
          className="z-10 rotate-45 opacity-90"
        />
      </div>
      {/* Judul + subjudul */}
      <div className="w-full flex flex-col text-center mt-8">
        <span className="text-lg text-[#1d1d1d] font-bold mb-3">
          Lihat Detail Papan Skor!
        </span>
        <span className="text-sm text-[#414040] font-normal">
          Selesaikan Latihan Soal sebanyak-banyaknya <br /> untuk meningkatkan
          peringkatmu!
        </span>
      </div>
      {/* Papan peringkat */}
      <div className="flex flex-col w-full border-y border-[#b4b4b4] self-center mt-12">
        <div className="flex flex-row w-full px-2 py-3">
          {/* profil + peringkat */}
          <div className="flex flex-row gap-3">
            <Image
              src={medal_no1}
              width={50}
              height={40}
              alt="WISE Edu Logo"
              className="rounded-full"
            />
            <Image
              src={profile}
              width={50}
              height={40}
              alt="WISE Edu Logo"
              className="rounded-full"
            />
          </div>
          {/* nama + kelas */}
          <div className="flex flex-row ml-5 w-full">
            <div className="flex w-full justify-start ">
              <span className="text-sm font-medium text-[#414040] ml-2 justify-end my-auto">
                John Doe&nbsp;|&nbsp;XII IPA 1
              </span>
            </div>
            <div className="flex w-full justify-end">
                <span className="text-sm font-normal text-[#414040] ml-2 justify-end my-auto">
                  8 / 10 Soal
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
