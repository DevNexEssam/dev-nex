import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Works from "@/components/sections/works/Works";

export default function Home() {
  return (
    <>
    <Hero />
    <Services />
    <Works />
    <About />
    <Contact />
    </>
  );
}
