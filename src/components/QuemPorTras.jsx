import { Star } from "lucide-react";
import Reveal from "./Reveal";
import marcelli from "../assets/marcelli.jpg";

export default function QuemPorTras() {
  return (
    <section
      id="quem"
      className="relative overflow-hidden border-t border-linha bg-charcoal py-24 text-creme md:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-x-16">
          {/* Foto da fundadora */}
          <Reveal className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] border border-dourado/40 p-2.5">
              <img
                src={marcelli}
                alt="Marcelli, fundadora da Mundo Importado Store"
                loading="lazy"
                className="h-full w-full object-cover object-top"
                width="420"
                height="525"
              />
            </div>
          </Reveal>

          {/* História + prova social */}
          <div className="md:col-span-6 md:col-start-7">
            <Reveal className="mb-7 flex items-center gap-3 text-dourado">
              <span className="h-px w-8 bg-dourado" />
              <span className="label text-[11px]">Quem está por trás</span>
            </Reveal>

            <Reveal
              as="h2"
              delay={0.05}
              className="font-serif text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.08] font-medium text-creme"
            >
              Marcelli, à frente da{" "}
              <span className="italic text-dourado">Mundo Importado Store.</span>
            </Reveal>

            <Reveal
              as="p"
              delay={0.1}
              className="mt-7 max-w-[48ch] text-[clamp(1rem,1.15vw,1.12rem)] leading-[1.85] text-creme/75"
            >
              Cada curadoria carrega um cuidado pessoal. À frente da Mundo
              Importado Store, a Marcelli seleciona os produtos e acompanha cada
              atendimento — do primeiro contato no WhatsApp à embalagem que
              chega até você.
            </Reveal>

            <Reveal
              as="p"
              delay={0.14}
              className="mt-6 max-w-[42ch] border-l border-dourado/40 pl-6 font-serif text-[clamp(1.3rem,1.8vw,1.6rem)] leading-[1.4] italic text-creme"
            >
              A confiança de vocês é o que nos move todos os dias.
            </Reveal>

            {/* Prova social real */}
            <Reveal
              as="div"
              delay={0.18}
              className="mt-11 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-creme/15 pt-8"
            >
              <div>
                <span className="block font-serif text-[clamp(2.2rem,3vw,2.8rem)] leading-none font-medium text-dourado">
                  +100
                </span>
                <span className="label mt-2 block text-[10px] text-creme/70">
                  Clientes atendidas
                </span>
              </div>
              <div>
                <span className="flex items-center gap-1 text-dourado">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="label mt-2.5 block text-[10px] text-creme/70">
                  Feedbacks reais de quem compra
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
