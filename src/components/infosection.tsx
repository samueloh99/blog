import Image from "next/image";

import InfoSectionImg from "../../public/infosection.webp";
import { Button } from "@/components/ui/button";

export function InfoSection() {
  return (
    <div className="flex max-w-[1440px] w-full m-auto px-20 my-40  relative">
      <div className="bg-[#222326] w-full h-[400px] absolute top-0 right-0 bottom-0 m-auto left-0 z-0" />
      <div className="flex flex-row w-full z-10 justify-center items-center gap-20">
        <Image
          src={InfoSectionImg}
          alt="infosection"
          width={460}
          height={460}
        />
        <div className="flex flex-col gap-5 w-[400px]">
          <h1 className="text-3xl font-bold">
            Tenha o acesso a todas as receitas exclusivas para voce
          </h1>
          <p className="text-lg font-thin">
            See why leading organizations rely on
            <br /> MasterClass for learning & development.
          </p>
          <div className="flex flex-row w-full justify-start items-center gap-5">
            <Button
              variant={"destructive"}
              className="w-[150px] h-[60px] font-bold uppercase text-base"
            >
              Se inscreva
            </Button>
            <p>Ver detalhes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
