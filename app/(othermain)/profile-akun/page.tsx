import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { profile } from "@/public/assets/pengajar_icons";

const page = () => {
  return (
    <div className="flex flex-col mt-5 w-[630px]">
      <div className="flex flex-row border-b-[1px] border-[#414040] pb-8">
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
            <h5 className="text-[#5c5c5c] opacity-80 text-xs font-semibold">
              Terakhir Berlatih: [5 hari yang lalu]
            </h5>
            <h5 className="text-[#5c5c5c] opacity-80 text-xs font-semibold">
              Frekuensi Berlatih: [Sering]
            </h5>
          </div>
        </div>
        <div className="flex flex-col basis-2/6">
          <Image
            src={profile}
            alt="profile"
            width={130}
            height={130}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
