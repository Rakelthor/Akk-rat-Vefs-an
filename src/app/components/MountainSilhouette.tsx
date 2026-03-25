export function MountainSilhouette({ className = "h-40 w-auto" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 160" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0 160 L80 80 L120 110 L200 20 L280 100 L320 70 L400 160 Z" 
        fill="#1e293b"
        opacity="0.85"
      />
    </svg>
  );
}
