
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StaticFileHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/robots.txt') {
      // Set content type for robots.txt
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

      // Create a blob with the content
      const blob = new Blob([robotsContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      // Replace current page with the robots.txt content
      window.location.replace(url);
      
    } else if (path === '/sitemap.xml') {
      // Set content type for sitemap.xml
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Homepage -->
  <url>
    <loc>https://heidigital.info/</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Pages -->
  <url>
    <loc>https://heidigital.info/about</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/services</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/portfolio</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/blog</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/contact</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Service Pages -->
  <url>
    <loc>https://heidigital.info/services/social-media</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/services/content-creation</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/services/seo</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/services/branding</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/services/digital-ads</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/services/ai-marketing</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Solution Pages -->
  <url>
    <loc>https://heidigital.info/solutions/free-resources</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/ai-tools</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/ai-tools/content-generator</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/ai-tools/seo-article-generator</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/ai-tools/multilingual-content-generator</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Free Resources -->
  <url>
    <loc>https://heidigital.info/solutions/free-resources/seo-guide</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/content-templates</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/social-toolkit</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/email-guide</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/roi-calculator</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/content-calendar</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/local-seo-checklist</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/ai-playbook</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/solutions/free-resources/cro-guide</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Portfolio Pages -->
  <url>
    <loc>https://heidigital.info/portfolio/fmcg-dao-strategy</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/portfolio/microlino-strategy</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/portfolio/i-choose-the-sun</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/portfolio/microlino-campaign</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/portfolio/nha-ca-cafe</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/portfolio/koto-club</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/portfolio/lua-hong-buffet</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Legal Pages -->
  <url>
    <loc>https://heidigital.info/privacy-policy</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/terms-of-service</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>https://heidigital.info/sitemap</loc>
    <lastmod>2025-06-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>`;

      // Create a blob with the XML content
      const blob = new Blob([sitemapContent], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      
      // Replace current page with the sitemap.xml content
      window.location.replace(url);
    }
  }, [location.pathname]);

  // This component doesn't render anything visible
  return <div>Loading...</div>;
};

export default StaticFileHandler;
