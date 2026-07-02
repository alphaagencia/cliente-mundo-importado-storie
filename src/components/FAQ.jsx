import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { WA_CONSULTAR } from "../config";

const EASE = [0.22, 1, 0.36, 1];

const FAQS = [
  {
    q: "Os produtos são originais?",
    a: "Sim. A Mundo Importado Store trabalha com produtos originais importados dos Estados Unidos, com curadoria cuidadosa e compromisso com autenticidade, qualidade e experiência de compra.",
  },
  {
    q: "Os produtos vêm dos Estados Unidos?",
    a: "Sim. A curadoria da Mundo Importado Store é focada em produtos importados dos Estados Unidos, incluindo fragrâncias, body care, skincare, kits para presente e cosméticos importados.",
  },
  {
    q: "Existe pronta entrega?",
    a: "Sim, há produtos à pronta entrega em Florianópolis, conforme disponibilidade. Para confirmar quais itens estão disponíveis no momento, basta falar com a equipe pelo WhatsApp.",
  },
  {
    q: "Como funciona o envio?",
    a: "A Mundo Importado Store realiza envio para todo o Brasil. Os prazos, valores e condições são informados no atendimento, de acordo com o produto, destino e modalidade escolhida.",
  },
  {
    q: "Vocês ajudam a escolher fragrâncias ou presentes?",
    a: "Sim. O atendimento é consultivo e personalizado. A equipe pode orientar na escolha de fragrâncias, produtos de body care, skincare e kits para presente conforme o estilo, a ocasião e a preferência da cliente.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "As formas de pagamento são informadas diretamente no WhatsApp, junto com a disponibilidade dos produtos e as opções de entrega ou envio.",
  },
  {
    q: "Vocês são revendedores oficiais das marcas?",
    a: "A Mundo Importado Store trabalha com curadoria de produtos importados de marcas reconhecidas no universo da beleza, como Victoria's Secret, Tree Hut e Bath & Body Works. Não nos apresentamos como revendedores oficiais, representantes ou parceiros oficiais dessas marcas — o nosso trabalho é a curadoria e a importação desses produtos.",
  },
];

function Item({ faq, index, open, onToggle, reduce }) {
  const isOpen = open === index;
  const triggerId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-t border-preto/10 first:border-t-0">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
        >
          <span className="font-serif text-[clamp(1.2rem,1.7vw,1.5rem)] font-medium leading-snug text-preto">
            {faq.q}
          </span>
          <Plus
            size={22}
            strokeWidth={1.4}
            aria-hidden="true"
            className={`shrink-0 text-dourado transition-transform duration-300 ease-out ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.38, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[64ch] pr-8 pb-7 text-[clamp(0.98rem,1.15vw,1.08rem)] leading-[1.8] text-preto/70">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();
  const toggle = (i) => setOpen((cur) => (cur === i ? null : i));

  return (
    <section
      id="faq"
      className="relative border-t border-linha bg-creme py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-16 gap-y-12 px-6 md:grid-cols-12 md:px-10">
        {/* Coluna esquerda */}
        <div className="md:col-span-4">
          <Reveal className="mb-7 flex items-center gap-3 text-dourado">
            <span className="h-px w-8 bg-dourado" />
            <span className="label text-[11px]">Dúvidas</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] font-medium text-preto"
          >
            Dúvidas <span className="italic text-dourado">frequentes.</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 max-w-[32ch] text-preto/65">
            Não encontrou o que procurava?{" "}
            <a
              href={WA_CONSULTAR}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-preto underline decoration-dourado decoration-1 underline-offset-4 transition-colors hover:text-dourado"
            >
              Fale com a gente no WhatsApp.
            </a>
          </Reveal>
        </div>

        {/* Accordion */}
        <Reveal as="div" delay={0.12} className="md:col-span-7 md:col-start-6">
          {FAQS.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              index={i}
              open={open}
              onToggle={toggle}
              reduce={reduce}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
