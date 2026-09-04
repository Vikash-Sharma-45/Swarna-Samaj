"use client";

import { useEffect, useRef } from "react";
import { Landmark, BookOpen, Heart } from "lucide-react";

interface PillarsSectionProps {
  lang: "en" | "hi";
}

const pillars = {
  en: [
    {
      icon: Landmark,
      title: "Cultural Heritage",
      subtitle: "Preserving values & history",
      description:
        "We celebrate and preserve the rich tapestry of Indian traditions, festivals, arts, and languages — passing our ancestral wisdom to future generations with pride and dignity.",
      color: "from-gold/10 to-gold/5",
      iconBg: "bg-gold/10",
    },
    {
      icon: BookOpen,
      title: "Youth & Education",
      subtitle: "Mentorship, career & exam guidance",
      description:
        "Empowering young minds through scholarships, competitive exam coaching (UPSC, IIT, NEET), career mentorship programs, and skill development workshops.",
      color: "from-navy/5 to-navy/10",
      iconBg: "bg-navy/10",
    },
    {
      icon: Heart,
      title: "Social Welfare",
      subtitle: "EWS support & community uplifting",
      description:
        "Providing financial aid, legal assistance, healthcare guidance, and EWS certification support to uplift economically weaker sections within our community.",
      color: "from-gold/5 to-navy/5",
      iconBg: "bg-gold/10",
    },
  ],
  hi: [
    {
      icon: Landmark,
      title: "सांस्कृतिक विरासत",
      subtitle: "मूल्यों और इतिहास का संरक्षण",
      description:
        "हम भारतीय परंपराओं, त्योहारों, कलाओं और भाषाओं की समृद्ध विरासत को सम्मान के साथ संरक्षित करते हैं और अगली पीढ़ी को हस्तांतरित करते हैं।",
      color: "from-gold/10 to-gold/5",
      iconBg: "bg-gold/10",
    },
    {
      icon: BookOpen,
      title: "युवा और शिक्षा",
      subtitle: "मेंटरशिप, करियर और परीक्षा मार्गदर्शन",
      description:
        "छात्रवृत्ति, प्रतियोगी परीक्षा कोचिंग (UPSC, IIT, NEET), करियर मेंटरशिप और कौशल विकास के माध्यम से युवाओं को सशक्त बनाना।",
      color: "from-navy/5 to-navy/10",
      iconBg: "bg-navy/10",
    },
    {
      icon: Heart,
      title: "सामाजिक कल्याण",
      subtitle: "EWS सहायता और सामुदायिक उत्थान",
      description:
        "आर्थिक रूप से कमज़ोर वर्गों को वित्तीय सहायता, कानूनी मार्गदर्शन, स्वास्थ्य सेवा और EWS प्रमाणपत्र सहायता प्रदान करना।",
      color: "from-gold/5 to-navy/5",
      iconBg: "bg-gold/10",
    },
  ],
};

export default function PillarsSection({ lang }: PillarsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const data = pillars[lang];

  return (
    <section
      id="about"
      aria-label="Core pillars and philosophy"
      className="py-20 lg:py-28 bg-cream dark:bg-[#0d1422] relative overflow-hidden"
    >
      {/* Watermark */}
      <div className="absolute inset-0 heritage-watermark opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
            {lang === "en" ? "Our Foundation" : "हमारी नींव"}
          </p>
          <h2 className="font-cinzel font-bold text-navy dark:text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            {lang === "en" ? "Core Pillars & Philosophy" : "मूल स्तंभ और दर्शन"}
          </h2>
          <div className="gold-divider w-24 mx-auto rounded-full" />
          <p className="font-inter text-charcoal/60 dark:text-white/60 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            {lang === "en"
              ? "Three pillars that define our mission and guide everything we do for the community."
              : "तीन स्तंभ जो हमारे मिशन को परिभाषित करते हैं और हम समुदाय के लिए जो कुछ भी करते हैं उसे दिशा देते हैं।"}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="animate-on-scroll group relative bg-white dark:bg-navy/50 rounded-2xl p-8 border border-charcoal/8 dark:border-gold/10 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-default"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Card gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} aria-hidden="true" />

                {/* Gold accent top line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${pillar.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-gold w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel font-bold text-navy dark:text-white text-xl mb-1 group-hover:text-navy dark:group-hover:text-gold transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-inter text-gold text-xs font-semibold tracking-wide uppercase mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-10 h-px bg-gold/40 mb-4" aria-hidden="true" />

                  {/* Description */}
                  <p className="font-inter text-charcoal/65 dark:text-white/60 text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Card number watermark */}
                  <span className="absolute bottom-4 right-6 font-cinzel text-7xl font-black text-charcoal/4 dark:text-white/4 select-none pointer-events-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
