
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
      className="relative px-4 py-16 md:py-24 flex items-center min-h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : `url(https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
      }}
    >
      {/* Enhanced overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-heidigital-blue/20 via-heidigital-purple/20 to-heidigital-blue/20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-white leading-tight" 
                style={{ 
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 1px 1px 3px rgba(0,0,0,0.9)' 
                }}>
              {title}
            </h1>
            <p className="text-base md:text-lg mb-6 opacity-90 animate-fade-in text-white leading-relaxed" 
               style={{ 
                 animationDelay: "0.2s",
                 textShadow: '1px 1px 4px rgba(0,0,0,0.7), 0 0 10px rgba(0,0,0,0.5)' 
               }}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {ctaText && (
                <Button
                  asChild
                  className="bg-heidigital-blue hover:bg-heidigital-blue/90 text-white py-4 px-6 rounded-xl shadow-lg text-sm"
                >
                  <a href={ctaLink || "#"}>
                    {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {secondaryCtaText && (
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 py-4 px-6 rounded-xl shadow-lg text-sm"
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
