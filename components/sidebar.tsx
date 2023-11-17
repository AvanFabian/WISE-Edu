"use client";
import { Flex } from "@radix-ui/themes";
import WISEDU_V2 from "@/public/assets/LogoText/WISEEDU-V3.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  belajar,
  trophy,
  lecturer,
  mission,
  akunkamu,
  logout,
} from "@/public/assets/side_icons";

const sidebarItems = [
  {
    text: "Belajar",
    icon: belajar,
    url: "/",
    attribution: "https://www.flaticon.com/free-icons/reading-book",
  },
  {
    text: "Papan Skor",
    icon: trophy,
    url: "/papan-skor",
    attribution: "https://www.flaticon.com/free-icons/sport-and-competition",
  },
  {
    text: "Pengajar",
    icon: lecturer,
    url: "/daftar-pengajar",
    attribution: "https://www.flaticon.com/free-icons/teacher",
  },
  {
    text: "Tantangan",
    icon: mission,
    url: "/tantangan",
    attribution: "https://www.flaticon.com/free-icons/mission",
  },
  {
    text: "Akun Kamu",
    icon: akunkamu,
    url: "/profile-akun",
    attribution: "https://www.flaticon.com/free-icons/user",
  },
];

const sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen pt-8 ">
      <Flex
        direction="column"
        gap="3"
        justify="center"
        className=" w-full px-2"
      >
        <Image
          src={WISEDU_V2}
          width={190}
          height={55}
          className="mb-7 lg:mb-5 hidden lg:block mx-auto"
          alt="WISE Edu Logo"
        />
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`sm:w-[75%] sm:mx-auto lg:w-full flex border-4 border-[#F5ECD7] px-5 bg-[#F5ECD7] transition-all duration-600
            py-2 mb-1 gap-1 items-center rounded-2xl cursor-pointer  ${
              pathname == item.url ? "bg-[#be8756]" : "bg-[#F5ECD7]"
            }`}
            onClick={() => router.push(item.url)}
          >
            <Link href={item.attribution} target="_blank">
              <Image
                src={item.icon}
                width={32}
                height={45}
                alt="WISE Edu Logo"
                className="w-[20px] sm:w-[22px] md:w-[28px] lg:w-[32px] cursor-alias"
              />
            </Link>
            <span
              className={`font-bold text-[17px] ${
                pathname == item.url ? "text-[#f2f2f2]" : "text-[#777777]"
              }  lg:ml-3 hidden lg:block`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </Flex>
      <Flex direction="column" className="w-full px-2 mt-12">
        <button
          className={`sm:w-[75%] sm:mx-auto lg:w-full flex border-4 border-[#F5ECD7] px-5 bg-[#F5ECD7] transition-all duration-600
            py-2 mb-1 gap-1 items-center rounded-2xl`}
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
      </Flex>
    </div>
  );
};

export default sidebar;
