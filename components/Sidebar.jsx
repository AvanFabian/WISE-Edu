"use client";
import dynamic from "next/dynamic";
import SchEducation from "@/public/assets/LogoText/SchEducation.svg";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { akunkamu, logout, login } from "@/public/assets/side_icons";
import { signIn, signOut, useSession } from "next-auth/react";

const SideItems = dynamic(() => import("@/components/SidebarStuff/items"), {});

const sidebar = () => {
  const { data: session, status } = useSession();
  const userImage = session?.user?.image;
  console.log(status);
  return (
    <div className="w-max pt-5 h-full">
      {/* Main container for Sidebar content */}
      <div
        className="flex flex-col gap-3 justify-center w-full px-2 lg:px-2 text-center"
      >
        <span className="hidden lg:block opacity-100 font-extrabold lg:mb-5 text-[20px] text-[#777777]">
          Virtual Learning <br /> Environment
        </span>
        <SideItems userImage={userImage || akunkamu.src} />
      </div>

      {/* Container for session-related actions */}
      <div className="flex flex-row justify-center w-full mt-6">
        {session?.user && status === "authenticated" && (
          <Link
            href="api/auth/signout"
            className={`w-full ml-1 lg:ml-0 lg:px-7 flex lg:border-4 lg:border-[#F5ECD7] bg-[#F5ECD7] transition-all duration-600
      py-2 mb-1 lg:mb-4 gap-1 justify-center lg:justify-start lg:items-center rounded-2xl cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <div className="flex items-center">
              <Image
                src={logout}
                width={50}
                height={45}
                alt="WISE Edu Logo"
                className="w-[35px] rounded-full cursor-alias"
              />
              <span
                className={`font-bold text-[17px] lg:ml-3 text-[#ec4d4d]`}
              >
                Keluar
              </span>
            </div>
          </Link>
        )}
        {!session?.user && status === "unauthenticated" && (
          <Link
            href="/api/auth/signin"
            className={`w-full ml-1 lg:ml-0 lg:px-5 flex lg:border-4 lg:border-[#F5ECD7] bg-[#F5ECD7] transition-all duration-600
      py-2 mb-1 lg:mb-4 gap-1 justify-center lg:justify-start lg:items-center rounded-2xl cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            <div className="flex items-center">
              <Image
                src={login}
                width={50}
                height={45}
                alt="WISE Edu Logo"
                className="w-[35px] rounded-full cursor-alias"
              />
              <span
                className={`font-bold text-[17px] lg:ml-3 text-[#404240]`}
              >
                Masuk
              </span>
            </div>
          </Link>
        )}
      </div>


      {/* School logo */}
      <Image
        src={SchEducation}
        width={125}
        height={55}
        className="hidden absolute left-24 opacity-30 lg:flex mx-auto align-bottom"
        alt="WISE Edu Logo"
      />
    </div>
  );
};

export default sidebar;
