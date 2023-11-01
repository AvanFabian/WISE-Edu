import React from "react";
import Image from "next/image";
import { Grid, Container, Flex, Box, Section } from "@radix-ui/themes";
import panduan from "@/public/assets/panduan.png";
const mainpage = () => {
  return (
    <div className="flex flex-col w-[82.5%] bg-slate-200 justify-end">
      <div className="w-full bg-gradient-to-l from-[#bc998e] to-[#8B6B61] mt-6 py-6 px-4 rounded-2xl">
        <Grid columns="2" gap="2" width="auto">
          <div className="flex flex-col align-middle my-auto">
            <h1 className="text-[#fffdf1] text-2xl font-bold mb-4 capitalize subpixel-antialiased">
              Matematika bagian 1
            </h1>
            <h2 className="text-[#fffdf1] text-xl font-normal subpixel-antialiased">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex flex-row w-max gap-4 cursor-pointer items-center px-4 py-2 h-max bg-transparent border-[3px] border-b-[5px] hover:opacity-75 border-[#49494962] rounded-2xl">
              <Image src={panduan} width={55} height={32} alt="WISE Edu Logo" />
              <h2 className="text-[#ffffff] text-lg font-medium subpixel-antialiased capitalize">
                Panduan Belajar
              </h2>
            </div>
          </div>
        </Grid>
      </div>
      <div className="flex flex-col mt-16 gap-32">
        <div className="flex flex-row">
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        </div>
        <div className="flex flex-row">
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        </div>
        <div className="flex flex-row">
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        <button className="flex transition-all rounded-full m-auto w-max py-8 px-10 h-max bg-[#e49937]">
          1
        </button>
        </div>
      </div>
      {/* <Grid columns="3" className="mt-16">
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#2b77b4]">
            1
        </button>
        </div>
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            2
        </button>
        </div>
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            3
        </button>
        </div>
      </Grid>
      <Grid columns="3" className="mt-24">
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            1
        </button>
        </div>
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            2
        </button>
        </div>
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            3
        </button>
        </div>
      </Grid>
      <Grid columns="3" className="mt-24">
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            1
        </button>
        </div>
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            2
        </button>
        </div>
        <div className="justify-self-center">
        <button className="flex transition-all rounded-full w-max py-7 px-10 h-max bg-[#d6aa9d]">
            3
        </button>
        </div>
      </Grid> */}
    </div>
  );
};

export default mainpage;
