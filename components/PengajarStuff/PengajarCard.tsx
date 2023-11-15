import Image from "next/image";
import { profile } from "@/public/assets/pengajar_icons";

type PengajarCardProps = {
  item: {
    mata_pelajaran: any;
    nama: any;
  };
};

export const PengajarCard = ({ item }: PengajarCardProps) => {
  return (
    <div className="relative flex flex-col mx-auto mt-12 w-[300px] gap-1 overflow-visible border-[3px] border-[#c4bfbf62] bg-[#ebe2cd] rounded-2xl flex-nowrap">
      <div className="flex p-2 mx-auto">
        <Image
          src={profile}
          width={105}
          height={55}
          alt="YourProfile"
          className="rounded-xl mt-[-50px]"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2 mt-1 ml-1">
        <div className="flex flex-col my-auto gap-3">
            <div className="flex flex-col gap-2">
              <div className="w-full text-center">
                <span className="text-[#020202] text-sm font-semibold subpixel-antialiased capitalize">
                  {item.nama}
                </span>
              </div>
              <div className="w-full text-center">
                <div className="flex flex-row justify-center gap-4 mt-1">
                  {item.mata_pelajaran.map((item: string, index: number) => (
                    <div className="flex transition-all duration-150 ">
                      <span key={index} className="text-white text-sm font-bold subpixel-antialiased capitalize">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
