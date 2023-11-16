import dynamic from "next/dynamic";
import Image from "next/image";

import { fire } from "@/public/assets/tantangan_icons";

const TantanganBanner = dynamic(
  () => import("@/components/TantanganStuff/TantanganBanner"),
  {
    ssr: false,
  }
);


const page = () => {
  return (
    <div className="flex flex-col items-end w-full gap-8">
      <TantanganBanner />
      <div className="relative flex flex-col w-[660px]">
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
            <div className="w-full ml-5 flex flex-col">
              <h2 className="text-[#414040] text-sm font-bold ">Dapatkan Beberapa [poin]</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default page;
