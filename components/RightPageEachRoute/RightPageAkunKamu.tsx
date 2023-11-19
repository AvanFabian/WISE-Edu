import Image from "next/image";
import dynamic from "next/dynamic";
import {
  biologilecture,
  calendar,
  achievement,
  performabelajar,
  kompetisi_trophy,
} from "@/public/assets/right-icons";
import { UserRight2 } from "@/public/assets/akunkamu_icons";
import Link from "next/link";

const TopMenu = dynamic(() => import("@/components/RightPageEachRoute/TopMenu"), {
  ssr: false,
});
const FooterText = dynamic(() => import("@/components/RightPageEachRoute/FooterText"), {
  ssr: false,
});

const Rightpage_home = () => {
  return (
    <div className="sticky top-0 flex flex-col max-w-[390px]">
      {/* TopMenu */}
      <TopMenu />
      <div className="flex flex-col w-full mt-8 ml-3">
        <div className="flex relative flex-col w-full bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-1 mt-1 px-3 py-3">
            <div className="flex flex-row mr-1 ">
              <h2 className="text-[#414040] text-sm font-bold subpixel-antialiased capitalize">
                Pengaturan Akun Kamu <br /> dapat dilakukan di sini
              </h2>
            </div>
            <div className="flex w-full justify-center">
              <Link href="https://storyset.com/illustration/browser-stats/bro#A28474FF&hide=&hide=complete" target="_blank">
                <Image
                  src={UserRight2}
                  width={250}
                  height={125}
                  alt="WISE Edu Logo"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* map FooterText */}
        <FooterText />
      </div>
    </div>
  );
};

export default Rightpage_home;
