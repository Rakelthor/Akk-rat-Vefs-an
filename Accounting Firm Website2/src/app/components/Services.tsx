import { BookOpen, FileText, Wallet, BarChart3, Lightbulb, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = [BookOpen, FileText, Wallet, BarChart3, Lightbulb, Globe];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="thjonusta" className="py-28 bg-[#f7f8fa]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-accent mb-4"
            style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            {t.services.tagline}
          </p>
          <h2
            className="text-primary mx-auto"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, index) => {
            const Icon = icons[index];
            return (
              <div
                key={s.title}
                className="bg-white border border-black/8 rounded-2xl p-8 text-center hover:shadow-md hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="text-accent" size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <h3
                  className="text-primary mb-3"
                  style={{ fontSize: "1.125rem", fontWeight: 600 }}
                >
                  {s.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}