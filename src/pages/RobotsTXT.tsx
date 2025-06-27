
import { useEffect } from 'react';

const RobotsTXT = () => {
  useEffect(() => {
    // Set content type for text
    document.querySelector('meta[name="content-type"]')?.setAttribute('content', 'text/plain');
  }, []);

  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://heidigital.info/sitemap.xml

# Specific bot configurations
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /.well-known/

# Allow all public content
Allow: /services/
Allow: /solutions/
Allow: /portfolio/
Allow: /blog/
Allow: /about
Allow: /contact
Allow: /sitemap
Allow: /privacy-policy
Allow: /terms-of-service`;

  // Render text content
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: robotsContent }}
      style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}
    />
  );
};

export default RobotsTXT;
