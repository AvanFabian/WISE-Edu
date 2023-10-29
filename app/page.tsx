import Image from "next/image";
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

const SideBar = dynamic(() => import("@/components/sidebar"), { ssr: false });
const MainPage = dynamic(() => import("@/components/mainpage"), { ssr: false });
const RightPage = dynamic(() => import("@/components/rightpage"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="h-screen">
      <div className="grid grid-cols-12 h-screen">
        {/* lg:w-[385px] */}
        <Container size="4" className="col-span-2 ">
          <div className="">
            <SideBar />
          </div>
        </Container>
        {/* md:w-[936px] */}
        <Container size="4" className="col-span-6 border-r-4 ">
          <div className="flex justify-end mr-6">
            <MainPage />
          </div>
        </Container>
        <Container size="2" className="col-span-4">
          <RightPage />
        </Container>
      </div>
    </main>
  );
}
