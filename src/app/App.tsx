import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { PayrollInsights } from "./components/PayrollInsights";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { useEffect } from "react";
import { initializeAnalytics } from "./utils/analytics";

export default function App() {
  useEffect(() => {
    // Initialize analytics tracking (UTM parameters, scroll depth, time on page)
    initializeAnalytics();

    // Handle path-based navigation (e.g., /laun -> #laun)
    const path = window.location.pathname.replace(/^\//, ''); // Remove leading slash
    if (path && path !== '') {
      // Wait for DOM to be ready, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      {/* <Pricing /> */}
      <PayrollInsights />
      <About />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}