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
      services: "Þjónusta",
      pricing: "Verð",
      about: "Um okkur",
      contact: "Samband",
      bookCall: "Bóka samtal",
    },
    // Hero
    hero: {
      tagline: "NÁÐU YFIRSÝN YFIR FJÁRMÁLIN",
      title: "Bókhald, uppgjör og <span class='text-accent'>skattskil</span>",
      titleEn: "Accounting, Financial Statements & <span class='text-accent'>Tax Filing</span>",
      description:
        "Við bjóðum upp á alhliða bókhalds- og launaþjónustu fyrir minni fyrirtæki og einstaklinga. Við veitum trausta og persónulega þjónustu með áherslu á skýra yfirsýn sem auðveldar ákvörðunartöku.",
      ctaPrimary: "Bóka kynningarsamtal",
      ctaSecondary: "Sjá þjónustu",
    },
    // Introduction
    introduction: {
      text: "Glöggva var stofnað í þeim tilgangi að auðvelda stjórnendum fyrirtækja yfirsýn yfir reksturinn og auðvelda þannig ákvarðanatöku. Í hröðu rekstrarumhverfi getur skipt sköpum að taka tímanlegar ákvarðanir. Með því að styðjast við rafrænt bókhald og fá mánaðarlegt yfirlit yfir reksturinn getur þú alltaf fylgst með stöðunni. Þannig kemur ekkert á óvart þegar ársreikningurinn er kláraður.",
    },
    // Services Intro
    servicesIntro: {
      items: [
        {
          title: "Bókhald",
          description: "Við færum bókhald og setjum fram upplýsingar um reksturinn mjög á skýran og greinargóðan hátt. Við minnum þig tímanlega á öll skil til yfirvalda og sinnum samskiptum við hið opinbera ef þörf krefur.",
        },
        {
          title: "Laun",
          description: "Við reiknum fyrir launin og sjáum um að útbúa allar skilagreinar til banka, lífeyrissjóða og stéttarfélaga. Við veitum einnig ráðgjöf um ákvæði stéttarfélaga um laun.",
        },
        {
          title: "Ársreikningar",
          description: "Við aðstoðum þig tímanlega við uppgjörið og ársreikninginn. Við bjóðum einnig upp á milliuppgjör ef þess er óskað.",
        },
      ],
    },
    // Services
    services: {
      tagline: "ÞJÓNUSTA",
      title: "Betri <span class='text-accent'>yfirsýn</span> bætir reksturinn",
      titleEn: "Better <span class='text-accent'>Oversight</span> Improves Operations",
      items: [
        {
          title: "Innleiðing",
          desc: "Við aðstoðum þig við að innleiða allar þær lausnir sem auðvelda bókhaldið og þína yfirsýn. Innleiðingin er innifalin og verðið er fast og fyrirsjáanlegt.",
        },
        {
          title: "Rafrænt Bókhald",
          desc: "Allar tekjur, reikningar og kvittanir fara rafrænt inn í bókhaldið. Rafrænt bókhald auðveldar þér að fylgjast með stöðunni hverju sinni.",
        },
        {
          title: "Launavinnsla",
          desc: "Við reiknum launin í Payday og sjáum um að skila öllum skilagreinum til banka, lífeyrissjóða og stéttarfélaga.",
        },
        {
          title: "Ársreikningar",
          desc: "Við aðstoðum þig tímanlega við uppgjörið og ársreikninginn. Við bjóðum einnig upp á milliuppgjör ef þess er óskað.",
        },
        {
          title: "Framtalsgerð",
          desc: "Við aðstoðum við framtalsgerðina og sjáum um samskipti við RSK ef það eru fyrirspurnir frá þeim.",
        },
        {
          title: "Stofnun fyrirtækja",
          desc: "Við aðstoðum þig við val á félagaformi og fylgjum þér í gegnum ferlið við að stofna fyrirtæki.",
        },
      ],
    },
    // Systems
    systems: {
      title: "Rafrænt bókhald í samvinnu við:",
      description: "Við setjum upp B2B þjónustu við viðskiptabankann þinn og færslurnar rata beint í bókhaldið. Allar kvittanir fara sömuleiðis með banka færslunum. Ef slík uppsetning er ekki möguleg má setja upp tengingu við Xero sem getur haldið utan um allar kvittar og reikninga.",
      items: ["Arion Banki", "Íslandsbanki", "Landsbanki", "DK Bókhald", "Payday", "Regla"],
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
      title: "<span class='text-accent'>Föst</span> verðlagning",
      titleEn: "<span class='text-accent'>Flexible</span> Service Packages",
      description:
        "Við bjóðum upp á þrjá bókhalds pakka eftir stærð og umfang þjónustunnar. Við metum umfangið í upphafi og ráðleggjum þér hvaða pakki hentar þínu fyrirtæki. Grunnur hentar minnstu fyrirtækjunum og einstaklingum sem þurfa ekki launavinnslu og aðstoð við skattskil. Sproti er hefðbundin bókhaldsþjónusta með skattskilum og mánaðarlegum fundum og rekstraryfirliti. Vöxtur ætlað stærri fyrirtækjum sem þurfa meiri þjónustu og greiðari aðgang að okkur.",
      tiers: [
        {
          name: "Grunnur",
          price: "99.000 kr.",
          period: "á mánuði +vsk",
          desc: "Fyrir einstaklinga og minnstu fyrirtækin.",
          cta: "Fáðu tilboð í grunnþjónustu",
          features: [
            "Reglulegt bókhald",
            "Afstemming bankareikninga",
            "Uppgjör",
            "Tölvupóst stuðningur",
          ],
          notIncluded: [
            "Launavinnsla",
            "Skil á ársreikningi",
            "Innheimta reikninga",
          ],
        },
        {
          name: "Sproti",
          price: "199.000 kr.",
          period: "á mánuði +vsk",
          desc: "Alhliða bókhaldsþjónusta fyrir stækkandi fyrirtæki.",
          cta: "Fáðu tilboð í almenna þjónustu",
          features: [
            "Allt í grunni",
            "Afstemming bókhalds",
            "Launavinnsla",
            "VSK uppgjör og skil",
            "Skil á ársreikningi",
            "Mánaðarlegt rekstraryfirlit",
            "Mánaðarlegir fundir",
          ],
        },
        {
          name: "Vöxtur",
          price: "299.000 kr.",
          period: "á mánuði +vsk",
          desc: "Full yfirsýn og ráðgjöf fyrir stærri fyrirtæki.",
          cta: "Fáðu tilboð í rekstrarsýn",
          features: [
            "Allt í sprota",
            "Launavinnsla fyrir 50+",
            "Forgangsþjónusta",
            "Fjármálaráðgjöf",
            "Samskipti við RSK",
            "Milli uppgjör",
            "Aðstoð við talningar",
          ],
        },
      ],
    },
    // About
    about: {
      tagline: "UM OKKUR",
      title: "Um <span class='text-accent'>okkur</span>",
      description:
        "Glöggva ehf. er í eigu Rakel Þórhallsdóttur sem er með M.Acc. próf í bókhaldi og endurskoðun með áratuga reynslu í rekstri fyrirtækja og fjármálastjórnun. Góð yfirsýn er afar mikilvæg fyrir trausta ákvarðanatöku. Okkar markmið er að veita þér sem bestar upplýsingar um núverandi stöðu. Við fylgjum þér alla leið.",
    },
    // Onboarding
    onboarding: {
      tagline: "HVERNIG BYRJUM VIÐ",
      title: "Einföld uppsetning í fjórum skrefum",
      description: "Við gerum ferlið eins einfalt og mögulegt er svo þú getir einbeitt þér að rekstrinum.",
      steps: [
        {
          number: "01",
          title: "Fyrsta samtal",
          description: "Við ræðum þarfir þínar og mat á umfangi í ókeypis kynningarsamtali.",
        },
        {
          number: "02",
          title: "Tilboð og samningur",
          description: "Þú færð skýrt tilboð sem miðast við þínar þarfir. Við gerum samning þegar þú ert tilbúin/n.",
        },
        {
          number: "03",
          title: "Uppsetning",
          description: "Við setjum upp kerfi, sækjum nauðsynleg gögn og komum bókhaldinu í lag.",
        },
        {
          number: "04",
          title: "Áframhaldandi þjónusta",
          description: "Við höldum góðu sambandi, færum bókhaldið mánaðarlega og erum alltaf til taks.",
        },
      ],
      cta: "Byrja núna",
    },
    // Contact
    contact: {
      tagline: "SAMBAND",
      title: "Hafðu samband",
      description: "Sendu okkur skilaboð eða bókaðu ókeypis kynningarsamtal.",
      emailLabel: "Netfang",
      email: "gloggva@gloggva.is",
      phoneLabel: "Sími",
      phone: "+354 772 5040",
      locationLabel: "Staðsetning",
      location: "Reykjavík, Ísland",
      formName: "Nafn",
      formNamePlaceholder: "Fullt nafn",
      formEmail: "Netfang",
      formEmailPlaceholder: "netfang@fyrirtaeki.is",
      formMessage: "Skilaboð",
      formMessagePlaceholder: "Hvernig getum við aðstoðað?",
      formSubmit: "Óska eftir símtali",
      thankYouTitle: "Takk fyrir!",
      thankYouMessage: "Við munum hafa samband eins fljótt og auðið er.",
    },
    // Footer
    footer: {
      copyright: "Glöggva ehf.",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      privacy: "Privacy Policy",
    },
    // Cookie Consent
    cookies: {
      title: "Við notum vafrakökur",
      description:
        "Við notum vafrakökur til að bæta upplifun þína á vefsíðunni og til að greina umferð. Vafrakökurnar hjálpa okkur einnig að bæta þjónustu okkar og auglýsingar.",
      accept: "Samþykkja allt",
      decline: "Hafna",
      learnMore: "Nánar um vafrakökur",
    },
  },
  en: {
    // Navbar
    nav: {
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      bookCall: "Book a Call",
    },
    // Hero
    hero: {
      tagline: "GAIN CLARITY ON YOUR FINANCES",
      title: "Accounting, Financial Statements & <span class='text-accent'>Tax Filing</span>",
      description:
        "We offer comprehensive accounting and payroll services for small businesses and individuals. We provide reliable and personalized service with a focus on clear insights that facilitate decision-making.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "See Services",
    },
    // Introduction
    introduction: {
      text: "Glöggva was founded to help business owners gain oversight of their operations and facilitate decision-making. In a fast-paced business environment, timely decisions can be crucial. Electronic accounting and monthly reviews give you the ability to always monitor your status. This way, there should be no surprises when the annual report is complete.",
    },
    // Services Intro
    servicesIntro: {
      items: [
        {
          title: "Accounting",
          description: "We handle accounting and provide detailed and clear information about the financial situation. We remind you of all deadlines and communicate with the authorities if necessary.",
        },
        {
          title: "Payroll",
          description: "We calculate wages and prepare all statements for banks, pension funds, and unions. We also provide advice on union wage provisions.",
        },
        {
          title: "Annual Reports",
          description: "We assist you with financial statements and tax returns on a timely basis. We also offer interim statements if requested.",
        },
      ],
    },
    // Services
    services: {
      tagline: "SERVICES",
      title: "Better <span class='text-accent'>Oversight</span> Improves Operations",
      items: [
        {
          title: "Digital Journey",
          desc: "We help you implement all the solutions that simplify accounting and improve your oversight. Implementation is included and pricing is fixed and predictable.",
        },
        {
          title: "Electronic Accounting",
          desc: "All income, invoices, and receipts go electronically into the accounting. Electronic accounting makes it easier for you to track the status at any time.",
        },
        {
          title: "Payroll Processing",
          desc: "We calculate wages in Payday or DK and handle all filing statements to banks, pension funds, and unions.",
        },
        {
          title: "Annual Reports",
          desc: "We assist you with financial statements and tax returns on a timely basis. We also offer interim statements if requested.",
        },
        {
          title: "Tax Returns",
          desc: "We assist with tax return preparation for businesses, organizations, and individuals.",
        },
        {
          title: "Company Formation",
          desc: "We assist you with choosing the right business structure and guide you through the process of establishing a company.",
        },
      ],
    },
    // Systems
    systems: {
      title: "Electronic accounting in collaboration with:",
      description: "We set up B2B services with your business bank and transactions flow directly into your accounting. All receipts accompany bank transactions. If such a setup is not possible, we can set up an integration with Xero, which can manage all receipts and invoices.",
      items: ["Arion Banki", "Íslandsbanki", "Landsbanki", "DK Bókhald", "Payday", "Regla"],
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
      title: "Flexible Service Packages",
      description:
        "We offer three service tiers suitable for businesses of all sizes. Pricing is determined based on the scope of your operations after a brief consultation call.",
      cta: "Get a Personalized Quote",
      tiers: [
        {
          name: "Foundation",
          price: "99,000 ISK",
          period: "per month +VAT",
          desc: "For individuals and the smallest businesses.",
          cta: "Get a quote for basic service",
          features: [
            "Regular bookkeeping",
            "Bank reconciliation",
            "Financial statements",
            "Email support",
          ],
          notIncluded: [
            "Payroll",
            "Annual reports",
            "Invoice collection",
          ],
        },
        {
          name: "Sprout",
          price: "199,000 ISK",
          period: "per month +VAT",
          desc: "Comprehensive service for growing businesses.",
          cta: "Get a quote for standard service",
          features: [
            "Everything in Foundation",
            "Bookkeeping reconciliation",
            "Payroll",
            "VAT settlement and filing",
            "Annual report filing",
            "Monthly financial overview",
            "Monthly meetings",
          ],
        },
        {
          name: "Growth",
          price: "299,000 ISK",
          period: "per month +VAT",
          desc: "Full oversight and advisory for larger businesses.",
          cta: "Get a quote for business insights",
          features: [
            "Everything in Sprout",
            "Payroll for 50+ employees",
            "Priority service",
            "Financial consulting",
            "Tax authority communication",
            "Interim reports",
            "Inventory count assistance",
          ],
        },
      ],
    },
    // About
    about: {
      tagline: "ABOUT US",
      title: "Glöggva ehf.",
      description:
        "Glöggva ehf. was founded by Rakel Þórhallsdóttir who holds an M.Acc. degree in accounting and auditing with decades of experience in business operations and financial management. Good oversight is crucial for sound decision-making. Our goal is to provide you with the best possible information about your current situation. We support you every step of the way.",
    },
    // Onboarding
    onboarding: {
      tagline: "HOW WE START",
      title: "Simple setup in four steps",
      description: "We make the process as simple as possible so you can focus on your business.",
      steps: [
        {
          number: "01",
          title: "First Meeting",
          description: "We discuss your needs and assess the scope in a free consultation meeting.",
        },
        {
          number: "02",
          title: "Quote and Agreement",
          description: "You receive a clear quote that fits your needs. We make an agreement when you are ready.",
        },
        {
          number: "03",
          title: "Setup",
          description: "We set up the system, gather necessary data, and get your accounting in order.",
        },
        {
          number: "04",
          title: "Ongoing Service",
          description: "We maintain good communication, handle your accounting monthly, and are always available.",
        },
      ],
      cta: "Start Now",
    },
    // Contact
    contact: {
      tagline: "CONTACT",
      title: "Get in Touch",
      description: "Send us a message or book a free consultation call.",
      emailLabel: "Email",
      email: "gloggva@gloggva.is",
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
      copyright: "Glöggva ehf.",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      privacy: "Privacy Policy",
    },
    // Cookie Consent
    cookies: {
      title: "We use cookies",
      description:
        "We use cookies to enhance your experience on our website and to analyze traffic. Cookies also help us improve our services and advertising.",
      accept: "Accept all",
      decline: "Decline",
      learnMore: "Learn more",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from localStorage if available
    const stored = localStorage.getItem('language');
    return (stored === 'en' || stored === 'is') ? stored : 'is';
  });

  const handleSetLanguage = (lang: Language) => {
    console.log("LanguageProvider: Setting language to", lang);
    localStorage.setItem('language', lang);
    setLanguage(lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  console.log("LanguageProvider render - current language:", language);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  // Provide fallback default value for component preview mode
  if (!context) {
    return {
      language: "is" as Language,
      setLanguage: () => {},
      t: translations.is,
    };
  }
  return context;
}
