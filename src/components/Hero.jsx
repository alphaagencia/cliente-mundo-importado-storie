import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, FileText, Truck, MessageCircle } from "lucide-react";
import { WA_CONSULTAR } from "../config";
import marcelli from "../assets/marcelli.jpg";

const EASE = [0.22, 1, 0.36, 1];

const PILARES = [
  { icon: ShieldCheck, label: "100% originais" },
  { icon: FileText, label: "Nota fiscal emitida" },
  { icon: Truck, label: "Envio para todo o Brasil" },
  { icon: MessageCircle, label: "Atendimento rápido" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.15 } },
  };
  const rise = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section id="top" className="relative overflow-hidden bg-creme">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20 lg:grid-cols-12 lg:gap-8">
        {/* Conteúdo */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="lg:col-span-6"
        >
          <motion.div
            variants={rise}
            className="mb-7 flex items-center gap-3 text-dourado"
          >
            <span className="h-px w-8 bg-dourado" />
            <span className="label text-[11px]">Beleza importada dos Estados Unidos</span>
          </motion.div>

          <h1 className="max-w-[15ch] font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-[-0.01em] text-preto">
            <motion.span variants={rise} className="block">
              A excelência da beleza
            </motion.span>
            <motion.span variants={rise} className="block">
              internacional,{" "}
              <span className="italic text-dourado">agora mais</span>
            </motion.span>
            <motion.span variants={rise} className="block italic text-dourado">
              perto de você.
            </motion.span>
          </h1>

          <motion.p
            variants={rise}
            className="mt-8 max-w-[46ch] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.75] text-cinza"
          >
            Fragrâncias, body care, skincare, kits para presente e cosméticos
            importados com curadoria premium, produtos originais e atendimento
            personalizado pelo WhatsApp.
          </motion.p>

          <motion.p variants={rise} className="mt-3 font-serif text-lg italic text-preto/80">
            Pronta entrega em Florianópolis e envio para todo o Brasil.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={WA_CONSULTAR}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar produtos disponíveis pelo WhatsApp"
              className="group label inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-preto px-8 py-4 text-[12px] text-creme transition-colors duration-300 hover:bg-charcoal"
            >
              Consultar produtos disponíveis
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={WA_CONSULTAR}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 py-4 text-[15px] text-preto transition-colors duration-300 hover:text-dourado"
            >
              Receber atendimento personalizado
              <span className="h-px w-6 bg-dourado transition-all duration-300 group-hover:w-9" />
            </a>
          </motion.div>

          <motion.p variants={rise} className="mt-6 max-w-[42ch] text-[13px] leading-relaxed text-cinza">
            Atendimento consultivo para ajudar você a escolher fragrâncias,
            presentes e produtos ideais para sua rotina de beleza.
          </motion.p>
        </motion.div>

        {/* Imagem (placeholder Marcelli) + arco dourado */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          className="relative lg:col-span-6 lg:pl-6"
        >
          {/* arco dourado — motivo do logo / início do sillage */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-6 h-[115%] w-[115%] rounded-full border border-dourado/25 md:-right-10"
          />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] border border-dourado/40 p-2.5">
            <img
              src={marcelli}
              alt="Marcelli, fundadora da Mundo Importado Store, em ambiente boutique"
              className="h-full w-full object-cover object-top"
              width="440"
              height="550"
            />
          </div>
          <p className="mt-3 text-center label text-[10px] text-cinza lg:text-right">
            Marcelli · fundadora da Mundo Importado Store
          </p>
        </motion.div>
      </div>

      {/* Pilares de confiança */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="border-y border-linha bg-greige/40"
      >
        <ul className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-6 px-6 py-7 md:grid-cols-4 md:px-10">
          {PILARES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-3 text-center md:justify-start">
              <Icon size={18} strokeWidth={1.4} className="shrink-0 text-dourado" />
              <span className="label text-[11px] text-preto">{label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
