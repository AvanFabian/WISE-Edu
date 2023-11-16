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

const HoveringCard = dynamic(() => import("./HoveringCard"), {
  ssr: false,
});

const MapelImage = [{ icon: biologilecture, mapel: "Biologi" }];

const FooterText = [
  { text: "Kebijakan Privasi" },
  { text: "Syarat dan Ketentuan" },
];
const FooterText2 = [{ text: "FAQ" }, { text: "Hubungi Developer" }];

const Rightpage_home = () => {
  return (
    <div className="sticky top-0 flex flex-col max-w-[390px] max-h-max">
      <div className="flex flex-row gap-8 mt-7 ml-5">
        <div className="flex flex-row cursor-pointer m-auto">
          <HoveringCard mapel={MapelImage} />
        </div>
        <div className="flex flex-row items-center m-auto">
          <Image src={calendar} width={30} height={35} alt="WISE Edu Logo" />
          <span className="font-bold text-xs text-[#5e5e5eab]">12</span>
        </div>
        <div className="flex flex-row items-center m-auto">
          <Image src={achievement} width={30} height={35} alt="WISE Edu Logo" />
          <span className="font-bold text-xs text-[#FFB501]">122</span>
        </div>
        <div className="flex flex-row items-center m-auto">
          <Image
            src={performabelajar}
            width={30}
            height={35}
            alt="WISE Edu Logo"
          />
          <span className="font-bold text-xs text-[#31a13b]">Good</span>
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 ml-3">
        <div className="flex relative flex-col w-full h-max mt-4 bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
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
        <div className="flex flex-row gap-4 justify-center mt-8">
          {FooterText.map((item, index) => (
            <span
              key={index}
              className="text-[#5c5c5c] opacity-80 text-[13px] cursor-pointer font-bold subpixel-antialiased uppercase"
            >
              {item.text}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-center mt-3 mb-6">
          {FooterText2.map((item, index) => (
            <span
              key={index}
              className="text-[#5c5c5c] opacity-80 text-[13px] cursor-pointer font-bold subpixel-antialiased uppercase"
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightpage_home;
