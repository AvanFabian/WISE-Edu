import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  kompetisi_trophy,
  panah_ikut_kompetisi,
} from "@/public/assets/right-icons";

const ProgressBar = dynamic(
  () => import("@/components/MainpageStuff/ProgressBar"),
  {
    ssr: false,
  }
);

const CardJawaban = dynamic(
  () => import("@/components/MainpageStuff/CardJawaban"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <div className="flex flex-col w-full lg:w-full">
      <div className="flex flex-row pt-10">
        <ProgressBar progressVal={0} />
      </div>
      <div className="flex flex-col mt-8 gap-3 w-full text-center">
        <div className="flex mx-auto flex-row w-[1000px]">
          <h2 className="text-[#414040] text-base mr-auto font-bold subpixel-antialiased capitalize">
            Soal Nomor 1
          </h2>
        </div>
        <div className="flex flex-col mx-auto w-[1000px] bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <div className="ml-1 mt-1 p-4">
            <h2 className="text-[#020202] leading-loose text-xs font-normal subpixel-antialiased">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              maiores earum deserunt dolor accusamus enim eaque nemo aliquam
              tempora adipisci dicta, ipsa quisquam mollitia voluptatum vel odit
              fugit facere quo soluta temporibus accusantium iusto! Fugiat et at
              ratione harum debitis est! Provident exercitationem placeat
              voluptate ducimus quaerat non ab repudiandae.
            </h2>
          </div>
        </div>
        <div className="flex mx-auto mt-5 flex-row w-[1000px]">
          <h2 className="text-[#414040] text-base mr-auto font-bold subpixel-antialiased capitalize">
            pilihan Jawaban
          </h2>
        </div>
        <div className="flex flex-row mx-auto p-4 w-[1000px] bg-[#ebe2cd] border-[3px] border-[#c4bfbf62] rounded-2xl">
          <CardJawaban
            text={
              "Lorem ipsum dolor sit amet consedm sd mf fnsdfnsdkfnskdfsd sdfnskdnf"
            }
          />
          <CardJawaban text={"Lorem ipsum dolor sit amet"} />
          <CardJawaban text={"Lorem ipsum dolor sit amet"} />
          <CardJawaban text={"Lorem ipsum dolor sit amet"} />
        </div>
      </div>
      <div className="flex w-[1000px] mx-auto flex-row py-6 border-t-[1px] mt-7 border-[#7a7777]">
        <div className="w-full flex justify-start">
          <button
            className="flex w-[200px] transition-all duration-150 mt-6 bg-[#8B6B61] hover:bg-[#d6aa9d] px-2 py-3 justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl"
            // onClick={() => main()}>
          >
            <p className="text-[15px] font-bold text-white uppercase">
              Kembali
            </p>
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="flex w-[200px] transition-all duration-150 mt-6 bg-[#8B6B61] hover:bg-[#d6aa9d] px-2 py-3 justify-center rounded-2xl border-b-4 border-[#020202] shadow-2xl"
            // onClick={() => main()}>
          >
            <p className="text-[15px] font-bold text-white uppercase">
              Selanjutnya
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
