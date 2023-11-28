import Image from "next/image";

import { HeroSection } from "@/components/herosection";
import { FirstSection } from "@/components/firstsection";
import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full mb-10">
      <HeroSection />
      <FirstSection />
      <Carousel />
    </main>
  );
}
