import logoImage from "figma:asset/d8154f7b8e60a22baf07f94433446a45e941d56f.png";

interface LogoProps {
  variant?: "full" | "icon" | "wordmark";
  theme?: "dark" | "light";
  size?: number;
  className?: string;
}

export function GloggvaLogo({ size = 48, className }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="Glöggva" 
      className={className}
      style={{ height: size, width: 'auto' }}
    />
  );
}