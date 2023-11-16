import Image from "next/image";
import dynamic from "next/dynamic";
import {
  biologilecture,
  calendar,
  achievement,
  performabelajar,
  kompetisi_trophy,
  panah_ikut_kompetisi,
} from "@/public/assets/right-icons";

const HoveringCard = dynamic(() => import("./HoveringCard"), {
  ssr: false,
});

const MapelImage = [{ icon: biologilecture, mapel: "Biologi" }];

const FooterText = [
  { text: "Kebijakan Privasi" },
  { text: "Syarat dan Ketentuan" },
];
const FooterText2 = [{ text: "FAQ" }, { text: "Hubungi Developer" }];

const Rightpage_tantangan = () => {
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
        <div className="flex flex-col bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-1 mt-1 px-3 py-3">
            <h2 className="text-[#414040] text-sm font-bold subpixel-antialiased capitalize">
              Ayo Berkompetisi dengan Siswa Lain!
            </h2>
            <div className="grid grid-cols-6 gap-6 mt-4 ">
              <Image
                src={panah_ikut_kompetisi}
                width={85}
                height={55}
                alt="WISE Edu Logo"
                className="ml-3 cursor-pointer col-span-2"
              />
              <span className="text-[16px] font-normal col-span-4">
                Teruslah Berlatih untuk meningkatkan kemampuanmu dan menjadi
                yang terbaik
              </span>
            </div>
            <div className="flex justify-center">
              <button className="flex transition-all duration-150 mt-6 bg-[#8B6B61] hover:bg-[#d6aa9d] justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl w-full py-[12px]">
                <p className="text-[15px] font-bold text-white uppercase">
                  Ikuti Kompetisi
                </p>
              </button>
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

export default Rightpage_tantangan;
