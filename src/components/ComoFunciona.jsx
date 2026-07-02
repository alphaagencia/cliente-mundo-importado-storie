import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WA_CONSULTAR } from "../config";

const ETAPAS = [
  {
    n: "01",
    titulo: "Consulte os produtos",
    desc: "Veja as categorias no site e fale com a equipe para saber o que está disponível.",
  },
  {
    n: "02",
    titulo: "Receba orientação personalizada",
    desc: "Tire dúvidas sobre fragrâncias, kits, marcas, formas de uso, pagamento e envio.",
  },
  {
    n: "03",
    titulo: "Confirme disponibilidade e pagamento",
    desc: "A equipe informa os itens disponíveis, valores, formas de pagamento e opções de entrega.",
  },
  {
    n: "04",
    titulo: "Receba seu pedido",
    desc: "Retire ou receba em Florianópolis, conforme combinado, ou solicite envio para outras regiões do Brasil.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="relative border-t border-linha bg-creme py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow + título + intro */}
        <div className="max-w-[58ch]">
          <Reveal className="mb-7 flex items-center gap-3 text-dourado">
            <span className="h-px w-8 bg-dourado" />
            <span className="label text-[11px]">Como funciona</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.07] font-medium tracking-[-0.005em] text-preto"
          >
            Uma compra simples,{" "}
            <span className="italic text-dourado">segura e orientada.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-[54ch] text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.8] text-preto/70"
          >
            O atendimento acontece pelo WhatsApp para que você receba orientação
            personalizada, consulte disponibilidade e escolha com mais
            segurança.
          </Reveal>
        </div>

        {/* Passos */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {ETAPAS.map((e, i) => (
            <Reveal
              as="div"
              key={e.n}
              delay={i * 0.08}
              className="relative border-t border-linha pt-6"
            >
              <span className="font-serif text-[clamp(2.2rem,3vw,2.8rem)] font-medium leading-none text-dourado/70">
                {e.n}
              </span>
              <h3 className="mt-4 font-serif text-[1.35rem] font-medium leading-tight text-preto">
                {e.titulo}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-preto/70">
                {e.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-14 md:mt-16">
          <a
            href={WA_CONSULTAR}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Mundo Importado Store pelo WhatsApp"
            className="group label inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-preto px-8 py-4 text-[12px] text-creme transition-colors duration-300 hover:bg-charcoal"
          >
            Falar com a Mundo Importado Store
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
