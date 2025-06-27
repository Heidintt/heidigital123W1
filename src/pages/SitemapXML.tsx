
import { useEffect } from 'react';

const SitemapXML = () => {
  useEffect(() => {
    // Set content type cho XML
    const meta = document.querySelector('meta[http-equiv="Content-Type"]');
    if (meta) {
      meta.setAttribute('content', 'application/xml; charset=utf-8');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('http-equiv', 'Content-Type');
      newMeta.setAttribute('content', 'application/xml; charset=utf-8');
      document.head.appendChild(newMeta);
    }

    const style = document.createElement('style');
    style.textContent = `
      body { 
        font-family: monospace; 
        white-space: pre; 
        margin: 0; 
        padding: 20px;
        background: white;
        font-size: 12px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      const metaToRemove = document.querySelector('meta[http-equiv="Content-Type"]');
      if (metaToRemove) {
        document.head.removeChild(metaToRemove);
      }
      document.head.removeChild(style);
    };
  }, []);

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

  return (
    <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
      {sitemapContent}
    </pre>
  );
};

export default SitemapXML;
