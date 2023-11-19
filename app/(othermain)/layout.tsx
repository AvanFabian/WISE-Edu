import "./othermain.css";
import dynamic from "next/dynamic";
const SideBar = dynamic(() => import("@/components/Sidebar"), { ssr: false });
const RightPage = dynamic(() => import("@/components/RightPage"), {
  ssr: false,
});

export default function OtherMainLayout ({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-2 bg-[#F5ECD7] fixed">
            <SideBar />
          </div>

          {/* <!-- Faux Sidebar Space --> */}
          <div className="col-span-2 bg-[#F5ECD7] border-r-[1px] border-[#5e5e5e]"></div>

          <div className="col-span-6 bg-[#F5ECD7]">
            {children}
          </div>

          {/* <!-- Faux Sidebar Space --> */}
          <div className="col-span-4 bg-[#F5ECD7]"></div>

          <div className="fixed right-[60px] bg-[#F5ECD7] max-w-full">
            <RightPage />
          </div>
        </div>
  );
};