import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Calendar, Star, Users, TrendingUp, Heart, Target, Megaphone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const IChooseTheSun = () => {
  // SEO optimization
  useSEO({
    title: "I Choose The Sun Campaign case study | Heidigital",
    description: "Comprehensive case study of the I Choose The Sun mental health awareness campaign. Complete strategy analysis, social media impact, and community engagement results.",
    keywords: "I Choose The Sun campaign, mental health awareness, social media campaign, community engagement, mental wellness, suicide prevention, youth support, campaign strategy, social impact",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
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
          "headline": "I Choose The Sun Campaign Case Study",
          "description": "In-depth analysis of the I Choose The Sun campaign, its social media strategies, and community impact on mental health awareness.",
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
          "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "CaseStudy",
          "name": "I Choose The Sun Campaign",
          "description": "Social media campaign for mental health awareness",
          "client": "Various Mental Health Organizations",
          "industry": "Mental Health",
          "location": "Global",
          "startDate": "2023-01-01",
          "endDate": "2023-12-31",
          "budget": "50000 USD"
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
              "name": "I Choose The Sun",
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

  const campaignGoals = [
    {
      title: "Raise Awareness",
      description: "Increase public awareness about mental health issues and reduce stigma.",
      icon: <Megaphone className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Provide Support",
      description: "Offer resources and support for individuals struggling with mental health challenges.",
      icon: <Heart className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Encourage Action",
      description: "Inspire individuals to take action and seek help when needed.",
      icon: <Target className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Community Building",
      description: "Foster a supportive community where individuals can connect and share their experiences.",
      icon: <Users className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const socialMediaPlatforms = [
    {
      title: "Instagram",
      description: "Visual storytelling and community engagement through images and videos.",
    },
    {
      title: "Facebook",
      description: "Sharing resources, articles, and personal stories to reach a wider audience.",
    },
    {
      title: "Twitter",
      description: "Real-time updates, news, and discussions about mental health.",
    },
    {
      title: "TikTok",
      description: "Short, engaging videos to raise awareness and promote positive mental health practices.",
    },
  ];

  const contentStrategies = [
    {
      title: "Personal Stories",
      description: "Sharing personal stories of individuals who have overcome mental health challenges.",
    },
    {
      title: "Expert Interviews",
      description: "Featuring interviews with mental health professionals and experts.",
    },
    {
      title: "Informative Graphics",
      description: "Creating visually appealing graphics with facts and tips about mental health.",
    },
    {
      title: "Interactive Polls",
      description: "Engaging the audience with polls and quizzes about mental health topics.",
    },
  ];

  const communityEngagementTactics = [
    {
      title: "Hashtag Campaigns",
      description: "Encouraging users to share their stories and experiences using a dedicated hashtag.",
    },
    {
      title: "Live Q&A Sessions",
      description: "Hosting live Q&A sessions with mental health experts to answer audience questions.",
    },
    {
      title: "Support Groups",
      description: "Creating online support groups where individuals can connect and share their experiences.",
    },
    {
      title: "Partnerships",
      description: "Collaborating with mental health organizations and influencers to amplify the campaign's message.",
    },
  ];

  const impactMetrics = [
    {
      title: "Social Media Reach",
      description: "Measuring the number of individuals reached through social media platforms.",
    },
    {
      title: "Website Traffic",
      description: "Tracking the number of visitors to the campaign's website.",
    },
    {
      title: "Engagement Rate",
      description: "Monitoring likes, shares, comments, and other forms of engagement on social media posts.",
    },
    {
      title: "Community Growth",
      description: "Measuring the growth of online support groups and communities.",
    },
  ];

  return (
    <Layout>
      <Hero
        title="I Choose The Sun"
        subtitle="A social media campaign dedicated to raising mental health awareness and providing support to those in need"
        backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Campaign Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Campaign Overview"
            subtitle="I Choose The Sun - Mental Health Awareness"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Campaign Name</h3>
                    <p>I Choose The Sun</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Focus</h3>
                    <p>Mental Health Awareness and Support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Target Audience</h3>
                    <p>Individuals struggling with mental health issues, their families, and the wider community.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Vision</h3>
                    <p>To create a world where mental health is valued, and everyone has access to the support they need.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="I Choose The Sun Campaign"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bg-heisocial-purple text-white px-4 py-2 rounded-bl-lg font-bold">
                  Case Study
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Campaign Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campaignGoals.map((goal, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {goal.icon}
                    <h4 className="ml-2 font-bold">{goal.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Social Media Platforms"
            subtitle="Reaching the Target Audience"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">📸</div>
              <p className="text-white/90">Instagram: Visual storytelling and community engagement.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">👍</div>
              <p className="text-white/90">Facebook: Sharing resources and personal stories.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🐦</div>
              <p className="text-white/90">Twitter: Real-time updates and discussions.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🎵</div>
              <p className="text-white/90">TikTok: Short, engaging videos for awareness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Content Strategies"
            subtitle="Engaging and Informative Content"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {contentStrategies.map((strategy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-yellow-500 mr-2" />
                  {strategy.title}
                </h3>
                <p>{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Community Engagement"
            subtitle="Building a Supportive Network"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {communityEngagementTactics.map((tactic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-orange-500 mr-2" />
                  {tactic.title}
                </h3>
                <p>{tactic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Impact Metrics"
            subtitle="Measuring Campaign Success"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-2">{metric.title}</h4>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Make a Difference?"
        description="Let's discuss how our strategic marketing expertise can help your campaign achieve remarkable impact."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default IChooseTheSun;
