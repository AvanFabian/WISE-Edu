import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import {
  kompetisi_trophy,
} from "@/public/assets/right-icons";

const rightpage_papanskor = () => {
  return (
    <div className="sticky top-0 flex flex-col max-w-[390px]">
        <div className="flex relative flex-col w-full h-max mt-4 z-50 bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-1 mt-1 px-3 py-3">
            <div className="flex flex-col mr-1">
              <h2 className="text-[#8a8a8a] text-xs mb-2 mr-auto font-bold subpixel-antialiased uppercase">
                Apa itu Papan Skor?
              </h2>
              <h2 className="text-[#4d4c4c] text-sm mr-auto font-bold subpixel-antialiased capitalize">
                Bersaing Belajar Berjuang.
              </h2>
            </div>
            <div className="grid grid-cols-3 mt-2">
              <p className="col-span-2 text-[16px] font-normal">
                Bandingkan skormu dengan siswa lainnya dan Terus kembangkan
                dirimu
              </p>
              <Image
                src={kompetisi_trophy}
                width={105}
                height={55}
                alt="WISE Edu Logo"
                className="z-10 absolute right-[-20px] bottom-1"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default rightpage_papanskor