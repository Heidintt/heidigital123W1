import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";

const DEFAULT_BG = "/images/3-home-digital-marketing-services.avif";
const CACHE_VERSION = "v1"; // Static cache busting

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState(backgroundImage);

  const stats = [
    { icon: Users, value: "250+", label: "Happy Clients" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: Star, value: "5+ Years", label: "Experience" },
  ];

  // Enhanced error handling and preloading
  useEffect(() => {
    console.log('🔍 Hero component mounted');
    console.log('📸 Background image path:', backgroundImage);
    console.log('🏠 DEFAULT_BG path:', DEFAULT_BG);
    console.log('📝 Title:', title);
    console.log('🔍 Props received:', { backgroundImage, title, subtitle });

    // Preload image
    const img = new Image();
    img.onload = () => {
      console.log('✅ Image preloaded successfully:', currentImage);
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.warn('⚠️ Image preload failed:', currentImage);
      if (currentImage !== DEFAULT_BG) {
        console.log('🔄 Trying default image...');
        setCurrentImage(DEFAULT_BG);
      } else {
        setImageError(true);
      }
    };
    img.src = `${currentImage}?${CACHE_VERSION}`;
  }, [backgroundImage, title, subtitle, currentImage]);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with lighter overlay */}
      <div className="absolute inset-0 -z-10">
        {!imageError ? (
          <img
            src={`${currentImage}?${CACHE_VERSION}`}
            alt="Hero background"
            className="w-full h-full object-cover"
            fetchPriority="high"
            draggable={false}
            decoding="async"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              console.log('✅ Hero banner loaded successfully:', currentImage);
              console.log('🖼️ Image element:', target);
              console.log('📏 Image dimensions:', target.naturalWidth, 'x', target.naturalHeight);
              setImageLoaded(true);
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error('❌ Hero banner failed to load:', currentImage);
              console.error('❌ Image src that failed:', target.src);
              
              if (currentImage !== DEFAULT_BG) {
                console.log('🔄 Attempting fallback to default image...');
                setCurrentImage(DEFAULT_BG);
              } else {
                console.error('💥 Default image also failed to load');
                setImageError(true);
              }
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700" />
        )}
        {/* Lighter overlay để hình ảnh hiển thị rõ hơn */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-heidigital-blue/20 backdrop-blur-sm border border-heidigital-blue/30 text-white text-sm font-medium">
              {badge}
            </span>
          </div>

          {/* Main heading */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <HeadingTag className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </HeadingTag>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={`stat-${index}`} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-heidigital-blue mr-2" />
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
