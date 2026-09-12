"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

interface AdvocacySectionProps {
  lang: "en" | "hi";
}

const stats = {
  en: [
    { icon: Users, value: 50, suffix: "+", label: "Meetings Conducted", color: "text-gold" },
    { icon: Briefcase, value: 15, suffix: "+", label: "Active Campaigns", color: "text-gold" },
    { icon: GraduationCap, value: 12000, suffix: "+", label: "Voices United", color: "text-gold" },
  ],
  hi: [
    { icon: Users, value: 50, suffix: "+", label: "बैठकें आयोजित", color: "text-gold" },
    { icon: Briefcase, value: 15, suffix: "+", label: "सक्रिय अभियान", color: "text-gold" },
    { icon: GraduationCap, value: 12000, suffix: "+", label: "एकजुट आवाजें", color: "text-gold" },
  ],
};

const programs = {
  en: [
    "Fighting Unfair UGC Regulations",
    "Campaigns Against Oppressive Reservation Policies",
    "Community Advocacy & Rights Awareness",
    "Strategic Planning Meetings",
    "Legal Challenges & Petitions",
    "Youth Mobilization Initiatives",
  ],
  hi: [
    "अनुचित यूजीसी नियमों के खिलाफ संघर्ष",
    "दमनकारी आरक्षण नीतियों के खिलाफ अभियान",
    "सामुदायिक वकालत और अधिकार जागरूकता",
    "रणनीतिक योजना बैठकें",
    "कानूनी चुनौतियां और याचिकाएं",
    "युवा लामबंदी पहल",
  ],
};

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function AdvocacySection({ lang }: AdvocacySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statData = stats[lang];
  const programData = programs[lang];

  return (
    <section
      id="meetings"
      aria-label="Advocacy and Meetings"
      className="py-20 lg:py-28 bg-navy relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 heritage-watermark opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
            {lang === "en" ? "Advocacy & Action" : "वकालत और कार्य"}
          </p>
          <h2 className="font-cinzel font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            {lang === "en" ? "Advocacy & Meetings" : "वकालत और बैठकें"}
          </h2>
          <div className="gold-divider w-24 mx-auto rounded-full" />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {statData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-dark rounded-2xl p-8 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-gold w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="font-cinzel font-black text-gold text-3xl sm:text-4xl mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-inter text-white/60 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Programs + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Program list */}
          <div>
            <h3 className="font-cinzel font-bold text-white text-xl mb-6">
              {lang === "en" ? "Programs & Initiatives" : "कार्यक्रम और पहल"}
            </h3>
            <ul className="space-y-3" role="list">
              {programData.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2
                    className="text-gold w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="font-inter text-white/75 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA Card */}
          <div className="glass-dark rounded-2xl p-8 border border-gold/20">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-inter font-semibold rounded-full tracking-wide uppercase mb-4">
                {lang === "en" ? "Take Responsibility" : "जिम्मेदारी लें"}
              </span>
            </div>
            <h3 className="font-cinzel font-bold text-white text-2xl mb-3">
              {lang === "en" ? "Join the Next Meeting" : "अगली बैठक में शामिल हों"}
            </h3>
            <p className="font-inter text-white/60 text-sm leading-relaxed mb-6">
              {lang === "en"
                ? "We are actively organizing meetings to discuss our rights, challenge unfair laws, and strategize for the future of our community. Your voice matters."
                : "हम अपने अधिकारों पर चर्चा करने, अनुचित कानूनों को चुनौती देने और अपने समुदाय के भविष्य के लिए रणनीति बनाने के लिए सक्रिय रूप से बैठकों का आयोजन कर रहे हैं। आपकी आवाज़ मायने रखती है।"}
            </p>
            <Button
              href="#contact"
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Join our advocacy meetings"
            >
              {lang === "en" ? "Register for Meeting" : "बैठक के लिए पंजीकरण करें"}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>

            {/* Trust note */}
            <p className="font-inter text-white/40 text-xs mt-4 flex items-center gap-1.5">
              <CheckCircle2 size={12} aria-hidden="true" />
              {lang === "en" ? "United we stand strong" : "हम एकजुट होकर मजबूत हैं"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
