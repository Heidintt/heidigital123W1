
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}) => {
  return (
    <div
      className="relative px-4 py-16 md:py-24 flex items-center min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : `url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
      }}
    >
      {/* Modern gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                Transform Your Digital Future
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 animate-fade-in text-white/90 drop-shadow-lg leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {ctaText && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 px-8 rounded-2xl shadow-xl text-base font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <a href={ctaLink || "#"}>
                    {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
              {secondaryCtaText && (
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 py-6 px-8 rounded-2xl shadow-xl text-base font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <a href={secondaryCtaLink || "#"}>{secondaryCtaText}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
