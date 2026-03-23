import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Onboarding } from "./components/Onboarding";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [mounted, setMounted] = useState(0);
  
  useEffect(() => {
    setMounted(prev => prev + 1);
  }, []);

  return (
    <LanguageProvider key={mounted}>
      <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
        <Navbar />
        <Hero />
        <Services />
        <Onboarding />
        <Pricing />
        <About />
        <Contact />
        <PrivacyPolicy />
        <Footer />
      </div>
    </LanguageProvider>
  );
}