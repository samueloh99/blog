import { HeroSection } from "@/components/herosection";
import { FirstSection } from "@/components/firstsection";
import { Carousel } from "@/components/carousel";
import { InfoSection } from "@/components/infosection";
import { FaqsSection } from "@/components/faq";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full mb-10">
      <HeroSection />
      <FirstSection />
      <Carousel />
      <InfoSection />
      <FaqsSection />
    </main>
  );
}
