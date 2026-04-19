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
    // CRITICAL: Disable automatic scroll restoration IMMEDIATELY
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Prevent any scroll until we're ready
    let scrollLocked = false;
    const preventScroll = (e: Event) => {
      if (scrollLocked) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Initialize analytics tracking (UTM parameters, scroll depth, time on page)
    initializeAnalytics();

    // Handle both path-based navigation (e.g., /laun) and hash navigation (e.g., /#laun)
    const handleNavigation = () => {
      // Check if we have a hash in the URL first
      let targetId = window.location.hash.slice(1); // Remove the '#'
      
      // If no hash, check the pathname
      if (!targetId) {
        const pathname = window.location.pathname;
        const path = pathname.startsWith('/') ? pathname.slice(1) : pathname;
        targetId = path;
      }
      
      console.log('Navigation check:', { 
        pathname: window.location.pathname, 
        hash: window.location.hash,
        targetId 
      });
      
      if (targetId && targetId !== '') {
        // Lock scroll temporarily
        scrollLocked = true;
        window.addEventListener('scroll', preventScroll, { passive: false, capture: true });

        // Function to scroll to section
        const scrollToSection = () => {
          const element = document.getElementById(targetId);
          console.log('Looking for element with ID:', targetId, 'Found:', !!element);
          
          if (element) {
            // Update URL to show hash without page reload (only if coming from path)
            if (!window.location.hash) {
              window.history.replaceState(null, '', `/#${targetId}`);
            }
            
            // Calculate position
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            console.log('Scrolling to:', targetId, 'Position:', offsetPosition);
            
            // Force instant scroll (can't be interrupted)
            window.scrollTo({
              top: offsetPosition,
              behavior: 'instant'
            });

            // Keep scroll locked for a bit longer to prevent browser from resetting
            setTimeout(() => {
              scrollLocked = false;
              window.removeEventListener('scroll', preventScroll, { capture: true });
              console.log('Scroll lock released');
            }, 500);

            return true;
          }
          return false;
        };

        // Try multiple times with increasing delays to ensure DOM is ready
        const maxAttempts = 15;
        let attempts = 0;
        
        const tryScroll = () => {
          attempts++;
          console.log('Scroll attempt:', attempts, 'of', maxAttempts);
          
          if (scrollToSection()) {
            console.log('Successfully scrolled to section!');
            return; // Success, stop trying
          }
          
          if (attempts < maxAttempts) {
            setTimeout(tryScroll, 100 * attempts); // Increasing delay
          } else {
            console.log('Failed to find section after', maxAttempts, 'attempts');
            scrollLocked = false;
            window.removeEventListener('scroll', preventScroll, { capture: true });
          }
        };

        // Start trying after a small delay to let React render
        setTimeout(tryScroll, 150);
      }
    };

    // Handle initial navigation
    handleNavigation();

    // Also handle hash changes (for in-page navigation)
    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('scroll', preventScroll, { capture: true });
      // Restore default scroll restoration when component unmounts
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
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