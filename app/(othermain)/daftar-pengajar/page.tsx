"use client";
import dynamic from "next/dynamic";


const PengajarCard = dynamic(() => import("@/components/PengajarStuff/PengajarCard"), {
  ssr: false,
});
const PengajarBanner = dynamic(() => import("@/components/PengajarStuff/PengajarBanner"), {
  ssr: false,
});

const TeacherProperty = [
  {
    nama: "avan fabian daniswara Nur Hidayat",
    mata_pelajaran: ["matematika", "fisika", "kimia"],
  },
  {
    nama: "tn. avan fabian daniswara Nurhalim",
    mata_pelajaran: ["matematika", "fisika", "kimia"],
  },
];

const page = () => {
  return (
    <div className="flex flex-col items-end w-[620px] gap-8">
      <PengajarBanner />
      <div className="relative flex flex-row w-full">
        {TeacherProperty.map((item, index) => (
          <PengajarCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
