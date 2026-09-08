export function SvgFilters() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden>
      <defs>
        <filter id="ink-bleed">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="3"
            seed="4"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="7"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 24" fill="none" aria-hidden>
      <path
        d="M0 12c16 0 16-8 32-8s16 16 32 16 16-16 32-16 16 16 32 16 16-16 32-16 16 16 32 16 16-8 32-8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WaveTriple({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 28" fill="none" aria-hidden>
      {[0, 10, 20].map((y) => (
        <path
          key={y}
          d={`M0 ${y + 6}c10 0 10-5 20-5s10 10 20 10 10-10 20-10 10 10 20 10 10-10 20-10 10 5 20 5`}
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function DashField({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" preserveAspectRatio="none" aria-hidden>
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 18 }).map((__, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 7 + (row % 2) * 2}
            y={row * 10}
            width="1.6"
            height="6"
            rx="0.8"
            fill="currentColor"
          />
        )),
      )}
    </svg>
  );
}

export function Zigzag({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 18" fill="none" aria-hidden>
      <path
        d="M0 14 L14 4 L28 14 L42 4 L56 14 L70 4 L84 14 L98 4 L112 14 L126 4 L140 14 L154 4 L168 14 L182 4 L196 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Official KŌK wordmark from brand board:
 * ultra-heavy geometric K / Ö / K with three solid dots centered over Ö.
 */
export function Wordmark({
  className = "",
  title = "KŌK",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 156"
      role="img"
      aria-label={title}
      fill="currentColor"
    >
      <title>{title}</title>

      {/* Three dots above Ö — brand signature */}
      <circle cx="210" cy="15" r="9.5" />
      <circle cx="237" cy="15" r="9.5" />
      <circle cx="264" cy="15" r="9.5" />

      {/* Left K */}
      <rect x="18" y="30" width="42" height="110" rx="2" />
      <polygon points="60,78 116,30 158,30 94,88 158,140 116,140 60,100" />

      {/* Ö — thick rounded O */}
      <path d="M210 36c38 0 64 25 64 52s-26 52-64 52-64-25-64-52 26-52 64-52zm0 30c-17 0-28 11-28 22s11 22 28 22 28-11 28-22-11-22-28-22z" />

      {/* Right K */}
      <rect x="294" y="30" width="42" height="110" rx="2" />
      <polygon points="336,78 392,30 406,30 350,88 406,140 392,140 336,100" />
    </svg>
  );
}

export function Stamp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`stamp text-[10px] sm:text-[11px] ${className}`}>{children}</span>;
}
