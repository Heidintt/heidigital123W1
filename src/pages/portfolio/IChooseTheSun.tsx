import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Calendar, Star, Users, Heart, MessageSquare, Globe } from 'lucide-react';
import { useSEO } from "@/hooks/useSEO";

const IChooseTheSun = () => {
  // SEO optimization
  useSEO({
    title: "I Choose The Sun Campaign case study | Heidigital",
    description: "Complete case study of I Choose The Sun social media campaign. Brand storytelling, content strategy, and community engagement for mental health awareness and positivity.",
    keywords: "I Choose The Sun, social media campaign, brand storytelling, mental health awareness, content strategy, community engagement, positive messaging, campaign case study, social impact marketing",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
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
          "description": "In-depth analysis of the I Choose The Sun social media campaign, focusing on brand storytelling, content strategy, and community engagement for mental health awareness and positivity.",
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
          "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "CaseStudy",
          "name": "I Choose The Sun Campaign",
          "description": "Social media campaign for mental health awareness and positivity",
          "client": "Various Mental Health Organizations",
          "industry": "Mental Health, Social Media Marketing",
          "services": ["Brand Storytelling", "Content Strategy", "Community Engagement"]
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
      description: "Increase public awareness about mental health and the importance of positivity.",
      icon: <Globe className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Community Engagement",
      description: "Foster a supportive online community where individuals can share their stories and experiences.",
      icon: <Users className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Positive Messaging",
      description: "Promote positive thinking and coping mechanisms for dealing with mental health challenges.",
      icon: <Heart className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Brand Association",
      description: "Associate the brand with mental health advocacy and social responsibility.",
      icon: <Star className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const targetAudiences = [
    {
      title: "Young Adults",
      description: "Individuals aged 18-35 who are active on social media and interested in mental health topics.",
    },
    {
      title: "Mental Health Advocates",
      description: "Organizations and individuals working in the field of mental health advocacy and support.",
    },
    {
      title: "General Public",
      description: "The broader population interested in learning more about mental health and well-being.",
    },
  ];

  const keyMessagingThemes = [
    {
      title: "Hope",
      description: "Emphasizing the possibility of recovery and a brighter future.",
    },
    {
      title: "Resilience",
      description: "Highlighting the strength and ability to overcome challenges.",
    },
    {
      title: "Community",
      description: "Promoting the importance of social support and connection.",
    },
    {
      title: "Self-Care",
      description: "Encouraging individuals to prioritize their mental and emotional well-being.",
    },
  ];

  const contentFormats = [
    {
      title: "Personal Stories",
      description: "Sharing real-life stories of individuals who have overcome mental health challenges.",
    },
    {
      title: "Expert Interviews",
      description: "Featuring interviews with mental health professionals and advocates.",
    },
    {
      title: "Informative Graphics",
      description: "Creating visually appealing graphics with facts and tips about mental health.",
    },
    {
      title: "Interactive Polls",
      description: "Engaging the audience with polls and quizzes related to mental health topics.",
    },
  ];

  const socialMediaPlatforms = [
    {
      title: "Instagram",
      description: "Visual content, personal stories, and community engagement.",
    },
    {
      title: "Facebook",
      description: "Informative articles, expert interviews, and community discussions.",
    },
    {
      title: "Twitter",
      description: "Quick updates, facts, and links to resources.",
    },
    {
      title: "TikTok",
      description: "Short videos, challenges, and creative content.",
    },
  ];

  const communityEngagementTactics = [
    {
      title: "User-Generated Content",
      description: "Encouraging followers to share their own stories and experiences.",
    },
    {
      title: "Live Q&A Sessions",
      description: "Hosting live Q&A sessions with mental health experts.",
    },
    {
      title: "Online Challenges",
      description: "Creating challenges that promote positive thinking and self-care.",
    },
    {
      title: "Support Groups",
      description: "Facilitating online support groups for individuals facing similar challenges.",
    },
  ];

  const successMetrics = [
    {
      title: "Reach and Impressions",
      description: "Measuring the number of people who have seen the campaign content.",
    },
    {
      title: "Engagement Rate",
      description: "Tracking likes, shares, comments, and other forms of engagement.",
    },
    {
      title: "Website Traffic",
      description: "Monitoring traffic to the campaign website and related resources.",
    },
    {
      title: "Community Growth",
      description: "Assessing the growth of the online community and participation levels.",
    },
  ];

  return (
    <Layout>
      <Hero
        title="I Choose The Sun Campaign"
        subtitle="A social media initiative promoting mental health awareness and positivity"
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Project Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Project Overview"
            subtitle="I Choose The Sun - Mental Health Campaign"
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
                    <p>Mental Health Awareness and Positivity</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Concept</h3>
                    <p>A social media campaign designed to promote mental health awareness and positivity through brand storytelling, content strategy, and community engagement.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Vision</h3>
                    <p>To create a supportive online community where individuals can share their stories, find resources, and promote positive thinking.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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

      {/* Target Audience Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Target Audience"
            subtitle="Identifying the Ideal Participants"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl mb-4">
                  {index === 0 && "🧑‍🤝‍🧑"}
                  {index === 1 && "📢"}
                  {index === 2 && "🌍"}
                </div>
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-white/90">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Messaging Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Key Messaging Themes"
            subtitle="Crafting the Right Message"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {keyMessagingThemes.map((theme, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 text-yellow-500 mr-2" />
                  {theme.title}
                </h3>
                <p>{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Content Strategy"
            subtitle="Creating Engaging and Informative Content"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {contentFormats.map((format, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-6 w-6 text-orange-500 mr-2" />
                  {format.title}
                </h3>
                <p>{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Platforms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Social Media Platforms"
            subtitle="Choosing the Right Channels"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {socialMediaPlatforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-red-500 mr-2" />
                  {platform.title}
                </h3>
                <p>{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Community Engagement Tactics"
            subtitle="Fostering a Supportive Online Environment"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {communityEngagementTactics.map((tactic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-pink-500 mr-2" />
                  {tactic.title}
                </h3>
                <p>{tactic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Success Metrics"
            subtitle="Measuring the Impact of the Campaign"
            centered
          />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {successMetrics.map((metric, index) => (
                <TableRow key={index}>
                  <TableCell>{metric.title}</TableCell>
                  <TableCell>{metric.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <CallToAction
        title="Ready to Launch Your Own Social Impact Campaign?"
        description="Let's discuss how our strategic marketing expertise can help your organization make a difference."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default IChooseTheSun;
