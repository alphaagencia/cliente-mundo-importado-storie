// Configuração central — Mundo Importado Store
// Número informado pela cliente: (41) 99920-5614. FLAG: DDD 41 (PR) x operação
// em Florianópolis (DDD 48) — confirmar com a cliente antes do lançamento.
export const WHATSAPP_NUMBER = "5541999205614";

export const wa = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// Mensagens pré-preenchidas (copy aprovada)
export const WA_CONSULTAR = wa(
  "Olá, vim pelo site da Mundo Importado Store e gostaria de consultar os produtos disponíveis.",
);
export const WA_PRONTA_ENTREGA = wa(
  "Olá, vim pelo site e gostaria de saber quais produtos importados estão disponíveis para pronta entrega em Florianópolis.",
);
export const WA_ATACADO = wa(
  "Olá, tenho interesse em revenda/atacado da Mundo Importado Store.",
);

export const INSTAGRAM_URL = "https://instagram.com/mundoimportado.store";
export const INSTAGRAM_HANDLE = "@mundoimportado.store";

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Categorias", href: "#categorias" },
  { label: "Marcas", href: "#marcas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
];

// Marcadores do elemento-assinatura "Sillage / Fio de Curadoria"
export const CURADORIA_MARKERS = [
  "Originalidade",
  "Curadoria",
  "Pronta entrega",
  "Envio Brasil",
  "Atendimento personalizado",
];
