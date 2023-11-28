import Image from "next/image";

import { Button } from "@/components/ui/button";
import { fotos } from "@/lib/data";

export function HeroSection() {
  return (
    <main className="flex w-full m-auto h-[700px] flex-col items-center justify-center relative">
      <div className="flex flex-col h-full max-w-[1440px] w-full justify-start items-start gap-10 pt-40 px-20 z-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold">LEARN FROM THE BEST,</h1>
          <h1 className="text-5xl font-bold">BE YOUR BEST.</h1>
          <p className="text-xl font-thin">
            Get unlimited access to thousand of bite-sized lessons.
          </p>
        </div>
        <div>
          <Button variant="destructive">SEE PLANS</Button>
        </div>
      </div>
      <div className="flex flex-col gap-5 fixed top-[100px] right-0 max-w-[1000px] w-full">
        <div className="flex flex-row w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-black to-transparent z-10" />
          <div className="flex gap-5 whitespace-nowrap animate-slide">
            {fotos.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item.link}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              );
            })}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-gradient-to-l from-black to-transparent z-10" />
        </div>
        <div className="flex flex-row w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-black to-transparent z-10" />
          <div className="flex gap-5 whitespace-nowrap animate-slide">
            {fotos.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item.link}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className={`rounded-lg ${key === 0 ? "ml-[-150px]" : ""}`}
                />
              );
            })}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </main>
  );
}
