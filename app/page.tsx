import dynamic from "next/dynamic";

const MainPage: any = dynamic(() => import("@/components/MainPage"), {
  ssr: false,
});
const SideBar = dynamic(() => import("@/components/Sidebar"), { 
  ssr: false 
});
const RightPage = dynamic(() => import("@/components/RightPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-12 max-w-full min-h-screen">
        <div className="bg-[#F5ECD7] fixed">
          <SideBar />
        </div>
        <div className="col-span-2 bg-[#F5ECD7] border-r-[1px] border-[#5e5e5e]"></div>

        <div className="col-span-6 bg-[#F5ECD7]">
            <MainPage />
        </div>

        <div className="col-span-4 sticky top-0 right-0 pl-8 bg-[#F5ECD7] max-w-full">
          <RightPage />
        </div>
      </div>
    </main>
  );
}
