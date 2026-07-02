import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { MundoEmblem } from "./MundoMark";
import { WA_CONSULTAR } from "../config";

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-linha bg-charcoal py-28 text-creme md:py-40"
    >
      {/* emblema como marca d'água sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 text-dourado/[0.06]"
      >
        <MundoEmblem className="h-72 w-72 md:h-96 md:w-96" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center md:px-10">
        <Reveal className="mb-8 flex items-center gap-3 text-dourado">
          <span className="h-px w-8 bg-dourado" />
          <span className="label text-[11px]">Atendimento</span>
          <span className="h-px w-8 bg-dourado" />
        </Reveal>

        <Reveal
          as="h2"
          delay={0.05}
          className="max-w-[20ch] font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.06] font-medium text-creme"
        >
          Escolha seus produtos importados com mais{" "}
          <span className="italic text-dourado">segurança e cuidado.</span>
        </Reveal>

        <Reveal
          as="p"
          delay={0.1}
          className="mt-8 max-w-[54ch] text-[clamp(1.02rem,1.3vw,1.18rem)] leading-[1.75] text-creme/75"
        >
          Fale com a Mundo Importado Store pelo WhatsApp e receba atendimento
          personalizado para consultar disponibilidade, escolher fragrâncias,
          montar presentes ou encontrar produtos ideais para sua rotina de
          beleza.
        </Reveal>

        <Reveal delay={0.16} className="mt-11">
          <a
            href={WA_CONSULTAR}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Receber atendimento pelo WhatsApp"
            className="group label inline-flex min-h-[54px] items-center justify-center gap-3 bg-dourado px-9 py-4 text-[12px] text-preto transition-colors duration-300 hover:bg-champagne"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Receber atendimento pelo WhatsApp
          </a>
        </Reveal>

        <Reveal
          as="p"
          delay={0.2}
          className="mt-7 max-w-[48ch] text-[13px] leading-relaxed text-creme/55"
        >
          Produtos originais, curadoria premium, pronta entrega em Florianópolis
          e envio para todo o Brasil.
        </Reveal>
      </div>
    </section>
  );
}
