import Image from "next/image";

import { Button } from "@/components/ui/button";
import { fotos } from "@/lib/data";
import { HeroSection } from "@/components/herosection";

export default function Home() {
  return (
    <main className="flex w-full h-full">
      <HeroSection />
    </main>
  );
}
