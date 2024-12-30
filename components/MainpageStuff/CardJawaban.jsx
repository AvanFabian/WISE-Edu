import { type } from "os";
import React from "react";


const CardJawaban = ({ text }) => {
  return (
    <div className="flex mx-auto lg:mx-2 flex-col w-[85%] lg:w-[225px] hover:bg-[#ada99e] cursor-pointer bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
      <div className="ml-1 mt-1 p-1">
        <h2 className="text-[#020202] leading-loose text-xs font-normal subpixel-antialiased">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default CardJawaban;
