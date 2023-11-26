import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { profile } from "@/public/assets/pengajar_icons";
import { indonesiaflag } from "@/public/assets/akunkamu_icons";
import { fire } from "@/public/assets/tantangan_icons";

const page = () => {
  return (
    <div className="flex flex-col mt-5 w-[630px]">
      <div className="flex border-b-[1px] border-[#aaa8a8] pb-6">
        <div className="flex flex-col basis-4/6 gap-3">
          <div className="flex flex-col w-full">
            <h2 className="text-[#414040] text-xl font-bold">
              Avan Fabian Daniswara
            </h2>
            <h4 className="text-[#5c5c5c] opacity-80 text-xs font-bold">
              AvanFabian
            </h4>
          </div>
          <div className="flex flex-col w-full gap-1">
            <h5 className="text-[#020202] opacity-80 text-xs font-normal">
              Terakhir Berlatih: [5 hari yang lalu]
            </h5>
            <h5 className="text-[#020202] opacity-80 text-xs font-normal">
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
      <div className="flex flex-col pt-6 gap-3">
        <h2 className="text-[#414040] text-base font-bold">Statistik Akun</h2>
        <div className="flex flex-row w-full gap-3">
          <div className="w-full p-2 flex flex-row border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl">
            <Image src={fire} width={50} height={50} alt="firelogo" />
          </div>
          <div className="w-full p-2 flex flex-row border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl">
            <Image src={fire} width={50} height={50} alt="firelogo" />
          </div>
        </div>
        <div className="flex flex-row w-full gap-3">
          <div className="w-full p-2 flex flex-row border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl">
            <Image src={fire} width={50} height={50} alt="firelogo" />
          </div>
          <div className="w-full p-2 flex flex-row border-2 bg-[#ebe2cd] border-[#c4bfbf62] rounded-2xl">
            <Image src={fire} width={50} height={50} alt="firelogo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-6">
        <div className="flex flex-row">
          <h2 className="text-[#414040] text-base font-bold">Pencapaian</h2>
          <h2 className="text-[#414040] text-base font-bold">Lihat Semua</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
