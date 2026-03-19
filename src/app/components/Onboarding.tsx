import { useLanguage } from "../context/LanguageContext";
import { CheckCircle, MessageCircle, FileText, Settings, TrendingUp } from "lucide-react";

export function Onboarding() {
  const { t } = useLanguage();
  const onboarding = t.onboarding;

  const icons = [MessageCircle, FileText, Settings, TrendingUp];

  return (
    <section id="uppsetning" className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium tracking-wider text-accent mb-3">
            {onboarding.tagline}
          </p>
          <h2 className="mb-4">{onboarding.title}</h2>
          <p className="text-base text-body-secondary">
            {onboarding.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/50 to-accent" />

          {/* Steps */}
          <div className="space-y-12">
            {onboarding.steps.map((step, index) => {
              const Icon = icons[index];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block bg-surface rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all hover:scale-[1.02] max-w-md">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-3xl font-bold text-accent/20">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-semibold text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-body-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-accent shadow-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#samband"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            <CheckCircle className="w-5 h-5" />
            {onboarding.cta}
          </a>
        </div>
      </div>
    </section>
  );
}