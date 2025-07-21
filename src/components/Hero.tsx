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
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  headingLevel = "h1",
}) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;
  const bg = backgroundImage || DEFAULT_BG;

  return (
    <div className="relative px-4 py-16 md:py-24 flex items-center min-h-[60vh]">
      {/* Dùng <img> làm background LCP */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        fetchPriority="high"
        draggable={false}
        decoding="async"
      />

      {/* Enhanced overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-800/40 via-purple-700/30 to-pink-800/40" />
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-600/20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
            <HeadingTag
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-white leading-tight"
              style={{
                textShadow:
                  "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 1px 1px 3px rgba(0,0,0,0.9)",
              }}
            >
              {title}
            </HeadingTag>
            <p
              className="text-base md:text-lg mb-6 opacity-90 animate-fade-in text-white leading-relaxed"
              style={{
                animationDelay: "0.2s",
                textShadow:
                  "1px 1px 4px rgba(0,0,0,0.7), 0 0 10px rgba(0,0,0,0.5)",
              }}
            >
              {subtitle}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-3 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
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