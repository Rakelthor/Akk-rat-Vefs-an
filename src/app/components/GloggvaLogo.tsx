interface LogoProps {
  variant?: "full" | "icon" | "wordmark";
  theme?: "dark" | "light";
  size?: number;
  className?: string;
}

export function GloggvaLogo({ size = 48, theme = "dark", className }: LogoProps) {
  const color = theme === "dark" ? "#1e293b" : "#ffffff";
  
  return (
    <svg 
      width={size * 3.5} 
      height={size} 
      viewBox="0 0 350 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="10"
        y="70"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="70"
        fontWeight="700"
        letterSpacing="-2"
        fill={color}
      >
        GLÖGGVA
      </text>
    </svg>
  );
}
