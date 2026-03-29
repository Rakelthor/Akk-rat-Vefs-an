import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export function About() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="um-okkur" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Logo above section */}
        <div className="flex justify-start mb-6">
          <img 
            src="/logos/gloggva-logo.png" 
            alt="Glöggva ehf. - Bókhaldsþjónusta á Íslandi" 
            className="h-32 md:h-40"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-primary mb-8"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
              dangerouslySetInnerHTML={{ __html: t.about.title }}
            />
            <p className="text-muted-foreground mb-6" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
              {t.about.description}
            </p>
          </div>
          {!imageError && (
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[320px]">
                <img 
                  src="/images/rakel-profile.jpg"
                  alt="Rakel Þórhallsdóttir - Founder of Glöggva ehf." 
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={() => setImageError(true)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}