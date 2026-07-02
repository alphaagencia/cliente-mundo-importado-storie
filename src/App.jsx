import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Categorias from "./components/Categorias";
import Marcas from "./components/Marcas";
import Diferenciais from "./components/Diferenciais";
import ComoFunciona from "./components/ComoFunciona";
import QuemPorTras from "./components/QuemPorTras";
import ProntaEntrega from "./components/ProntaEntrega";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import EdgeGlow from "./components/EdgeGlow";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <EdgeGlow />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Marcas />
        <Diferenciais />
        <ComoFunciona />
        <QuemPorTras />
        <ProntaEntrega />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
