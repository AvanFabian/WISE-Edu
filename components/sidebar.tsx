'use client'
import { useState } from "react";
import { Container, Flex } from "@radix-ui/themes";
import WISEDU_V2 from "@/public/assets/logo_text/WISEEDU-V2.svg";
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
    <Container className="bg-[#fafafa] pt-8 min-h-screen border-r-[3px] w-full border-[#4b4b4b2d]">
      <Flex direction="column" gap="3" justify="center" className="w-full pl-4 pr-4">
          <Image 
            src={WISEDU_V2}
            width={270}
            height={55}
            className="mt-2 mb-5 mx-auto"
            alt="WISE Edu Logo"
          />
        {sidebarItems.map((item, index) => (
          <button 
            key={index}
            // className="flex hover:bg-[#77f0a983] border-4 border-[#fafafa] hover:border-[#51d36d] px-5 bg-[#ffffff9b] 
            // transition-all py-3 mt-2 gap-4 items-center rounded-2xl text-white"
            className={`flex border-4 border-[#fafafa] px-5 bg-[#ffffff9b] transition-all py-3 mt-2 gap-4 w-full items-center rounded-2xl text-white ${
              activeButton === index ? 'bg-[#77f0a983] border-[#51d36d]' : 'hover:bg-[#77f0a983] hover:border-[#51d36d]'
            }`}
            onClick={() => handleButtonClick(index)}
          >
            <Image 
              src={item.icon}
              width={50}
              height={45}
              alt="WISE Edu Logo"
            />
            <span className="font-bold text-[26px] text-[#777777] ">{item.text}</span>
          </button>
        ))}
        {/* <button className="flex hover:bg-[#77f0a983] border-4 border-[#fafafa] hover:border-[#51d36d] px-5 bg-[#ffffff9b] transition-all py-3 mt-2 gap-4 items-center rounded-2xl text-white">
          <BookmarkIcon width="32" height="32" color="black"/>
          <Image 
            src={belajar}
            width={55}
            height={32}
            alt="WISE Edu Logo"
          />
          <span className="font-bold text-[24px] text-[#777777] ">LAINNYA</span>
        </button> */}
      </Flex>
    </Container>
  );
};

export default sidebar;
