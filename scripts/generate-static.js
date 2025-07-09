
const fs = require('fs');
const path = require('path');

// Danh sách tất cả các trang cần tạo static HTML
const routes = [
  {
    path: '/',
    title: 'Cutting-edge marketing solutions | Heidigital',
    description: 'Transform your business with Australia\'s leading AI-powered digital marketing agency. Expert SEO, social media marketing, content creation & branding services.',
    image: 'https://heidigital.info/og-homepage.jpg',
    staticFile: 'index-static.html'
  },
  {
    path: '/about',
    title: 'About Us - Heidi Digital | Leading Australian Marketing Agency',
    description: 'Meet the Heidi Digital team - Australia\'s premier AI-powered digital marketing agency. Learn about our mission, values, and expertise in transforming businesses.',
    image: 'https://heidigital.info/og-about.jpg',
    staticFile: 'about-static.html'
  },
  {
    path: '/services',
    title: 'Digital Marketing Services Australia | AI-Powered Solutions | Heidi Digital',
    description: 'Professional digital marketing services in Australia. AI-powered SEO, social media marketing, content creation, and branding solutions.',
    image: 'https://heidigital.info/og-services.jpg',
    staticFile: 'services-static.html'
  },
  {
    path: '/portfolio',
    title: 'Portfolio - Heidi Digital | Successful Marketing Campaigns & Case Studies',
    description: 'Explore our portfolio of successful digital marketing campaigns and case studies. See how Heidi Digital has helped Australian businesses achieve remarkable growth.',
    image: 'https://heidigital.info/og-portfolio.jpg',
    staticFile: 'portfolio-static.html'
  },
  {
    path: '/contact',
    title: 'Contact Heidi Digital | Free Marketing Consultation Australia',
    description: 'Get in touch with Heidi Digital for a free marketing consultation. Transform your business with our AI-powered digital marketing solutions.',
    image: 'https://heidigital.info/og-contact.jpg',
    staticFile: 'contact-static.html'
  },
  {
    path: '/blog',
    title: 'Marketing Blog | Digital Marketing Tips & Insights | Heidi Digital',
    description: 'Stay updated with the latest digital marketing trends, tips, and insights from Heidi Digital. Expert advice to grow your business online.',
    image: 'https://heidigital.info/og-blog.jpg',
    staticFile: 'blog-static.html'
  }
];

// Template HTML cơ bản với đầy đủ internal links
const generateStaticHTML = (route) => {
  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>${route.title}</title>
  <meta name="title" content="${route.title}">
  <meta name="description" content="${route.description}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="Heidi Digital Team">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://heidigital.info${route.path}">
  <meta property="og:title" content="${route.title}">
  <meta property="og:description" content="${route.description}">
  <meta property="og:image" content="${route.image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_AU">
  <meta property="og:site_name" content="Heidi Digital">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://heidigital.info${route.path}">
  <meta name="twitter:title" content="${route.title}">
  <meta name="twitter:description" content="${route.description}">
  <meta name="twitter:image" content="${route.image}">
  <meta name="twitter:site" content="@heidigital">
  <meta name="twitter:creator" content="@heidigital">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://heidigital.info${route.path}">
  
  <!-- Internal CSS for basic styling -->
  <style>
    body { 
      font-family: Arial, sans-serif; 
      margin: 0; 
      padding: 20px; 
      line-height: 1.6; 
      color: #333; 
    }
    .container { max-width: 1200px; margin: 0 auto; }
    .nav-menu { 
      display: flex; 
      gap: 20px; 
      margin: 20px 0; 
      padding: 20px 0; 
      border-bottom: 1px solid #eee; 
    }
    .nav-menu a { 
      color: #0066cc; 
      text-decoration: none; 
      font-weight: 500; 
    }
    .nav-menu a:hover { text-decoration: underline; }
    .content-section { margin: 30px 0; }
    .content-section h2 { color: #2c3e50; margin-bottom: 15px; }
    .links-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      gap: 20px; 
      margin: 20px 0; 
    }
    .link-card { 
      border: 1px solid #ddd; 
      padding: 15px; 
      border-radius: 8px; 
    }
    .link-card h3 { margin: 0 0 10px 0; color: #2c3e50; }
    .link-card a { color: #0066cc; text-decoration: none; }
    .link-card a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header với navigation -->
    <header>
      <h1>${route.title}</h1>
      <nav class="nav-menu">
        <a href="https://heidigital.info/">Home</a>
        <a href="https://heidigital.info/about">About</a>
        <a href="https://heidigital.info/services">Services</a>
        <a href="https://heidigital.info/solutions/free-resources">Solutions</a>
        <a href="https://heidigital.info/portfolio">Portfolio</a>
        <a href="https://heidigital.info/blog">Blog</a>
        <a href="https://heidigital.info/contact">Contact</a>
      </nav>
    </header>

    <!-- Main content -->
    <main>
      <div class="content-section">
        <p><strong>${route.description}</strong></p>
      </div>

      <!-- Services Section với internal links -->
      <div class="content-section">
        <h2>Our Digital Marketing Services</h2>
        <div class="links-grid">
          <div class="link-card">
            <h3>SEO Services</h3>
            <p>Professional SEO optimization for Australian businesses</p>
            <a href="https://heidigital.info/services/seo">Learn More →</a>
          </div>
          <div class="link-card">
            <h3>Social Media Marketing</h3>
            <p>Strategic social media management and advertising</p>
            <a href="https://heidigital.info/services/social-media">Learn More →</a>
          </div>
          <div class="link-card">
            <h3>Content Creation</h3>
            <p>Professional content creation and marketing strategies</p>
            <a href="https://heidigital.info/services/content-creation">Learn More →</a>
          </div>
          <div class="link-card">
            <h3>Brand Development</h3>
            <p>Complete branding solutions for growing businesses</p>
            <a href="https://heidigital.info/services/branding">Learn More →</a>
          </div>
        </div>
      </div>

      <!-- Solutions Section -->
      <div class="content-section">
        <h2>Marketing Solutions & Resources</h2>
        <div class="links-grid">
          <div class="link-card">
            <h3>Free Marketing Resources</h3>
            <p>Access valuable guides, checklists, and tools</p>
            <a href="https://heidigital.info/solutions/free-resources">Explore Resources →</a>
          </div>
          <div class="link-card">
            <h3>AI Marketing Tools</h3>
            <p>Powerful AI-powered marketing automation tools</p>
            <a href="https://heidigital.info/solutions/ai-tools">Try AI Tools →</a>
          </div>
          <div class="link-card">
            <h3>SEO Optimization Checklist</h3>
            <p>Complete 41-point SEO checklist for websites</p>
            <a href="https://heidigital.info/solutions/free-resources/seo-optimization-checklist">Download Free →</a>
          </div>
          <div class="link-card">
            <h3>Social Media Growth Tools</h3>
            <p>Free tools and resources for social media growth</p>
            <a href="https://heidigital.info/solutions/free-resources/social-media-growth-tools">Access Tools →</a>
          </div>
        </div>
      </div>

      <!-- Portfolio Section -->
      <div class="content-section">
        <h2>Our Portfolio & Case Studies</h2>
        <div class="links-grid">
          <div class="link-card">
            <h3>FMCG DAO Strategy</h3>
            <p>Comprehensive marketing strategy for FMCG industry</p>
            <a href="https://heidigital.info/portfolio/fmcg-dao-strategy">View Case Study →</a>
          </div>
          <div class="link-card">
            <h3>Microlino Marketing</h3>
            <p>Innovative automotive marketing campaign</p>
            <a href="https://heidigital.info/portfolio/microlino-strategy">View Case Study →</a>
          </div>
          <div class="link-card">
            <h3>Hospitality Marketing</h3>
            <p>Restaurant and cafe marketing success stories</p>
            <a href="https://heidigital.info/portfolio/nha-ca-cafe">View Case Study →</a>
          </div>
          <div class="link-card">
            <h3>I Choose The Sun</h3>
            <p>Creative brand awareness campaign</p>
            <a href="https://heidigital.info/portfolio/i-choose-the-sun">View Case Study →</a>
          </div>
        </div>
      </div>

      <!-- Blog Section -->
      <div class="content-section">
        <h2>Latest Marketing Insights</h2>
        <div class="links-grid">
          <div class="link-card">
            <h3>Free AI Tools for Marketing 2025</h3>
            <p>Discover the best free AI tools for digital marketing</p>
            <a href="https://heidigital.info/blog/free-ai-tools-marketing-2025">Read Article →</a>
          </div>
          <div class="link-card">
            <h3>Create Infographics with Canva</h3>
            <p>Step-by-step guide to creating stunning infographics</p>
            <a href="https://heidigital.info/blog/create-infographics-with-canva-free">Read Guide →</a>
          </div>
          <div class="link-card">
            <h3>LinkedIn Personal Branding</h3>
            <p>Avoid common mistakes in LinkedIn personal branding</p>
            <a href="https://heidigital.info/blog/linkedin-personal-branding-mistakes-marketing-services">Read Tips →</a>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer với additional links -->
    <footer style="margin-top: 50px; padding-top: 30px; border-top: 1px solid #eee;">
      <div class="content-section">
        <h2>Quick Links</h2>
        <div class="nav-menu">
          <a href="https://heidigital.info/privacy-policy">Privacy Policy</a>
          <a href="https://heidigital.info/terms-of-service">Terms of Service</a>
          <a href="https://heidigital.info/sitemap">Sitemap</a>
        </div>
        <p>© 2024 Heidi Digital. All rights reserved. Australia's leading AI-powered digital marketing agency.</p>
      </div>
    </footer>
  </div>
  
  <!-- Redirect script for human users -->
  <script>
    // Only redirect if this is not a bot/crawler
    const userAgent = navigator.userAgent.toLowerCase();
    const isCrawler = /bot|crawler|spider|crawling|facebookexternalhit|twitterbot|linkedinbot|slurp|whatsapp|semrush/i.test(userAgent);
    
    if (!isCrawler) {
      window.location.replace('${route.path}');
    }
  </script>
</body>
</html>`;
};

// Tạo tất cả static files
routes.forEach(route => {
  const html = generateStaticHTML(route);
  const filePath = path.join(__dirname, '..', 'public', route.staticFile);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${route.staticFile}`);
});

console.log('All static HTML files generated successfully!');
