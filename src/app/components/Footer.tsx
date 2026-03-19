import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.footer.services, href: "#thjonusta" },
    { label: t.footer.pricing, href: "#verd" },
    { label: t.footer.about, href: "#um-okkur" },
    { label: t.footer.contact, href: "#samband" },
  ];

  return (
    <footer className="bg-[#111827] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="text-white/40" style={{ fontSize: "0.8125rem" }}>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </span>
          <a
            href="https://akkuratfjarmal.is"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/60 transition-colors"
            style={{ fontSize: "0.75rem" }}
          >
            akkuratfjarmal.is
          </a>
        </div>
        <div className="flex gap-6">
          {footerLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/30 hover:text-white/60 transition-colors cursor-pointer"
              style={{ fontSize: "0.75rem" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}