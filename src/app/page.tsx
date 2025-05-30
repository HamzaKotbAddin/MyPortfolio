import { LuAntenna } from "react-icons/lu";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/floating-navbar";
import Grid from "../../components/Grid";
import { WavyBackground } from "../../components/ui/wavy-background";

export default function Home() {
  return (
    <main className=" bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 overflow-x-hidden ">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#", icon: <LuAntenna /> },
            { name: "About", link: "#about" },
          ]}
        />
        <Hero />

        <Grid />
      </div>
    </main>
  );
}
