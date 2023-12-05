import {
  belajar,
  trophy,
  lecturer,
  mission,
} from "@/public/assets/side_icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type ItemsProps = {
  userImage: string;
};

const items = ({ userImage }: ItemsProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const sidebarItems = [
    {
      text: "Belajar",
      icon: belajar,
      url: "/",
      attribution: "https://www.flaticon.com/free-icons/reading-book",
      rounded: '0'
    },
    {
      text: "Papan Skor",
      icon: trophy,
      url: "/papan-skor",
      attribution: "https://www.flaticon.com/free-icons/sport-and-competition",
      rounded: '0'
    },
    {
      text: "Pengajar",
      icon: lecturer,
      url: "/daftar-pengajar",
      attribution: "https://www.flaticon.com/free-icons/teacher",
      rounded: '0'
    },
    {
      text: "Tantangan",
      icon: mission,
      url: "/tantangan",
      attribution: "https://www.flaticon.com/free-icons/mission",
      rounded: '0'
    },
    {
      text: "Akun Kamu",
      icon: userImage,
      url: "/profile-akun",
      attribution: "https://www.flaticon.com/free-icons/user",
      rounded: 'rounded-full'
    },
  ];

  return (
    <>
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`sm:w-[75%] sm:mx-auto lg:w-full flex border-4 border-[#F5ECD7] px-5 bg-[#F5ECD7] transition-all duration-600
            py-2 mb-1 gap-1 items-center rounded-2xl cursor-pointer  ${
              pathname == item.url ? "bg-[#be8756]" : "bg-[#F5ECD7]"
            }`}
          onClick={() => router.push(item.url)}
        >
          <Link href={item.attribution} target="_blank">
            <Image
              src={item.icon}
              width={32}
              height={45}
              alt="WISE Edu Logo"
              className={`w-[20px] ${item.rounded} sm:w-[22px] md:w-[28px] lg:w-[32px] cursor-alias`}
            />
          </Link>
          <span
            className={`font-bold text-[17px] ${
              pathname == item.url ? "text-[#f2f2f2]" : "text-[#777777]"
            }  lg:ml-3 hidden lg:block`}
          >
            {item.text}
          </span>
        </div>
      ))}
    </>
  );
};

export default items;
