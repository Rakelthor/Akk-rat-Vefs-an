import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Pricing />
      <About />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}