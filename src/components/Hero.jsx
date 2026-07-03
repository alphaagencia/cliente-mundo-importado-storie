import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, MessageCircle, Truck } from "lucide-react";
import { WA_CONSULTAR } from "../config";
import heroImg from "../assets/hero-marcelli.jpg";

const EASE = [0.22, 1, 0.36, 1];

const PILARES = [
  { icon: ShieldCheck, label: "Produtos 100% originais" },
  { icon: MessageCircle, label: "Atendimento via WhatsApp" },
  { icon: Truck, label: "Envio para todo o Brasil" },
];

function Headline() {
  return (
    <h1 className="font-serif leading-[1.03] font-medium tracking-[-0.01em] text-preto">
      <span className="block">Sua essência.</span>
      <span className="block italic text-dourado">Sua escolha.</span>
    </h1>
  );
}

function Cta() {
  return (
    <a
      href={WA_CONSULTAR}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar produtos disponíveis pelo WhatsApp"
      className="group label inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-preto px-9 py-4 text-[12px] text-creme transition-colors duration-300 hover:bg-charcoal sm:w-auto"
    >
      Consultar produtos disponíveis
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative bg-creme">
      {/* ===== MOBILE: empilhado ===== */}
      <div className="px-6 pt-28 pb-12 md:hidden">
        <div className="[&_h1]:text-[clamp(2.6rem,13vw,3.4rem)]">
          <Headline />
        </div>
        <p className="mt-5 max-w-[34ch] text-[1.05rem] leading-[1.6] text-preto/75">
          Perfumes e produtos importados que valorizam quem você é.
        </p>
        <div className="mt-7 overflow-hidden rounded-2xl border border-dourado/30">
          <img
            src={heroImg}
            alt="Marcelli, da Mundo Importado Store, com perfumes importados"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
        <div className="mt-7">
          <Cta />
        </div>
      </div>

      {/* ===== DESKTOP: foto à direita dissolvendo no creme ===== */}
      <div className="relative hidden min-h-[88vh] overflow-hidden md:block">
        <div className="absolute inset-0 left-[42%]">
          <img
            src={heroImg}
            alt="Marcelli, da Mundo Importado Store, com perfumes importados"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-creme via-creme/55 to-transparent" />
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1280px] flex-col justify-center px-10"
        >
          <div className="max-w-[48%]">
            <div className="[&_h1]:text-[clamp(3rem,5.2vw,5rem)]">
              <Headline />
            </div>
            <p className="mt-6 max-w-[34ch] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.7] text-preto/75">
              Perfumes e produtos importados que valorizam quem você é.
            </p>
            <div className="mt-9">
              <Cta />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== Pilares ===== */}
      <div className="border-y border-linha bg-greige/50">
        <ul className="mx-auto grid max-w-[1280px] grid-cols-1 gap-y-5 px-6 py-7 sm:grid-cols-3 md:px-10">
          {PILARES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-3 text-center">
              <Icon size={18} strokeWidth={1.4} className="shrink-0 text-dourado" />
              <span className="label text-[11px] text-preto">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
