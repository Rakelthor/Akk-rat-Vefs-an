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
      title: "Bókhald, uppgjör og skattskil",
      description:
        "Við bjóðum upp á alhliða bókhalds- og launaþjónustu fyrir minni fyrirtæki og einstaklinga. Við veitum trausta og persónulega þjónustu með áherslu á skýra yfirsýn sem auðveldar ákvörðunartöku.",
      ctaPrimary: "Bóka kynningarsamtal",
      ctaSecondary: "Sjá þjónustu",
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
      title: "Hvað getum við gert fyrir þig?",
      items: [
        {
          title: "Bókhald",
          desc: "Við færum bókhald og setjum fram upplýsingar um reksturinn mjög á skýran og greinargóðan hátt. Við minnum þig tímanlega á öll skil til yfirvalda og sinnum samskiptum við hið opinbera ef þörf krefur.",
        },
        {
          title: "Rafrænar lausnir",
          desc: "Við aðstoðum við innleiðingu á rafrænum lausnum sem einfalda bókhaldið og bæta yfirsýn.",
        },
        {
          title: "Laun",
          desc: "Við reiknum fyrir launin og sjáum um að útbúa allar skilagreinar til banka, lífeyrissjóða og stéttarfélaga. Við veitum einnig ráðgjöf um ákvæði stéttarfélaga um laun.",
        },
        {
          title: "Ársreikningar",
          desc: "Við aðstoðum þig tímanlega við uppgjörið og ársreikninginn. Við bjóðum einnig upp á milliuppgjör ef þess er óskað.",
        },
        {
          title: "Framtalsgerð",
          desc: "Við aðstoðum við framtalsgerð fyrir fyrirtæki, félagasamtök og einstaklinga.",
        },
        {
          title: "Rafrænir reikningar",
          desc: "Við aðstoðum við útgáfu reikninga og innheimtu þeirra ef þess er óskað.",
        },
        {
          title: "Samskipti við yfirvöld",
          desc: "Við önnumst samskipti við skattayfirvöld þegar þörf krefur.",
        },
        {
          title: "Ráðgjöf",
          desc: "Persónuleg ráðgjöf og stuðningur við ákvarðanatöku fyrir eigendur og stjórnendur.",
        },
        {
          title: "Stofnun fyrirtækja",
          desc: "Við aðstoðum þig við val á félagaformi og fylgjum þér í gegnum ferlið við að stofna fyrirtæki.",
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
      title: "Sveigjanleiki í umfangi þjónustu",
      description:
        "Við bjóðum upp á þrjú þjónustustig sem henta fyrirtækjum á öllum stærðum. Verð ræðst af umfangi rekstrar og er ákveðið í samráði við þig eftir stutt kynningarsamtal.",
      cta: "Fá persónulegt verðmat",
      tiers: [
        {
          name: "Grunnþjónusta",
          price: "",
          period: "",
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
          price: "",
          period: "",
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
          price: "",
          period: "",
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
      title: "Glöggva ehf.",
      description:
        "Glöggva ehf. var stofnað af Rakel Þórhallsdóttir sem hefur M.Acc. gráðu í reikningshaldi og endurskoðun og á að baki áratuga reynslu af rekstri fyrirtækja og fjármálastjórn. Góð yfirsýn skiptir höfuðmáli við rétta ákvarðanatöku. Markmið okkar er að veita þér sem bestar upplýsingar um stöðuna hverju sinni. Við fylgjum þér eftir alla leið.",
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
      email: "info@akkuratfjarmal.is",
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
      copyright: "Glöggva ehf.",
      services: "Þjónusta",
      pricing: "Verð",
      about: "Um okkur",
      contact: "Samband",
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
      title: "Accounting, Financial Statements & Tax Filing",
      description:
        "We offer comprehensive accounting and payroll services for small businesses and individuals. We provide reliable and personalized service with a focus on clear insights that facilitate decision-making.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "See Services",
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
      title: "How can we help you?",
      items: [
        {
          title: "Accounting",
          desc: "We handle accounting and provide detailed and clear information about the financial situation. We remind you of all deadlines and communicate with the authorities if necessary.",
        },
        {
          title: "Digital Solutions",
          desc: "We assist with implementing digital solutions that simplify bookkeeping and improve oversight.",
        },
        {
          title: "Payroll",
          desc: "We calculate wages and prepare all statements for banks, pension funds, and unions. We also provide advice on union wage provisions.",
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
          title: "Electronic Invoicing",
          desc: "We assist with invoice issuance and collection if requested.",
        },
        {
          title: "Tax Authority Communication",
          desc: "We handle communication with tax authorities when necessary.",
        },
        {
          title: "Consulting",
          desc: "Personal advice and support for decision-making for owners and managers.",
        },
        {
          title: "Company Formation",
          desc: "We assist you with choosing the right business structure and guide you through the process of establishing a company.",
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
      title: "Flexible Service Packages",
      description:
        "We offer three service tiers suitable for businesses of all sizes. Pricing is determined based on the scope of your operations after a brief consultation call.",
      cta: "Get a Personalized Quote",
      tiers: [
        {
          name: "Basic Service",
          price: "",
          period: "",
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
          price: "",
          period: "",
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
          price: "",
          period: "",
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
      email: "info@akkuratfjarmal.is",
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