import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center bg-[#1e293b] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1611560396898-760eb340f639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MzkyNjk4OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Icelandic landscape" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/95 via-[#1e293b]/85 to-[#1e293b]/70"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 w-full relative z-10">
        <div className="max-w-2xl">
          <p
            className="text-[#34d399] mb-6"
            style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            {t.hero.tagline}
          </p>

          <h1
            className="text-white mb-8"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            {t.hero.title}
          </h1>

          <p
            className="text-white/50 mb-12 max-w-md"
            style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
          >
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#samband")}
              className="bg-accent text-white px-7 py-3.5 rounded-lg hover:bg-accent/90 transition-colors inline-flex items-center gap-2.5 cursor-pointer"
              style={{ fontSize: "0.9375rem", fontWeight: 500 }}
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={17} />
            </button>
            <button
              onClick={() => scrollTo("#thjonusta")}
              className="border border-white/15 text-white/70 px-7 py-3.5 rounded-lg hover:border-white/30 hover:text-white/90 transition-all cursor-pointer"
              style={{ fontSize: "0.9375rem", fontWeight: 500 }}
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}