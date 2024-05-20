import Image from "next/image";
import bg from "@/public/ccchaos-gradient.png";
import dynamic from "next/dynamic";
import Loading from "./loading";

const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => <Loading />,
});

const About = dynamic(() => import("@/components/about"), {
  loading: () => <Loading />,
});

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <Loading />,
});

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <Loading />,
});

const Contact = dynamic(() => import("@/components/contact-short"), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
