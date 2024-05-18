import Image from "next/image";
import bg from "@/public/ccchaos-gradient.png";
import dynamic from "next/dynamic";
import Loading from "./loading";

const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => <Loading />,
});


export default function Home() {
  return (
    <main
      className="flex min-h-screen  items-center justify-center p-24"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      
      

      <Hero />
    </main>
  );
}
