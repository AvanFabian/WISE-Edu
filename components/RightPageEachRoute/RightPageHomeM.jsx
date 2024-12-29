import Image from "next/image";
import dynamic from "next/dynamic";
import {
  kompetisi_trophy,
  panah_ikut_kompetisi,
} from "@/public/assets/right-icons";

const TopMenu = dynamic(
  () => import("@/components/RightPageEachRoute/TopMenu"),
  {

  }
);

const Rightpage_home = () => {
  return (
    <div className="flex flex-col mx-auto w-full lg:max-w-[390px]">
      {/* Top Menu */}
      <TopMenu />
    </div>
  );
};

export default Rightpage_home;
