import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTierMessage, setSelectedTierMessage] = useState("");

  useEffect(() => {
    const tier = localStorage.getItem('selectedTier');
    if (tier) {
      // Convert tier name to proper case for message
      let tierText = tier;
      if (tier === 'Grunnur') {
        tierText = 'Grunn';
      } else if (tier === 'Sproti') {
        tierText = 'Sprota';
      } else if (tier === 'Vöxtur') {
        tierText = 'Vöxt';
      } else if (tier === 'Foundation') {
        tierText = 'Foundation';
      } else if (tier === 'Sprout') {
        tierText = 'Sprout';
      } else if (tier === 'Growth') {
        tierText = 'Growth';
      }
      
      const message = language === 'is' 
        ? `Ég óska eftir tilboði í ${tierText}`
        : `I would like a quote for ${tierText}`;
      
      setSelectedTierMessage(message);
      setFormData(prev => ({ ...prev, message }));
      localStorage.removeItem('selectedTier');
    }
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    
    try {
      // Encode form data for Netlify
      const formData = new FormData(form);
      const formEncoded = new URLSearchParams();
      
      formData.forEach((value, key) => {
        formEncoded.append(key, value.toString());
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formEncoded.toString(),
      });

      if (response.ok) {
        // Track Google Ads conversion AFTER successful submission
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-18029982289/q0YKCPumu4wcENHkrpVD'
          });
        }
        
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Villa kom upp. Vinsamlegast reyndu aftur eða hafðu beint samband í tölvupósti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="samband" className="py-28 bg-[#1e293b]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="text-white">
            <h2
              className="mb-8"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              {t.contact.title}
            </h2>
            <p className="text-white/45 mb-12 max-w-sm" style={{ fontSize: "1rem", lineHeight: 1.75 }}>
              {t.contact.description}
            </p>

            <div className="space-y-5" style={{ fontSize: "0.9375rem" }}>
              <div>
                <p className="text-white/30 mb-1" style={{ fontSize: "0.75rem" }}>{t.contact.emailLabel}</p>
                <a href={`mailto:${t.contact.email}`} className="hover:text-[#34d399] transition-colors">{t.contact.email}</a>
              </div>
              <div>
                <p className="text-white/30 mb-1" style={{ fontSize: "0.75rem" }}>{t.contact.phoneLabel}</p>
                <a href={`tel:+354${t.contact.phone.replace(/\s/g, '')}`} className="hover:text-[#34d399] transition-colors">{t.contact.phone}</a>
              </div>
              <div>
                <p className="text-white/30 mb-1" style={{ fontSize: "0.75rem" }}>{t.contact.locationLabel}</p>
                <p>{t.contact.location}</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-16">
                <div>
                  <h3 className="text-white mb-2" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                    {t.contact.thankYouTitle}
                  </h3>
                  <p className="text-white/40" style={{ fontSize: "0.875rem" }}>
                    {t.contact.thankYouMessage}
                  </p>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Netlify form name - hidden */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot for spam protection - hidden */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label className="text-white/50 mb-2 block" style={{ fontSize: "0.8125rem", fontWeight: 400 }}>
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 text-white pb-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    placeholder={t.contact.formNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-white/50 mb-2 block" style={{ fontSize: "0.8125rem", fontWeight: 400 }}>
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 text-white pb-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    placeholder={t.contact.formEmailPlaceholder}
                  />
                </div>
                <div>
                  <label className="text-white/50 mb-2 block" style={{ fontSize: "0.8125rem", fontWeight: 400 }}>
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 text-white pb-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-none"
                    placeholder={t.contact.formMessagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-white px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2.5 cursor-pointer mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontSize: "0.9375rem", fontWeight: 500 }}
                >
                  {isSubmitting ? "Sending..." : t.contact.formSubmit}
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}