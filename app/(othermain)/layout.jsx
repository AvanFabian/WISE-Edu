import "./othermain.css";
import dynamic from "next/dynamic";


const SideBar = dynamic(() => import("@/components/Sidebar"), {

});
const SidebarMobileobile = dynamic(() => import("@/components/SidebarMobile"), {

});
const RightPage = dynamic(() => import("@/components/RightPage"), {

});
const RightPageMobile = dynamic(() => import("@/components/RightPageMobile"), {

});

export default function OtherMainLayout({
  children
}) {
  return (
    <main className="min-h-screen bg-[#F5ECD7]">
      {/* For larger screens (desktop layout) */}
      <div className="hidden md:grid lg:grid grid-cols-12 lg:grid-cols-12 lg:max-w-full lg:min-h-screen">
        {/* Left Sidebar */}
        <div className="bg-[#F5ECD7] col-span-2 flex flex-col justify-start items-center border-r-[2px] border-[#c6c3c3]">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="bg-[#F5ECD7] col-span-6 flex flex-col justify-start items-center">
        {children}
        </div>

        {/* Right Sidebar */}
        <div className="bg-[#F5ECD7] col-span-4 flex flex-col justify-start items-center">
          <RightPage />
        </div>
      </div>

      {/* For smaller screens (mobile layout) */}
      <div className="flex flex-col gap-3 max-w-full min-h-screen md:hidden">
        {/* Right Sidebar for Mobile */}
        <div className="bg-[#F5ECD7]">
          <RightPageMobile />
        </div>

        {/* Main Content for Mobile */}
        <div className="bg-[#F5ECD7]">
          {children}
        </div>

        {/* Left Sidebar for Mobile */}
        <div className="bg-[#F5ECD7]">
          <SidebarMobileobile />
        </div>
      </div>
    </main>

  );
}
