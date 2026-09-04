"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  className,
  variant = "solid",
  size = "md",
  children,
  href,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-inter font-semibold rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group cursor-pointer";

  const variants = {
    solid:
      "bg-gold text-navy-dark hover:bg-gold-light active:scale-[0.98] shadow-gold hover:shadow-gold-lg",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark active:scale-[0.98]",
    ghost: "text-gold hover:bg-gold/10 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm tracking-wide",
    md: "px-6 py-3 text-sm tracking-widest uppercase",
    lg: "px-8 py-4 text-base tracking-widest uppercase",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const shimmer = variant === "solid" && (
    <span
      className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
      aria-hidden="true"
    />
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {shimmer}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {shimmer}
      {children}
    </button>
  );
}
