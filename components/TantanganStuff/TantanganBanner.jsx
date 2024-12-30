import Image from "next/image";
import panduan from "@/public/assets/panduan.png";
import { Achievement } from "@/public/assets/tantangan_icons";
import Link from "next/link";

const PengajarBanner = () => {
  return (
    <div className="relative w-[85%] mx-auto lg:w-full bg-gradient-to-l from-[#b88575] to-[#977f77] mt-4 py-9 lg:py-14 px-4 rounded-xl shadow-xl">
      <div className="flex flex-row w-full">
        <div className="flex flex-col align-middle my-auto basis-4/6">
          <h1 className="text-[#e7e7e7] text-base md:text-2xl font-extrabold mb-2 capitalize subpixel-antialiased">
            Selamat Datang di Tantangan
          </h1>
          <h2 className="text-[#e7e7e7] text-xs md:text-lg font-normal subpixel-antialiased capitalize">
            Dapatkan Achievement <br /> dengan menyelesaikan 
          </h2>
        </div>
        <div className="flex justify-end items-center basis-2/6">
          <Link href="https://storyset.com/illustration/achievement/bro#FFC100FF&hide=&hide=complete" target="_blank">
            <Image
              src={Achievement}
              width={220}
              height={200}
              alt="WISE Edu Logo"
              className="absolute top-2 w-[150px] lg:w-[220px] right-3 rounded-2xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PengajarBanner;