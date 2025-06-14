import { Suspense, lazy } from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

// Lazy-loaded components
const Hero = lazy(() => import("../../components/Hero"));
const Grid = lazy(() => import("../../components/Grid"));
const Projects = lazy(() => import("@/components/Projects"));

export default function Home() {
  return (
    <main className="bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#" },
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Clients", link: "#testimonials" },
            { name: "Experience", link: "#experience" },
            { name: "Contact", link: "#contact" },
            { name: "Resume", link: "/resume.pdf" },
          ]}
        />

        <Suspense fallback={<div className="text-white">Loading hero...</div>}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div className="text-white">Loading grid...</div>}>
          <Grid />
        </Suspense>

        <Suspense
          fallback={<div className="text-white">Loading projects...</div>}
        >
          <Projects />
        </Suspense>
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
