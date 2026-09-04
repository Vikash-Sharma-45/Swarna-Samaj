"use client";

import { useEffect, useRef } from "react";

interface MottoSectionProps {
  lang: "en" | "hi";
}

export default function MottoSection({ lang }: MottoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".motto-animate").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 200);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="motto"
      ref={sectionRef}
      aria-label="Sanskrit motto and organizational creed"
      className="relative py-24 lg:py-32 bg-navy-dark overflow-hidden"
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />
      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />

      {/* Mandala watermark */}
      <div className="absolute inset-0 mandala-watermark opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Large watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-cinzel font-black text-white/3" style={{ fontSize: "clamp(4rem, 15vw, 14rem)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
          सवर्ण समाज
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Ornamental top */}
        <div
          className="motto-animate flex items-center justify-center gap-4 mb-10"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          aria-hidden="true"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold/50" />
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M14 0L17.5 9H27L19.5 14.5L22 24L14 19L6 24L8.5 14.5L1 9H10.5Z" fill="#D4AF37" opacity="0.9" />
          </svg>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Label */}
        <p
          className="motto-animate font-inter text-gold/70 text-xs tracking-[0.35em] uppercase mb-6 font-medium"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          {lang === "en" ? "Our Founding Creed · संस्थापक सिद्धांत" : "संस्थापक सिद्धांत · Our Founding Creed"}
        </p>

        {/* Sanskrit Verse */}
        <h2
          className="motto-animate font-cinzel font-black text-gold leading-tight mb-4"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            textShadow: "0 0 60px rgba(212,175,55,0.3)",
          }}
          lang="sa"
          aria-label="Sanskrit verse: Sanghe Shaktih Kalau Yuge"
        >
          संग्हे शक्तिः कलौ युगे
        </h2>

        {/* Transliteration */}
        <p
          className="motto-animate font-inter text-white/40 text-sm italic tracking-wider mb-6"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          Sanghe Shaktih Kalau Yuge
        </p>

        {/* English Translation */}
        <div
          className="motto-animate"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <div className="gold-divider w-32 mx-auto mb-6 rounded-full" aria-hidden="true" />
          <p className="font-cinzel text-white/90 font-medium" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>
            {lang === "en"
              ? '"In unity lies strength in this age of Kali."'
              : '"कलयुग में एकता में ही शक्ति निहित है।"'}
          </p>
        </div>

        {/* Bottom ornament */}
        <div
          className="motto-animate flex items-center justify-center gap-4 mt-10"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          aria-hidden="true"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold/30" />
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gold/40" />
            ))}
          </div>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold/30" />
        </div>
      </div>
    </section>
  );
}
