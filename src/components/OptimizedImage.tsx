import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  onLoad 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  // Generate responsive image URLs
  const generateSrcSet = (originalSrc: string) => {
    // For external images or if already optimized
    if (originalSrc.startsWith('http') || originalSrc.includes('?')) {
      return originalSrc;
    }
    
    // Generate different sizes for local images
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop();
    
    return [
      `${basePath}-400.${extension} 400w`,
      `${basePath}-800.${extension} 800w`,
      `${originalSrc} 1200w`
    ].join(', ');
  };

  useEffect(() => {
    if (priority) {
      setCurrentSrc(src);
      return;
    }

    // Lazy load for non-priority images
    const img = new Image();
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
    img.onerror = () => setError(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    const element = document.getElementById(`img-${src.replace(/[^a-zA-Z0-9]/g, '')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [src, priority, onLoad]);

  if (error) {
    return (
      <div 
        className={cn(
          "bg-gray-200 flex items-center justify-center text-gray-500 text-sm",
          className
        )}
        style={{ width, height }}
      >
        Failed to load image
      </div>
    );
  }

  return (
    <div
      id={`img-${src.replace(/[^a-zA-Z0-9]/g, '')}`}
      className={cn("relative overflow-hidden", className)}
      style={{ 
        width: width ? `${width}px` : undefined, 
        height: height ? `${height}px` : undefined,
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      {/* Placeholder with proper aspect ratio */}
      {!isLoaded && !priority && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : '16/9'
          }} 
        />
      )}
      
      {currentSrc && (
        <img
          src={currentSrc}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => {
            setIsLoaded(true);
            onLoad?.();
          }}
          className={cn(
            "object-cover transition-opacity duration-300",
            isLoaded || priority ? "opacity-100" : "opacity-0",
            className
          )}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}
    </div>
  );
};