import React from "react";
import Image from "next/image";
import { Grid, Container, Flex, Box, Section } from "@radix-ui/themes";
import panduan from "@/public/assets/panduan.png";
const mainpage = () => {
  return (
    <div className="flex w-[82.5%] bg-slate-200 justify-end">
      <div className="w-full bg-[#58CC02] mt-6 py-6 px-4 rounded-2xl">
        <Grid columns="2" gap="2" width="auto">
          <div className="flex flex-col align-middle my-auto">
            <h1 className="text-[#ffffff] text-2xl font-bold mb-4 subpixel-antialiased">Matematika bagian 1</h1>
            <h2 className="text-[#ffffff] text-xl font-normal subpixel-antialiased">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex flex-row w-max gap-4 cursor-pointer items-center px-4 py-2 h-max bg-transparent border-[3px] border-b-[5px] hover:opacity-75 border-[#49494962] rounded-2xl">
                <Image 
                  src={panduan}
                  width={55}
                  height={32}
                  alt="WISE Edu Logo"
                />
              <h2 className="text-[#ffffff] text-lg font-medium subpixel-antialiased capitalize">
                Panduan Belajar
              </h2>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default mainpage;
