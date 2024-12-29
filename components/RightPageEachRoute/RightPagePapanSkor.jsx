import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Kompetisi } from "@/public/assets/papanskor_icons";

const TopMenu = dynamic(
  () => import("@/components/RightPageEachRoute/TopMenu"),
  {

  }
);
const FooterText = dynamic(
  () => import("@/components/RightPageEachRoute/FooterText"),
  {

  }
);

const Rightpage_home = () => {
  return (
    <div className="sticky top-0 flex flex-col max-w-[390px]">
      {/* Top Menu */}
      <TopMenu />
      <div className="hidden lg:flex flex-col w-full mt-8 ml-3">
        <div className="hidden lg:flex flex-col bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
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
        <div className="hidden lg:block">
          <FooterText />
        </div>
      </div>
    </div>
  );
};

export default Rightpage_home;
