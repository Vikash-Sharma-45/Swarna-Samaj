import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          light: "#243660",
          dark: "#111c30",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C94A",
          dark: "#A88C2A",
          muted: "#D4AF3720",
        },
        cream: {
          DEFAULT: "#F9F6F0",
          dark: "#F0EBE1",
        },
        charcoal: "#212529",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #111c30 0%, #1B2A4A 50%, #243660 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #A88C2A 0%, #D4AF37 50%, #E8C94A 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(27,42,74,0.05) 0%, rgba(212,175,55,0.05) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in": "slideIn 0.4s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "count-up": "countUp 2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(212,175,55,0.25)",
        "gold-lg": "0 8px 40px rgba(212,175,55,0.35)",
        navy: "0 4px 24px rgba(27,42,74,0.25)",
        card: "0 2px 16px rgba(33,37,41,0.08)",
        "card-hover": "0 8px 32px rgba(33,37,41,0.14)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
