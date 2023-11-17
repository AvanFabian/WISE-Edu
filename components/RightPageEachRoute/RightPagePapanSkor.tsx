import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { kompetisi_trophy } from "@/public/assets/right-icons";
import { Kompetisi } from "@/public/assets/papanskor_icons";

const TopMenu = dynamic(() => import("@/components/RightPageEachRoute/TopMenu"), {
  ssr: false,
});
const FooterText = dynamic(() => import("@/components/RightPageEachRoute/FooterText"), {
  ssr: false,
});

const rightpage_papanskor = () => {
  return (
    <div className="sticky top-0 flex flex-col max-w-[390px]">
      {/* Top Menu */}
      <TopMenu />
      <div className="flex flex-col bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] mt-4 rounded-2xl">
        <div className="ml-1 mt-1 px-3 py-3">
          <h2 className="text-[#414040] text-sm font-bold subpixel-antialiased capitalize">
            Selamat Berkompetisi
          </h2>
          <div className="flex mt-4 justify-center">
            <Link
              href="https://storyset.com/illustration/generating-new-leads/bro#A28474FF&hide=&hide=complete"
              target="_blank"
            >
              <Image
                src={Kompetisi}
                width={275}
                height={55}
                alt="WISE Edu Logo"
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
      {/* map FooterText */}
      <FooterText />
    </div>
  );
};

export default rightpage_papanskor;
