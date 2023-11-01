// import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Grid,
  Flex,
  Container,
  Box,
  Text,
  Heading,
  Button,
  Link,
} from "@radix-ui/themes";

// const SideBar = dynamic(() => import("@/components/sidebar"), { ssr: false });
const MainPage: any = dynamic(() => import("@/components/mainpage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex justify-end">
        <MainPage />
      </div>
    </main>
  );
}
