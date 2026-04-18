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
    const handlePathNavigation = () => {
      const pathname = window.location.pathname;
      const path = pathname.startsWith('/') ? pathname.slice(1) : pathname;
      
      if (path && path !== '') {
        // Wait for DOM to be fully ready
        const scrollToSection = () => {
          const element = document.getElementById(path);
          if (element) {
            // Update URL to show hash without page reload
            window.history.replaceState(null, '', `/#${path}`);
            // Scroll to the section
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };

        // Try immediately
        scrollToSection();
        
        // Fallback: try again after a short delay to ensure DOM is ready
        setTimeout(scrollToSection, 100);
        setTimeout(scrollToSection, 300);
      }
    };

    handlePathNavigation();
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
