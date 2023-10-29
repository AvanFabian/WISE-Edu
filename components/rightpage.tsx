import React from 'react'
import Image from "next/image";
import { Grid, Container, Flex, Box, Section } from "@radix-ui/themes";
import { biologilecture, calendar, achievement, performabelajar } from "@/public/assets/right-icons";

const rightpage = () => {
  return (
    <div className='inline-grid grid-cols-4 gap-6 mt-9 ml-7'>
      <Flex direction="row" className='col-span-1 cursor-pointer'>
        <Image 
          src={biologilecture}
          width={50}
          height={35}
          alt="WISE Edu Logo"
        />
      </Flex>
      <Flex direction="row" className="items-center">
      <Image 
          src={calendar}
          width={50}
          height={35}
          alt="WISE Edu Logo"
        />
        <span className="font-bold text-[#5e5e5eab]">12</span>
      </Flex>
      <Flex direction="row" className="items-center">
      <Image 
          src={achievement}
          width={50}
          height={35}
          alt="WISE Edu Logo"
        />
        <span className="font-bold text-[#FFB501]">122</span>
        
      </Flex>
      <Flex direction="row" className="items-center">
      <Image 
          src={performabelajar}
          width={50}
          height={35}
          alt="WISE Edu Logo"
        />
        <span className="font-bold text-[#31a13b]">Good</span>
      </Flex>
    </div>
  )
}

export default rightpage