import Image from "next/image";
import { profile } from "@/public/assets/pengajar_icons";

type PengajarCardProps = {
  item: {
    mata_pelajaran: any;
    nama: any;
  };
};

const PengajarCard = ({ item }: PengajarCardProps) => {
  return (
    <div className="relative px-2 mx-auto flex flex-col mt-12 shadow-md lg:shadow-xl w-[285px] lg:w-[300px] gap-1 overflow-visible border-[3px] border-[#c4bfbf62] bg-[#ebe2cd] rounded-2xl ">
      <div className="flex p-2 mx-auto">
        <Image
          src={profile}
          width={105}
          height={55}
          alt="YourProfile"
          className="rounded-xl mt-[-50px]"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2 ml-1">
        <div className="flex flex-col my-auto gap-3">
            <div className="flex flex-col gap-2">
              <div className="w-full text-center">
                <span className="text-[#414040] text-sm font-bold subpixel-antialiased capitalize">
                  {item.nama}
                </span>
              </div>
              <div className="w-max text-center mx-auto">
                <div className="grid grid-cols-2 justify-center gap-1 mt-1">
                  {item.mata_pelajaran.map((item: string, index: number) => (
                    <div className="flex transition-all duration-150 bg-[#8B6B61] shadow-md lg:shadow-xl px-2 py-2 rounded-2xl cursor-pointer">
                      <span key={index} className="text-[#f2f2f2] mx-auto text-xs font-semibold subpixel-antialiased capitalize">
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

export default PengajarCard;