import Image from "next/image";
import Link from "next/link";
import { IlustrasiP, Pengajar1 } from "@/public/assets/pengajar_icons";

const PengajarBanner = () => {
  return (
    <div className="relative w-[660px] bg-gradient-to-l from-[#b88575] to-[#977f77] mt-4 py-14 px-4 rounded-xl shadow-xl">
      <div className="flex flex-row w-full">
        <div className="flex flex-col align-middle my-auto basis-4/6">
          <h1 className="text-[#e7e7e7] text-md font-bold mb-2 capitalize subpixel-antialiased">
            Daftar Pengajar
          </h1>
          <h2 className="text-[#e7e7e7] text-xs font-normal subpixel-antialiased capitalize">
            Pengajar Sekolah <br /> yang terdaftar di WISE
          </h2>
        </div>
        <div className="flex justify-end items-center basis-2/6">
          <Link href="https://storyset.com/illustration/light-bulb/cuate#default&hide=&hide=false" target="_blank">
            <Image
              src={IlustrasiP}
              width={220}
              height={200}
              alt="WISE Edu Logo"
              className="absolute top-2 right-3 rounded-2xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PengajarBanner;
