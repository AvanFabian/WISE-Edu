import dynamic from "next/dynamic";

const MainPage: any = dynamic(() => import("@/components/MainPage"), {
  ssr: false,
});
const SideBar = dynamic(() => import("@/components/Sidebar"), { ssr: false });
const RightPage = dynamic(() => import("@/components/RightPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 bg-[#F5ECD7] fixed min-h-screen">
          <SideBar />
        </div>

        {/* <!-- Faux Sidebar Space --> */}
        <div className="col-span-2 bg-[#F5ECD7] border-r-[1px] border-[#5e5e5e] min-h-screen"></div>

        <div className="col-span-6 bg-[#F5ECD7] min-h-screen">
          <div className="flex justify-end min-h-screen">
            <MainPage />
          </div>
        </div>

        {/* <!-- Faux Sidebar Space --> */}
        {/* <div className="col-span-4 bg-[#F5ECD7] min-h-screen"></div> */}

        <div className="col-span-4 pl-8 right-[60px] bg-[#F5ECD7] max-w-screen min-h-screen">
          <RightPage />
        </div>
      </div>
    </main>
  );
}
