import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/lib/data";

export function FaqsSection() {
  return (
    <div className="flex flex-col gap-20 max-w-[1440px] w-full m-auto px-20 mb-60 justify-center items-center">
      <h1 className="text-3xl font-bold">Perguntas Frequentes</h1>
      <div className="w-[600px] flex flex-col gap-5">
        <h1 className="text-lg font-bold text-gray-400">Geral</h1>
        <Accordion className="w-[600px]" type="single" collapsible>
          {faqs.map((item, key) => {
            return (
              <AccordionItem value={`item-${key}`} key={key}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
