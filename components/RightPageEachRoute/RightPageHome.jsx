import Image from "next/image";
import dynamic from "next/dynamic";
import {
  kompetisi_trophy,
  panah_ikut_kompetisi,
} from "@/public/assets/right-icons";

const TopMenu = dynamic(
  () => import("@/components/RightPageEachRoute/TopMenu"),
  {
    ssr: false,
  }
);
const FooterText = dynamic(
  () => import("@/components/RightPageEachRoute/FooterText"),
  {
    ssr: false,
  }
);

const Rightpage_home = () => {
  return (
    <div className="sticky top-0 flex flex-col max-w-[390px]">
      {/* Top Menu */}
      <TopMenu />
      <div className="flex flex-col w-full mt-8 ml-3">
        <div className="hidden lg:flex flex-col bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
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
              <button
                className="flex transition-all duration-150 mt-6 bg-[#8B6B61] hover:bg-[#d6aa9d] justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl w-full py-[12px]"
                // onClick={() => main()}>
              >
                <p className="text-[15px] font-bold text-white uppercase">
                  Lihat Peringkat kamu
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative flex-col w-full mt-4 bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-1 mt-1 px-3 py-3">
            <div className="flex flex-row mr-1">
              <h2 className="text-[#414040] text-sm mr-auto font-bold subpixel-antialiased capitalize">
                Pantau Skor <br />
                Terbaikmu
              </h2>
              <h2 className="text-[#414040] cursor-pointer text-sm font-extrabold subpixel-antialiased uppercase">
                Lihat
              </h2>
            </div>
            <div className="grid grid-cols-6 gap-6 mt-4 w-full">
              <Image
                src={kompetisi_trophy}
                width={85}
                height={55}
                alt="WISE Edu Logo"
                className="cursor-pointer col-span-2"
              />
              <p className="text-[16px] font-normal col-span-4">
                Bandingkan skormu dengan siswa lainnya dan Terus kembangkan
                dirimu
              </p>
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
