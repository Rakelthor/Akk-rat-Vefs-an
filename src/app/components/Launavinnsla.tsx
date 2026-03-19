import { Check, Calculator, ShieldCheck, Clock, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const highlightIcons = [Calculator, ShieldCheck, Clock, Users];

export function Launavinnsla() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="launavinnsla" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p
            className="text-accent mb-4"
            style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            {t.payroll.tagline}
          </p>
          <h2
            className="text-primary mb-5"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {t.payroll.title}
          </h2>
          <p
            className="text-muted-foreground"
            style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}
          >
            {t.payroll.description}
          </p>
        </div>

        {/* Two-column layout: features + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Feature checklist */}
          <div className="bg-[#f7f8fa] border border-black/5 rounded-2xl p-10">
            <h3
              className="text-primary mb-8"
              style={{ fontSize: "1.125rem", fontWeight: 600 }}
            >
              {t.payroll.sectionTitle}
            </h3>
            <ul className="space-y-5">
              {t.payroll.features.map((f) => (
                <li key={f} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-accent" size={12} strokeWidth={2.5} />
                  </div>
                  <span
                    className="text-foreground"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("#samband")}
              className="mt-10 bg-accent text-white px-7 py-3 rounded-lg hover:bg-accent/90 transition-colors cursor-pointer"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              {t.payroll.cta}
            </button>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.payroll.highlights.map((h, index) => {
              const Icon = highlightIcons[index];
              return (
                <div
                  key={h.title}
                  className="border border-black/5 rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={20} strokeWidth={1.5} />
                  </div>
                  <h4
                    className="text-primary mb-2"
                    style={{ fontSize: "0.9375rem", fontWeight: 600 }}
                  >
                    {h.title}
                  </h4>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: "0.8125rem", lineHeight: 1.7 }}
                  >
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}