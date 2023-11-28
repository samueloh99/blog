import Image from "next/image";
import { categorias, fotos } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function FirstSection() {
  return (
    <div className="flex flex-col h-full w-full max-w-[1440px] m-auto px-20 mb-[200px] justify-center items-center gap-10">
      <div className="flex flex-col w-full justify-center items-center gap-10">
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="flex flex-col items-start justify-start">
            <p className="font-bold text-3xl">+50</p>
            <p className="font-thin text-lg">Receitas</p>
          </div>
          <div className="bg-gray-400 w-[1px] h-[60px]" />
          <div className="flex flex-col items-start justify-start">
            <p className="font-bold text-3xl">+20</p>
            <p className="font-thin text-lg">Categorias</p>
          </div>
          <div className="bg-gray-400 w-[1px] h-[60px]" />
          <div className="flex flex-col items-start justify-start">
            <p className="font-bold text-3xl">+60</p>
            <p className="font-thin text-lg">Video tutoriais</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {categorias.map((item, key) => {
            return (
              <div className="bg-slate-800 p-2 rounded-md" key={key}>
                <p>{item.title}</p>
              </div>
            );
          })}
          <div className="bg-slate-800 p-2 rounded-md">
            <p>...</p>
          </div>
        </div>
        <Button
          variant={"destructive"}
          className="w-[150px] h-[60px] font-bold uppercase text-base"
        >
          Ver todos
        </Button>
      </div>
      <div className="flex flex-col h-full w-full relative gap-10">
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
    </div>
  );
}
