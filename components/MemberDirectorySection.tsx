"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, CheckCircle, Filter } from "lucide-react";

interface MemberDirectoryProps {
  lang: "en" | "hi";
}

const sampleMembers = [
  {
    id: 1,
    name: "Rajesh Kumar Sharma",
    nameHi: "राजेश कुमार शर्मा",
    profession: "Civil Engineer",
    professionHi: "सिविल इंजीनियर",
    location: "New Delhi",
    locationHi: "नई दिल्ली",
    initials: "RK",
    verified: true,
    memberSince: "2019",
    color: "bg-navy",
  },
  {
    id: 2,
    name: "Priya Mishra",
    nameHi: "प्रिया मिश्रा",
    profession: "Medical Doctor (MBBS)",
    professionHi: "चिकित्सा डॉक्टर (MBBS)",
    location: "Lucknow, UP",
    locationHi: "लखनऊ, उत्तर प्रदेश",
    initials: "PM",
    verified: true,
    memberSince: "2020",
    color: "bg-gold-dark",
  },
  {
    id: 3,
    name: "Amit Tiwari",
    nameHi: "अमित तिवारी",
    profession: "IAS Officer (Retd.)",
    professionHi: "आईएएस अधिकारी (सेवानिवृत्त)",
    location: "Bhopal, MP",
    locationHi: "भोपाल, मध्य प्रदेश",
    initials: "AT",
    verified: true,
    memberSince: "2016",
    color: "bg-navy-light",
  },
];

const professions = ["All", "Engineer", "Doctor", "Lawyer", "Teacher", "Government Officer", "Business"];
const locations = ["All", "Delhi NCR", "Mumbai", "Lucknow", "Bhopal", "Jaipur", "Patna"];

export default function MemberDirectorySection({ lang }: MemberDirectoryProps) {
  const [search, setSearch] = useState("");
  const [profession, setProfession] = useState("All");
  const [location, setLocation] = useState("All");

  return (
    <section
      id="events"
      aria-label="Member Directory"
      className="py-20 lg:py-28 bg-cream dark:bg-[#0d1422] relative overflow-hidden"
    >
      <div className="absolute inset-0 heritage-watermark opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
            {lang === "en" ? "Our Community" : "हमारा समुदाय"}
          </p>
          <h2 className="font-cinzel font-bold text-navy dark:text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            {lang === "en" ? "Member Directory" : "सदस्य निर्देशिका"}
          </h2>
          <div className="gold-divider w-24 mx-auto rounded-full mb-5" />
          <p className="font-inter text-charcoal/60 dark:text-white/60 text-sm max-w-xl mx-auto">
            {lang === "en"
              ? "Connect with verified members across professions and cities. Join our network of 5,000+ members."
              : "विभिन्न व्यवसायों और शहरों के सत्यापित सदस्यों से जुड़ें। 5,000+ सदस्यों के हमारे नेटवर्क से जुड़ें।"}
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white dark:bg-navy/50 rounded-2xl p-4 sm:p-6 shadow-card border border-charcoal/8 dark:border-gold/10 mb-10">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-white/40 w-4 h-4"
                aria-hidden="true"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={lang === "en" ? "Search by name or profession..." : "नाम या पेशे से खोजें..."}
                className="w-full pl-10 pr-4 py-3 bg-cream dark:bg-navy/70 border border-charcoal/10 dark:border-gold/10 rounded-lg font-inter text-sm text-charcoal dark:text-white placeholder-charcoal/40 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
                aria-label="Search members"
              />
            </div>

            {/* Profession Filter */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-white/40 w-4 h-4" aria-hidden="true" />
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="pl-9 pr-8 py-3 bg-cream dark:bg-navy/70 border border-charcoal/10 dark:border-gold/10 rounded-lg font-inter text-sm text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40 appearance-none cursor-pointer transition-all min-w-[160px]"
                aria-label="Filter by profession"
              >
                {professions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-white/40 w-4 h-4" aria-hidden="true" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-9 pr-8 py-3 bg-cream dark:bg-navy/70 border border-charcoal/10 dark:border-gold/10 rounded-lg font-inter text-sm text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/40 appearance-none cursor-pointer transition-all min-w-[160px]"
                aria-label="Filter by location"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {/* Filter button */}
            <button
              className="flex items-center gap-2 px-5 py-3 bg-gold text-navy font-inter font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors shadow-gold hover:shadow-gold-lg"
              aria-label="Apply filters"
            >
              <Filter size={16} aria-hidden="true" />
              {lang === "en" ? "Filter" : "फ़िल्टर"}
            </button>
          </div>
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleMembers.map((member, i) => (
            <div
              key={member.id}
              className="group bg-white dark:bg-navy/50 rounded-2xl p-6 border border-charcoal/8 dark:border-gold/10 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-60 rounded-t-2xl" aria-hidden="true" />

              {/* Avatar + Verified Badge */}
              <div className="flex items-start justify-between mb-5">
                <div className={`relative w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center shadow-navy`}>
                  <span className="font-cinzel font-bold text-white text-xl">{member.initials}</span>
                  {member.verified && (
                    <div
                      className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-gold rounded-full flex items-center justify-center shadow"
                      aria-label="Verified member"
                    >
                      <CheckCircle className="text-navy w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                    </div>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gold/10 text-gold text-xs font-inter font-semibold rounded-full">
                  <CheckCircle size={10} strokeWidth={2.5} aria-hidden="true" />
                  {lang === "en" ? "Verified" : "सत्यापित"}
                </span>
              </div>

              {/* Member Info */}
              <h3 className="font-cinzel font-bold text-navy dark:text-white text-base mb-1 group-hover:text-gold dark:group-hover:text-gold transition-colors">
                {lang === "en" ? member.name : member.nameHi}
              </h3>

              <div className="flex items-center gap-1.5 text-charcoal/60 dark:text-white/50 mb-1">
                <Briefcase size={12} aria-hidden="true" />
                <p className="font-inter text-xs">{lang === "en" ? member.profession : member.professionHi}</p>
              </div>

              <div className="flex items-center gap-1.5 text-charcoal/60 dark:text-white/50 mb-4">
                <MapPin size={12} aria-hidden="true" />
                <p className="font-inter text-xs">{lang === "en" ? member.location : member.locationHi}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-charcoal/8 dark:bg-gold/10 mb-4" aria-hidden="true" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="font-inter text-xs text-charcoal/40 dark:text-white/30">
                  {lang === "en" ? `Member since ${member.memberSince}` : `सदस्य ${member.memberSince} से`}
                </span>
                <button
                  className="font-inter text-xs text-gold font-semibold hover:underline focus-visible:underline transition-all"
                  aria-label={`View profile of ${member.name}`}
                >
                  {lang === "en" ? "View Profile →" : "प्रोफ़ाइल देखें →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <button
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-navy dark:text-gold border-b-2 border-gold/40 hover:border-gold pb-0.5 transition-colors duration-200"
            aria-label="View full member directory"
          >
            {lang === "en" ? "View Full Member Directory" : "पूर्ण सदस्य निर्देशिका देखें"}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
