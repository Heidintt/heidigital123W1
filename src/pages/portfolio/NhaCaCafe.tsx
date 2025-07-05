
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Calendar, Star, Users, Coffee, Heart, Camera, Palette } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const NhaCaCafe = () => {
  // SEO optimization
  useSEO({
    title: "Nha Ca Cafe Branding & Marketing Strategy | Heidi Digital", 
    description: "Complete branding and marketing strategy for Nha Ca Cafe - Vietnam's premier cat cafe experience. Brand identity, workshop programs, and creative community building strategies.",
    keywords: "Nha Ca Cafe, cat cafe marketing, Vietnam cafe branding, creative workshops, photography, cat therapy, community building, brand identity, creative space marketing, cafe strategy",
    image: "/uploads/nha-ca-thumb.jpg",
    url: "https://heidigital.info/portfolio/nha-ca-cafe",
    type: "article"
  });

  // Structured Data for SEO
  React.useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://heidigital.info/portfolio/nha-ca-cafe#article",
          "headline": "Nha Ca Cafe Branding & Marketing Strategy",
          "description": "Comprehensive branding and marketing strategy for Vietnam's premier cat cafe combining pet therapy with creative community experiences.",
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
            "@id": "https://heidigital.info/portfolio/nha-ca-cafe"
          },
          "image": "/uploads/nha-ca-thumb.jpg",
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "CaseStudy",
          "name": "Nha Ca Cafe Branding Strategy",
          "description": "Complete brand identity and marketing strategy for cat cafe with creative community focus",
          "client": "Nha Ca Cafe",
          "industry": "Food & Beverage, Creative Services",
          "services": ["Branding", "Photography", "Digital Portfolio", "Workshop Programs"]
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
              "name": "Nha Ca Cafe",
              "item": "https://heidigital.info/portfolio/nha-ca-cafe"
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

  const objectives = [
    {
      title: "Brand Awareness",
      description: "Increase brand visibility and recognition within the local community and among tourists.",
      icon: <Star className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Customer Engagement",
      description: "Enhance customer interaction and loyalty through unique experiences and community events.",
      icon: <Heart className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Workshop Participation",
      description: "Drive participation in creative workshops and events, establishing Nha Ca Cafe as a creative hub.",
      icon: <Palette className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Photography",
      description: "Showcase the cafe's unique atmosphere and photogenic cats through high-quality photography.",
      icon: <Camera className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const workshopData = [
    {
      title: "Cat Photography Workshop",
      description: "Learn how to capture the best moments with our feline friends.",
      icon: <Camera className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Creative Writing with Cats",
      description: "Find inspiration and purr-fect your writing skills in the company of cats.",
      icon: <Palette className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Cat Therapy Sessions",
      description: "Relax and de-stress with our certified cat therapists.",
      icon: <Heart className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  const brandValues = [
    {
      title: "Community",
      description: "Creating a welcoming space for cat lovers and creative minds.",
      icon: <Users className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Creativity",
      description: "Inspiring artistic expression through workshops and events.",
      icon: <Palette className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Compassion",
      description: "Promoting animal welfare and responsible pet ownership.",
      icon: <Heart className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Coffee",
      description: "Serving high-quality coffee and treats in a cozy environment.",
      icon: <Coffee className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Nha Ca Cafe"
        subtitle="Where Creativity Purrs to Life - Complete branding and marketing strategy for Vietnam's premier cat cafe experience"
        backgroundImage="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Project Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Project Overview"
            subtitle="Nha Ca Cafe - Cat Cafe"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Brand Name</h3>
                    <p>Nha Ca Cafe - Cat Cafe</p>
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
                    <p>A unique cat cafe that combines pet therapy with creative community experiences.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Vision</h3>
                    <p>To become a leading destination for cat lovers and creative enthusiasts in Vietnam.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Cat Cafe Experience"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bg-heisocial-purple text-white px-4 py-2 rounded-bl-lg font-bold">
                  Case Study
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Specific Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {objective.icon}
                    <h4 className="ml-2 font-bold">{objective.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Market Analysis"
            subtitle="Understanding the Cat Cafe Trend"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🐱</div>
              <p className="text-white/90">Growing popularity of cat cafes worldwide.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">☕</div>
              <p className="text-white/90">Demand for unique and relaxing cafe experiences.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">📸</div>
              <p className="text-white/90">Social media influence on cafe visits and sharing.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <p className="text-white/90">Interest in creative workshops and community events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Concept Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Brand Concept"
            subtitle="Creating a Purr-fectly Creative Space"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Coffee className="h-6 w-6 text-pink-500 mr-2" />
                Cozy Cafe Atmosphere
              </h3>
              <p>Comfortable seating, warm lighting, and a welcoming environment for cat lovers.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Heart className="h-6 w-6 text-purple-500 mr-2" />
                Cat Therapy
              </h3>
              <p>Providing a therapeutic and relaxing experience with friendly cats.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Palette className="h-6 w-6 text-indigo-500 mr-2" />
                Creative Workshops
              </h3>
              <p>Offering a variety of workshops and events to inspire creativity and community engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Target Audience"
            subtitle="Who We're Meant to Attract"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Cat Lovers</h4>
              <p className="text-gray-600">Individuals who adore cats and seek a unique experience.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Creative Enthusiasts</h4>
              <p className="text-gray-600">People interested in photography, writing, and other creative pursuits.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Students & Young Professionals</h4>
              <p className="text-gray-600">Those looking for a relaxing and inspiring environment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Tourists</h4>
              <p className="text-gray-600">Visitors seeking unique and memorable experiences in Ho Chi Minh City.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Brand Identity"
            subtitle="Visual Elements and Messaging"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-600 to-pink-500 text-white">
              <Palette className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Color Palette</h3>
              <p>Soft pinks, warm grays, and natural greens to create a calming atmosphere.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 text-white">
              <Coffee className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Typography</h3>
              <p>Elegant and readable fonts that convey creativity and comfort.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-500 text-white">
              <Camera className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Imagery</h3>
              <p>High-quality photos of cats, coffee, and creative activities.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Brand Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h4 className="ml-2 font-bold">{value.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Program Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Workshop Program"
            subtitle="Creative and Therapeutic Activities"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopData.map((workshop, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {workshop.icon}
                  <h4 className="ml-2 font-bold">{workshop.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Strategy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Marketing Strategy"
            subtitle="Reaching Cat Lovers and Creative Minds"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Star className="h-6 w-6 text-pink-500 mr-2" />
                Social Media Marketing
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Engaging content on Instagram, Facebook, and TikTok</li>
                <li>Cat photography contests and user-generated content</li>
                <li>Partnerships with cat influencers and local artists</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-purple-500 mr-2" />
                Events and Workshops
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Weekly cat photography workshops</li>
                <li>Monthly creative writing sessions</li>
                <li>Special events for cat adoption and animal welfare</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 text-indigo-500 mr-2" />
                Community Building
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Loyalty programs for regular customers</li>
                <li>Partnerships with local businesses and organizations</li>
                <li>Creating a welcoming and inclusive environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Portfolio Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Digital Portfolio"
            subtitle="Showcasing the Cafe's Unique Charm"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573865526739-107569ca9778?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Cat Cafe Interior"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">Interior design and cozy atmosphere.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Cats in the Cafe"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">Friendly cats and their playful interactions.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1497953444336-e3959b597a7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Workshop Session"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">Participants enjoying a creative workshop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Implementation Roadmap"
            subtitle="Timeline and Key Milestones"
            centered
          />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Phase</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead>Activities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Phase 1: Brand Launch</TableCell>
                <TableCell>Month 1-3</TableCell>
                <TableCell>
                  <ul>
                    <li>Establish brand identity and visual elements</li>
                    <li>Launch social media profiles</li>
                    <li>Host grand opening event</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phase 2: Community Building</TableCell>
                <TableCell>Month 4-6</TableCell>
                <TableCell>
                  <ul>
                    <li>Organize weekly workshops and events</li>
                    <li>Partner with local businesses</li>
                    <li>Implement loyalty programs</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phase 3: Expansion</TableCell>
                <TableCell>Month 7-12</TableCell>
                <TableCell>
                  <ul>
                    <li>Explore new workshop themes</li>
                    <li>Expand partnerships and collaborations</li>
                    <li>Evaluate and refine marketing strategies</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Success Metrics"
            subtitle="Measuring Our Impact"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Social Media Engagement</h4>
              <p className="text-gray-600">Tracking likes, shares, and comments on social media platforms.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Workshop Participation</h4>
              <p className="text-gray-600">Measuring the number of attendees and feedback from workshops.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Customer Loyalty</h4>
              <p className="text-gray-600">Monitoring repeat visits and customer feedback.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Brand Awareness</h4>
              <p className="text-gray-600">Assessing brand recognition through surveys and local media coverage.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Build Your Creative Brand?"
        description="Let's discuss how our branding and marketing expertise can help your creative business thrive."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default NhaCaCafe;
