import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: "#thjonusta" },
    { label: t.nav.pricing, href: "#verd" },
    { label: t.nav.about, href: "#um-okkur" },
    { label: t.nav.contact, href: "#samband" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage(language === "is" ? "en" : "is");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e5e7eb]/95 backdrop-blur-lg border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Glöggva bókhald - Fara á forsíðu"
        >
          <img 
            src="/logos/gloggva.png" 
            alt="Glöggva ehf. - Bókhaldsþjónusta á Íslandi" 
            className="h-12"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              style={{ fontSize: "0.8125rem", fontWeight: 500 }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleLanguage}
            className="text-muted-foreground hover:text-accent transition-colors cursor-pointer flex items-center gap-1.5"
            style={{ fontSize: "0.8125rem", fontWeight: 500 }}
            title={language === "is" ? "Switch to English" : "Skipta yfir í íslensku"}
          >
            <Globe size={14} />
            {language === "is" ? "EN" : "IS"}
          </button>
          <button
            onClick={() => scrollTo("#samband")}
            className="bg-accent text-white px-5 py-2 rounded-lg hover:bg-accent/90 transition-colors cursor-pointer"
            style={{ fontSize: "0.8125rem", fontWeight: 500 }}
          >
            {t.nav.bookCall}
          </button>
        </div>

        <button className="md:hidden text-primary cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#e5e7eb] border-b border-black/5 px-6 pb-5 space-y-3">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer py-1"
              style={{ fontSize: "0.875rem" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleLanguage}
            className="block w-full text-left text-muted-foreground hover:text-accent transition-colors cursor-pointer py-1 flex items-center gap-2"
            style={{ fontSize: "0.875rem" }}
          >
            <Globe size={16} />
            {language === "is" ? "English" : "Íslenska"}
          </button>
          <button
            onClick={() => scrollTo("#samband")}
            className="w-full bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            {t.nav.bookCall}
          </button>
        </div>
      )}
    </nav>
  );
}