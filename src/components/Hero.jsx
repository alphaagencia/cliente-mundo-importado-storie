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

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.2 } },
  };
  const rise = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section id="top" className="relative bg-creme">
      {/* Palco do hero — foto + texto */}
      <div className="relative min-h-[94svh] overflow-hidden md:min-h-[88vh]">
        {/* Foto: mobile = fundo inteiro · desktop = metade direita */}
        <div className="absolute inset-0 md:left-[42%]">
          <img
            src={heroImg}
            alt="Marcelli, da Mundo Importado Store, com perfumes importados"
            className="h-full w-full object-cover object-center"
          />
          {/* Legibilidade no mobile (scrim de cima) */}
          <div className="absolute inset-0 bg-gradient-to-b from-creme/85 via-creme/25 to-creme/10 md:hidden" />
          {/* Continuidade no desktop: foto some no creme à esquerda */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-creme via-creme/60 to-transparent md:block" />
        </div>

        {/* Conteúdo */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="relative z-10 mx-auto flex min-h-[94svh] max-w-[1280px] flex-col justify-start px-6 pt-32 pb-14 md:min-h-[88vh] md:justify-center md:px-10 md:pt-24"
        >
          <div className="max-w-[34rem] md:max-w-[50%]">
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5rem)] leading-[1.02] font-medium tracking-[-0.01em] text-preto">
              <motion.span variants={rise} className="block">
                Sua essência.
              </motion.span>
              <motion.span variants={rise} className="block italic text-dourado">
                Sua escolha.
              </motion.span>
            </h1>

            <motion.p
              variants={rise}
              className="mt-6 max-w-[40ch] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.7] text-preto/75"
            >
              Perfumes e produtos importados que valorizam quem você é.
            </motion.p>

            <motion.div variants={rise} className="mt-9">
              <a
                href={WA_CONSULTAR}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar produtos disponíveis pelo WhatsApp"
                className="group label inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-preto px-9 py-4 text-[12px] text-creme transition-colors duration-300 hover:bg-charcoal"
              >
                Consultar produtos disponíveis
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Pilares de confiança */}
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
