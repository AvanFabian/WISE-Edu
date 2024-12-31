import {
  belajar,
  trophy,
  lecturer,
  mission,
  dashboard,
} from "@/public/assets/side_icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";


const items = ({ userImage }) => {
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
      text: "Dashboard",
      icon: userImage,
      url: "/profile-akun",
      attribution: "https://www.flaticon.com/free-icons/user",
      rounded: 'rounded-full'
    },
  ];

  return (
    <div className="flex flex-col">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`w-full ml-1 lg:ml-0 lg:px-5 lg:first-letter flex lg:border-4 lg:border-[#F5ECD7] bg-[#F5ECD7] transition-all duration-600
            py-2 mb-1 gap-1 justify-center lg:justify-start lg:items-center rounded-2xl cursor-pointer  ${pathname == item.url ? "bg-[#be8756]" : "bg-[#F5ECD7]"
            }`}
          onClick={() => router.push(item.url)}
        >

          <Link href={item.attribution} target="_blank" className="hidden lg:block">
            <Image
              src={item.icon}
              width={50}
              height={45}
              alt="WISE Edu Logo"
              className={`w-[35px] ${item.rounded} cursor-alias`}
            />
          </Link>
          <Image
            src={item.icon}
            width={50}
            height={45}
            alt="WISE Edu Logo"
            className={`w-[35px] lg:hidden ${item.rounded}`}
          />
          <span
            className={`font-bold text-[17px] ${pathname == item.url ? "text-[#f2f2f2]" : "text-[#777777]"
              }  lg:ml-3 hidden lg:block`}>
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default items;
