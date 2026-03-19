interface LogoProps {
  variant?: "full" | "icon" | "wordmark";
  theme?: "dark" | "light";
  size?: number;
  className?: string;
}

const colors = {
  dark: { primary: "#1e293b", accent: "#34d399" },
  light: { primary: "#ffffff", accent: "#34d399" },
};

function IconMark({ color, accent, size }: { color: string; accent: string; size: number }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Geometric A built from precise lines */}
      {/* Left leg */}
      <path
        d="M10 40L22 8H26L38 40"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Crossbar */}
      <line
        x1="15.5"
        y1="28"
        x2="32.5"
        y2="28"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Precision accent — small teal measurement tick at the apex */}
      <line
        x1="24"
        y1="4"
        x2="24"
        y2="9"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Small teal dot — data point accent */}
      <circle cx="24" cy="28" r="2" fill={accent} />
    </svg>
  );
}

function Wordmark({ color, accent, size }: { color: string; accent: string; size: number }) {
  const fontSize = size * 0.82;
  return (
    <svg height={size} viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="37"
        fill={color}
        fontFamily="'Inter', sans-serif"
        fontSize={fontSize}
        fontWeight="700"
        letterSpacing="-1.5"
      >
        Akkúrat
      </text>
      {/* Accent line under the ú — precision underline */}
      <line
        x1="97"
        y1="43"
        x2="120"
        y2="43"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AkkuratLogo({ variant = "full", theme = "dark", size = 48, className }: LogoProps) {
  const c = colors[theme];

  if (variant === "icon") {
    return (
      <span className={className}>
        <IconMark color={c.primary} accent={c.accent} size={size} />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span className={className}>
        <Wordmark color={c.primary} accent={c.accent} size={size} />
      </span>
    );
  }

  // Full logo: icon + wordmark
  return (
    <span className={`inline-flex items-center ${className ?? ""}`} style={{ gap: size * 0.2 }}>
      <IconMark color={c.primary} accent={c.accent} size={size} />
      <Wordmark color={c.primary} accent={c.accent} size={size} />
    </span>
  );
}
