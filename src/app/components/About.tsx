import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export function About() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="um-okkur" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-accent mb-4"
              style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              {t.about.tagline}
            </p>
            <h2
              className="text-primary mb-8"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              {t.about.title}
            </h2>
            <p className="text-muted-foreground mb-6" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
              {t.about.description}
            </p>
          </div>
          {!imageError && (
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[200px]">
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