import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { profile } from "@/public/assets/pengajar_icons";
import { indonesiaflag } from "@/public/assets/akunkamu_icons";
import { fire } from "@/public/assets/tantangan_icons";

const page = () => {
  return (
    <div className="flex flex-col mt-5 w-[85%] lg:w-[630px] mx-auto">
      <div className="flex border-b-[1px] border-[#aaa8a8] pb-3 lg:pb-6">
        <div className="flex flex-col basis-4/6 gap-3">
          <div className="flex flex-col w-full">
            <h2 className="text-[#414040] text-base md:text-2xl font-bold">
              Avan Fabian Daniswara
            </h2>
            <h4 className="text-[#5c5c5c] opacity-80 text-base md:text-lg font-bold">
              AvanFabian
            </h4>
          </div>
          <div className="flex flex-col w-full gap-1">
            <h5 className="text-[#020202] opacity-80 text-base md:text-lg font-semibold ">
              Terakhir Berlatih: [5 hari yang lalu]
            </h5>
            <h5 className="text-[#020202] opacity-80 text-base md:text-lg font-semibold ">
              Frekuensi Berlatih: [Sering]
            </h5>
            <div className="flex mt-2">
              <Image
                src={indonesiaflag}
                width={37}
                height={20}
                alt="indonesiaflag"
                className="rounded-md cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-2/6 items-center">
          <Image
            src={profile}
            alt="profile"
            width={130}
            height={130}
            className="rounded-full "
          />
        </div>
      </div>
      <div className="flex flex-col pt-6 gap-5">
        <h2 className="text-[#414040] text-base md:text-xl font-bold">Statistik Akun</h2>
        <div className="flex flex-row w-full gap-5 lg:gap-3">
          <div className="relative w-full px-3 py-3 flex border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl justify-end">
            {/* className="absolute top-[4px] left-0"  */}
            <Image
              src={fire}
              width={40}
              height={40}
              alt="firelogo"
              className="absolute top-4 left-0 lg:top-[12px] lg:left-3"
            />
            <div className="items-center flex w-3/4">
              <div className="flex flex-col w-max">
                <h2 className="text-[#414040] my-auto text-base md:text-lg font-semibold">
                  Tantangan Selesai
                </h2>
                <h2 className="text-[#414040] my-auto text-base md:text-lg font-semibold">
                  [5]
                </h2>
              </div>
            </div>
          </div>
          <div className="relative w-full px-3 py-3 flex border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl justify-end">
            {/* className="absolute top-[4px] left-0"  */}
            <Image
              src={fire}
              width={40}
              height={40}
              alt="firelogo"
              className="absolute top-4 left-0 lg:top-[12px] lg:left-3"
            />
            <div className="items-center flex w-3/4">
              <div className="flex flex-col w-max">
                <h2 className="text-[#414040] my-auto text-base md:text-lg font-semibold">
                  Tantangan Selesai
                </h2>
                <h2 className="text-[#414040] my-auto text-base md:text-lg font-semibold">
                  [5]
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-6">
        <div className="flex flex-row">
          <div className="flex w-full">
            <h2 className="text-[#414040] text-base md:text-xl font-bold">Pencapaian</h2>
          </div>
          <div className="flex w-full justify-end">
            <h2 className="text-[#BE8756] text-base md:text-xl font-bold">Lihat Semua</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
