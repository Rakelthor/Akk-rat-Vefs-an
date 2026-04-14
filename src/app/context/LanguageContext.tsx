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
      payroll: "Laun",
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
          description: "Við aðstoðum þig tímanlega við uppgjörið og ársreikninginn. Við bjóðum einnig upp á mánaðarleg yfirlit ef þess er óskað.",
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
          desc: "Til þess að vinna bókhaldið með skilvirkum hætti nýtum við okkur rafrænar lausnir. Við gerum þér fast og fyrirsjáanlegt tilboð í upphafi og innleiðing rafrænna lausna er innifalin í því verði.",
        },
        {
          title: "Rafrænt Bókhald",
          desc: "Allar tekjur, reikningar og kvittanir fara rafrænt inn í bókhaldið. Rafrænt bókhald auðveldar þér að fylgjast með stöðunni hverju sinni.",
        },
        {
          title: "Launavinnsla",
          desc: "Við reiknum launin í Payday og sjáum um að skila öllum skilagreinum til banka, lífeyrissjóða og stéttarfélaga. Við bjóðum einnig upp á launa skýrslur sem sýna launaþróun og hvaða þættir vega þyngst.",
        },
        {
          title: "Ársreikningar",
          desc: "Við aðstoðum þig tímanlega við uppgjörið og ársreikninginn. Við bjóðum einnig upp á mánaðarleg yfirlit ef þess er óskað.",
        },
        {
          title: "Framtalsgerð",
          desc: "Við sjáum um framtalsgerðina og samskipti við Skattinn. Við tökum einnig að okkur framtalsgerð fyrir einstaklinga og húsfélög.",
        },
        {
          title: "Stofnun fyrirtækja",
          desc: "Við aðstoðum þig við val á félagaformi og fylgjum þér í gegnum ferlið við að stofna fyrirtæki.",
        },
      ],
    },
    // Systems
    systems: {
      title: "Engar krumpaðar <span class='text-accent'>kvittanir</span>",
      description: "Við setjum upp B2B þjónustu við viðskiptabankann þinn og færslurnar rata beint í bókhaldið. Allar kvittanir fara sömuleiðis með banka færslunum. Ef slík uppsetning er ekki möguleg má setja upp tengingu við Xero sem getur haldið utan um allar kvittar og reikninga.",
      items: ["Arion Banki", "Íslandsbanki", "Landsbanki", "Payday", "Xero", "Shopify", "WooCommerce", "Business Central", "DK", "Regla"],
    },
    // Comparison
    comparison: {
      tagline: "AF HVERJU GLÖGGVA",
      title: "Skiptu yfir í Glöggva fyrir betri yfirsýn og áreiðanlegri þjónustu",
      heading: "Af hverju að færa sig <span class='text-accent'>yfir</span> til okkar?",
      description: "Færðu þig yfir til okkar með auðveldum hætti. Við sjáum um að koma bókhaldinu í 100% rafrænt form og bætum yfirsýnina þína strax á fyrsta mánuðinum. Við aðstoðum við val á bókhaldskerfi og yfirfærslu sé þess þörf. Rétta bókhaldskerfið getur bætt yfirsýnina verulega ásamt því að draga úr kostnaði. Í sameiningu stillum við upp skýrslum sem draga fram þau atriði sem skipta sköpum.",
      gloggva: "Glöggva",
      traditional: "Hefðbundið Bókhald",
      features: {
        gloggva: [
          "Rafrænt bókhald með rauntíma yfirsýn",
          "Fast og fyrirsjáanlegt verð",
          "Mánaðarleg rekstraryfirsýn og fundir",
          "Auðvelt aðgengi að þjónustu",
          "Fyrirbyggjandi ráðgjöf",
        ],
        traditional: [
          "Gamaldags aðferðir og Excel töflur",
          "Óskýr verðlagning og aukakostnaður",
          "Aðeins árlegt uppgjör",
          "Hægari viðbragðstími",
          "Bregðast við vandamálum fremur en að fyrirbyggja",
        ],
      },
    },
    // Onboarding
    onboarding: {
      title: "Hvernig færir þú þig <span class='text-accent'>yfir</span> til okkar?",
      cta: "Tala við teymið",
      steps: [
        {
          number: "1",
          title: "Hafðu samband",
          description: "Við gerum þér fast tilboð í bókhaldið eftir umfangi þess. Við bjóðum sanngjarnt og fyrirsjáanlegt verð.",
        },
        {
          number: "2",
          title: "Upphafsfundur",
          description: "Þú færð upphafsfund með þínum tengilið hjá okkur og við stillum saman strengi. Ef við náum saman sjáum við alfarið um að vera í sambandi við fyrri bókara og taka við verkinu.",
        },
        {
          number: "3",
          title: "Yfirfærsla gagna",
          description: "Ef þörf er á að færa bókhaldið í nýtt kerfi þá hefst samstarfið á því. Einnig getur þurft að innleiða vissar rafrænar lausnir til þess að auðvelda framhaldið.",
        },
        {
          number: "4",
          title: "Hefjumst handa",
          description: "Við tökum við bókhaldinu og stillum upp með þér yfirlitsskýrslu sem auðveldar þér alla ákvarðanatöku. Við aðstoðum þig einnig við að nýta þér þær skýrslur sem eru innbyggðar í þitt bókhaldskerfi. Góð yfirsýn er lykilatriði í farsælum rekstri.",
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
    // Payroll Insights
    payrollInsights: {
      title: "<span class='text-accent'>Yfirsýn</span> yfir launakostnað",
      description: "Í flestum fyrirtækjum er launakostnaður mikilvægasti rekstrarliðurinn. Við bjóðum upp á ítarlega mánaðarlega skýrslu sem sýnir þér hvaða þættir eru að hafa áhrif á launaþróunina. Hvers vegna eru launin að hækka einmitt núna? Eru það sem dæmi kjarasamningarnir, veikindi eða hátíðisdagar sem eru að hafa áhrif þennan mánuðinn? Hvert stefnir í þeim næsta? Við aðstoðum þig við að fá tilfinningu fyrir því sem skiptir máli.",
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
        "Miklar framfarir hafa átt sér stað undanfarin ár í skráningu bókhalds. Með því að nýta sér rafræna skráningu er orðið auðveldara að ná yfirsýn yfir reksturinn eins og hann stendur í dag í stað þess að horfa sífellt í baksýnisspegilinn. Bókhaldsfyrirtækið Glöggva var stofnað af Rakel Þórhallsdóttur sem lauk meistaragráðu í reikningshaldi og endurskoðun M.Acc. árið 2010 frá Háskóla Íslands. Hún starfaði hjá Deloitte í fimm ári ásamt því að stofna og reka þrjú fyrirtæki í veitingarekstri og smásölu. Eftir að hafa reynt það á eigin skinni hversu mikilvægt það er að hafa alltaf góða yfirsýn yfir reksturinn er ánægjulegt að geta aðstoðað viðskiptavini Glöggva með að ná sinni yfirsýn.",
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
      payroll: "Payroll",
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
          desc: "In order to work with accounting efficiently, we use digital solutions. We give you a fixed and predictable quote at the start and implementation of digital solutions is included in that price.",
        },
        {
          title: "Electronic Accounting",
          desc: "All income, invoices, and receipts go electronically into the accounting. Electronic accounting makes it easier for you to track the status at any time.",
        },
        {
          title: "Payroll Processing",
          desc: "We calculate wages in Payday and handle all filing statements to banks, pension funds, and unions. We also offer payroll reports that show wage development and which factors weigh most.",
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
      title: "No Crumpled <span class='text-accent'>Receipts</span>",
      description: "We set up B2B services with your business bank and transactions flow directly into your accounting. All receipts accompany bank transactions. If such a setup is not possible, we can set up an integration with Xero, which can manage all receipts and invoices.",
      items: ["Arion Banki", "Íslandsbanki", "Landsbanki", "Payday", "Xero", "Shopify", "WooCommerce", "Business Central", "DK", "Regla"],
    },
    // Comparison
    comparison: {
      tagline: "WHY GLÖGGVA",
      title: "Switch to Glöggva for better oversight and convenient service",
      heading: "Why <span class='text-accent'>switch</span> to us?",
      description: "Switch to us with ease. We handle converting your accounting to 100% electronic format and improve your oversight from the very first month. We assist with selecting the right accounting system and transferring data if needed. The right accounting system can significantly improve your oversight while reducing costs. Together, we set up reports that highlight the crucial factors for your business.",
      gloggva: "Glöggva",
      traditional: "Traditional Accounting Office",
      features: {
        gloggva: [
          "Electronic accounting with real-time oversight",
          "Fixed and predictable pricing",
          "Monthly financial overview and meetings",
          "Fast response and personal service",
          "Proactive advice and forecasting",
        ],
        traditional: [
          "Old-fashioned methods and Excel spreadsheets",
          "Unclear pricing and additional costs",
          "Only annual statements",
          "Long response times",
          "Reacting to problems rather than preventing them",
        ],
      },
    },
    // Onboarding
    onboarding: {
      title: "How to <span class='text-accent'>switch</span> accountants",
      cta: "Talk to the Team",
      steps: [
        {
          number: "1",
          title: "Get in Touch",
          description: "We provide you with a fixed quote for accounting based on its scope. We offer fair and predictable pricing.",
        },
        {
          number: "2",
          title: "Initial Meeting",
          description: "You'll have an initial meeting with your contact person and we'll align on everything. If we reach an agreement, we'll handle all communication with your previous accountant and take over the work.",
        },
        {
          number: "3",
          title: "Data Transfer",
          description: "If there's a need to transfer your accounting to a new system, the partnership begins with that. We may also need to implement certain digital solutions to facilitate the process going forward.",
        },
        {
          number: "4",
          title: "Getting Started",
          description: "We take over your accounting and set up an overview report with you that facilitates all decision-making. We also help you utilize the reports built into your accounting system. Good oversight is key to successful operations.",
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
    // Payroll Insights
    payrollInsights: {
      title: "Payroll Cost <span class='text-accent'>Overview</span>",
      description: "In most companies, payroll is the most important operating expense. We offer detailed monthly reports that show you which factors are affecting wage development. Why are wages increasing right now? Is it collective agreements, sick leave, or holidays affecting this month? What's the trend for the next month? We help you gain insights into what matters.",
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
        "Significant advances have been made in recent years in accounting practices. By utilizing electronic recording, it has become easier to gain oversight of operations as they stand today instead of constantly looking in the rearview mirror. Glöggva accounting firm was founded by Rakel Þórhallsdóttir who completed her master's degree in accounting and auditing M.Acc. in 2010 from the University of Iceland. She worked at Deloitte for five years in addition to founding and operating three companies in catering and retail. After experiencing firsthand how important it is to always have good oversight of operations, it is satisfying to be able to help Glöggva's clients achieve their own clarity.",
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