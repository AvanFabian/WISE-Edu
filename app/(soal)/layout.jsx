import dynamic from "next/dynamic";
import { SessionProvider } from "@/app/context/SessionProvider";

const SideBar = dynamic(() => import("@/components/Sidebar"), {});
const SidebarMobile = dynamic(() => import("@/components/SidebarMobile"), {});

export default function SoalLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth min-h-screen">
      <body className="min-h-screen">
        <main className="min-h-screen bg-[#F5ECD7]">
          {/* For larger screens (desktop layout) */}
          <div className="hidden md:grid lg:grid grid-cols-12 lg:grid-cols-12 lg:max-w-full lg:min-h-screen">
            {/* Left Sidebar */}
            <div className="bg-[#F5ECD7] col-span-2 flex flex-col justify-start items-center border-r-[2px] border-[#c6c3c3]">
              <SideBar />
            </div>

            {/* Main Content (occupies the space of the main content + right sidebar) */}
            <div className="bg-[#F5ECD7] col-span-10 flex flex-col justify-start items-center">
              {children}
            </div>
          </div>

          {/* For smaller screens (mobile layout) */}
          <div className="flex flex-col gap-3 max-w-full min-h-screen md:hidden">
            {/* Main Content for Mobile */}
            <div className="bg-[#F5ECD7]">
              {children}
            </div>

            {/* Left Sidebar for Mobile */}
            <div className="bg-[#F5ECD7]">
              <SidebarMobile />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
