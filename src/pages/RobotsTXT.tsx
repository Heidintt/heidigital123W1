
import { useEffect } from 'react';

const RobotsTXT = () => {
  useEffect(() => {
    // Set content type và trả về plain text
    const style = document.createElement('style');
    style.textContent = `
      body { 
        font-family: monospace; 
        white-space: pre; 
        margin: 0; 
        padding: 20px;
        background: white;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
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

  return (
    <pre style={{ margin: 0, fontFamily: 'monospace' }}>
      {robotsContent}
    </pre>
  );
};

export default RobotsTXT;
