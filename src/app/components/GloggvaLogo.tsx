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

function Wordmark({ color, accent, size }: { color: string; accent: string; size: number }) {
  const fontSize = size * 0.9;
  return (
    <svg height={size} viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="37"
        fill={color}
        fontFamily="'Inter', sans-serif"
        fontSize={fontSize}
        fontWeight="800"
        letterSpacing="-1.8"
      >
        Glöggva
      </text>
      {/* Accent dot over the ö for visual interest */}
      <circle cx="72" cy="10" r="3.5" fill={accent} />
      <circle cx="86" cy="10" r="3.5" fill={accent} />
    </svg>
  );
}

export function GloggvaLogo({ variant = "full", theme = "dark", size = 48, className }: LogoProps) {
  const c = colors[theme];

  return (
    <span className={className}>
      <Wordmark color={c.primary} accent={c.accent} size={size} />
    </span>
  );
}