"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

// Inline SVGs for social icons removed from lucide-react v1.x
interface IconProps { size?: number; className?: string; "aria-hidden"?: string | boolean; }
const FacebookIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4 4l4.5 5L4 15h2l3.5-4.3L13 15h4l-4.8-5.5L17 4h-2l-3.2 3.9L8 4H4z" />
  </svg>
);
const InstagramIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

interface FooterProps {
  lang: "en" | "hi";
}

const quickLinks = {
  en: [
    { label: "About Us", href: "#about" },
    { label: "Youth Hub", href: "#youth" },
    { label: "EWS Portal", href: "#ews" },
    { label: "Events & Programs", href: "#events" },
    { label: "Member Directory", href: "#events" },
    { label: "Contact Us", href: "#contact" },
  ],
  hi: [
    { label: "हमारे बारे में", href: "#about" },
    { label: "युवा केंद्र", href: "#youth" },
    { label: "EWS पोर्टल", href: "#ews" },
    { label: "कार्यक्रम और आयोजन", href: "#events" },
    { label: "सदस्य निर्देशिका", href: "#events" },
    { label: "संपर्क करें", href: "#contact" },
  ],
};

const socialLinks = [
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: TwitterIcon, href: "#", label: "Twitter / X" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer({ lang }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const links = quickLinks[lang];

  return (
    <footer
      id="contact"
      aria-label="Site footer"
      className="bg-navy-dark border-t border-gold/15"
    >
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/50 flex-shrink-0">
                <Image src="/logo.jpg" alt="Swarn Samaj Emblem" fill className="object-cover" />
              </div>
              <div>
                <p className="font-cinzel font-bold text-gold text-sm tracking-widest">SWARN SAMAJ</p>
                <p className="font-inter text-xs text-gold/50 tracking-wide">सवर्ण समाज</p>
              </div>
            </div>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-5">
              {lang === "en"
                ? "Honoring heritage, empowering youth, and building an inclusive community since 1947."
                : "1947 से विरासत का सम्मान करते हुए, युवाओं को सशक्त बनाते हुए, एक समावेशी समुदाय का निर्माण।"}
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a href="mailto:contact@swarnsamaj.org" className="flex items-center gap-2 text-white/40 hover:text-gold transition-colors text-xs font-inter group">
                <Mail size={13} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                contact@swarnsamaj.org
              </a>
              <a href="tel:+911145678900" className="flex items-center gap-2 text-white/40 hover:text-gold transition-colors text-xs font-inter group">
                <Phone size={13} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                +91 11 4567 8900
              </a>
              <div className="flex items-start gap-2 text-white/40 text-xs font-inter">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>New Delhi, India — 110001</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-cinzel font-bold text-white text-sm tracking-wide mb-5 uppercase">
              {lang === "en" ? "Quick Links" : "त्वरित लिंक"}
            </h3>
            <ul className="space-y-2.5" role="list">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-inter text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    aria-label={`Go to ${link.label}`}
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-gold" aria-hidden="true" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h3 className="font-cinzel font-bold text-white text-sm tracking-wide mb-5 uppercase">
              {lang === "en" ? "Follow Us" : "हमें फ़ॉलो करें"}
            </h3>
            <div className="flex gap-3 flex-wrap mb-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Visit our ${label} page`}
                  className="w-9 h-9 rounded-lg border border-gold/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-200 group"
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="font-inter text-white/30 text-xs leading-relaxed">
              {lang === "en"
                ? "Stay connected for the latest updates, events, and community announcements."
                : "नवीनतम अपडेट, कार्यक्रमों और समुदाय घोषणाओं के लिए जुड़े रहें।"}
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-cinzel font-bold text-white text-sm tracking-wide mb-5 uppercase">
              {lang === "en" ? "Newsletter" : "न्यूज़लेटर"}
            </h3>
            <p className="font-inter text-white/50 text-xs leading-relaxed mb-4">
              {lang === "en"
                ? "Subscribe for monthly community updates, event invitations, and welfare notices."
                : "मासिक सामुदायिक अपडेट, कार्यक्रम आमंत्रण और कल्याण सूचनाओं के लिए सदस्यता लें।"}
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-gold text-sm font-inter font-semibold py-2">
                <span className="text-lg" aria-hidden="true">✓</span>
                {lang === "en" ? "Thank you for subscribing!" : "सदस्यता के लिए धन्यवाद!"}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  {lang === "en" ? "Email address for newsletter" : "न्यूज़लेटर के लिए ईमेल"}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === "en" ? "Your email address" : "आपका ईमेल पता"}
                  required
                  className="w-full px-4 py-2.5 bg-white/5 border border-gold/20 rounded-lg font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gold text-navy font-inter font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors shadow-gold group"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  {lang === "en" ? "Subscribe" : "सदस्यता लें"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Swarn Samaj (सवर्ण समाज). {lang === "en" ? "All rights reserved." : "सर्वाधिकार सुरक्षित।"}
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Use", "Disclaimer"].map((item) => (
              <button
                key={item}
                className="font-inter text-white/30 hover:text-gold/60 text-xs transition-colors"
                aria-label={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <p className="font-inter text-white/20 text-xs text-center mt-4 leading-relaxed max-w-3xl mx-auto">
          {lang === "en"
            ? "This website is for informational purposes only. Swarn Samaj does not charge any fees for EWS guidance or certificate assistance. Beware of fraud."
            : "यह वेबसाइट केवल सूचना उद्देश्यों के लिए है। EWS मार्गदर्शन या प्रमाणपत्र सहायता के लिए स्वर्ण समाज कोई शुल्क नहीं लेता। धोखाधड़ी से सावधान रहें।"}
        </p>
      </div>
    </footer>
  );
}
