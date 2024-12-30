'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  bintang_level,
  gembok_level,
  Onlinelearning,
  raisinghand,
  Teacherstudent,
  Winners,
} from '@/public/assets/mainpage_icons';

const UnlockedButton = ({ levelNumber }) => (
  <Link href={`/soal?level=${levelNumber}`}>
    <div className="flex flex-col z-20">
      <button className="absolute flex z-30 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#8B6B61]">
        <Image src={bintang_level} width={35} height={32} alt="WISE Edu Logo" />
      </button>
      <button className="z-20 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#b98879]">
        <Image src={bintang_level} width={35} height={32} alt="WISE Edu Logo" />
      </button>
    </div>
  </Link>
);

const LockedButton = () => (
  <div className="flex flex-col z-20">
    <button className="absolute flex z-30 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
      <Image src={gembok_level} width={35} height={32} alt="WISE Edu Logo" />
    </button>
    <button className="z-20 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
      <Image src={gembok_level} width={35} height={32} alt="WISE Edu Logo" />
    </button>
  </div>
);

const ButtonGroup = () => {
  const [levels, setLevels] = useState([]);

  // Fetch levels from API
  useEffect(() => {
    fetch('/api/levels')
      .then((response) => response.json())
      .then((data) => setLevels(data));
  }, []);

  // Define the corresponding image for each level
  const levelImages = [
    Onlinelearning,
    null,
    null,
    null,
    raisinghand,
    null,
    Teacherstudent,
    null,
    Winners,
  ];

  return (
    <div className="grid grid-rows-3 gap-12 mt-16">
      {levels.map((level, index) => (
        <div
          key={level.id}
          className={`relative ${index % 3 === 0
            ? 'ml-12 items-start'
            : index % 3 === 2
              ? 'mr-12 items-end'
              : 'items-center'
            } flex flex-col`}
        >
          {/* Adjusted z-index for buttons */}
          <div className="z-30">
            {level.status ? (
              <UnlockedButton levelNumber={level.number} />
            ) : (
              <LockedButton />
            )}
          </div>

          {/* Adjusted z-index for images */}
          {levelImages[index] && (
            <Image
              src={levelImages[index]}
              width={255}
              height={32}
              alt="Level Illustration"
              className={`invisible lg:visible absolute ${index % 3 === 0
                ? 'lg:right-[-80px] lg:top-[-50px]'
                : 'lg:left-[-60px] lg:top-[-130px]'
                } z-10`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
