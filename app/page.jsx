import dynamic from "next/dynamic";
import SchEducation from "@/public/assets/LogoText/SchEducation.svg";
import Image from "next/image";

const MainPage = dynamic(() => import("@/components/MainPage"), {

});
const SideBar = dynamic(() => import("@/components/Sidebar"), {

});
const SidebarMobileobile = dynamic(() => import("@/components/SidebarMobile"), {

});
const RightPage = dynamic(() => import("@/components/RightPage"), {

});
const RightPageMobile = dynamic(() => import("@/components/RightPageMobile"), {

});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5ECD7]">
      <div className="hidden min-w-screen min-h-screen md:grid md:grid-cols-12 lg:grid lg:grid-cols-12 lg:max-w-full lg:min-h-screen">
        <div className="bg-[#F5ECD7] col-span-2 w-[67.5%] lg:w-max lg:h-full border-r-[2px] pr-2 border-[#c6c3c3] lg:border-none lg:fixed">
          {/* <div className="bg-[#F5ECD7] fixed"> */}
          <SideBar />
        </div>
        {/* <div className="hidden lg:col-span-2 lg:bg-[#F5ECD7] lg:border-r-[1px] lg:border-[#5e5e5e]"></div> */}
        <div className="hidden lg:block lg:col-span-2 lg:bg-[#F5ECD7] lg:border-r-[1px] lg:border-[#5e5e5e]"></div>

        <div className="col-span-6 pl-2 lg:pr-0 lg:col-span-6 bg-[#F5ECD7]">
          <div className="w-full flex justify-end">
            <MainPage />
          </div>
        </div>

        <div className="col-span-4 lg:sticky top-0 right-0 pl-8 bg-[#F5ECD7] max-w-full">
          <RightPage />
        </div>
      </div>
      <div className="flex flex-col gap-3 max-w-full min-h-screen md:hidden">
        <div className="bg-[#F5ECD7]">
          <RightPageMobile />
        </div>
        {/* <div className="row-span-1 bg-[#F5ECD7] border-r-[1px] border-[#5e5e5e]"></div> */}

        <div className="bg-[#F5ECD7]">
          <div className="w-full flex justify-end">
            <MainPage />
          </div>
        </div>

        <div className="sticky top-0 p-3 bg-[#F5ECD7] max-w-full">
          <SidebarMobileobile />
        </div>
      </div>
    </main>
  );
}
