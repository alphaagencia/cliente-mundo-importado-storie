import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WA_CONSULTAR } from "../config";

const MARCAS = ["Victoria's Secret", "Tree Hut", "Bath & Body Works"];

export default function Marcas() {
  return (
    <section
      id="marcas"
      className="relative border-t border-linha bg-creme py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow + título + intro */}
        <div className="max-w-[64ch]">
          <Reveal className="mb-7 flex items-center gap-3 text-dourado">
            <span className="h-px w-8 bg-dourado" />
            <span className="label text-[11px]">Curadoria de marcas</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.07] font-medium tracking-[-0.005em] text-preto"
          >
            Marcas desejadas no universo da{" "}
            <span className="italic text-dourado">beleza internacional.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-[56ch] text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.8] text-preto/70"
          >
            A seleção da Mundo Importado Store reúne produtos de marcas
            reconhecidas no universo da beleza, fragrâncias e cuidados pessoais,
            com curadoria de itens importados dos Estados Unidos.
          </Reveal>
        </div>

        {/* Faixa de maisons — nomes em tipografia, sem logos oficiais */}
        <Reveal
          as="div"
          delay={0.1}
          className="mt-14 border-y border-linha md:mt-20"
        >
          <ul className="flex flex-col items-stretch divide-y divide-linha md:flex-row md:items-center md:justify-center md:divide-x md:divide-y-0">
            {MARCAS.map((marca) => (
              <li
                key={marca}
                className="py-8 text-center md:px-14 md:py-14"
              >
                <span className="font-serif text-[clamp(1.6rem,2.7vw,2.5rem)] font-medium leading-none text-preto">
                  {marca}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Disclaimer discreto + CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:mt-12 md:flex-row md:items-center">
          <Reveal
            as="p"
            className="max-w-[62ch] text-[13px] leading-relaxed text-cinza"
          >
            As marcas citadas fazem parte da curadoria de produtos trabalhados
            pela Mundo Importado Store. A comunicação não afirma representação,
            revenda oficial ou parceria oficial com essas marcas.
          </Reveal>

          <Reveal className="shrink-0">
            <a
              href={WA_CONSULTAR}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver produtos disponíveis pelo WhatsApp"
              className="group inline-flex items-center gap-2 border-b border-dourado/50 pb-1 font-serif text-lg italic text-preto transition-colors duration-300 hover:text-dourado"
            >
              Ver produtos disponíveis
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
