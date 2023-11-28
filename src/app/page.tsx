import Image from "next/image";

import { HeroSection } from "@/components/herosection";
import { FirstSection } from "@/components/firstsection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full">
      <HeroSection />
      <FirstSection />
    </main>
  );
}
