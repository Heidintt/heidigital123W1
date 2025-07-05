import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Calendar, Star, Users, Coffee, Utensils, TrendingUp, Camera } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const LuaHongBuffet = () => {
  // SEO optimization
  useSEO({
    title: "Lửa Hồng Buffet Marketing Strategy | Heidi Digital",
    description: "Vibrant marketing plan for a hot pot buffet in Ho Chi Minh City targeting youth with interactive content and engaging events.",
    keywords: "Lửa Hồng Buffet, hot pot marketing, Ho Chi Minh City restaurant, youth marketing, buffet strategy, social media marketing, food marketing, restaurant branding",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    url: "https://heidigital.info/portfolio/lua-hong-buffet",
    type: "article"
  });

  // Structured Data for SEO
  React.useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://heidigital.info/portfolio/lua-hong-buffet#article",
          "headline": "Lửa Hồng Buffet Marketing Strategy",
          "description": "Comprehensive marketing strategy for a hot pot buffet in Ho Chi Minh City targeting youth with interactive content and engaging events.",
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
            "@id": "https://heidigital.info/portfolio/lua-hong-buffet"
          },
          "image": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "CaseStudy",
          "name": "Lửa Hồng Buffet Marketing Strategy",
          "description": "Marketing strategy for a hot pot buffet in Ho Chi Minh City targeting youth.",
          "client": "Lửa Hồng Buffet",
          "industry": "Food & Beverage",
          "location": "Ho Chi Minh City, Vietnam"
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
              "name": "Lửa Hồng Buffet Strategy",
              "item": "https://heidigital.info/portfolio/lua-hong-buffet"
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

  const targetAudiences = [
    {
      title: "Young Adults",
      description: "Students and young professionals aged 18-28 seeking affordable dining options.",
      icon: <Users className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Group Diners",
      description: "Groups of friends and colleagues looking for a fun and interactive dining experience.",
      icon: <Coffee className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Social Media Enthusiasts",
      description: "Customers who enjoy sharing their dining experiences on social media platforms.",
      icon: <Camera className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const marketingObjectives = [
    {
      title: "Increase Brand Awareness",
      description: "Enhance brand visibility and recognition among the target audience.",
      icon: <Star className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Drive Customer Traffic",
      description: "Attract more customers to the restaurant through targeted marketing campaigns.",
      icon: <TrendingUp className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Boost Social Media Engagement",
      description: "Encourage customers to interact with the brand on social media platforms.",
      icon: <Heart className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const socialMediaPlatforms = [
    {
      title: "Facebook",
      description: "Run targeted ads and create engaging content to reach a broad audience.",
    },
    {
      title: "Instagram",
      description: "Showcase visually appealing food photos and stories to attract young diners.",
    },
    {
      title: "TikTok",
      description: "Create fun and interactive videos to engage with the youth market.",
    },
  ];

  const eventMarketingActivities = [
    {
      title: "Student Nights",
      description: "Offer special discounts and promotions for students on specific nights.",
    },
    {
      title: "Group Dining Deals",
      description: "Provide attractive deals for large groups to encourage group dining.",
    },
    {
      title: "Themed Events",
      description: "Organize themed events and parties to create a unique dining experience.",
    },
  ];

  const contentMarketingStrategies = [
    {
      title: "Food Photography",
      description: "Showcase high-quality photos of the buffet's dishes and dining environment.",
    },
    {
      title: "Customer Testimonials",
      description: "Share positive reviews and testimonials from satisfied customers.",
    },
    {
      title: "Behind-the-Scenes Content",
      description: "Provide a glimpse into the restaurant's kitchen and food preparation process.",
    },
  ];

  const partnershipOpportunities = [
    {
      title: "Local Universities",
      description: "Collaborate with local universities to promote the buffet to students.",
    },
    {
      title: "Food Bloggers",
      description: "Partner with food bloggers and influencers to review the buffet.",
    },
    {
      title: "Event Organizers",
      description: "Work with event organizers to host after-parties and special events.",
    },
  ];

  const budgetAllocation = [
    { item: "Social Media Advertising", budget: "30%" },
    { item: "Event Marketing", budget: "25%" },
    { item: "Content Creation", budget: "20%" },
    { item: "Partnerships", budget: "15%" },
    { item: "Contingency", budget: "10%" },
  ];

  const successMetrics = [
    {
      title: "Customer Traffic",
      description: "Track the number of customers visiting the restaurant.",
    },
    {
      title: "Social Media Engagement",
      description: "Monitor likes, shares, and comments on social media platforms.",
    },
    {
      title: "Brand Awareness",
      description: "Measure brand recognition through surveys and online mentions.",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Lửa Hồng Buffet Marketing Strategy"
        subtitle="Capturing the Youth Market with Interactive Hot Pot Experiences"
        backgroundImage="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Project Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Project Overview"
            subtitle="Lửa Hồng Buffet - Hot Pot Restaurant"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Brand Name</h3>
                    <p>Lửa Hồng Buffet - Hot Pot Restaurant</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p>Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Concept</h3>
                    <p>A vibrant hot pot restaurant offering an interactive and engaging dining experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Vision</h3>
                    <p>To become the go-to destination for young diners in Ho Chi Minh City's competitive hot pot market.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Lửa Hồng Buffet Hot Pot"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bg-heisocial-purple text-white px-4 py-2 rounded-bl-lg font-bold">
                  Case Study
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Target Audience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetAudiences.map((audience, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {audience.icon}
                    <h4 className="ml-2 font-bold">{audience.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Objectives Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Marketing Objectives"
            subtitle="Goals and Strategies"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {marketingObjectives.map((objective, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {objective.icon}
                  <h4 className="ml-2 font-bold">{objective.title}</h4>
                </div>
                <p className="text-white/90">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Strategy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Social Media Strategy"
            subtitle="Engaging the Youth Market Online"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {socialMediaPlatforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="h-6 w-6 text-red-500 mr-2" />
                  {platform.title}
                </h3>
                <p>{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Marketing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Event Marketing"
            subtitle="Creating Memorable Dining Experiences"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {eventMarketingActivities.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-6 w-6 text-orange-500 mr-2" />
                  {event.title}
                </h3>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Marketing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Content Marketing"
            subtitle="Showcasing the Buffet's Unique Appeal"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contentMarketingStrategies.map((content, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Camera className="h-6 w-6 text-yellow-500 mr-2" />
                  {content.title}
                </h3>
                <p>{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Strategy Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Partnership Strategy"
            subtitle="Collaborating for Mutual Growth"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {partnershipOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-green-500 mr-2" />
                  {opportunity.title}
                </h3>
                <p>{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Allocation Section */}
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
              {budgetAllocation.map((item, index) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
                  {metric.title}
                </h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Attract the Youth Market?"
        description="Let's discuss how our marketing strategies can help your restaurant thrive."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default LuaHongBuffet;
