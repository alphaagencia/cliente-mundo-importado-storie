import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WA_CONSULTAR } from "../config";
import catFragrancias from "../assets/cat-fragrancias.jpg";
import catBodycare from "../assets/cat-bodycare.jpg";
import catSkincare from "../assets/cat-skincare.jpg";
import catKits from "../assets/cat-kits.jpg";
import catCosmeticos from "../assets/cat-cosmeticos.jpg";

const FEATURE = {
  n: "01",
  nome: "Fragrâncias",
  desc: "Perfumes, body splashes e aromas importados para diferentes estilos, ocasiões e preferências.",
  img: catFragrancias,
};

const CATS = [
  {
    n: "02",
    nome: "Body Care",
    desc: "Hidratantes, esfoliantes e cuidados corporais para transformar a rotina em um ritual de beleza.",
    img: catBodycare,
  },
  {
    n: "03",
    nome: "Tree Hut",
    desc: "Esfoliantes corporais à base de açúcar e manteiga de karité.",
    img: catSkincare,
  },
  {
    n: "04",
    nome: "Kits para presente",
    desc: "Combinações elegantes para surpreender com produtos importados e uma apresentação cuidadosa.",
    img: catKits,
  },
  {
    n: "05",
    nome: "Cosméticos importados",
    desc: "Itens de beleza e autocuidado selecionados para complementar sua rotina com sofisticação.",
    img: catCosmeticos,
  },
];

// Slot de imagem — vitrine de curadoria
function PhotoSlot({ img, alt, className = "" }) {
  return (
    <div className={`relative border border-dourado/40 bg-creme p-2.5 ${className}`}>
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function Categorias() {
  return (
    <section
      id="categorias"
      className="relative border-t border-linha bg-greige py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow + título + intro */}
        <div className="max-w-[62ch]">
          <Reveal className="mb-7 flex items-center gap-3 text-dourado">
            <span className="h-px w-8 bg-dourado" />
            <span className="label text-[11px]">Categorias</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.07] font-medium tracking-[-0.005em] text-preto"
          >
            Beleza internacional para diferentes{" "}
            <span className="italic text-dourado">momentos da sua rotina.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-[52ch] text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.8] text-preto/70"
          >
            Explore uma seleção de produtos importados para autocuidado,
            presentes e experiências sensoriais marcantes.
          </Reveal>
        </div>

        {/* Categoria-herói — Fragrâncias */}
        <Reveal
          as="a"
          delay={0.05}
          href={WA_CONSULTAR}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 grid grid-cols-1 items-stretch gap-8 md:mt-20 md:grid-cols-12 md:gap-10"
        >
          <PhotoSlot
            img={FEATURE.img}
            alt="Fragrâncias importadas — curadoria da Mundo Importado Store"
            className="aspect-[4/3] md:col-span-7 md:aspect-[16/11]"
          />
          <div className="flex flex-col justify-center md:col-span-5">
            <span className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-medium leading-none text-dourado/70">
              {FEATURE.n}
            </span>
            <h3 className="mt-4 font-serif text-[clamp(1.8rem,2.4vw,2.4rem)] font-medium leading-[1.1] text-preto">
              {FEATURE.nome}
            </h3>
            <p className="mt-4 max-w-[38ch] text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.75] text-preto/70">
              {FEATURE.desc}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 label text-[11px] text-preto transition-colors duration-300 group-hover:text-dourado">
              Consultar disponibilidade
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </Reveal>

        {/* Grid das demais categorias */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {CATS.map((c, i) => (
            <Reveal
              as="a"
              key={c.nome}
              delay={i * 0.06}
              href={WA_CONSULTAR}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              <PhotoSlot
                img={c.img}
                alt={`${c.nome} — curadoria da Mundo Importado Store`}
                className="aspect-[4/5]"
              />
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-serif text-lg font-medium text-dourado/70">
                  {c.n}
                </span>
                <h3 className="font-serif text-[1.35rem] font-medium leading-tight text-preto transition-colors duration-300 group-hover:text-dourado">
                  {c.nome}
                </h3>
              </div>
              <p className="mt-2 text-[0.95rem] leading-[1.7] text-preto/65">
                {c.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* CTA da seção */}
        <Reveal className="mt-14 flex justify-center md:mt-20">
          <a
            href={WA_CONSULTAR}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar disponibilidade pelo WhatsApp"
            className="group label inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-preto px-8 py-4 text-[12px] text-creme transition-colors duration-300 hover:bg-charcoal"
          >
            Consultar disponibilidade pelo WhatsApp
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
