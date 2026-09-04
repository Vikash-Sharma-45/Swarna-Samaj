"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  lang: "en" | "hi";
}

const content = {
  en: {
    headline: "Strength in Unity,",
    headline2: "Progress through Service",
    subtitle:
      "Honoring heritage, empowering youth, and building an inclusive community for generations to come.",
    cta1: "Become a Member",
    cta2: "Explore Initiatives",
    scroll: "Scroll to discover",
  },
  hi: {
    headline: "संगठन में शक्ति,",
    headline2: "सेवा से प्रगति",
    subtitle:
      "विरासत का सम्मान करते हुए, युवाओं को सशक्त बनाते हुए, और आने वाली पीढ़ियों के लिए एक समावेशी समुदाय का निर्माण करते हुए।",
    cta1: "सदस्य बनें",
    cta2: "पहलों की खोज करें",
    scroll: "स्क्रॉल करें",
  },
};

export default function HeroSection({ lang }: HeroSectionProps) {
  const c = content[lang];
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef.current, subtitleRef.current, ctaRef.current];
    const delays = [0, 300, 600];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delays[i]);
    });
  }, [lang]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero - Swarn Samaj"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Mandala watermark */}
      <div
        className="absolute inset-0 mandala-watermark opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Heritage tile pattern */}
      <div
        className="absolute inset-0 heritage-watermark opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-inter font-medium tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Established 1947 · Est. सन् १९४७
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="font-cinzel font-black text-white leading-tight mb-2"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          <span className="block">{c.headline}</span>
          <span className="block text-gradient-gold mt-1">{c.headline2}</span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-6" aria-hidden="true">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M10 0 L12 7 L19 7 L13.5 11 L16 18 L10 14 L4 18 L6.5 11 L1 7 L8 7 Z"
              fill="#D4AF37"
              opacity="0.8"
            />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-inter text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {c.subtitle}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href="#contact"
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Become a member of Swarn Samaj"
          >
            {c.cta1}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            href="#about"
            variant="outline"
            size="lg"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Explore Swarn Samaj initiatives"
          >
            {c.cta2}
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
          {[
            { num: "5000+", label: lang === "en" ? "Members" : "सदस्य" },
            { num: "1200+", label: lang === "en" ? "EWS Aided" : "EWS सहायता" },
            { num: "75+", label: lang === "en" ? "Years of Service" : "सेवा वर्ष" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-cinzel font-bold text-gold text-2xl sm:text-3xl">{stat.num}</p>
              <p className="font-inter text-white/50 text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors duration-300 group"
        aria-label="Scroll down to learn more"
      >
        <span className="font-inter text-xs tracking-widest uppercase">{c.scroll}</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream dark:from-[#0d1422] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
