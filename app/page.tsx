import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Tools } from "@/components/Tools";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <FeaturedWork />
      <Services />
      <Tools />
      <About />
      <Process />
      <Cta />
    </main>
  );
}
