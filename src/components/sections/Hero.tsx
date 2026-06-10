// src/components/sections/Hero.tsx
import React from "react";
import { Button } from "../ui/Button";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
  overlayClass?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  overlayClass = "bg-black/60",
}) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay: bg-slate-900/60 */}
      <div
        className={`absolute inset-0 z-10 ${overlayClass}`}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-light uppercase tracking-[0.3em] leading-tight mb-6">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-slate-100 font-light tracking-wide mb-12 max-w-3xl">
          {subtitle}
        </p>

        <Button to={ctaLink}>
          {ctaText}
        </Button>
      </div>
    </section>
  );
};
