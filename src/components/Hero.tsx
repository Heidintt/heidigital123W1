
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
      className="relative px-4 py-20 md:py-32 flex items-center min-h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
      }}
    >
      {/* Enhanced overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in text-white text-shadow-xl leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in text-white text-shadow-lg leading-relaxed" style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {ctaText && (
                <Button
                  asChild
                  className="bg-heidigital-blue hover:bg-heidigital-blue/90 text-white py-5 px-7 rounded-xl shadow-lg text-base"
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
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 py-5 px-7 rounded-xl shadow-lg text-base"
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
