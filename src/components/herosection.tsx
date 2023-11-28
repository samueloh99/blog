import Image from "next/image";

import { Button } from "@/components/ui/button";

import GuyCookingImg from "../../public/image1.png";

export function HeroSection() {
  return (
    <main className="flex w-full m-auto h-[700px] flex-col items-center justify-center relative mt-10 mb-40">
      <div className="flex flex-row h-full max-w-[1440px] w-full px-20 z-20">
        <div className="flex flex-col h-full w-full justify-start items-start gap-10 pt-40">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold">LEARN FROM THE BEST,</h1>
            <h1 className="text-5xl font-bold">BE YOUR BEST.</h1>
            <p className="text-xl font-thin">
              Get unlimited access to thousand of bite-sized lessons.
            </p>
          </div>
          <div>
            <Button
              variant={"destructive"}
              className="w-[150px] h-[60px] font-bold uppercase text-base"
            >
              Ver Planos
            </Button>
          </div>
        </div>

        <div className="flex overflow-hidden rounded-md w-full">
          <Image
            src={GuyCookingImg}
            alt="hero-image"
            width={600} // You might want to adjust or remove these fixed dimensions
            height={700} // to make the image more responsive.
            className="w-full max-w-full h-auto" // Added Tailwind classes for responsiveness
          />
        </div>
      </div>
    </main>
  );
}
