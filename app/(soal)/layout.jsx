import "./soal.css";
import dynamic from "next/dynamic";
const SideBar = dynamic(() => import("../../components/Sidebar"), {
  ssr: false,
});
const RightPage = dynamic(() => import("../../components/RightPage"), {
  ssr: false,
});

export default function OtherMainLayout({
  children
}) {
  return (
    <div className="grid grid-cols-12 max-w-full min-h-screen">
      <div className="bg-[#F5ECD7] fixed">
        <SideBar />
      </div>

      {/* <!-- Faux Sidebar Space --> */}
      <div className="col-span-2 bg-[#F5ECD7] border-r-[1px] border-[#5e5e5e]"></div>

      <div className="col-span-10 bg-[#F5ECD7]">
        <div className="w-full flex justify-center">{children}</div>
      </div>

      {/* <!-- Faux Sidebar Space --> */}
      {/* <div className="col-span-4 bg-[#F5ECD7]"></div> */}
    </div>
  );
}
