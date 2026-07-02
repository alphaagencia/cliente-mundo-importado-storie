// Moldura viva — filete dourado + brilho champagne percorrendo as bordas.
// Puramente decorativo, não interativo. Estilos em index.css (.edge-glow).
export default function EdgeGlow() {
  return (
    <div className="edge-glow" aria-hidden="true">
      <span className="edge-glow__aura" />
    </div>
  );
}
