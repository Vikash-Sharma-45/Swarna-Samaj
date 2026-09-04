"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import EWSPortalSection from "@/components/EWSPortalSection";
import MemberDirectorySection from "@/components/MemberDirectorySection";
import MottoSection from "@/components/MottoSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  // Respect system preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));
  const toggleDark = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-cream dark:bg-[#0d1422] transition-colors duration-300">
      {/* Skip to main content - accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      <Navbar
        lang={lang}
        onLangToggle={toggleLang}
        darkMode={darkMode}
        onDarkToggle={toggleDark}
      />

      <main id="main-content">
        <HeroSection lang={lang} />
        <PillarsSection lang={lang} />
        <EWSPortalSection lang={lang} />
        <MemberDirectorySection lang={lang} />
        <MottoSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
