import { MapPin, Truck, Search, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WA_PRONTA_ENTREGA } from "../config";

const DESTAQUES = [
  { icon: MapPin, text: "Atendimento em Florianópolis" },
  { icon: Truck, text: "Envio para todo o Brasil" },
  { icon: Search, text: "Consulta rápida de disponibilidade" },
  { icon: MessageCircle, text: "Acompanhamento pelo WhatsApp" },
];

export default function ProntaEntrega() {
  return (
    <section
      id="pronta-entrega"
      className="relative border-t border-linha bg-greige py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-16 gap-y-12 px-6 md:grid-cols-12 md:px-10">
        {/* Título + texto + CTA */}
        <div className="md:col-span-6">
          <Reveal className="mb-7 flex items-center gap-3 text-dourado">
            <span className="h-px w-8 bg-dourado" />
            <span className="label text-[11px]">Pronta entrega</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-serif text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.1] font-medium text-preto"
          >
            Pronta entrega em Florianópolis e{" "}
            <span className="italic text-dourado">envio para todo o Brasil.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-[50ch] text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.8] text-preto/70"
          >
            A Mundo Importado Store trabalha com produtos selecionados à pronta
            entrega em Florianópolis, conforme disponibilidade, e também realiza
            envios para outras regiões do Brasil. Para consultar produtos,
            prazos, formas de pagamento e opções de entrega, fale com a equipe
            pelo WhatsApp.
          </Reveal>
          <Reveal className="mt-9">
            <a
              href={WA_PRONTA_ENTREGA}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar pronta entrega pelo WhatsApp"
              className="group label inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-preto px-8 py-4 text-[12px] text-creme transition-colors duration-300 hover:bg-charcoal"
            >
              Consultar pronta entrega
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Destaques */}
        <div className="md:col-span-5 md:col-start-8 md:self-center">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-linha bg-linha sm:grid-cols-2">
            {DESTAQUES.map(({ icon: Icon, text }, i) => (
              <Reveal
                as="li"
                key={text}
                delay={i * 0.06}
                className="flex flex-col gap-4 bg-creme p-7"
              >
                <Icon size={22} strokeWidth={1.3} className="text-dourado" />
                <span className="text-[0.98rem] leading-snug text-preto/85">
                  {text}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
