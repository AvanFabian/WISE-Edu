import React from "react";
import dynamic from "next/dynamic";

const ProgressBar = dynamic(
  () => import("@/components/MainpageStuff/ProgressBar"),
  {}
);

const CardJawaban = dynamic(
  () => import("@/components/MainpageStuff/CardJawaban"),
  {}
);

const page = () => {
  return (
    <div className="flex flex-col w-full lg:w-full h-full justify-between space-y-6 py-10">
      {/* Progress Bar */}
      <div className="flex flex-row">
        <ProgressBar progressVal={0} />
      </div>

      {/* Question Section */}
      <div className="flex flex-col w-full text-center">
        <div className="flex mx-auto flex-row w-[85%] lg:w-[1000px]">
          <h2 className="text-[#414040] text-sm lg:text-base mr-auto font-bold subpixel-antialiased capitalize">
            Soal
          </h2>
        </div>
        <div className="flex flex-col mx-auto w-[85%] lg:w-[1000px] bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-1 mt-1 p-4">
            <h2 className="text-[#020202] leading-loose text-xs md:text-xl font-bold subpixel-antialiased">
              Sederhanakan persamaan berikut menjadi bentuk paling sederhana:
              <br />
              3x^2 + 6x + 3 = 0
            </h2>
          </div>
        </div>
      </div>

      {/* Answer Choices Section */}
      <div className="flex flex-col lg:flex-row mx-auto gap-4 p-4 w-[85%] lg:w-[1000px] bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
        <CardJawaban text={"(x-3)^2"} />
        <CardJawaban text={"(x+3)^2"} />
        <CardJawaban text={"(x-2)^2"} />
        <CardJawaban text={"(x+2)^2"} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex w-full lg:w-[1000px] mx-auto flex-row py-2 lg:py-6 border-t-[1px] mt-3 border-[#7a7777]">
        <div className="w-full flex justify-start">
          <button
            className="flex w-[150px] mx-auto lg:w-[200px] transition-all duration-150 bg-[#8B6B61] hover:bg-[#d6aa9d] px-1 lg:px-2 py-2 lg:py-3 justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl"
          >
            <p className="text-[13px] lg:text-[15px] font-bold text-white uppercase">
              Kembali
            </p>
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="flex w-[150px] mx-auto lg:w-[200px] transition-all duration-150 bg-[#8B6B61] hover:bg-[#d6aa9d] px-1 lg:px-2 py-2 lg:py-3 justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl"
          >
            <p className="text-[13px] lg:text-[15px] font-bold text-white uppercase">
              Selanjutnya
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
