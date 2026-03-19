const items = [
  {
    title: "Bókhald og skil",
    desc: "Við sjáum um bókhaldið, launaútreikninga og skil á virðisauka- og staðgreiðslu skatt.",
  },
  {
    title: "Þjónustuvefur",
    desc: "Með aðgangi að þjónustuvef Akkúrat getur þú fylgst með stöðunni hverju sinni.",
  },
  {
    title: "Sérsniðin þjónusta",
    desc: "Ráðgjöf við val á hugbúnaði til þess einfalda reksturinn.",
  },
  {
    title: "Sveigjanlegar lausnir",
    desc: "Við fylgjum þér eftir og aðlögum þjónustuna eftir þörfum hverju sinni.",
  },
];

export function Trust() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p
          className="text-accent mb-4"
          style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em" }}
        >
          AF HVERJU AKKÚRAT
        </p>
        <h2
          className="text-primary mb-16 max-w-md"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
        >
          Betri yfirsýn yfir fjármálin
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item) => (
            <div key={item.title}>
              <h3
                className="text-primary mb-3"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p className="text-muted-foreground" style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}