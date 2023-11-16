import Image from "next/image";
import panduan from "@/public/assets/panduan.png";

const PengajarBanner = () => {
  return (
    <div className="relative w-[660px]  bg-gradient-to-l from-[#b88575] to-[#977f77] mt-4 py-14 px-4 rounded-xl shadow-xl">
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col align-middle my-auto">
          <h1 className="text-[#fffdf1] text-md font-bold mb-2 capitalize subpixel-antialiased">
            Selamat Datang!
          </h1>
          <h2 className="text-[#fffdf1] text-xs font-normal subpixel-antialiased capitalize">
            Taklukkan semua tantangan dan jadilah yang teratas.
          </h2>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex flex-row w-max gap-2 cursor-pointer items-center px-2 py-2 h-max bg-transparent border-[3px] border-b-[5px] hover:opacity-75 border-[#49494962] rounded-xl">
            <Image src={panduan} width={30} height={32} alt="WISE Edu Logo" />
            <h2 className="text-[#ffffff] text-[14px] font-bold uppercase">
              Panduan Belajar
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengajarBanner;