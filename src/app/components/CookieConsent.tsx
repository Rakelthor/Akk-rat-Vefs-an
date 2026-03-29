import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { X } from "lucide-react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: Record<string, string>
    ) => void;
  }
}

export function CookieConsent() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    
    if (consent) {
      // Apply the stored consent preference
      if (typeof window.gtag === "function") {
        if (consent === "accepted") {
          window.gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            analytics_storage: "granted",
          });
        } else {
          window.gtag("consent", "update", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "denied",
          });
        }
      }
    } else {
      // Small delay to not interfere with page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Update Google Consent Mode to grant all
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Update Google Consent Mode to deny all
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const content = {
    is: {
      title: "Við notum vafrakökur",
      description:
        "Við notum vafrakökur til að bæta upplifun þína á vefsíðunni og til að greina umferð. Vafrakökurnar hjálpa okkur einnig að bæta þjónustu okkar og auglýsingar.",
      accept: "Samþykkja allt",
      decline: "Hafna",
      learnMore: "Nánar um vafrakökur",
    },
    en: {
      title: "We use cookies",
      description:
        "We use cookies to enhance your experience on our website and to analyze traffic. Cookies also help us improve our services and advertising.",
      accept: "Accept all",
      decline: "Decline",
      learnMore: "Learn more",
    },
  };

  const t = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 md:p-8">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {t.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors duration-200 whitespace-nowrap"
            >
              {t.decline}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors duration-200 whitespace-nowrap shadow-md"
            >
              {t.accept}
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}