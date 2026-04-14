import { ArrowRight, BookOpen, Cpu, Wallet, FileText, FileCheck, Receipt, Scale, Lightbulb, Building2, CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

const icons = [BookOpen, Cpu, Wallet, FileText, FileCheck, Receipt, Scale, Lightbulb, Building2];

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Map system names to their logo filenames
  const systemLogos: Record<string, string> = {
    "Arion Banki": "/logos/partners/banks/arionbanki.jpg",
    "Íslandsbanki": "/logos/partners/banks/islandsbanki.png",
    "Landsbanki": "/logos/partners/banks/landsbankinn.png",
    "Payday": "/logos/partners/integrations/payday.png",
    "Xero": "/logos/partners/accounting/xero.jpeg",
    "Shopify": "/logos/partners/integrations/shopify.png",
    "WooCommerce": "/logos/partners/integrations/woocommerce.png",
  };

  return (
    <>
      {/* Hero Introduction Section */}
      <section className="min-h-screen flex items-center bg-[#1e293b] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/IMG_5876.jpeg"
            alt="Glöggva bókhald - Íslenskt fjallasvipmynd með dramatískri náttúru"
            onError={(e) => {
              // Fallback to Unsplash if local image not found
              e.currentTarget.src = "https://images.unsplash.com/photo-1665310127352-a7be56238f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzc0MjYyNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080";
            }}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/85 via-[#1e293b]/75 to-[#1e293b]/60"></div>
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
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />

            <p
              className="text-white mb-12 max-w-md"
              style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#thjonusta")}
                className="px-7 py-3.5 rounded-lg transition-all cursor-pointer bg-accent text-white hover:bg-accent/90"
                style={{ 
                  fontSize: "0.9375rem", 
                  fontWeight: 500
                }}
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Directly Below */}
      <section id="thjonusta" className="py-28 bg-[#f7f8fa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-primary mx-auto mb-8"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
              dangerouslySetInnerHTML={{ __html: t.services.title }}
            />
            
            {/* Introduction Text */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-slate-700 leading-relaxed" style={{ fontSize: "1.0625rem", lineHeight: "1.75" }}>
                {t.introduction.text}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((s, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={`${s.title}-${index}`}
                  className="bg-white border border-black/8 rounded-2xl p-8 text-center hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-5">
                    <div className="flex items-center justify-center">
                      {Icon && <Icon className="text-accent" size={28} strokeWidth={1.5} />}
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

          {/* Comparison Cards */}
          <div className="mt-20">
            <h3
              className="text-primary text-center mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
              dangerouslySetInnerHTML={{ __html: t.comparison.heading }}
            />

            <div className="max-w-3xl mx-auto mb-10 text-center">
              <p className="text-slate-700 leading-relaxed" style={{ fontSize: "1.0625rem", lineHeight: "1.75" }}>
                {t.comparison.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Glöggva Card */}
              <div 
                className="bg-primary rounded-2xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="text-center mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-white" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                    {t.comparison.gloggva}
                  </h3>
                </div>

                <div className="space-y-3">
                  {t.comparison.features.gloggva.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="shrink-0 mt-0.5 text-accent" style={{ width: "20px", height: "20px" }} />
                      <p className="text-white/75" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traditional Accountants Card */}
              <div className="bg-white border border-black/8 rounded-2xl p-8 hover:shadow-md transition-all duration-300">
                <div className="text-center mb-6 pb-4 border-b border-black/8">
                  <h3 className="text-muted-foreground" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                    {t.comparison.traditional}
                  </h3>
                </div>

                <div className="space-y-3">
                  {t.comparison.features.traditional.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="shrink-0 mt-0.5" style={{ width: "20px", height: "20px", color: "#d4183d" }} />
                      <p className="text-muted-foreground" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Onboarding Section - How to Switch Accountants */}
          <div className="mt-20">
            <h3
              className="text-primary text-center mb-12"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
              dangerouslySetInnerHTML={{ __html: t.onboarding.title }}
            />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Steps as Cards */}
              {t.onboarding.steps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-black/8 rounded-2xl p-8 hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  {/* Number Badge - Outlined Circle */}
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ border: "2px solid #0BB8FC" }}
                  >
                    <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0BB8FC" }}>
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h4 
                    className="text-primary mb-3"
                    style={{ fontSize: "1.125rem", fontWeight: 600 }}
                  >
                    {step.title}
                  </h4>
                  <p 
                    className="text-muted-foreground"
                    style={{ fontSize: "0.875rem", lineHeight: 1.75 }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Systems Section */}
          <div className="mt-20">
            <h3
              className="text-primary mb-6 text-center"
              style={{ fontSize: "1.5rem", fontWeight: 600 }}
              dangerouslySetInnerHTML={{ __html: t.systems.title }}
            />

            
            {/* Description Text */}
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <p className="text-slate-700 leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.75" }}>
                {t.systems.description}
              </p>
            </div>
            
            {/* Infinite Scrolling Logo Marquee */}
            <div className="relative overflow-hidden py-8">
              {/* Gradient overlays on the sides */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f7f8fa] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f7f8fa] to-transparent z-10"></div>
              
              <div className="flex">
                {/* First set of logos */}
                <motion.div
                  className="flex gap-8 items-center"
                  animate={{
                    x: [0, -1800],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {t.systems.items.map((system, index) => (
                    <div
                      key={`${system}-${index}`}
                      className="bg-white border border-black/8 rounded-2xl p-6 flex items-center justify-center flex-shrink-0"
                      style={{ width: "180px", height: "120px" }}
                    >
                      <span className="text-muted-foreground" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                        {system}
                      </span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {t.systems.items.map((system, index) => (
                    <div
                      key={`${system}-duplicate-${index}`}
                      className="bg-white border border-black/8 rounded-2xl p-6 flex items-center justify-center flex-shrink-0"
                      style={{ width: "180px", height: "120px" }}
                    >
                      <img
                        src={systemLogos[system] || `/logos/${system.toLowerCase().replace(/\s+/g, '-')}.png`}
                        alt={`${system} logo`}
                        className="max-h-12 max-w-[140px] object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.closest('div');
                          if (parent && !parent.querySelector('.logo-fallback')) {
                            const fallback = document.createElement('span');
                            fallback.className = 'logo-fallback text-muted-foreground';
                            fallback.style.fontSize = '0.875rem';
                            fallback.style.fontWeight = '500';
                            fallback.textContent = system;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}