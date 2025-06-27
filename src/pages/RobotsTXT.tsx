
import { useEffect } from 'react';

const RobotsTXT = () => {
  useEffect(() => {
    // Set document title và meta
    document.title = 'robots.txt';
    
    // Tạo response với content type text/plain
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

    // Tạo một response mới
    const response = new Response(robotsContent, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    // Thay thế toàn bộ document
    document.open();
    document.write(robotsContent);
    document.close();
  }, []);

  return null;
};

export default RobotsTXT;
