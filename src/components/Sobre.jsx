import Reveal from "./Reveal";
import sobreImg from "../assets/sobre-bare-vanilla.jpg";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative border-t border-linha bg-creme py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-x-16">
          {/* Imagem — vitrine premium */}
          <Reveal className="md:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[520px] border border-dourado/40 p-2.5">
              <img
                src={sobreImg}
                alt="Kit Bare Vanilla da Victoria's Secret — fragrância e loção importadas, em curadoria da Mundo Importado Store"
                className="h-full w-full object-cover"
                width="520"
                height="520"
              />
            </div>
          </Reveal>

          {/* Texto — enxuto, tipografia dominando */}
          <div className="md:col-span-6 md:col-start-7">
            <Reveal className="mb-7 flex items-center gap-3 text-dourado">
              <span className="h-px w-8 bg-dourado" />
              <span className="label text-[11px]">A curadoria</span>
            </Reveal>

            <Reveal
              as="h2"
              delay={0.05}
              className="font-serif text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08] font-medium tracking-[-0.005em] text-preto"
            >
              Uma curadoria premium de{" "}
              <span className="italic text-dourado">beleza internacional.</span>
            </Reveal>

            <Reveal
              as="p"
              delay={0.1}
              className="mt-7 max-w-[46ch] text-[clamp(1rem,1.15vw,1.12rem)] leading-[1.85] text-preto/75"
            >
              A Mundo Importado Store nasceu para aproximar você dos produtos de
              beleza importados mais desejados dos Estados Unidos, com uma
              experiência de compra segura, elegante e personalizada.
            </Reveal>

            <Reveal
              as="p"
              delay={0.14}
              className="mt-8 border-l border-linha pl-6 font-serif text-[clamp(1.25rem,1.7vw,1.55rem)] leading-[1.42] italic"
            >
              <span className="text-dourado">Nada é escolhido por acaso.</span>{" "}
              <span className="text-preto/85">
                Cada item faz parte de uma seleção pensada para quem valoriza
                cuidado, sofisticação e autenticidade.
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
