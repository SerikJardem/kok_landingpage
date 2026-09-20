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

export function Crown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 28" fill="currentColor" aria-hidden>
      <path d="M4 22 L8 8 L18 16 L24 4 L30 16 L40 8 L44 22 Z" />
    </svg>
  );
}

export function SparkBurst({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor" aria-hidden>
      <path d="M20 2 L22 16 L36 12 L24 20 L38 28 L22 24 L20 38 L18 24 L4 28 L16 20 L2 12 L18 16 Z" />
    </svg>
  );
}

export function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 88" fill="currentColor" aria-hidden>
      <path d="M34 84c2-28-10-46-28-70 22 6 36 28 34 70z" />
      <path d="M36 80c4-30 22-48 32-68-20 10-30 32-32 68z" opacity="0.82" />
      <path d="M35 84v-52" fill="none" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

/** Cobalt paint splash from the brand book — sit behind photos and headlines. */
export function BrushStroke({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 420 300" fill="currentColor" aria-hidden>
      <path d="M6 176c28-92 118-132 214-124 78 6 142 46 176 96 16 24 12 62-18 78-46 24-118 18-176 40-62 24-128 52-178 18-38-26-40-64-18-108z" />
      <path d="M52 112c44-28 108-22 148 10 6 5-6 14-14 10-38-20-86-24-128-6-8 4-14-8-6-14z" opacity="0.5" />
      <circle cx="348" cy="64" r="12" />
      <circle cx="376" cy="92" r="7" />
      <circle cx="392" cy="78" r="4" />
      <circle cx="36" cy="222" r="9" />
      <path d="M286 236c28 10 58 2 72-16 4-5-4-9-10-6-18 10-38 14-58 8-7-2-10 10-4 14z" />
    </svg>
  );
}

/** Yellow circular seal with a raised fist and rim type. */
export function StickerSeal({
  className = "",
  caption = "ТЕЗ · ТАЗА · FRESH · ТЕЗ · ТАЗА · FRESH ·",
  ringId = "kok-sticker-ring",
}: {
  className?: string;
  caption?: string;
  ringId?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 160 160" aria-hidden>
      <circle cx="80" cy="80" r="78" fill="#F4C430" />
      <circle cx="80" cy="80" r="70" fill="none" stroke="#2A2A2A" strokeWidth="2" />
      <circle
        cx="80"
        cy="80"
        r="62"
        fill="none"
        stroke="#2A2A2A"
        strokeWidth="1.4"
        strokeDasharray="3 4"
      />
      <path id={ringId} d="M80 28 A52 52 0 1 1 79.99 28" fill="none" />
      <text
        fill="#2A2A2A"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="2.4"
        style={{ fontFamily: "var(--font-unbounded), sans-serif" }}
      >
        <textPath href={`#${ringId}`}>{caption}</textPath>
      </text>
      <g fill="#2A2A2A" transform="translate(80 92)">
        <rect x="-11" y="-2" width="22" height="18" rx="7" />
        <rect x="-16" y="-8" width="7" height="16" rx="3.2" />
        <rect x="-8" y="-18" width="7" height="22" rx="3.2" />
        <rect x="0" y="-16" width="7" height="20" rx="3.2" />
        <rect x="8" y="-12" width="7" height="18" rx="3.2" />
        <circle cx="-4" cy="-22" r="7" />
      </g>
    </svg>
  );
}

/**
 * Brand-book wordmark: heavy K Ø K with a diagonal slash through the O.
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
      <rect x="8" y="22" width="46" height="118" rx="3" />
      <polygon points="54,78 122,22 168,22 96,84 168,140 122,140 54,100" />
      <path d="M210 26c42 0 70 27 70 58s-28 58-70 58-70-27-70-58 28-58 70-58zm0 32c-20 0-32 12-32 26s12 26 32 26 32-12 32-26-12-26-32-26z" />
      <rect
        x="168"
        y="72"
        width="84"
        height="16"
        rx="2"
        transform="rotate(-38 210 80)"
      />
      <rect x="292" y="22" width="46" height="118" rx="3" />
      <polygon points="338,78 406,22 412,22 352,84 412,140 406,140 338,100" />
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
