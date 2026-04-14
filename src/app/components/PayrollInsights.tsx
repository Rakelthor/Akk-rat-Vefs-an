import { useLanguage } from "../context/LanguageContext";
import { TrendingUp, BarChart3, Calendar, AlertTriangle, TrendingDown } from "lucide-react";

export function PayrollInsights() {
  const { t } = useLanguage();

  return (
    <section id="laun" className="py-28 bg-[#f7f8fa]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-primary mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            dangerouslySetInnerHTML={{ __html: t.payrollInsights.title }}
          />
          <div className="max-w-3xl mx-auto">
            <p
              className="text-slate-700 leading-relaxed"
              style={{ fontSize: "1.0625rem", lineHeight: "1.75" }}
            >
              {t.payrollInsights.description}
            </p>
          </div>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="max-w-md mx-auto">
          {/* Phone Frame */}
          <div className="relative mx-auto" style={{ width: "375px", maxWidth: "100%" }}>
            {/* Phone outer shell */}
            <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
              {/* Phone screen */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-white px-6 pt-3 pb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-900">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 bg-slate-900 rounded-sm"></div>
                      <div className="w-4 h-3 bg-slate-900 rounded-sm"></div>
                      <div className="w-6 h-3 bg-slate-900 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* App content */}
                <div className="bg-[#f7f8fa] px-5 pb-8 overflow-y-auto" style={{ height: "640px" }}>
                  <div className="pt-6 pb-2">
                    <h3 className="text-slate-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                      Greining launaþróunar
                    </h3>
                  </div>

                  <div className="space-y-3 mt-6">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="text-accent flex-shrink-0" size={24} strokeWidth={1.5} />
                        <p className="text-slate-900" style={{ fontSize: "1rem", fontWeight: 500 }}>
                          Kjarasamningar
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                      <div className="flex items-start gap-3">
                        <BarChart3 className="text-accent flex-shrink-0 mt-1" size={24} strokeWidth={1.5} />
                        <div>
                          <p className="text-slate-900" style={{ fontSize: "1rem", fontWeight: 500 }}>
                            Launaspá (Jan - Apr 2026)
                          </p>
                          <p className="text-slate-600 mt-1" style={{ fontSize: "0.875rem" }}>
                            4 mánaða áætlun og greining
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-accent flex-shrink-0" size={24} strokeWidth={1.5} />
                        <p className="text-slate-900" style={{ fontSize: "1rem", fontWeight: 500 }}>
                          Hátíðadagar
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                      <div className="flex items-center gap-3">
                        <TrendingDown className="text-accent flex-shrink-0" size={24} strokeWidth={1.5} />
                        <p className="text-slate-900" style={{ fontSize: "1rem", fontWeight: 500 }}>
                          Veikindagreiðslur
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="text-accent flex-shrink-0" size={24} strokeWidth={1.5} />
                        <p className="text-slate-900" style={{ fontSize: "1rem", fontWeight: 500 }}>
                          Launabreytingar (milli ára)
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="text-orange-500 flex-shrink-0 mt-1" size={24} strokeWidth={1.5} />
                        <div>
                          <p className="text-slate-900" style={{ fontSize: "1rem", fontWeight: 500 }}>
                            Yfirvinnuviðvaranir (4)
                          </p>
                          <p className="text-slate-600 mt-1" style={{ fontSize: "0.875rem" }}>
                            Starfsfólk sem fer yfir 172 stundir á mánuði
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
