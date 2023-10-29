import React from 'react'
import Image from "next/image";
import { Grid, Container, Flex, Box, Section } from "@radix-ui/themes";
import { biologilecture } from "@/public/assets/lecture_icon";
const rightpage = () => {
  return (
    <div className='inline-grid grid-cols-4 gap-8'>
      <Flex direction="column" className='col-span-1'>
        <Image 
          src={biologilecture}
          width={55}
          height={32}
          alt="WISE Edu Logo"
        />
      </Flex>
      <Flex direction="column">
      <Image 
          src={biologilecture}
          width={55}
          height={32}
          alt="WISE Edu Logo"
        />
      </Flex>
      <Flex direction="column">
      <Image 
          src={biologilecture}
          width={55}
          height={32}
          alt="WISE Edu Logo"
        />
      </Flex>
      <Flex direction="column">
      <Image 
          src={biologilecture}
          width={55}
          height={32}
          alt="WISE Edu Logo"
        />
      </Flex>
    </div>
  )
}

export default rightpage