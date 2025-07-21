import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
      {/* Background image */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        fetchPriority="high"
        draggable={false}
        decoding="async"
      />

      {/* Stronger overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-pink-900/60 backdrop-blur-sm" />

      {/* Glassmorphism card with higher opacity */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl">
            <HeadingTag
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
              style={{
                background: "linear-gradient(90deg, #2563eb, #a21caf, #db2777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {title}
            </HeadingTag>
            <p
              className="text-base md:text-xl mb-8 text-white font-medium"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaText && (
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  <a href={ctaLink || "#"}>
                    {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
              {secondaryCtaText && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold shadow-lg transition"
                >
                  <a href={secondaryCtaLink || "#"}>{secondaryCtaText}</a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;