import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}