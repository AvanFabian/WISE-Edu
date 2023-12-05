"use client";
import { Flex } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import SchEducation from "@/public/assets/LogoText/SchEducation.svg";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { akunkamu, logout } from "@/public/assets/side_icons";
import { signIn, signOut, useSession } from "next-auth/react";

const SideItems = dynamic(() => import("@/components/SidebarStuff/items"), {
  ssr: false,
});

const sidebar = () => {
  const { data: session, status } = useSession();
  const userImage = session?.user?.image;
  console.log(status);
  return (
    <div className="w-full pt-8 ">
      <Flex
        direction="column"
        gap="3"
        justify="center"
        className=" w-full px-2"
      >
        <Image
          src={SchEducation}
          width={190}
          height={55}
          className="mb-7 lg:mb-5 hidden lg:block mx-auto"
          alt="WISE Edu Logo"
        />
        <SideItems userImage={userImage || akunkamu.src} />
        {/* <SideItems /> */}
      </Flex>
      <Flex direction="column" className="w-full px-2 mt-12">
        {session?.user && status === "authenticated" && (
          <Link href="api/auth/signout">
            <button
              className={`sm:w-[75%] sm:mx-auto lg:w-full flex border-4 border-[#F5ECD7] px-5 bg-[#F5ECD7] transition-all duration-600
            py-2 mb-1 gap-1 items-center rounded-2xl`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <Image
                src={logout}
                width={32}
                height={45}
                alt="WISE Edu Logo"
                className="sm:w-[28px] lg:w-[32px]"
              />
              <span
                className={`font-bold text-[17px] lg:ml-3 hidden lg:block text-[#ec4d4d]`}
              >
                Keluar Akun
              </span>
            </button>
          </Link>
        )}
        {!session?.user && status === "unauthenticated" && (
        <Link href="/api/auth/signin">
          <button
            className={`sm:w-[75%] sm:mx-auto lg:w-full flex border-4 border-[#F5ECD7] px-5 bg-[#F5ECD7] transition-all duration-600
            py-2 mb-1 gap-1 items-center rounded-2xl`}
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            <Image
              src={logout}
              width={32}
              height={45}
              alt="WISE Edu Logo"
              className="sm:w-[28px] lg:w-[32px]"
            />
            <span
              className={`font-bold text-[17px] lg:ml-3 hidden lg:block text-[#26581f]`}
            >
              Masuk
            </span>
          </button>
        </Link>
        )}
      </Flex>
    </div>
  );
};

export default sidebar;
