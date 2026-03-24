import { useLanguage } from "../context/LanguageContext";
import { GloggvaLogo } from "./GloggvaLogo";

export function Introduction() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <GloggvaLogo size={40} theme="dark" />
        </div>
        <p className="text-slate-700 leading-relaxed text-center" style={{ fontSize: "1.125rem", lineHeight: "1.75" }}>
          {t.introduction.text}
        </p>
      </div>
    </section>
  );
}