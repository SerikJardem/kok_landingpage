"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { fadeUp, fadeUpTransition, viewportOnce } from "@/lib/motion";
import { franchiseCases } from "@/lib/content";

function CaseVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const el = videoRef.current;
    if (!el) return;
    void el
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        /* reveal native controls if autoplay-gesture fails */
        setPlaying(true);
      });
  };

  return (
    <div className="relative aspect-video overflow-hidden bg-ink touch-manipulation">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="metadata"
        controlsList="nodownload"
        onPlay={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
      />
      {!playing ? (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 z-10 flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-leaf"
          aria-label={`Смотреть: ${label}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
            priority={false}
            draggable={false}
          />
          <span className="absolute inset-0 bg-ink/20" aria-hidden />
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-cream shadow-[0_8px_24px_rgba(0,0,0,0.28)] sm:h-16 sm:w-16">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-7 w-7 sm:h-8 sm:w-8"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5.5v13l11-6.5L8 5.5Z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
}

export function FranchiseCases() {
  return (
    <section className="bg-paper px-4 pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf">
            Vision AI · операции
          </p>
          <h2 className="section-title mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            {franchiseCases.title}
          </h2>
          <p className="section-deck mt-3 max-w-2xl text-base sm:text-lg">
            {franchiseCases.deck}
          </p>
        </motion.div>

        <ul className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {franchiseCases.items.map((item, index) => (
            <motion.li
              key={item.label}
              className="flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ ...fadeUpTransition, delay: Math.min(index * 0.06, 0.18) }}
            >
              <CaseVideo src={item.src} poster={item.poster} label={item.label} />
              <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-ink sm:text-base">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-ink/65">{item.blurb}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
