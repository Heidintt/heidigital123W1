import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Calendar, Star, Users, TrendingUp, Eye, Heart, Share2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const IChooseTheSun = () => {
  // SEO optimization
  useSEO({
    title: "I Choose The Sun Campaign Case Study | Heidi Digital",
    description: "Sun Life Vietnam's viral 'I Choose The Sun' campaign case study - 75.6M views, 8,000+ user videos, and 340% engagement increase during COVID-19 pandemic.",
    keywords: "I Choose The Sun campaign, Sun Life Vietnam, viral marketing, COVID-19 marketing, TikTok campaign, H'Hen Niê, influencer marketing, user generated content, social media campaign, pandemic marketing",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    url: "https://heidigital.info/portfolio/i-choose-the-sun",
    type: "article"
  });

  // Structured Data for SEO
  React.useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://heidigital.info/portfolio/i-choose-the-sun#article",
          "headline": "Sun Life Vietnam I Choose The Sun Campaign Case Study",
          "description": "Comprehensive case study of Sun Life Vietnam's viral social media campaign that generated 75.6M views and 8,000+ user-generated videos during COVID-19 pandemic.",
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
            "@id": "https://heidigital.info/portfolio/i-choose-the-sun"
          },
          "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "datePublished": "2021-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "CaseStudy",
          "name": "I Choose The Sun Campaign",
          "description": "Viral social media campaign for Sun Life Vietnam during COVID-19 pandemic",
          "client": "Sun Life Vietnam",
          "industry": "Insurance & Financial Services",
          "results": "75.6M views, 8,000+ user videos, 340% engagement increase"
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
              "name": "I Choose The Sun Campaign",
              "item": "https://heidigital.info/portfolio/i-choose-the-sun"
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

  const campaignOverview = [
    {
      title: "Campaign Duration",
      value: "6 months",
      description: "From concept to viral success",
      icon: <Calendar className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Total Views",
      value: "75.6M",
      description: "Across all social platforms",
      icon: <Eye className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "User Videos",
      value: "8,000+",
      description: "User-generated content pieces",
      icon: <Share2 className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Engagement",
      value: "340%",
      description: "Increase in brand engagement",
      icon: <Heart className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const keyInfluencers = [
    "H'Hen Niê - Miss Universe Vietnam",
    "Khánh Vân - Miss Universe Vietnam",
    "Various TikTok creators and micro-influencers",
    "Vietnamese celebrities and public figures",
  ];

  const platformStrategy = [
    {
      platform: "TikTok",
      strategy: "Dance challenges and creative video content with #IChooseTheSun hashtag",
      results: "45M+ views, 5,000+ user videos",
    },
    {
      platform: "Instagram",
      strategy: "Photo stories, reels, and IGTV content featuring positive moments",
      results: "20M+ reach, 2,500+ user posts",
    },
    {
      platform: "Facebook",
      strategy: "Community engagement, sharing personal stories of hope",
      results: "10.6M+ reach, 500+ community posts",
    },
    {
      platform: "YouTube",
      strategy: "Long-form inspirational content and behind-the-scenes footage",
      results: "Premium content, brand storytelling",
    },
  ];

  const campaignPhases = [
    {
      phase: "Phase 1: Concept & Seeding",
      duration: "Month 1",
      activities: "Celebrity partnerships, initial content creation, hashtag launch",
    },
    {
      phase: "Phase 2: Viral Amplification", 
      duration: "Month 2-3",
      activities: "User-generated content campaigns, TikTok challenges, community engagement",
    },
    {
      phase: "Phase 3: Sustaining Momentum",
      duration: "Month 4-6", 
      activities: "Continuous content creation, brand integration, results optimization",
    },
  ];

  const successMetrics = [
    {
      metric: "Brand Awareness",
      achievement: "150% increase in brand recognition",
      description: "Significant improvement in aided and unaided brand recall",
    },
    {
      metric: "Social Following",
      achievement: "200% growth across platforms",
      description: "Substantial increase in followers and community size",
    },
    {
      metric: "Website Traffic",
      achievement: "250% increase from social media",
      description: "Dramatic boost in qualified website visitors",
    },
    {
      metric: "Sentiment Analysis",
      achievement: "85% positive brand sentiment",
      description: "Overwhelmingly positive audience response and feedback",
    },
  ];

  return (
    <Layout>
      <Hero
        title="I Choose The Sun Campaign"
        subtitle="Sun Life Vietnam's viral social media phenomenon - A beacon of hope during COVID-19"
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Campaign Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Campaign Overview"
            subtitle="Spreading Positivity During Challenging Times"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Client</h3>
                    <p>Sun Life Vietnam</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Campaign Period</h3>
                    <p>March - August 2021</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Campaign Message</h3>
                    <p>"I Choose The Sun" - Choosing positivity, hope, and brightness even in dark times.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Objective</h3>
                    <p>Maintain brand visibility while providing hope and community engagement during COVID-19.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="I Choose The Sun Campaign Visual" 
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bg-heisocial-purple text-white px-4 py-2 rounded-bl-lg font-bold">
                  Case Study
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Campaign Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campaignOverview.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h4 className="ml-2 font-bold">{item.title}</h4>
                  </div>
                  <div className="text-2xl font-bold text-heisocial-purple mb-2">{item.value}</div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Strategy Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="The Challenge"
            subtitle="Marketing During a Global Pandemic"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">😷</div>
              <p className="text-white/90">COVID-19 lockdowns created widespread anxiety and depression.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <p className="text-white/90">Increased social media usage as people stayed home.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <p className="text-white/90">Need for brands to provide hope and positive messaging.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <p className="text-white/90">Opportunity to build stronger community connections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Strategy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Influencer Partnership Strategy"
            subtitle="Authentic Voices for Authentic Messages"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Key Influencers</h3>
              <ul className="space-y-4">
                {keyInfluencers.map((influencer, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                    <span>{influencer}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Partnership Approach</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Authentic Storytelling</h4>
                  <p className="text-gray-600">Influencers shared personal stories of how they "choose the sun" daily.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Creative Freedom</h4>
                  <p className="text-gray-600">Allowed influencers to interpret the message in their unique style.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Community Engagement</h4>
                  <p className="text-gray-600">Encouraged followers to share their own positive moments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Strategy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Multi-Platform Strategy"
            subtitle="Maximizing Reach Across Social Channels"
            centered
          />
          
          <div className="space-y-6">
            {platformStrategy.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-heisocial-blue mb-2">{platform.platform}</h3>
                    <Badge variant="secondary" className="mb-2">Primary Platform</Badge>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Strategy</h4>
                    <p className="text-gray-600">{platform.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Results</h4>
                    <p className="text-green-600 font-semibold">{platform.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Phases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Campaign Execution Phases"
            subtitle="Strategic Timeline and Milestones"
            centered
          />
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Phase</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Key Activities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaignPhases.map((phase, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold">{phase.phase}</TableCell>
                  <TableCell>{phase.duration}</TableCell>
                  <TableCell>{phase.activities}</TableCell>
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
            title="Success Metrics & Impact"
            subtitle="Measurable Results Beyond Views"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-heisocial-purple">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-heisocial-purple mr-2" />
                  {metric.metric}
                </h3>
                <div className="text-2xl font-bold text-heisocial-purple mb-2">{metric.achievement}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Key Learnings & Success Factors"
            subtitle="What Made This Campaign Exceptional"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                Authentic Messaging
              </h3>
              <p>The campaign felt genuine and relevant to the times, resonating deeply with audiences facing pandemic challenges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 text-green-500 mr-2" />
                Community Participation
              </h3>
              <p>Making the audience part of the story through user-generated content created unprecedented engagement levels.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
                Platform Optimization
              </h3>
              <p>Tailoring content to each platform's strengths maximized reach and engagement across different demographics.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Create Your Viral Campaign?"
        description="Let's discuss how our proven strategies can help your brand create meaningful connections and drive exceptional results."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default IChooseTheSun;
