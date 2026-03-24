import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export function Footer() {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const footerLinks = [
    { label: t.footer.services, href: "#thjonusta" },
    { label: t.footer.pricing, href: "#verd" },
    { label: t.footer.about, href: "#um-okkur" },
    { label: t.footer.contact, href: "#samband" },
  ];

  return (
    <footer className="bg-[#111827]">
      {/* Expanded Privacy Policy Content */}
      {isExpanded && (
        <div className="border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {language === 'is' ? (
              <>
                <h2 className="mb-6 text-white" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  Persónuverndarstefna
                </h2>
                
                <div className="space-y-8 text-white/70" style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}>
                  <p className="text-white/50 italic text-sm">
                    Síðast uppfært: {new Date().toLocaleDateString('is-IS', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      1. Inngangur
                    </h3>
                    <p>
                      Glöggva ehf. (ID: 310177-5129) ("við", "okkar", "okkur") virðir friðhelgi einkalífs þíns og skuldbindur sig til að vernda persónuupplýsingar þínar. Þessi persónuverndarstefna útskýrir hvernig við söfnum, notum, geymum og verndum persónuupplýsingar þínar í samræmi við lög um persónuvernd og meðferð persónuupplýsinga (nr. 90/2018) og Almenna persónuverndarreglugerð ESB (GDPR).
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      2. Ábyrgðaraðili
                    </h3>
                    <p>
                      <strong className="text-white">Glöggva ehf.</strong><br />
                      Netfang: gloggva@gloggva.is<br />
                      Sími: +354 772 5040<br />
                      Heimilisfang: Reykjavík, Ísland
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      3. Hvaða upplýsingar söfnum við?
                    </h3>
                    <p className="mb-4">Við söfnum eftirfarandi tegundum upplýsinga:</p>
                    
                    <h4 className="text-white/90 mb-2 mt-4" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      3.1 Upplýsingar sem þú veitir okkur
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Samskiptaeyðublað:</strong> Nafn, netfang, skilaboð og aðrar upplýsingar sem þú sendir okkur í gegnum samskiptaeyðublaðið okkar.</li>
                      <li><strong className="text-white">Tölvupóstur og símtöl:</strong> Upplýsingar sem þú veitir þegar þú hefur samband við okkur með tölvupósti eða síma.</li>
                    </ul>

                    <h4 className="text-white/90 mb-2 mt-4" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      3.2 Upplýsingar sem við söfnum sjálfkrafa
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Vafrakökur (cookies):</strong> Við notum Google Ads og Google Analytics til að safna upplýsingum um notkun vefsíðunnar, þar á meðal IP-tölu, vafraupplýsingar, tækjatýpu og hegðun á vefsíðu.</li>
                      <li><strong className="text-white">Conversion tracking:</strong> Við söfnum nafnlausum gögnum um notendaaðgerðir (t.d. form submissions) til að mæla árangur auglýsinga.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      4. Hvernig notum við upplýsingarnar?
                    </h3>
                    <p className="mb-4">Við notum persónuupplýsingar þínar til eftirfarandi:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Að svara fyrirspurnum þínum og veita þér upplýsingar um þjónustu okkar</li>
                      <li>Að sinna bókhaldsþjónustu og öðrum þjónustum sem þú hefur óskað eftir</li>
                      <li>Að bæta vefsíðu okkar og notendaupplifun</li>
                      <li>Að mæla árangur markaðssetningar og auglýsinga</li>
                      <li>Að uppfylla lagalegar skyldur okkar</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      5. Lagalegur grunnur vinnslu
                    </h3>
                    <p className="mb-4">Við vinnum persónuupplýsingar þínar á eftirfarandi lagalegum grunni:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Samningur:</strong> Til að sinna þjónustu sem þú hefur óskað eftir</li>
                      <li><strong className="text-white">Lögmætur áhugi:</strong> Til að bæta vefsíðu okkar og markaðssetja þjónustu okkar</li>
                      <li><strong className="text-white">Samþykki:</strong> Fyrir notkun vafrakaka og tracking (þú getur afturkallað samþykki hvenær sem er)</li>
                      <li><strong className="text-white">Lagaleg skylda:</strong> Til að uppfylla lögbundnar kröfur um bókhald og skattskil</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      6. Deilum við upplýsingum með þriðja aðila?
                    </h3>
                    <p className="mb-4">Við deilum persónuupplýsingum þínum með eftirfarandi þriðja aðilum:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Google LLC:</strong> Google Ads og Google Analytics fyrir vefgreiningu og auglýsingamælingar. Google getur vistað gögn utan Evrópska efnahagssvæðisins (EES).</li>
                      <li><strong className="text-white">Netlify Inc.:</strong> Hosting þjónusta og eyðublaðameðhöndlun (contact form data).</li>
                    </ul>
                    <p className="mt-4">
                      Við seljum ekki, leigum né deilum persónuupplýsingum þínum með öðrum aðilum í markaðssetningarskyni.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      7. Vafrakökur (Cookies)
                    </h3>
                    <p className="mb-4">
                      Vefsíða okkar notar vafrakökur til að bæta upplifun þína og safna nafnlausum tölfræðilegum upplýsingum. Vafrakökur eru litlar textaskrár sem geymdar eru í tækinu þínu.
                    </p>
                    <h4 className="text-white/90 mb-2 mt-4" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      Tegundir vafrakaka sem við notum:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Nauðsynlegar vafrakökur:</strong> Fyrir grunnvirkni vefsíðunnar</li>
                      <li><strong className="text-white">Greiningarvafrakökur:</strong> Google Analytics til að skilja hvernig notendur nota vefsíðuna</li>
                      <li><strong className="text-white">Auglýsingavafrakökur:</strong> Google Ads til að mæla árangur auglýsinga og sýna viðeigandi auglýsingar</li>
                    </ul>
                    <p className="mt-4">
                      Þú getur gert vafrakökur óvirkar í vafranum þínum, en það getur haft áhrif á virkni vefsíðunnar.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      8. Hversu lengi geymum við upplýsingar?
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Fyrirspurnir úr samskiptaeyðublaði:</strong> Allt að 2 ár eða þangað til þú óskar eftir eyðingu</li>
                      <li><strong className="text-white">Bókhaldsupplýsingar:</strong> Í samræmi við lög um bókhald og endurskoðun (7-10 ár)</li>
                      <li><strong className="text-white">Vafrakökur og analytics:</strong> Allt að 26 mónuðir (Google Analytics sjálfgefið)</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      9. Réttindi þín
                    </h3>
                    <p className="mb-4">Í samræmi við GDPR hefur þú eftirfarandi réttindi:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Réttur til aðgangs:</strong> Þú getur óskað eftir afriti af persónuupplýsingum sem við höfum um þig</li>
                      <li><strong className="text-white">Réttur til leiðréttingar:</strong> Þú getur óskað eftir leiðréttingu rangra eða ófullnægjandi upplýsinga</li>
                      <li><strong className="text-white">Réttur til eyðingar:</strong> Þú getur óskað eftir því að við eyðum persónuupplýsingum þínum ("réttur til gleymsku")</li>
                      <li><strong className="text-white">Réttur til takmarkaðrar vinnslu:</strong> Þú getur óskað eftir því að við takmörkum notkun upplýsinganna</li>
                      <li><strong className="text-white">Réttur til andmæla:</strong> Þú getur mótmælt vinnslu sem byggir á lögmætum hagsmunum</li>
                      <li><strong className="text-white">Réttur til flutnings gagna:</strong> Þú getur óskað eftir því að fá upplýsingar í véllesanlegu sniði</li>
                      <li><strong className="text-white">Réttur til að afturkalla samþykki:</strong> Þú getur afturkallað samþykki hvenær sem er</li>
                    </ul>
                    <p className="mt-4">
                      Til að nýta réttindi þín, vinsamlegast hafðu samband við okkur á <a href="mailto:gloggva@gloggva.is" className="text-[#34d399] hover:underline">gloggva@gloggva.is</a>
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      10. Öryggi gagna
                    </h3>
                    <p>
                      Við notum viðeigandi tæknilegar og skipulagslegar öryggisráðstafanir til að vernda persónuupplýsingar þínar gegn óheimilum aðgangi, breytingum, birtingu eða eyðingu. Þetta felur í sér SSL/TLS dulkóðun á vefsíðu okkar og örugg geymslukerfi.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      11. Börn
                    </h3>
                    <p>
                      Vefsíða okkar er ekki ætluð börnum yngri en 16 ára. Við söfnum ekki viljandi persónuupplýsingum frá börnum. Ef þú ert foreldri eða forráðamaður og telur að barn þitt hafi veitt okkur persónuupplýsingar, vinsamlegast hafðu samband við okkur.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      12. Breytingar á persónuverndarstefnu
                    </h3>
                    <p>
                      Við áskildum okkur rétt til að uppfæra þessa persónuverndarstefnu. Breytingar taka gildi um leið og hin uppfærða stefna er birt á vefsíðu okkar. Við mælum með því að þú skoðir þessa síðu reglulega.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      13. Kvartanir
                    </h3>
                    <p>
                      Ef þú telur að við höfum ekki farið að persónuverndarlögum hefur þú rétt á að leggja fram kvörtun til Persónuverndar:
                    </p>
                    <p className="mt-4">
                      <strong className="text-white">Persónuvernd</strong><br />
                      Rauðarárstíg 10<br />
                      105 Reykjavík<br />
                      Netfang: postur@personuvernd.is<br />
                      Vefur: <a href="https://www.personuvernd.is" target="_blank" rel="noopener noreferrer" className="text-[#34d399] hover:underline">www.personuvernd.is</a>
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      14. Hafðu samband við okkur
                    </h3>
                    <p>
                      Ef þú hefur spurningar um þessa persónuverndarstefnu eða hvernig við vinnum persónuupplýsingar þínar, vinsamlegast hafðu samband við okkur:
                    </p>
                    <p className="mt-4">
                      <strong className="text-white">Glöggva ehf.</strong><br />
                      Netfang: <a href="mailto:gloggva@gloggva.is" className="text-[#34d399] hover:underline">gloggva@gloggva.is</a><br />
                      Sími: <a href="tel:+3547725040" className="text-[#34d399] hover:underline">+354 772 5040</a>
                    </p>
                  </section>
                </div>
              </>
            ) : (
              <>
                <h2 className="mb-6 text-white" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  Privacy Policy
                </h2>
                
                <div className="space-y-8 text-white/70" style={{ fontSize: "0.9375rem", lineHeight: 1.75 }}>
                  <p className="text-white/50 italic text-sm">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      1. Introduction
                    </h3>
                    <p>
                      Glöggva ehf. (ID: 310177-5129) ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect your personal information in accordance with Icelandic Data Protection Act (No. 90/2018) and the EU General Data Protection Regulation (GDPR).
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      2. Data Controller
                    </h3>
                    <p>
                      <strong className="text-white">Glöggva ehf.</strong><br />
                      Email: gloggva@gloggva.is<br />
                      Phone: +354 772 5040<br />
                      Address: Reykjavík, Iceland
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      3. What Information Do We Collect?
                    </h3>
                    <p className="mb-4">We collect the following types of information:</p>
                    
                    <h4 className="text-white/90 mb-2 mt-4" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      3.1 Information You Provide to Us
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Contact Form:</strong> Name, email address, message, and any other information you submit through our contact form.</li>
                      <li><strong className="text-white">Email and Phone:</strong> Information you provide when you contact us via email or phone.</li>
                    </ul>

                    <h4 className="text-white/90 mb-2 mt-4" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      3.2 Information We Collect Automatically
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Cookies:</strong> We use Google Ads and Google Analytics to collect information about website usage, including IP address, browser information, device type, and website behavior.</li>
                      <li><strong className="text-white">Conversion Tracking:</strong> We collect anonymous data about user actions (e.g., form submissions) to measure advertising effectiveness.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      4. How Do We Use Your Information?
                    </h3>
                    <p className="mb-4">We use your personal information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To respond to your inquiries and provide information about our services</li>
                      <li>To provide accounting services and other services you have requested</li>
                      <li>To improve our website and user experience</li>
                      <li>To measure marketing and advertising effectiveness</li>
                      <li>To fulfill our legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      5. Legal Basis for Processing
                    </h3>
                    <p className="mb-4">We process your personal data based on the following legal grounds:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Contract:</strong> To provide services you have requested</li>
                      <li><strong className="text-white">Legitimate Interest:</strong> To improve our website and market our services</li>
                      <li><strong className="text-white">Consent:</strong> For cookies and tracking (you can withdraw consent at any time)</li>
                      <li><strong className="text-white">Legal Obligation:</strong> To comply with accounting and tax requirements</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      6. Do We Share Information with Third Parties?
                    </h3>
                    <p className="mb-4">We share your personal information with the following third parties:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Google LLC:</strong> Google Ads and Google Analytics for web analytics and advertising measurement. Google may store data outside the European Economic Area (EEA).</li>
                      <li><strong className="text-white">Netlify Inc.:</strong> Hosting service and contact form processing.</li>
                    </ul>
                    <p className="mt-4">
                      We do not sell, rent, or share your personal information with other parties for marketing purposes.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      7. Cookies
                    </h3>
                    <p className="mb-4">
                      Our website uses cookies to enhance your experience and collect anonymous statistical information. Cookies are small text files stored on your device.
                    </p>
                    <h4 className="text-white/90 mb-2 mt-4" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      Types of Cookies We Use:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Essential Cookies:</strong> For basic website functionality</li>
                      <li><strong className="text-white">Analytics Cookies:</strong> Google Analytics to understand how users interact with our website</li>
                      <li><strong className="text-white">Advertising Cookies:</strong> Google Ads to measure advertising effectiveness and show relevant ads</li>
                    </ul>
                    <p className="mt-4">
                      You can disable cookies in your browser, but this may affect website functionality.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      8. How Long Do We Store Information?
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Contact form inquiries:</strong> Up to 2 years or until you request deletion</li>
                      <li><strong className="text-white">Accounting information:</strong> In accordance with accounting laws (7-10 years)</li>
                      <li><strong className="text-white">Cookies and analytics:</strong> Up to 26 months (Google Analytics default)</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      9. Your Rights
                    </h3>
                    <p className="mb-4">Under GDPR, you have the following rights:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Right of Access:</strong> You can request a copy of the personal data we hold about you</li>
                      <li><strong className="text-white">Right to Rectification:</strong> You can request correction of inaccurate or incomplete information</li>
                      <li><strong className="text-white">Right to Erasure:</strong> You can request deletion of your personal data ("right to be forgotten")</li>
                      <li><strong className="text-white">Right to Restriction:</strong> You can request limitation of how we use your data</li>
                      <li><strong className="text-white">Right to Object:</strong> You can object to processing based on legitimate interests</li>
                      <li><strong className="text-white">Right to Data Portability:</strong> You can request your data in a machine-readable format</li>
                      <li><strong className="text-white">Right to Withdraw Consent:</strong> You can withdraw consent at any time</li>
                    </ul>
                    <p className="mt-4">
                      To exercise your rights, please contact us at <a href="mailto:gloggva@gloggva.is" className="text-[#34d399] hover:underline">gloggva@gloggva.is</a>
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      10. Data Security
                    </h3>
                    <p>
                      We use appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. This includes SSL/TLS encryption on our website and secure storage systems.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      11. Children
                    </h3>
                    <p>
                      Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      12. Changes to This Privacy Policy
                    </h3>
                    <p>
                      We reserve the right to update this privacy policy. Changes take effect as soon as the updated policy is published on our website. We recommend you review this page regularly.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      13. Complaints
                    </h3>
                    <p>
                      If you believe we have not complied with privacy laws, you have the right to file a complaint with the Icelandic Data Protection Authority:
                    </p>
                    <p className="mt-4">
                      <strong className="text-white">Persónuvernd (Data Protection Authority)</strong><br />
                      Rauðarárstíg 10<br />
                      105 Reykjavík, Iceland<br />
                      Email: postur@personuvernd.is<br />
                      Website: <a href="https://www.personuvernd.is" target="_blank" rel="noopener noreferrer" className="text-[#34d399] hover:underline">www.personuvernd.is</a>
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      14. Contact Us
                    </h3>
                    <p>
                      If you have questions about this privacy policy or how we process your personal data, please contact us:
                    </p>
                    <p className="mt-4">
                      <strong className="text-white">Glöggva ehf.</strong><br />
                      Email: <a href="mailto:gloggva@gloggva.is" className="text-[#34d399] hover:underline">gloggva@gloggva.is</a><br />
                      Phone: <a href="tel:+3547725040" className="text-[#34d399] hover:underline">+354 772 5040</a>
                    </p>
                  </section>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer Links */}
      <div className="py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-white/40" style={{ fontSize: "0.8125rem" }}>
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </span>
          </div>
          <div className="flex gap-6 items-center">
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
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white/30 hover:text-white/60 transition-colors cursor-pointer"
              style={{ fontSize: "0.75rem" }}
            >
              {t.footer.privacy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}