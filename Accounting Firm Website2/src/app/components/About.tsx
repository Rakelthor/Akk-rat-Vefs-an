import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="um-okkur" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
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
      </div>
    </section>
  );
}