import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const Hero = ({
  title = "Transform Your Digital Future",
  subtitle = "Cutting-edge digital marketing strategies designed to accelerate your business into tomorrow's competitive landscape.",
  ctaText = "Start Your Journey",
  ctaLink = "#",
  secondaryCtaText = "Explore Solutions",
  secondaryCtaLink = "#",
  backgroundImage = DEFAULT_BG,
  headingLevel = "h1",
}) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background image with soft overlay */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-80"
        fetchPriority="high"
        draggable={false}
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-100/60 to-purple-100/60 -z-10" />

      {/* Decorative pastel blobs */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-200 rounded-full blur-3xl opacity-40 z-0"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-40 z-0"
      />

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto relative z-10"
      >
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl">
          <HeadingTag
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </HeadingTag>
          <p className="text-lg md:text-xl text-gray-700 mb-10 font-medium">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200 group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-blue-400 text-blue-700 font-semibold bg-white/40 hover:bg-blue-50 transition"
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