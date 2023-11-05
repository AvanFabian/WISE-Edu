'use client'
import { useState } from "react";
import { Container, Flex } from "@radix-ui/themes";
import WISEDU_V2 from "@/public/assets/logo_text/WISEEDU-V3.svg";
import Image from "next/image";
import { belajar, history, lecturer, mission, akunkamu, others } from "@/public/assets/side_icons"; 

const sidebarItems = [
  { text: "Belajar", icon: belajar },
  { text: "Riwayat", icon: history },
  { text: "Pengajar", icon: lecturer },
  { text: "Misi", icon: mission },
  { text: "Akun Kamu", icon: akunkamu },
  { text: "Lainnya", icon: others },
];


const sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index:any) => {
    setActiveButton(index);
  };

  return (
    <div className="w-full min-h-screen pt-8 ">
      <Flex direction="column" gap="3" justify="center" className=" w-full px-2">
          <Image 
            src={WISEDU_V2}
            width={190}
            height={55}
            className="mb-7 lg:mb-5 hidden lg:block mx-auto"
            alt="WISE Edu Logo"
          />
        {sidebarItems.map((item, index) => (
          <button 
            key={index}
            className={`sm:w-[75%] sm:mx-auto lg:w-full flex border-4 border-[#F5ECD7] px-5 bg-[#F5ECD7] transition-all 
            py-2 mb-1 gap-1 items-center rounded-2xl text-[#4D4D4D] ${ activeButton === index ? 'bg-[#54f19683] border-[#51d36d]' 
            : 'hover:bg-[#ebe5d3]'} `}
            onClick={() => handleButtonClick(index)}
          >
            <Image 
              src={item.icon}
              width={32}
              height={45}
              alt="WISE Edu Logo"
              className="sm:w-[28px] lg:w-[32px]"
            />
            <span className="font-bold text-[17px] text-[#777777] lg:ml-3 hidden lg:block">{item.text}</span>
          </button>
        ))}
      </Flex>
    </div>
  );
};

export default sidebar;
