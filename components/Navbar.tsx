"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import Button from "@/components/ui/Button";

interface NavbarProps {
  lang: "en" | "hi";
  onLangToggle: () => void;
  darkMode: boolean;
  onDarkToggle: () => void;
}

const navLinks = [
  { en: "About", hi: "परिचय", href: "#about" },
  { en: "Youth Hub", hi: "युवा केंद्र", href: "#youth" },
  { en: "Meetings", hi: "बैठकें", href: "#meetings" },
  { en: "Events", hi: "कार्यक्रम", href: "#events" },
  { en: "Contact", hi: "संपर्क", href: "#contact" },
];

export default function Navbar({ lang, onLangToggle, darkMode, onDarkToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };
    if (drawerOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [drawerOpen]);

  // Close drawer on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-navy py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        >
          {/* Logo + Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Swarn Samaj - Home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gold/60 group-hover:border-gold transition-colors duration-300 shadow-gold flex-shrink-0">
              <Image src="/logo.jpg" alt="Swarn Samaj Emblem" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-cinzel font-bold text-gold text-sm tracking-widest uppercase">
                Swarn Samaj
              </span>
              <span className="font-inter text-xs text-gold/70 tracking-wide">
                सवर्ण समाज
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-inter text-sm text-white/80 hover:text-gold px-3 py-2 rounded-sm transition-colors duration-200 relative group focus-visible:text-gold"
                  aria-label={`Navigate to ${link.en}`}
                >
                  {lang === "en" ? link.en : link.hi}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-4/5" />
                </button>
              </li>
            ))}
          </ul>

          {/* Utility Controls */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={onLangToggle}
              className="flex items-center gap-1.5 text-white/70 hover:text-gold transition-colors duration-200 text-xs font-inter font-semibold px-3 py-2 rounded-sm border border-white/10 hover:border-gold/40"
              aria-label={`Switch to ${lang === "en" ? "Hindi" : "English"}`}
            >
              <Globe size={14} />
              {lang === "en" ? "हि" : "EN"}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onDarkToggle}
              className="p-2 text-white/70 hover:text-gold transition-colors duration-200 rounded-sm border border-white/10 hover:border-gold/40"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Join Portal CTA */}
            <Button
              href="#contact"
              size="sm"
              onClick={() => scrollTo("#contact")}
              className="ml-2"
              aria-label="Join the Swarn Samaj Portal"
            >
              {lang === "en" ? "Join Portal" : "पोर्टल जॉइन करें"}
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white hover:text-gold transition-colors p-2"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            {drawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-navy shadow-2xl transform transition-transform duration-350 ease-in-out lg:hidden flex flex-col ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gold/20">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/50">
              <Image src="/logo.jpg" alt="Swarn Samaj" fill className="object-cover" />
            </div>
            <div>
              <p className="font-cinzel font-bold text-gold text-sm">Swarn Samaj</p>
              <p className="font-inter text-xs text-gold/60">सवर्ण समाज</p>
            </div>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-white/60 hover:text-gold transition-colors p-1"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 font-inter text-white/80 hover:text-gold hover:bg-gold/5 rounded-sm transition-all duration-200 flex items-center justify-between group`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span>{lang === "en" ? link.en : link.hi}</span>
                  <span className="text-gold/30 group-hover:text-gold transition-colors">›</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Utilities */}
        <div className="p-4 border-t border-gold/20 space-y-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onLangToggle}
              className="flex-1 flex items-center justify-center gap-2 text-white/70 hover:text-gold py-2 px-3 rounded-sm border border-white/10 hover:border-gold/40 transition-colors text-sm font-inter"
            >
              <Globe size={14} />
              {lang === "en" ? "Switch to हिंदी" : "Switch to English"}
            </button>
            <button
              onClick={onDarkToggle}
              className="p-2 text-white/70 hover:text-gold border border-white/10 hover:border-gold/40 rounded-sm transition-colors"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
          <Button
            href="#contact"
            size="md"
            className="w-full justify-center"
            onClick={() => scrollTo("#contact")}
          >
            {lang === "en" ? "Join Portal" : "पोर्टल जॉइन करें"}
          </Button>
        </div>
      </div>
    </>
  );
}
