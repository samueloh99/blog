import Image from "next/image";
import PersonPic from "../../public/person.webp";

import { HeroSection } from "@/components/herosection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full">
      <HeroSection />
      <div className="flex flex-col h-full w-full max-w-[1440px] m-auto px-20 mb-[200px] justify-center items-center gap-10">
        <div className="flex flex-col w-full gap-5 justify-center items-center">
          <h1 className="text-3xl font-bold">Meet the world's best.</h1>
          <h1 className="text-3xl font-bold">New Classes added every month.</h1>
        </div>
        <div className="w-full h-full flex relative">
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-gradient-to-l from-black to-transparent z-10" />

          <div className="absolute top-0 right-20 bottom-10 flex flex-col gap-5 items-center justify-center text-center z-20">
            <h1 className="text-4xl font-bold">
              Amy <br /> Poehler
            </h1>
            <p>Prepare to Be Unprepared</p>
            <button className="border border-white p-5 rounded-md">
              Watch Trailer
            </button>
          </div>
          <div className="flex w-full">
            <Image
              src={PersonPic}
              alt="instructor"
              width={1200}
              height={650}
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
