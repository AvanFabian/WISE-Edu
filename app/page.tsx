// import Image from "next/image";
import dynamic from "next/dynamic";

const MainPage:any = dynamic(() => import("@/components/mainpage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex justify-end min-h-screen">
      <MainPage />
    </main>
  );
}
