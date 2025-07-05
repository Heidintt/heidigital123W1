import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Calendar, Star, Users, Music, Wine, Shield, TrendingUp, Network } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const KotoClub = () => {
  // SEO optimization
  useSEO({
    title: "Koto Club Da Nang Premium Nightlife Strategy | Heidigital",
    description: "Comprehensive marketing strategy for Koto Club Da Nang - Premium nightlife venue targeting affluent guests. Complete brand positioning, VIP programs, and digital marketing approach.",
    keywords: "Koto Club Da Nang, nightlife marketing, premium venue marketing, VIP experience, Da Nang nightlife, luxury club marketing, brand positioning, nightclub strategy, premium hospitality",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    url: "https://heidigital.info/portfolio/koto-club",
    type: "article"
  });

  // Structured Data for SEO
  React.useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://heidigital.info/portfolio/koto-club#article",
          "headline": "Koto Club Da Nang Premium Nightlife Marketing Strategy",
          "description": "Complete marketing strategy for premium nightlife venue in Da Nang targeting affluent guests with VIP experiences and exclusive services.",
          "author": {
            "@type": "Organization",
            "name": "Heidi Digital",
            "url": "https://heidigital.info"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Heidi Digital",
            "logo": {
              "@type": "ImageObject",
              "url": "https://heidigital.info/og-image.jpg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://heidigital.info/portfolio/koto-club"
          },
          "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "CaseStudy",
          "name": "Koto Club Marketing Strategy",
          "description": "Premium nightlife venue marketing strategy for Da Nang market",
          "client": "Koto Club",
          "industry": "Hospitality & Entertainment",
          "location": "Da Nang, Vietnam"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://heidigital.info"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Portfolio",
              "item": "https://heidigital.info/portfolio"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Koto Club Strategy",
              "item": "https://heidigital.info/portfolio/koto-club"
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const keyFeatures = [
    {
      title: "Premium Venue",
      description: "High-end clubbing experience with state-of-the-art sound and lighting systems.",
      icon: <Music className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Exclusive VIP Services",
      description: "Personalized services including private tables, bottle service, and dedicated staff.",
      icon: <Wine className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Safety & Security",
      description: "Ensuring a secure environment with professional security personnel and strict entry policies.",
      icon: <Shield className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Trending Events",
      description: "Hosting top DJs and themed nights to attract a diverse and affluent clientele.",
      icon: <TrendingUp className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const targetAudiences = [
    {
      title: "Affluent Locals",
      description: "High-income residents of Da Nang seeking premium entertainment options.",
    },
    {
      title: "Expats",
      description: "International professionals and tourists looking for a sophisticated nightlife experience.",
    },
    {
      title: "Event Tourists",
      description: "Visitors attending special events and parties in Da Nang.",
    },
  ];

  const brandValues = [
    {
      title: "Exclusivity",
      description: "Offering a unique and high-end experience that sets Koto Club apart.",
    },
    {
      title: "Luxury",
      description: "Providing top-tier services and amenities to cater to a discerning clientele.",
    },
    {
      title: "Innovation",
      description: "Continuously updating the club's offerings to stay ahead of nightlife trends.",
    },
  ];

  const digitalMarketingChannels = [
    {
      title: "Social Media",
      description: "Targeted ads and engaging content on platforms like Facebook and Instagram.",
    },
    {
      title: "Influencer Marketing",
      description: "Collaborations with local and international influencers to promote events and services.",
    },
    {
      title: "SEO Optimization",
      description: "Improving online visibility through strategic keyword targeting and content creation.",
    },
    {
      title: "Email Marketing",
      description: "Personalized newsletters and promotions to keep VIP clients informed and engaged.",
    },
  ];

  const partnershipOpportunities = [
    {
      title: "Luxury Hotels",
      description: "Collaborating with high-end hotels to offer exclusive packages and concierge services.",
    },
    {
      title: "Premium Brands",
      description: "Partnering with luxury brands for sponsored events and product placements.",
    },
    {
      title: "Event Organizers",
      description: "Working with event organizers to host after-parties and special events.",
    },
  ];

  const budgetBreakdown = [
    { item: "Marketing Campaigns", budget: "30%" },
    { item: "VIP Services", budget: "25%" },
    { item: "Event Production", budget: "20%" },
    { item: "Partnerships", budget: "15%" },
    { item: "Contingency", budget: "10%" },
  ];

  const successMetrics = [
    {
      title: "Increased Revenue",
      description: "Tracking revenue growth from VIP services and event attendance.",
    },
    {
      title: "Customer Satisfaction",
      description: "Measuring customer satisfaction through surveys and feedback forms.",
    },
    {
      title: "Brand Awareness",
      description: "Monitoring social media engagement and website traffic.",
    },
    {
      title: "VIP Client Retention",
      description: "Tracking the retention rate of VIP clients and repeat customers.",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Koto Club Marketing Strategy"
        subtitle="Premium nightlife experience in the heart of Da Nang"
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Project Overview"
            subtitle="Koto Club - Premium Nightlife"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Brand Name</h3>
                    <p>Koto Club - Premium Nightlife</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p>Da Nang, Vietnam</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Concept</h3>
                    <p>A premium nightlife venue offering exclusive experiences and top-tier services.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Vision</h3>
                    <p>To become the premier nightlife destination in Da Nang, attracting affluent locals and international visitors.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Koto Club Nightlife Experience" 
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bg-heisocial-purple text-white px-4 py-2 rounded-bl-lg font-bold">
                  Case Study
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h4 className="ml-2 font-bold">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Market Analysis"
            subtitle="Understanding the Nightlife Scene in Da Nang"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🌃</div>
              <p className="text-white/90">Da Nang's nightlife market is growing, with increasing demand for high-quality entertainment.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <p className="text-white/90">Affluent locals and tourists are willing to spend on premium experiences.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-white/90">There is a gap in the market for a venue that offers both luxury and innovation.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <p className="text-white/90">The rise in tourism and expat population supports the need for a premium nightlife destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Target Audience"
            subtitle="Identifying the Ideal Clientele"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-purple-500 mr-2" />
                  {audience.title}
                </h3>
                <p>{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Positioning Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Brand Positioning"
            subtitle="Creating a Unique Identity"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {brandValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="h-6 w-6 text-pink-500 mr-2" />
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Program Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="VIP Program"
            subtitle="Enhancing Customer Loyalty"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-heisocial-blue mb-6">VIP Membership Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <span>Exclusive access to VIP areas</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <span>Priority reservations and personalized service</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <span>Special discounts on bottle service and events</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <span>Invitations to exclusive VIP events and parties</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Tiered Membership Levels</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tier</TableHead>
                    <TableHead>Benefits</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Gold</TableCell>
                    <TableCell>Access to VIP areas, priority reservations</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Platinum</TableCell>
                    <TableCell>Gold benefits + discounts on bottle service</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Diamond</TableCell>
                    <TableCell>Platinum benefits + exclusive event invitations</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Digital Marketing Strategy"
            subtitle="Reaching the Target Audience Online"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {digitalMarketingChannels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-500 mr-2" />
                  {channel.title}
                </h3>
                <p>{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Strategy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Partnership Strategy"
            subtitle="Collaborating for Mutual Growth"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {partnershipOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Network className="h-6 w-6 text-pink-500 mr-2" />
                  {opportunity.title}
                </h3>
                <p>{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Implementation Timeline"
            subtitle="Phased Approach to Success"
            centered
          />
          
          <Table className="bg-white rounded-lg shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead>Phase</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead>Activities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Phase 1: Launch</TableCell>
                <TableCell>Month 1-3</TableCell>
                <TableCell>Brand launch, initial marketing campaigns, VIP program setup</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phase 2: Growth</TableCell>
                <TableCell>Month 4-6</TableCell>
                <TableCell>Expand marketing efforts, host major events, build partnerships</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phase 3: Sustain</TableCell>
                <TableCell>Month 7-12</TableCell>
                <TableCell>Maintain brand presence, optimize VIP program, ensure customer loyalty</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Budget Allocation"
            subtitle="Strategic Investment for Maximum Impact"
            centered
          />
          
          <Table className="bg-white rounded-lg shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Budget</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetBreakdown.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.budget}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Success Metrics"
            subtitle="Measuring Performance and Achieving Goals"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-500 mr-2" />
                  {metric.title}
                </h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Elevate Your Premium Brand?"
        description="Let's discuss how our strategic marketing expertise can help your luxury business achieve remarkable growth."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default KotoClub;
