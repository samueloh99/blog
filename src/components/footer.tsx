import { Instagram, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col w-full h-[300px] border-t border-gray-500 px-20 mb-5">
      <div className="flex flex-col max-w-[1440px] w-full h-full m-auto">
        <div className="flex flex-row w-full justify-start h-full gap-20 mt-10">
          <div className="flex flex-col gap-5 justify-start items-start">
            <p className="text-base font-bold text-gray-400">Sobre-nos</p>
            <div className="flex flex-col gap-2">
              <p className="text-base">Ver Planos</p>
              <p className="text-base">Ver Receitas</p>
              <p className="text-base">Se inscrever</p>
              <p className="text-base">Perguntas frequentes</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-start items-start">
            <p className="text-base font-bold text-gray-400">Social Media</p>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Instagram size={20} />
              <p className="text-base">Instagram</p>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-5 text-sm font-thin">
          <p>@ 2023 - ReceitasMaster</p>
          <p className="flex flex-row gap-2 items-center justify-center">
            <Lock size={15} />
            Secured with SSL
          </p>
        </div>
      </div>
    </footer>
  );
}
