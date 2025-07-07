
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Target, Users, Music, Star, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const KotoClub = () => {
  // SEO optimization
  useSEO({
    title: "Koto Club Da Nang Marketing Strategy | Heidi Digital",
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

  return (
    <Layout>
      <Hero
        title="Koto Club Da Nang"
        subtitle="2025 First Half Marketing Strategy"
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Brand Introduction & Strategic Concept */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Brand Introduction & Strategic Concept"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-400">Vision & Mission</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Vision:</h4>
                  <p className="text-gray-300">To be Da Nang's most sought-after premium nightlife destination, where sophisticated experiences meet unforgettable memories.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Mission:</h4>
                  <p className="text-gray-300">Creating curated nightlife experiences that cater to discerning adults seeking quality, sophistication, and authentic connections.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-400">Positioning Statement</h3>
              </div>
              <p className="text-gray-300">Koto Club: The premium nightlife destination where mature energy, sophistication, and unforgettable experiences converge in the heart of Da Nang.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Music className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-400">Unique Value Proposition</h3>
              </div>
              <p className="text-gray-300">Curated music experiences with deep house, live saxophone, and retro vibes - designed for the discerning 22-40 demographic seeking quality over chaos.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-pink-400 mr-3" />
                <h3 className="text-xl font-bold text-pink-400">Brand Personality</h3>
              </div>
              <p className="text-gray-300">Sophisticated yet approachable, exclusive but welcoming, trendy yet timeless - where every night tells a story worth remembering.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-cyan-400">Market Context</h3>
              </div>
              <p className="text-gray-300">Da Nang's nightlife scene is evolving, with increasing demand for sophisticated venues that cater to mature professionals and international visitors seeking premium experiences beyond typical tourist bars.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400">Experience Promise</h3>
              </div>
              <p className="text-gray-300">Premium cocktails, curated ambiance, and VIP treatment that transforms ordinary nights into extraordinary memories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives 2025 */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Strategic Objectives 2025"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Brand Recognition</h3>
              <p className="text-gray-300 text-sm mb-4">Establish Koto Club as Da Nang's premier nightlife destination for the 22-40 demographic</p>
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                35% increase in brand awareness by mid-2025
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Customer Growth</h3>
              <p className="text-gray-300 text-sm mb-4">Build a loyal customer base of tourists and locals seeking premium experiences</p>
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                75% weekend occupancy rate consistently
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Revenue Excellence</h3>
              <p className="text-gray-300 text-sm mb-4">Maximize revenue through VIP services and premium pricing strategy</p>
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                25% VIP table booking rate
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <Star className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Social Influence</h3>
              <p className="text-gray-300 text-sm mb-4">Create buzz and social media presence that drives organic growth</p>
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                80% increase in social media followers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market Analysis */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Target Market Analysis"
            subtitle="Understanding Our Audience"
            centered
          />

          <div className="mt-12 space-y-8">
            {/* International Tourists */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">International Tourists</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Demographics & Profile</h4>
                  <p className="text-gray-600 mb-2"><strong>Age:</strong> 22-40 years</p>
                  <p className="text-gray-600">Mid-to-high income visitors seeking premium nightlife experiences</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Behavior & Preferences</h4>
                  <p className="text-gray-600">Value quality service, willing to pay for exclusive experiences, active on social media</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Pain Points & Motivations</h4>
                  <p className="text-gray-600"><strong>Challenges:</strong> Limited knowledge of local venues, concerns about quality and safety</p>
                  <p className="text-gray-600"><strong>Drivers:</strong> Create memorable vacation experiences, social media content, networking</p>
                </div>
              </div>
            </div>

            {/* Local Professionals */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Local Professionals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Demographics & Profile</h4>
                  <p className="text-gray-600 mb-2"><strong>Age:</strong> 25-40 years</p>
                  <p className="text-gray-600">Established professionals and expats in Da Nang/Hoi An/Hue area</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Behavior & Preferences</h4>
                  <p className="text-gray-600">Regular entertainment budget, appreciate consistent quality, referral-driven</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Pain Points & Motivations</h4>
                  <p className="text-gray-600"><strong>Challenges:</strong> Lack of sophisticated venues, inconsistent service quality</p>
                  <p className="text-gray-600"><strong>Drivers:</strong> Regular social outlet, professional networking, stress relief</p>
                </div>
              </div>
            </div>

            {/* Special Occasion Groups */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Special Occasion Groups</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Demographics & Profile</h4>
                  <p className="text-gray-600 mb-2"><strong>Age:</strong> 22-35 years</p>
                  <p className="text-gray-600">Celebrating birthdays, anniversaries, corporate events</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Behavior & Preferences</h4>
                  <p className="text-gray-600">Higher spending during celebrations, group bookings, photo-sharing</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Pain Points & Motivations</h4>
                  <p className="text-gray-600"><strong>Challenges:</strong> Finding venues that can accommodate groups with style</p>
                  <p className="text-gray-600"><strong>Drivers:</strong> Making celebrations memorable, impressing guests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Analysis */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Competitive Landscape Analysis"
            subtitle="Positioning Against Competition"
            centered
          />

          <div className="mt-12">
            <Table className="bg-white rounded-lg shadow-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Competitor</TableHead>
                  <TableHead className="font-bold">Key Strengths</TableHead>
                  <TableHead className="font-bold">Weaknesses</TableHead>
                  <TableHead className="font-bold">Our Opportunity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Sky Bar Da Nang</TableCell>
                  <TableCell>Rooftop location, city views</TableCell>
                  <TableCell>Limited music variety, inconsistent service</TableCell>
                  <TableCell className="text-purple-600 font-semibold">Superior music curation and VIP experience</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Local Beach Clubs</TableCell>
                  <TableCell>Beach proximity, tourist traffic</TableCell>
                  <TableCell>Seasonal dependency, younger crowd focus</TableCell>
                  <TableCell className="text-purple-600 font-semibold">Year-round operation, mature demographic targeting</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Hotel Bars</TableCell>
                  <TableCell>Consistent quality, tourist base</TableCell>
                  <TableCell>Limited atmosphere, early closing</TableCell>
                  <TableCell className="text-purple-600 font-semibold">Extended hours, energetic but sophisticated atmosphere</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Marketing Mix Strategy (4Ps) */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Marketing Mix Strategy (4Ps)"
            subtitle="Comprehensive Market Approach"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Product */}
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Product (Experience)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                  <span>Upgrade cocktail menu: Signature drinks aimed at 30+ crowd</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                  <span>Special music nights: Deep house, live saxophone, retro house vibes</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                  <span>VIP packages: Premium bottle service with dedicated areas</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                  <span>Themed nights: Monthly curated experiences</span>
                </li>
              </ul>
            </div>

            {/* Price */}
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Price</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                  <span>Maintain mid-high pricing positioning</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                  <span>Early night happy hour deals (7-9PM) to attract after-dinner crowd</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                  <span>VIP table packages with value-added services</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                  <span>Loyalty program with exclusive member pricing</span>
                </li>
              </ul>
            </div>

            {/* Place */}
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Place</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Create more exclusive VIP spaces with premium comfort</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Enhanced table service and bottle packages</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Premium sofa areas designed for conversation</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Strategic lighting and sound zones</span>
                </li>
              </ul>
            </div>

            {/* Promotion */}
            <div className="bg-pink-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-pink-600 mb-6">Promotion</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-1" />
                  <span>Targeted Facebook + Instagram ads (age 22-40)</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-1" />
                  <span>Google Ads optimization for nightlife keywords</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-1" />
                  <span>Hotel package promotions with bundled deals</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-1" />
                  <span>Influencer partnerships with lifestyle content creators</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-1" />
                  <span>Loyalty offers: Every 5th visit rewards program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy & Social Media Framework */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Content Strategy & Social Media Framework"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Lifestyle Moments</h3>
              <p className="text-gray-300 text-sm mb-4">Sophisticated nightlife experiences, premium cocktail artistry</p>
              <div className="space-y-2 text-sm">
                <p><span className="text-green-400 font-semibold">Frequency:</span> Daily posts</p>
                <p><span className="text-green-400 font-semibold">Platforms:</span> Instagram, Facebook</p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Music & Atmosphere</h3>
              <p className="text-gray-300 text-sm mb-4">Behind-the-scenes DJ content, live music highlights</p>
              <div className="space-y-2 text-sm">
                <p><span className="text-green-400 font-semibold">Frequency:</span> 3x per week</p>
                <p><span className="text-green-400 font-semibold">Platforms:</span> Instagram Stories, TikTok</p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-pink-400 mb-4">VIP Experience</h3>
              <p className="text-gray-300 text-sm mb-4">Exclusive service moments, premium space showcases</p>
              <div className="space-y-2 text-sm">
                <p><span className="text-green-400 font-semibold">Frequency:</span> 2x per week</p>
                <p><span className="text-green-400 font-semibold">Platforms:</span> Instagram, Facebook</p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">Customer Stories</h3>
              <p className="text-gray-300 text-sm mb-4">Testimonials, celebration moments, group experiences</p>
              <div className="space-y-2 text-sm">
                <p><span className="text-green-400 font-semibold">Frequency:</span> Weekly</p>
                <p><span className="text-green-400 font-semibold">Platforms:</span> All platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Budget Allocation */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Marketing Budget Allocation"
            subtitle="Strategic Investment Plan - $15,500 Total"
            centered
          />

          <div className="mt-12">
            <Table className="bg-white rounded-lg shadow-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Category</TableHead>
                  <TableHead className="font-bold">Investment (USD)</TableHead>
                  <TableHead className="font-bold">Budget %</TableHead>
                  <TableHead className="font-bold">Strategic Focus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Social Media Ads (FB, IG)</TableCell>
                  <TableCell>$3,000</TableCell>
                  <TableCell><Badge className="bg-blue-100 text-blue-800">20%</Badge></TableCell>
                  <TableCell>Digital reach & engagement optimization</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Influencer Collaborations</TableCell>
                  <TableCell>$2,500</TableCell>
                  <TableCell><Badge className="bg-purple-100 text-purple-800">17%</Badge></TableCell>
                  <TableCell>Authentic testimonials & lifestyle content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Monthly Event Themes & Decor</TableCell>
                  <TableCell>$4,500</TableCell>
                  <TableCell><Badge className="bg-green-100 text-green-800">30%</Badge></TableCell>
                  <TableCell>Experience enhancement & atmosphere creation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Partnerships (Hotels, Tour Groups)</TableCell>
                  <TableCell>$1,500</TableCell>
                  <TableCell><Badge className="bg-orange-100 text-orange-800">10%</Badge></TableCell>
                  <TableCell>Strategic collaborations & cross-promotion</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Content Creation & Photography</TableCell>
                  <TableCell>$2,000</TableCell>
                  <TableCell><Badge className="bg-cyan-100 text-cyan-800">13%</Badge></TableCell>
                  <TableCell>Professional visual storytelling</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Loyalty Program Development</TableCell>
                  <TableCell>$1,000</TableCell>
                  <TableCell><Badge className="bg-pink-100 text-pink-800">7%</Badge></TableCell>
                  <TableCell>Customer retention & lifetime value</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Contingency & Market Response</TableCell>
                  <TableCell>$1,000</TableCell>
                  <TableCell><Badge className="bg-gray-100 text-gray-800">3%</Badge></TableCell>
                  <TableCell>Agile response to market opportunities</TableCell>
                </TableRow>
                <TableRow className="border-t-2 border-purple-200">
                  <TableCell className="font-bold text-purple-600">TOTAL INVESTMENT</TableCell>
                  <TableCell className="font-bold">$15,500</TableCell>
                  <TableCell><Badge className="bg-purple-100 text-purple-800">100%</Badge></TableCell>
                  <TableCell className="font-bold text-purple-600">Comprehensive market penetration</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators & Success Metrics */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Key Performance Indicators & Success Metrics"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Brand Awareness</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>3M+ social media reach monthly</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>6M+ impressions across platforms</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>Local brand recognition: 40%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Customer Engagement</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>75% weekend occupancy rate</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>25% VIP table booking rate</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>90-minute average session duration</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-green-400 mb-4">Social Performance</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>80% increase in followers</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>5% engagement rate target</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>1000+ UGC posts monthly</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Revenue Impact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>400 loyalty program members</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>20% repeat customer rate</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-yellow-400 mr-2 mt-1" />
                  <span>15% revenue growth monthly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Campaign Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Social Media Campaign Preview"
            subtitle="2025 Content Calendar Highlights"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* January Campaign */}
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-purple-300 mr-2" />
                <span className="text-purple-300 font-semibold">January</span>
              </div>
              <h3 className="text-xl font-bold mb-3">New Year, New Legends</h3>
              <p className="text-gray-300 text-sm mb-4">2025, we're not just celebrating the New Year — we're creating new legends. ✨</p>
              <p className="text-gray-300 text-sm mb-4">Join us for a night where neon dreams light up Da Nang's skyline. Exclusive cocktails, live DJs, and unforgettable memories await.</p>
              <p className="text-gray-300 text-sm mb-2">Step into the future at Koto Club.</p>
              <div className="text-sm space-y-1">
                <p><span className="font-semibold">Visual Concept:</span></p>
                <p className="italic">Background: Neon skyline Đà Nẵng + Club vibe. Model: Cầm ly cocktail ánh neon xanh tím.</p>
                <p><span className="font-semibold">Specials:</span></p>
                <ul className="list-disc list-inside text-xs ml-2">
                  <li>Dress Code: Futuristic Neon</li>
                  <li>Complimentary Welcome Shot for Early Birds</li>
                </ul>
              </div>
            </div>

            {/* March Campaign */}
            <div className="bg-gradient-to-br from-orange-800 to-yellow-700 p-6 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-orange-300 mr-2" />
                <span className="text-orange-300 font-semibold">March</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Spring Awakening - Rebirth in Lights</h3>
              <p className="text-gray-300 text-sm mb-4">Spring isn't just a season. It's a state of mind. 🌸✨</p>
              <p className="text-gray-300 text-sm mb-4">This March, awaken your senses under the pulse of neon lights.</p>
              <p className="text-gray-300 text-sm mb-4">Limited edition 'Spring Bloom' cocktails and live sets from Da Nang's top DJs.</p>
              <p className="text-gray-300 text-sm mb-2">Koto Club — where your new story begins.</p>
              <div className="text-sm space-y-1">
                <p><span className="font-semibold">Visual Concept:</span></p>
                <p className="italic">Background: Neon flowers or light petals falling. Model: Cười rạng rỡ giữa khung neon lấp lánh.</p>
                <p><span className="font-semibold">Specials:</span></p>
                <ul className="list-disc list-inside text-xs ml-2">
                  <li>Special: Free Signature Cocktail for first 30 guests</li>
                </ul>
              </div>
            </div>

            {/* July Campaign */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-500 p-6 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-cyan-300 mr-2" />
                <span className="text-cyan-300 font-semibold">July</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Summer High - Neon Beach Party</h3>
              <p className="text-gray-300 text-sm mb-4">When the sun goes down, the real summer begins. 🔥🏖️</p>
              <p className="text-gray-300 text-sm mb-4">This July, Koto turns into a Neon Beach Paradise — tropical beats, icy cocktails, and glowing vibes.</p>
              <p className="text-gray-300 text-sm mb-2">Dance barefoot. Shine without limits.</p>
              <div className="text-sm space-y-1">
                <p><span className="font-semibold">Visual Concept:</span></p>
                <p className="italic">Background: Neon palm trees, biển đêm lung linh. Model: Cầm vỏ lượt neon, đeo kính phân quang.</p>
                <p><span className="font-semibold">Specials:</span></p>
                <ul className="list-disc list-inside text-xs ml-2">
                  <li>Dress Code: Beach Glam with Neon Accessories</li>
                </ul>
              </div>
            </div>

            {/* August Campaign */}
            <div className="bg-gradient-to-br from-red-800 to-orange-600 p-6 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-red-300 mr-2" />
                <span className="text-red-300 font-semibold">August</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Hot Nights, Cool Lights</h3>
              <p className="text-gray-300 text-sm mb-4">Turn up the heat, cool down with neon. 🔥🧊</p>
              <p className="text-gray-300 text-sm mb-4">August at Koto Club is pure fire — electrifying music, bold flavors, and nights you'll never forget.</p>
              <p className="text-gray-300 text-sm mb-4">VIP Bottle Service Specials available all month.</p>
              <div className="text-sm space-y-1">
                <p><span className="font-semibold">Visual Concept:</span></p>
                <p className="italic">Background: Neon lửa và băng (fire & ice theme). Model: Cheers ly cocktail khói mát lạnh dưới ánh đèn.</p>
                <p><span className="font-semibold">Specials:</span></p>
                <ul className="list-disc list-inside text-xs ml-2">
                  <li>Special: VIP table discount for pre-bookings</li>
                </ul>
              </div>
            </div>

            {/* December Campaign */}
            <div className="bg-gradient-to-br from-green-800 to-red-700 p-6 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-green-300 font-semibold">December</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Neon Wonderland Christmas</h3>
              <p className="text-gray-300 text-sm mb-4">Santa got a neon upgrade 🎅✨</p>
              <p className="text-gray-300 text-sm mb-4">Celebrate Christmas with a twist — sparkling cocktails, dazzling lights, and the coolest party in Da Nang.</p>
              <p className="text-gray-300 text-sm mb-4">Come dressed in white or silver — let's glow together!</p>
              <div className="text-sm space-y-1">
                <p><span className="font-semibold">Visual Concept:</span></p>
                <p className="italic">Background: Cây thông Noel neon, người mặc đồ trắng/silver.</p>
                <p><span className="font-semibold">Specials:</span></p>
                <ul className="list-disc list-inside text-xs ml-2">
                  <li>Special: Free Neon Christmas Shot for everyone dressed in theme!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management & Mitigation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Risk Management & Mitigation"
            subtitle="Proactive Strategic Planning"
            centered
          />

          <div className="mt-12">
            <Table className="bg-white rounded-lg shadow-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Risk Factor</TableHead>
                  <TableHead className="font-bold">Impact Level</TableHead>
                  <TableHead className="font-bold">Mitigation Strategy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Seasonal Tourism Fluctuations</TableCell>
                  <TableCell><Badge className="bg-red-100 text-red-800">High</Badge></TableCell>
                  <TableCell>Develop local customer base, off-season promotions, corporate event targeting</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Competition from New Venues</TableCell>
                  <TableCell><Badge className="bg-yellow-100 text-yellow-800">Medium</Badge></TableCell>
                  <TableCell>Continuous experience innovation, loyalty program strengthening, exclusive partnerships</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Economic Downturn Impact</TableCell>
                  <TableCell><Badge className="bg-yellow-100 text-yellow-800">Medium</Badge></TableCell>
                  <TableCell>Flexible pricing tiers, value-focused packages, cost optimization strategies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Social Media Algorithm Changes</TableCell>
                  <TableCell><Badge className="bg-yellow-100 text-yellow-800">Medium</Badge></TableCell>
                  <TableCell>Diversified platform strategy, email marketing, influencer partnerships</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* 2025 Implementation Roadmap */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="2025 Implementation Roadmap"
            subtitle="Quarterly Strategic Milestones"
            centered
          />

          <div className="space-y-8 mt-12">
            <div className="flex items-start">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-6">
                Q1
              </div>
              <div className="bg-purple-50 p-6 rounded-xl flex-1">
                <h3 className="text-xl font-bold text-purple-600 mb-2">Foundation & Brand Establishment (Jan-Mar)</h3>
                <p className="text-gray-700">Brand identity refinement, staff training, initial marketing campaigns, social media launch, partnership development</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-6">
                Q2
              </div>
              <div className="bg-blue-50 p-6 rounded-xl flex-1">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Growth & Optimization (Apr-Jun)</h3>
                <p className="text-gray-700">Loyalty program launch, influencer collaborations, VIP experience enhancement, customer feedback integration</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-6">
                Q3
              </div>
              <div className="bg-green-50 p-6 rounded-xl flex-1">
                <h3 className="text-xl font-bold text-green-600 mb-2">Expansion & Innovation (Jul-Sep)</h3>
                <p className="text-gray-700">Summer campaigns, new service offerings, corporate event packages, market expansion strategies</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-6">
                Q4
              </div>
              <div className="bg-orange-50 p-6 rounded-xl flex-1">
                <h3 className="text-xl font-bold text-orange-600 mb-2">Consolidation & Planning (Oct-Dec)</h3>
                <p className="text-gray-700">Holiday season campaigns, annual performance review, 2026 strategic planning, customer appreciation events</p>
              </div>
            </div>
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
