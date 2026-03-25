import { Check, ArrowRight, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="verd" className="bg-[#f7f8fa] px-[0px] py-[66px]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-lg mb-16">
          <h2
            className="text-primary mb-5"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            dangerouslySetInnerHTML={{ __html: t.pricing.title }}
          />
          <p className="text-muted-foreground" style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}>
            {t.pricing.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pricing.tiers.map((tier, index) => {
            const isFeatured = index === 1;
            return (
              <div
                key={tier.name}
                className={`rounded-xl p-8 transition-all ${
                  isFeatured
                    ? "bg-primary text-white"
                    : "bg-white border border-border"
                }`}
              >
                <p
                  style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.04em" }}
                  className={isFeatured ? "text-accent mb-6" : "text-accent mb-6"}
                >
                  {tier.name.toUpperCase()}
                </p>
                <div className="mb-1">
                  <span style={{ fontSize: "1.625rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                    {tier.price}
                  </span>
                </div>
                <p
                  style={{ fontSize: "0.8125rem" }}
                  className={`mb-8 ${isFeatured ? "text-white/40" : "text-muted-foreground"}`}
                >
                  {tier.period}
                </p>
                <p
                  style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
                  className={`mb-8 ${isFeatured ? "text-white/55" : "text-muted-foreground"}`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${isFeatured ? "text-accent" : "text-accent"}`}
                      />
                      <span
                        style={{ fontSize: "0.875rem" }}
                        className={isFeatured ? "text-white/75" : "text-foreground"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                  {tier.notIncluded && tier.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <X
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${isFeatured ? "text-red-400" : "text-red-500"}`}
                      />
                      <span
                        style={{ fontSize: "0.875rem" }}
                        className={isFeatured ? "text-white/60" : "text-muted-foreground"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    localStorage.setItem('selectedTier', tier.name);
                    scrollTo("#samband");
                  }}
                  className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    isFeatured
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                  style={{ fontSize: "0.875rem", fontWeight: 500 }}
                >
                  {tier.name}
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}