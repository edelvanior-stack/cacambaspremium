export default function Logo({
  variant = "color",
  light = false,
  showText = true,
  size = "md",
  className = "",
}: {
  variant?: "color" | "mono";
  light?: boolean;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const iconSize = size === "lg" ? 44 : size === "sm" ? 34 : 38;
  const textSize = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  const isColor = variant === "color";

  const YELLOW = "#FFC400";
  const DARK = "#0A0A0A";
  const GRAY = "#2D2D2D";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Caçambas Premium"
      >
        {isColor ? (
          <>
            <path d="M11 18 L37 18 L33 39 L15 39 Z" fill={YELLOW} />
            <rect x="9" y="13" width="30" height="5" rx="2.5" fill={DARK} />
            <rect x="15.5" y="24" width="17" height="2" rx="1" fill={DARK} />
            <rect x="15.5" y="30" width="17" height="2" rx="1" fill={DARK} />
            <rect x="13" y="39" width="8" height="3.5" rx="1.2" fill={GRAY} />
            <rect x="27" y="39" width="8" height="3.5" rx="1.2" fill={GRAY} />
          </>
        ) : (
          <g fill="currentColor">
            <path d="M11 18 L37 18 L33 39 L15 39 Z" />
            <rect x="9" y="13" width="30" height="5" rx="2.5" />
            <rect x="15.5" y="24" width="17" height="2" rx="1" />
            <rect x="15.5" y="30" width="17" height="2" rx="1" />
            <rect x="13" y="39" width="8" height="3.5" rx="1.2" />
            <rect x="27" y="39" width="8" height="3.5" rx="1.2" />
          </g>
        )}
      </svg>
      {showText && (
        <span
          className={`font-display font-extrabold ${textSize} tracking-tight leading-none ${light ? "text-white" : "text-slate-900"}`}
        >
          Caçambas<span className={isColor ? " text-amber-500" : ""}> Premium</span>
        </span>
      )}
    </div>
  );
}