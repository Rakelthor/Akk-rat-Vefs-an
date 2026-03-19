import { AkkuratLogo } from "./AkkuratLogo";

function Label({ children }: { children: string }) {
  return (
    <p
      className="text-muted-foreground mb-4 uppercase"
      style={{ fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.1em" }}
    >
      {children}
    </p>
  );
}

export function LogoShowcase() {
  return (
    <section className="py-28 bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p
          className="text-accent mb-4"
          style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em" }}
        >
          VÖRUMERKI
        </p>
        <h2
          className="text-primary mb-6"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Logo & Merki
        </h2>
        <p
          className="text-muted-foreground mb-20 max-w-sm"
          style={{ fontSize: "1rem", lineHeight: 1.75 }}
        >
          Hreint og nútímalegt merki sem endurspeglar innsýn, nákvæmni og
          fjármálagreind.
        </p>

        <div className="space-y-10">
          {/* Full lockup — light & dark */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Ljós útgáfa</Label>
              <div className="rounded-xl bg-[#f5f6f8] p-14 flex items-center justify-center">
                <AkkuratLogo variant="full" theme="dark" size={52} />
              </div>
            </div>
            <div>
              <Label>Dökk útgáfa</Label>
              <div className="rounded-xl bg-[#1e293b] p-14 flex items-center justify-center">
                <AkkuratLogo variant="full" theme="light" size={52} />
              </div>
            </div>
          </div>

          {/* Icon + Wordmark */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label>Táknmerki</Label>
              <div className="rounded-xl bg-[#f5f6f8] p-10 flex items-center justify-center aspect-square">
                <AkkuratLogo variant="icon" theme="dark" size={88} />
              </div>
            </div>
            <div>
              <Label>Táknmerki — dökkt</Label>
              <div className="rounded-xl bg-[#1e293b] p-10 flex items-center justify-center aspect-square">
                <AkkuratLogo variant="icon" theme="light" size={88} />
              </div>
            </div>
            <div>
              <Label>Orðmerki</Label>
              <div className="rounded-xl bg-[#f5f6f8] p-10 flex items-center justify-center aspect-square">
                <AkkuratLogo variant="wordmark" theme="dark" size={44} />
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <Label>Stærðir</Label>
            <div className="rounded-xl bg-[#f5f6f8] p-14 flex items-center gap-14 flex-wrap justify-center">
              <AkkuratLogo variant="full" theme="dark" size={20} />
              <AkkuratLogo variant="full" theme="dark" size={32} />
              <AkkuratLogo variant="full" theme="dark" size={48} />
              <AkkuratLogo variant="full" theme="dark" size={64} />
            </div>
          </div>

          {/* Color palette */}
          <div>
            <Label>Litapaletta</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Dark Slate", hex: "#1e293b" },
                { name: "Slate", hex: "#475569" },
                { name: "Soft Grey", hex: "#94a3b8" },
                { name: "Accent Green", hex: "#34d399" },
              ].map((c) => (
                <div key={c.hex} className="rounded-xl overflow-hidden">
                  <div className="h-16" style={{ backgroundColor: c.hex }} />
                  <div className="bg-[#f5f6f8] px-4 py-3">
                    <p
                      className="text-primary"
                      style={{ fontSize: "0.8125rem", fontWeight: 600 }}
                    >
                      {c.name}
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {c.hex.toUpperCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
