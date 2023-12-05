import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";

interface Mapel {
  mapel: string;
  icon: string;
}

const HoveringCard: React.FC<{ mapel: Mapel[] }> = ({ mapel }) => (
  console.log(mapel),
  (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Image
          src={mapel[0].icon}
          width={35}
          height={35}
          alt="Radix UI"
          className="cursor-pointer"
        />
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="h-[400px] overflow-y-scroll data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-xl bg-[#ebe2cd] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all "
          sideOffset={5}
        >
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex border-b-2 border-[#b9b7b79f] ">
                <span className="text-xs ml-4 py-2 text-center text-[#414040] font-bold uppercase">
                  Mapel Wajib
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex border-b-2 border-[#b9b7b79f] ">
                <span className="text-xs ml-4 py-2 text-center text-[#414040] font-bold uppercase">
                  Mapel Umum
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
              <div className="flex flex-row border-b-2 border-[#b9b7b79f] py-2 items-center">
                <Image
                  src={mapel[0].icon}
                  width={30}
                  height={30}
                  alt="Radix UI"
                  className="ml-4 cursor-pointer"
                />
                <span className="text-xs text-[#414040] font-medium ml-2">
                  {mapel[0].mapel}
                </span>
              </div>
            </div>
          </div>

          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
);

export default HoveringCard;
