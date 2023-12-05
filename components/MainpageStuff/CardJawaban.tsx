import { type } from "os";
import React from "react";

type CardJawabanProps = {
    text: string;
    };

const CardJawaban = ({ text }: CardJawabanProps) => {
  return (
    <div className="flex mx-2 flex-col w-[225px] bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
      <div className="ml-1 mt-1 p-1">
        <h2 className="text-[#020202] leading-loose text-xs font-normal subpixel-antialiased">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default CardJawaban;
