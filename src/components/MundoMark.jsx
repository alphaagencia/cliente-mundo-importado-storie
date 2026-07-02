// PLACEHOLDER do lockup dourado (círculo fino + coroa + "MI") — reconstrução
// fiel para trocar pelo arquivo oficial em alta com fundo transparente.
export function MundoEmblem({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      role="img"
      aria-label="Mundo Importado Store"
    >
      <circle cx="24" cy="24" r="22.4" stroke="currentColor" strokeWidth="0.8" />
      {/* coroa */}
      <path
        d="M17.5 17.2 L17 13.2 L20.2 15.6 L24 11.4 L27.8 15.6 L31 13.2 L30.5 17.2 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="12.6" r="0.7" fill="currentColor" />
      <circle cx="24" cy="10.8" r="0.7" fill="currentColor" />
      <circle cx="31" cy="12.6" r="0.7" fill="currentColor" />
      {/* MI */}
      <text
        x="24"
        y="35"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.5"
        fill="currentColor"
      >
        MI
      </text>
    </svg>
  );
}

// Lockup completo para header/footer.
export default function MundoMark({ className = "", tone = "preto" }) {
  const wordColor = tone === "creme" ? "text-creme" : "text-preto";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <MundoEmblem className="h-10 w-10 shrink-0 text-dourado" />
      <span className="leading-none">
        <span
          className={`block font-serif text-[15px] font-semibold tracking-[0.04em] ${wordColor}`}
        >
          MUNDO IMPORTADO
        </span>
        <span className="mt-1 flex items-center gap-2">
          <span className="h-px w-4 bg-dourado" />
          <span className="label text-[9px] text-dourado">Store</span>
        </span>
      </span>
    </span>
  );
}
