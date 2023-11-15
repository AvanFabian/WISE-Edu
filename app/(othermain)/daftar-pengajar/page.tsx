"use client";
import { PengajarCard } from "@/components/PengajarStuff/PengajarCard";

const TeacherProperty = [
  { nama: "avan fabian daniswara Nur Hidayat",
    mata_pelajaran: [ "matematika", "fisika", "kimia"]
  },
  { nama: "tn. avan fabian daniswara Nurhalim",
    mata_pelajaran: [ "matematika", "fisika", "kimia"]
  },
];

const page = () => {
  return (
    <div className="flex flex-row">
      {TeacherProperty.map((item, index) => (
        <PengajarCard item={item} key={index}/>
      ))}
    </div>
  );
};

export default page;
