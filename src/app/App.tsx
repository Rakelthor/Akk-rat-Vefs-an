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
    const pathname = window.location.pathname;
    const path = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    
    console.log('Path navigation check:', { pathname, path }); // Debug log
    
    if (path && path !== '') {
      // Function to scroll to section
      const scrollToSection = () => {
        const element = document.getElementById(path);
        console.log('Looking for element with ID:', path, 'Found:', !!element); // Debug log
        if (element) {
          // Update URL to show hash without page reload
          window.history.replaceState(null, '', `/#${path}`);
          // Scroll to the section with offset for navbar
          const navbarHeight = 80; // Adjust based on your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          console.log('Scrolling to:', path, 'Position:', offsetPosition); // Debug log
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };

      // Try multiple times with increasing delays to ensure DOM is ready
      const maxAttempts = 10;
      let attempts = 0;
      
      const tryScroll = () => {
        attempts++;
        console.log('Scroll attempt:', attempts, 'of', maxAttempts); // Debug log
        
        if (scrollToSection()) {
          console.log('Successfully scrolled to section!'); // Debug log
          return; // Success, stop trying
        }
        
        if (attempts < maxAttempts) {
          setTimeout(tryScroll, 100 * attempts); // Increasing delay
        } else {
          console.log('Failed to find section after', maxAttempts, 'attempts'); // Debug log
        }
      };

      // Start trying after a small delay to let React render
      setTimeout(tryScroll, 50);
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