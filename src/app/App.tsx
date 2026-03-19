import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Launavinnsla } from "./components/Launavinnsla";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
        <Navbar />
        <Hero />
        <Services />
        <Launavinnsla />
        <Pricing />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}