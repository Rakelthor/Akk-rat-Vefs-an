const clients = [
  "Ráðgjafar og þjónustufyrirtæki",
  "Verslun og netverslun",
  "Veitingastaðir",
  "Heilsu- og sérfræðiþjónusta",
  "Lítil og meðalstór fyrirtæki",
];

export function WhoWeHelp() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-lg mb-16">
          <p
            className="text-accent mb-4"
            style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            VIÐSKIPTAVINIR
          </p>
          <h2
            className="text-primary mb-5"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Okkar sérhæfing
          </h2>
          <p className="text-muted-foreground" style={{ fontSize: "1rem", lineHeight: 1.75 }}>
            Við sérhæfum okkur í þjónustu við lítil og meðalstór fyrirtæki í
            ólíkum atvinnugreinum á Íslandi.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {clients.map((c) => (
            <span
              key={c}
              className="border border-border rounded-full px-6 py-3 text-primary"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}