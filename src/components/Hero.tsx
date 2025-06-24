
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
      className={`relative px-4 py-32 md:py-48 flex items-center ${
        backgroundImage
          ? "bg-cover bg-center"
          : "bg-gradient-to-r from-heidigital-lightpurple to-heidigital-lightgray"
      }`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* Enhanced overlay for better text visibility */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      )}

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white text-shadow-xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in text-white text-shadow-lg" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {ctaText && (
              <Button
                asChild
                className="bg-heidigital-blue hover:bg-heidigital-blue/90 text-white py-6 px-8 rounded-md shadow-lg"
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
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 py-6 px-8 rounded-md shadow-lg"
              >
                <a href={secondaryCtaLink || "#"}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
