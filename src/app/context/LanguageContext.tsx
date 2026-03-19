import { createContext, useContext, useState, ReactNode } from "react";

type Language = "is" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.is;
}

const translations = {
  is: {
    // Navbar
    nav: {
      accounting: "Bókhald",
      payroll: "Launavinnsla",
      pricing: "Verð",
      about: "Um okkur",
      contact: "Samband",
      bookCall: "Bóka samtal",
    },
    // Hero
    hero: {
      tagline: "NÁÐU YFIRSÝN YFIR FJÁRMÁLIN",
      title: "Bókhald, uppgjör og skattskil",
      description:
        "Við bjóðum upp á alhliða bókhalds- og launaþjónustu fyrir minni fyrirtæki og einstaklinga. Við veitum trausta og persónulega þjónustu með áherslu á skýra yfirsýn sem auðveldar ákvörðunartöku.",
      ctaPrimary: "Bóka kynningarsamtal",
      ctaSecondary: "Sjá þjónustu",
    },
    // Services
    services: {
      tagline: "ÞJÓNUSTA",
      title: "Hvað getum við gert fyrir þig?",
      items: [
        {
          title: "Bókhald",
          desc: "Við veitum almenna bókhaldsþjónustu og sjáum um skil á staðgreiðslu og virðisaukaskatti.",
        },
        {
          title: "Rafrænar lausnir",
          desc: "Við aðstoðum við innleiðingu á rafrænum lausnum sem einfalda bókhaldið og bæta yfirsýn.",
        },
        {
          title: "Laun",
          desc: "Við bjóðum upp á launaútreikninga og launabókhald fyrir minni fyrirtæki. Við veitum einnig ráðgjöf um ákvæði stéttarfélaga um laun.",
        },
        {
          title: "Ársreikningar",
          desc: "Við tökum saman ársreikninga og sjáum um skattframtöl fyrir fyrirtæki og einstaklinga.",
        },
        {
          title: "Ráðgjöf",
          desc: "Persónuleg ráðgjöf og stuðningur við ákvarðanatöku fyrir eigendur og stjórnendur.",
        },
        {
          title: "Þjónustuvefur",
          desc: "Á þjónustuvefnum er alltaf hægt að nálgast allar helstu fjárhagsupplýsingar sem hafa verið bókaðar.",
        },
      ],
    },
    // Payroll (Launavinnsla)
    payroll: {
      tagline: "LAUNAVINNSLA",
      title: "Launaþjónusta sem þú getur treyst",
      description:
        "Launaútreikningur gefur oft verið flókinn og mikilvægt er fyrir fyrirtæki að hafa öll laun rétt.",
      sectionTitle: "Hvað felst í þjónustunni",
      cta: "Fá tilboð í launavinnslu",
      features: [
        "Launaútreikningar og launaseðlar",
        "Staðgreiðsla og tryggingagjald",
        "Skil á launatengdum gjöldum",
        "Orlofs- og veikindadagaútreikningar",
        "Ráðgjöf um stéttarfélagaákvæði",
        "Rafræn sending launaseðla",
        "Sendum allar viðeigandi skilagreinar",
        "Útbúum launamiða",
      ],
      highlights: [
        {
          title: "Nákvæmir útreikningar",
          desc: "Við tryggjum rétta útreikninga á launum, sköttum og gjöldum í samræmi við gildandi lög.",
        },
        {
          title: "Réttindi tryggð",
          desc: "Við fylgjumst með breytingum á kjarasamningum og tryggjum að starfsfólk fái rétt laun.",
        },
        {
          title: "Tímanleg skil",
          desc: "Við fylgjum því eftir að öll opinber skil fari í gegn tímanlega.",
        },
        {
          title: "Fyrir öll fyrirtæki",
          desc: "Hvort sem þú ert með einn starfsmann eða fimmtíu, þá aðlögum við þjónustuna.",
        },
      ],
    },
    // Pricing
    pricing: {
      tagline: "VERÐ",
      title: "Verð og þjónustuleiðir",
      description:
        "Endanlegt verð ræðst af umfangi rekstrar og er ákveðið eftir stutt kynningarsamtal.",
      cta: "Bóka samtal",
      tiers: [
        {
          name: "Grunnþjónusta",
          price: "frá 60.000 kr",
          period: "/ mánuði",
          desc: "Fyrir einstaklinga og minnstu fyrirtækin.",
          features: [
            "Bókhald og skráning",
            "VSK-skil",
            "Ársreikningur",
            "Tölvupóststuðningur",
          ],
        },
        {
          name: "Hefðbundin þjónusta",
          price: "frá 100.000 kr",
          period: "/ mánuði",
          desc: "Alhliða þjónusta fyrir fyrirtæki í vexti.",
          features: [
            "Allt í Grunnþjónustu",
            "Launavinnsla og staðgreiðsla",
            "Mánaðarlegt yfirlit",
            "Persónulegur tengiliður",
          ],
        },
        {
          name: "Rekstrarsýn",
          price: "frá 180.000 kr",
          period: "/ mánuði",
          desc: "Full yfirsýn og ráðgjöf fyrir eigendur.",
          features: [
            "Allt í Hefðbundinni þjónustu",
            "Rekstrargreining",
            "Fjármálaráðgjöf",
            "Forgangsþjónusta",
          ],
        },
      ],
    },
    // About
    about: {
      tagline: "UM OKKUR",
      title: "Akkúrat Fjármál ehf.",
      description:
        "Við búum að áratuga reynslu af rekstri fyrirtækja í ólíkum greinum. Góð yfirsýn skiptir höfuðmáli við rétta ákvarðanatöku. Markmið okkar er að veita þér sem bestar upplýsingar um stöðuna hverju sinni.",
    },
    // Contact
    contact: {
      tagline: "SAMBAND",
      title: "Hafðu samband",
      description: "Sendu okkur skilaboð eða bókaðu ókeypis kynningarsamtal.",
      emailLabel: "Netfang",
      email: "akkúrat@akkúrat.is",
      phoneLabel: "Sími",
      phone: "772 5040",
      locationLabel: "Staðsetning",
      location: "Reykjavík, Ísland",
      formName: "Nafn",
      formNamePlaceholder: "Fullt nafn",
      formEmail: "Netfang",
      formEmailPlaceholder: "netfang@fyrirtaeki.is",
      formMessage: "Skilaboð",
      formMessagePlaceholder: "Hvernig getum við aðstoðað?",
      formSubmit: "Óska eftir samtali",
      thankYouTitle: "Takk fyrir!",
      thankYouMessage: "Við munum hafa samband eins fljótt og auðið er.",
    },
    // Footer
    footer: {
      copyright: "Akkúrat Fjármál ehf.",
      services: "Þjónusta",
      pricing: "Verð",
      about: "Um okkur",
      contact: "Samband",
    },
  },
  en: {
    // Navbar
    nav: {
      accounting: "Accounting",
      payroll: "Payroll",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      bookCall: "Book a Call",
    },
    // Hero
    hero: {
      tagline: "GAIN CLARITY ON YOUR FINANCES",
      title: "Accounting, Financial Statements & Tax Filing",
      description:
        "We offer comprehensive accounting and payroll services for small businesses and individuals. We provide reliable and personalized service with a focus on clear insights that facilitate decision-making.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "See Services",
    },
    // Services
    services: {
      tagline: "SERVICES",
      title: "How can we help you?",
      items: [
        {
          title: "Accounting",
          desc: "We provide general accounting services and handle withholding tax and VAT filings.",
        },
        {
          title: "Digital Solutions",
          desc: "We assist with implementing digital solutions that simplify bookkeeping and improve oversight.",
        },
        {
          title: "Payroll",
          desc: "We offer payroll calculations and payroll accounting for small businesses. We also provide advice on union wage provisions.",
        },
        {
          title: "Annual Reports",
          desc: "We prepare annual financial statements and handle tax returns for businesses and individuals.",
        },
        {
          title: "Consulting",
          desc: "Personal advice and support for decision-making for owners and managers.",
        },
        {
          title: "Client Portal",
          desc: "On our client portal, you can always access all key financial information that has been recorded.",
        },
      ],
    },
    // Payroll (Launavinnsla)
    payroll: {
      tagline: "PAYROLL",
      title: "Payroll Services You Can Trust",
      description:
        "Payroll calculation is often complex, and it's critical for businesses to get all wages right.",
      sectionTitle: "What's Included",
      cta: "Request a Payroll Quote",
      features: [
        "Payroll calculations and pay slips",
        "Withholding tax and insurance contributions",
        "Filing of payroll-related fees",
        "Vacation and sick day calculations",
        "Advice on union provisions",
        "Electronic delivery of pay slips",
        "We submit all relevant filing statements",
        "We prepare wage slips",
      ],
      highlights: [
        {
          title: "Accurate Calculations",
          desc: "We ensure correct calculations of wages, taxes, and fees in accordance with current laws.",
        },
        {
          title: "Rights Secured",
          desc: "We monitor changes in collective agreements and ensure employees receive correct wages.",
        },
        {
          title: "Timely Filing",
          desc: "We ensure all official filings are submitted on time.",
        },
        {
          title: "For All Businesses",
          desc: "Whether you have one employee or fifty, we adapt our service to your needs.",
        },
      ],
    },
    // Pricing
    pricing: {
      tagline: "PRICING",
      title: "Pricing & Service Tiers",
      description:
        "Final pricing depends on the scope of operations and is determined after a brief consultation call.",
      cta: "Book a Call",
      tiers: [
        {
          name: "Basic Service",
          price: "from ISK 60,000",
          period: "/ month",
          desc: "For individuals and the smallest businesses.",
          features: [
            "Accounting and recording",
            "VAT filing",
            "Annual financial statement",
            "Email support",
          ],
        },
        {
          name: "Standard Service",
          price: "from ISK 100,000",
          period: "/ month",
          desc: "Comprehensive service for growing businesses.",
          features: [
            "Everything in Basic",
            "Payroll and withholding tax",
            "Monthly overview",
            "Personal contact person",
          ],
        },
        {
          name: "Business Insights",
          price: "from ISK 180,000",
          period: "/ month",
          desc: "Full oversight and advisory for business owners.",
          features: [
            "Everything in Standard",
            "Business analysis",
            "Financial consulting",
            "Priority service",
          ],
        },
      ],
    },
    // About
    about: {
      tagline: "ABOUT US",
      title: "Akkúrat Fjármál ehf.",
      description:
        "We have decades of experience running companies in various industries. Good oversight is crucial for sound decision-making. Our goal is to provide you with the best possible information about your current situation.",
    },
    // Contact
    contact: {
      tagline: "CONTACT",
      title: "Get in Touch",
      description: "Send us a message or book a free consultation call.",
      emailLabel: "Email",
      email: "akkúrat@akkúrat.is",
      phoneLabel: "Phone",
      phone: "+354 772 5040",
      locationLabel: "Location",
      location: "Reykjavík, Iceland",
      formName: "Name",
      formNamePlaceholder: "Full name",
      formEmail: "Email",
      formEmailPlaceholder: "email@company.com",
      formMessage: "Message",
      formMessagePlaceholder: "How can we help you?",
      formSubmit: "Request a Call",
      thankYouTitle: "Thank you!",
      thankYouMessage: "We'll get back to you as soon as possible.",
    },
    // Footer
    footer: {
      copyright: "Akkúrat Fjármál ehf.",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("is");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
