import { MessageCircle, AtSign, ArrowUp } from "lucide-react";
import MundoMark from "./MundoMark";
import {
  NAV_LINKS,
  WA_CONSULTAR,
  WA_ATACADO,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-dourado/25 bg-preto text-creme">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Marca */}
          <div className="md:col-span-5">
            <a href="#top" aria-label="Mundo Importado Store — início">
              <MundoMark tone="creme" />
            </a>
            <p className="mt-6 max-w-[36ch] text-[15px] leading-[1.7] text-creme/60">
              Curadoria premium de fragrâncias, body care, skincare, kits para
              presente e cosméticos importados dos Estados Unidos.
            </p>
          </div>

          {/* Navegação */}
          <nav className="md:col-span-3" aria-label="Rodapé">
            <h2 className="label mb-5 text-[10px] text-creme/50">Navegação</h2>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-creme/80 transition-colors duration-300 hover:text-dourado"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="md:col-span-4">
            <h2 className="label mb-5 text-[10px] text-creme/50">Contato</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={WA_CONSULTAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] text-creme/80 transition-colors duration-300 hover:text-dourado"
                >
                  <MessageCircle size={16} strokeWidth={1.6} className="text-dourado" />
                  (41) 99920-5614
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] text-creme/80 transition-colors duration-300 hover:text-dourado"
                >
                  <AtSign size={16} strokeWidth={1.6} className="text-dourado" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={WA_ATACADO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-[10px] text-creme/45 transition-colors duration-300 hover:text-dourado"
                >
                  Para revendedores · Atacado
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 border-t border-creme/12 pt-8 md:mt-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-[13px] text-creme/55">
              © {new Date().getFullYear()} Mundo Importado Store — A excelência
              da beleza internacional.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-[13px] text-creme/55 transition-colors duration-300 hover:text-creme"
            >
              Voltar ao topo
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <p className="mt-6 max-w-[80ch] text-[12px] leading-relaxed text-creme/40">
            As marcas citadas pertencem aos seus respectivos proprietários. A
            Mundo Importado Store realiza curadoria de produtos importados e não
            se apresenta como revendedora oficial, representante ou parceira
            oficial dessas marcas.
          </p>
        </div>
      </div>
    </footer>
  );
}
