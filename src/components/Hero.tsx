import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const DEFAULT_BG = "/images/1-home-digital-marketing-services.avif";

const Hero = ({
  title = "Freelance Marketing Support, Built for Results",
  subtitle = "Cutting-edge digital marketing strategies designed to accelerate your business into tomorrow's competitive landscape.",
  ctaText = "Start Your Journey",
  ctaLink = "#",
  secondaryCtaText = "Explore Solutions",
  secondaryCtaLink = "#",
  backgroundImage = DEFAULT_BG,
  headingLevel = "h1",
  badge = "Digital marketing services",
}) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        draggable={false}
        decoding="async"
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-left">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/30">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <HeadingTag className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            {title}
          </HeadingTag>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-3xl">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-heidigital-blue text-white font-semibold shadow-lg hover:bg-heidigital-blue/90 hover:scale-105 transition-all duration-200 group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-heidigital-blue transition-all duration-200"
            >
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
