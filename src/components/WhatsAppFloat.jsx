import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_CONSULTAR } from "../config";

// Botão flutuante discreto e elegante. Aparece após um leve scroll.
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WA_CONSULTAR}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed right-5 bottom-5 z-50 inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-dourado/60 bg-preto/90 text-dourado shadow-[0_6px_24px_-6px_rgba(0,0,0,0.5)] backdrop-blur transition-colors duration-300 hover:bg-dourado hover:text-preto md:right-8 md:bottom-8"
        >
          <MessageCircle size={22} strokeWidth={1.7} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
