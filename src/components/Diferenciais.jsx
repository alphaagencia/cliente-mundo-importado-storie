import {
  ShieldCheck,
  Sparkles,
  MapPin,
  Truck,
  MessageCircle,
  Gift,
  Compass,
  Award,
} from "lucide-react";
import Reveal from "./Reveal";

const ITENS = [
  { icon: ShieldCheck, text: "Produtos originais importados dos Estados Unidos." },
  { icon: Sparkles, text: "Curadoria criteriosa de marcas internacionais desejadas." },
  { icon: MapPin, text: "Pronta entrega em Florianópolis, conforme disponibilidade." },
  { icon: Truck, text: "Envio para todo o Brasil." },
  { icon: MessageCircle, text: "Atendimento personalizado pelo WhatsApp." },
  { icon: Gift, text: "Embalagens cuidadosamente preparadas." },
  { icon: Compass, text: "Orientação para escolha de fragrâncias, kits e produtos ideais." },
  { icon: Award, text: "Compromisso com autenticidade, qualidade e experiência de compra." },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="relative border-t border-linha bg-greige py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Eyebrow + título + intro */}
        <div className="max-w-[60ch]">
          <Reveal className="mb-7 flex items-center gap-3 text-dourado">
            <span className="h-px w-8 bg-dourado" />
            <span className="label text-[11px]">Diferenciais</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.07] font-medium tracking-[-0.005em] text-preto"
          >
            Confiança em{" "}
            <span className="italic text-dourado">cada detalhe</span> da
            experiência.
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-[56ch] text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.8] text-preto/70"
          >
            Comprar produtos importados exige segurança. Por isso, a Mundo
            Importado Store valoriza procedência, atendimento próximo e uma
            experiência cuidadosa do primeiro contato até a entrega.
          </Reveal>
        </div>

        {/* Grade de diferenciais — ícones em linha fina */}
        <ul className="mt-14 grid grid-cols-1 gap-x-14 border-linha sm:grid-cols-2 md:mt-16">
          {ITENS.map(({ icon: Icon, text }, i) => (
            <Reveal
              as="li"
              key={text}
              delay={(i % 2) * 0.05}
              className="flex items-start gap-5 border-t border-linha py-6 md:py-7"
            >
              <Icon
                size={22}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 text-dourado"
              />
              <span className="text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.55] text-preto/85">
                {text}
              </span>
            </Reveal>
          ))}
        </ul>

        {/* Frase de apoio — fecho centralizado */}
        <Reveal className="mt-16 flex flex-col items-center text-center md:mt-20">
          <span className="mb-6 h-px w-10 bg-dourado" />
          <p className="max-w-[30ch] font-serif text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.3] italic text-preto">
            A beleza internacional encontra um atendimento{" "}
            <span className="text-dourado">próximo, seguro e personalizado.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
