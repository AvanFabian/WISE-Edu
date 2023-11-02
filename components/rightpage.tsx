import React from "react";
import Image from "next/image";
import { Grid, Container, Flex, Button, Section } from "@radix-ui/themes";
import {
  biologilecture,
  calendar,
  achievement,
  performabelajar,
  kompetisi_trophy,
  panah_ikut_kompetisi,
} from "@/public/assets/right-icons";

const rightpage = () => {
  return (
    <div className="flex-flex-col w-[550px]">
      <div className="inline-grid grid-cols-4 gap-6 mt-9 ml-7">
        <Flex direction="row" className="col-span-1 cursor-pointer">
          <Image
            src={biologilecture}
            width={50}
            height={35}
            alt="WISE Edu Logo"
          />
        </Flex>
        <Flex direction="row" className="items-center">
          <Image src={calendar} width={50} height={35} alt="WISE Edu Logo" />
          <span className="font-bold text-[#5e5e5eab]">12</span>
        </Flex>
        <Flex direction="row" className="items-center">
          <Image src={achievement} width={50} height={35} alt="WISE Edu Logo" />
          <span className="font-bold text-[#FFB501]">122</span>
        </Flex>
        <Flex direction="row" className="items-center">
          <Image
            src={performabelajar}
            width={50}
            height={35}
            alt="WISE Edu Logo"
          />
          <span className="font-bold text-[#31a13b]">Good</span>
        </Flex>
      </div>
      <div className="flex flex-col w-full mt-8 ml-3">
        <div className="flex relative flex-col w-full h-max bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-2 mt-2 pl-4 pr-8 py-3">
            <h2 className="text-[#414040] text-xl font-bold subpixel-antialiased capitalize">
              Ayo Berkompetisi dengan Siswa Lain!
            </h2>
            <div className="grid grid-cols-6 gap-6 mt-8 w-full">
              <Image
                src={panah_ikut_kompetisi}
                width={150}
                height={55}
                alt="WISE Edu Logo"
                className="ml-3 cursor-pointer col-span-2"
              />
              <span className="text-lg font-normal col-span-4">
                Teruslah Berlatih untuk meningkatkan kemampuanmu dan menjadi
                yang terbaik
              </span>
            </div>
            <div className="flex justify-center">
              <button className="flex transition-all mt-6 bg-[#8B6B61] hover:bg-[#d6aa9d] justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl w-full py-3">
                <span className="text-lg font-bold text-white uppercase">
                  Ikuti Kompetisi
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col w-full h-max mt-8 bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-2 mt-2 pl-4 pr-8 py-3">
            <div className="flex flex-row ">
              <h2 className="text-[#414040] text-xl mr-auto font-bold subpixel-antialiased capitalize">
                Pantau Skor Terbaikmu
              </h2>
              <h2 className="text-[#0c0c0c] cursor-pointer text-xl font-extrabold subpixel-antialiased uppercase">
                Lihat
              </h2>
            </div>
            <div className="grid grid-cols-6 gap-6 mt-8 w-full">
              <Image
                src={kompetisi_trophy}
                width={150}
                height={55}
                alt="WISE Edu Logo"
                className="ml-3 cursor-pointer col-span-2"
              />
              <span className="text-lg font-normal col-span-4">
                Bandingkan skormu dengan siswa lainnya dan Terus kembangkan
                dirimu
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rightpage;
