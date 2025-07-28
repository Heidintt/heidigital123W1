import React from "react";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const DEFAULT_BG = "/images/blog/1-home-digital-marketing-services.avif";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  headingLevel?: "h1" | "h2" | "h3";
  badge?: string;
  showStats?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title = "Transform Your Digital Future",
  subtitle = "Cutting-edge digital marketing strategies designed to accelerate Australian businesses into tomorrow's competitive landscape.",
  ctaText = "Start Your Journey",
  ctaLink = "#",
  secondaryCtaText = "Explore Solutions", 
  secondaryCtaLink = "#",
  backgroundImage = DEFAULT_BG,
  headingLevel = "h1",
  badge = "⭐ #1 Digital Marketing Agency in Australia",
  showStats = true,
}) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  const stats = [
    { icon: Users, value: "250+", label: "Happy Clients" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: Star, value: "5+ Years", label: "Experience" },
  ];

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${backgroundImage}?v=${Date.now()}`}
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
          draggable={false}
          decoding="async"
          onError={(e) => {
            // Fallback to default image if the specified image fails to load
            const target = e.target as HTMLImageElement;
            if (target.src !== DEFAULT_BG) {
              target.src = DEFAULT_BG;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-heidigital-blue/20 backdrop-blur-sm border border-heidigital-blue/30 text-white text-sm font-medium">
              {badge}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <HeadingTag className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </HeadingTag>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-heidigital-blue hover:bg-heidigital-blue/90 text-white font-semibold text-lg shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {secondaryCtaText}
            </a>
          </motion.div>

          {/* Stats */}
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-heidigital-blue mr-2" />
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
