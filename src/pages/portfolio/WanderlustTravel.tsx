import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ExternalLink, Play, Users, Target, TrendingUp, Globe, Calendar, BarChart3, Eye, Download, Star, Award, Zap, Heart, Clock, Plane } from 'lucide-react';

const WanderlustTravel = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useSEO({
    title: "Wanderlust Travel Digital Marketing Strategy | Portfolio",
    description: "Comprehensive digital marketing strategy and website design for Wanderlust Travel - showcasing complete marketing plan, social media content, and website development.",
    keywords: "digital marketing, travel marketing, website design, social media strategy, Wanderlust Travel",
    url: "/portfolio/wanderlust-travel",
    canonicalUrl: "/portfolio/wanderlust-travel",
    image: "/images/portfolio/wanderlust-hero.jpg",
    schemaType: "CreativeWork",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Portfolio", url: "/portfolio" },
      { name: "Wanderlust Travel", url: "/portfolio/wanderlust-travel" }
    ]
  });

  useEffect(() => {
    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Wanderlust Travel Digital Marketing Strategy",
      "description": "Complete digital marketing strategy including website design, social media content, and comprehensive marketing plan for travel industry",
      "creator": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "url": window.location.href,
      "genre": "Digital Marketing Strategy",
      "about": "Travel marketing, website design, social media strategy",
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-15"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(portfolioSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const MarketingSection = ({ id, title, children, icon: Icon }: { id: string, title: string, children: React.ReactNode, icon: any }) => (
    <Collapsible open={openSections[id]} onOpenChange={() => toggleSection(id)}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between p-4 h-auto text-left hover:bg-gray-50 transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-800">{title}</span>
          </div>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections[id] ? 'rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        <div className="prose prose-sm max-w-none">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section - ĐỔI SANG IMAGE BACKGROUND */}
        <section
          className="relative h-screen flex items-center justify-center text-white overflow-hidden"
          style={{
            minHeight: '60vh',
            backgroundImage: "url('/images/blog/website-image-travel.avif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <div className="mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-2">
                <Award className="h-4 w-4 mr-2" />
                Featured Project
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Wanderlust Travel
            </h1>
            <p className="text-2xl md:text-3xl mb-5 text-blue-100 font-light">
              Digital Marketing Strategy & Website Design
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-5">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                Website Design
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Social Media Strategy
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Marketing Plan
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Plane className="h-4 w-4 mr-2" />
                Travel Industry
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Eye className="h-5 w-5 mr-2" />
              View Full Strategy
            </Button>
          </div>
        </section>

        {/* Project Overview - Modern Cards */}
        <section className="py-7 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Project Overview</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive digital transformation for Wanderlust Travel, delivering cutting-edge marketing solutions and modern website design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-600 mb-1 text-sm uppercase tracking-wide">CLIENT</h3>
                  <p className="text-xl font-bold text-gray-900">Wanderlust Travel</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-600 mb-1 text-sm uppercase tracking-wide">INDUSTRY</h3>
                  <p className="text-xl font-bold text-gray-900">Travel & Tourism</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-600 mb-1 text-sm uppercase tracking-wide">SCOPE</h3>
                  <p className="text-xl font-bold text-gray-900">Full Digital Strategy</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-600 mb-1 text-sm uppercase tracking-wide">TIMELINE</h3>
                  <p className="text-xl font-bold text-gray-900">6 Months</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content - Optimized Demo Section */}
        <section className="py-7 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Grid 2 cột, căn giữa dọc */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Website Showcase */}
              <div>
                <h2 className="text-4xl font-bold mb-5 text-gray-900">Website Design</h2>
                
                <Card className="overflow-hidden mb-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 relative group">
                    <img
                      src="/images/wanderlust-website.png"
                      alt="Wanderlust Travel Website Preview"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                        onClick={() => window.open('https://www.figma.com/proto/VGsbf8TWHZUKgB6Q3KeGyg/Wanderlust?node-id=1-4019&t=ATpme5Brxu5Aym2Z-1&scaling=scale-down-width&content-scaling=fixed', '_blank')}
                      >
                        <Eye className="h-5 w-5 mr-2" />
                        View Full Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => window.open('https://www.figma.com/proto/VGsbf8TWHZUKgB6Q3KeGyg/Wanderlust?node-id=1-4019&t=ATpme5Brxu5Aym2Z-1&scaling=scale-down-width&content-scaling=fixed', '_blank')}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Full Website Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 hover:border-gray-400"
                    onClick={() => window.open('https://www.figma.com/proto/VGsbf8TWHZUKgB6Q3KeGyg/Wanderlust?node-id=1-4019&t=ATpme5Brxu5Aym2Z-1&scaling=scale-down-width&content-scaling=fixed', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download High-Res
                  </Button>
                </div>
              </div>

              {/* Right Side - Demo Information CĂN GIỮA DỌC */}
              <div className="flex flex-col items-center justify-center h-full">
                <Card className="mb-0 hover:shadow-lg transition-all duration-300 border-0 bg-white w-full max-w-lg">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-900 text-2xl">
                      <ExternalLink className="h-4 w-4" />
                      Demo Information
                    </h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">File Size:</span>
                        <span>17MB (High Resolution)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Format:</span>
                        <span>PNG Image</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Dimensions:</span>
                        <span>1920x1080px</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Loading Time:</span>
                        <span>~3-5 seconds</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Content Section */}
        <section className="py-7 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Grid 2 cột, căn giữa dọc */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Social Media Video */}
              <div>
                <h2 className="text-4xl font-bold mb-5 text-gray-900">Social Media Content</h2>

                <Card className="mb-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 relative">
                    {!videoLoaded && (
                      <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="flex items-center gap-3 text-gray-500">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                          <span className="text-lg">Loading video...</span>
                        </div>
                      </div>
                    )}

                    <div className={`relative aspect-video ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                      <iframe
                        src="https://www.youtube.com/embed/m4fAh02eD20" // Replaced with a placeholder YouTube embed URL
                        title="Wanderlust Travel Social Media Video"
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                        loading="lazy"
                        onLoad={() => setVideoLoaded(true)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Video Caption: Bỏ heading, caption rộng hơn */}
              <div className="flex flex-col items-center justify-center h-full">
                <Card className="hover:shadow-xl transition-all duration-300 w-full max-w-xl">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-7 rounded-lg border border-blue-100">
                      <p className="font-bold mb-3 text-gray-900">Sing Your Summer Across Europe</p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Some journeys aren't just about places – they're about how each moment makes you feel. <br />
                        In Paris, mornings smell of buttered croissants and love lingers in every sunset. <br />
                        In Italy, footsteps echo on cobblestone streets where history whispers through every archway. <br />
                        In Spain, nights are alive with music, laughter, and a passion you can taste in every bite of paella. <br />
                        And in Croatia, the sea glitters like scattered jewels, inviting you to sail into stillness. <br />
                        This summer, let's not just travel. <br />
                        Let's collect feelings, write memories, and carry Europe home in our hearts.
                      </p>
                      <div className="text-sm text-blue-600 font-medium">
                        #WanderlustTravel #EuropeanSummer #TravelMelody #ParisToCroatia #SummerAdventure #ExploreEurope
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Campaign Images - Updated Layout */}
        <section className="py-7 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Social Media Campaign</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Engaging content that drives conversions and builds brand awareness across all platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image 1 - Last Chance Campaign */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative bg-white flex items-center justify-center h-96">
                    <img
                      src="/images/blog/social-media-image-1.png"
                      alt="Last Chance Europe Campaign"
                      className="w-full h-full object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white border-0">
                        <Clock className="h-4 w-4 mr-2" />
                        Limited Time
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">⏳ Last Chance: Up to 45% Off Europe Escapes!</h3>
                    <p className="text-gray-600 mb-4">
                      Turn your European dream into reality with up to 45% OFF exclusive deals.
                      Paris, Rome, Barcelona… where will you begin your summer escape?
                    </p>
                    <p className="text-gray-600 mb-4">
                      👉 Book now before this offer flies away!
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Hashtags:</strong> #WonderlustTravel #EuropeanDeals #LastChanceToTravel
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image 2 - Europe Awaits Campaign */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative bg-white flex items-center justify-center h-96">
                    <img
                      src="/images/blog/social-media-image-2.png"
                      alt="Europe Awaits Campaign"
                      className="w-full h-full object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white border-0">
                        <Plane className="h-4 w-4 mr-2" />
                        From $1200
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Europe Awaits – From $1200 🌍</h3>
                    <p className="text-gray-600 mb-4">
                      From $1200, your next chapter could start in Europe.
                      Walk through ancient streets, taste unforgettable cuisine, and collect timeless memories.
                    </p>
                    <p className="text-gray-600 mb-4">
                      ✈️ Why wait for someday when summer is calling now?
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Hashtags:</strong><br />
                      #WanderlustTravel #ExploreEurope #TravelDreams
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Full Marketing Plan - Now below the images */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Detailed Marketing Strategy</h2>
              <p className="text-xl text-gray-600">Comprehensive plan for digital marketing success</p>
            </div>

            <div className="space-y-6">
              {/* Overall Vision & Goals */}
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <MarketingSection id="vision" title="Overall Vision & Goals" icon={Target}>
                  <h4 className="font-semibold mb-3 text-gray-900">Vision:</h4>
                  <p className="mb-4 text-gray-700">To become the leading inspiration and trusted partner for those who yearn to explore the world, delivering unique and unforgettable travel experiences.</p>

                  <h4 className="font-semibold mb-3 text-gray-900">Overall Goals:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Increase Brand Awareness:</strong> Establish Wanderlust Travel as a recognized name in the travel industry.</li>
                    <li><strong>Attract Potential Customers:</strong> Generate high-quality traffic to the website and social media channels.</li>
                    <li><strong>Conversion:</strong> Convert visitors into customers booking tours/services.</li>
                    <li><strong>Community Building:</strong> Foster a loyal community of travel enthusiasts connected to the brand.</li>
                    <li><strong>Differentiation:</strong> Stand out from competitors through unique content and experiences.</li>
                  </ul>
                </MarketingSection>
              </Card>

              {/* Website Plan */}
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <MarketingSection id="website" title="Website Plan" icon={Globe}>
                  <h4 className="font-semibold mb-3 text-gray-900">1. Website Objectives</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• Showcase Wanderlust Travel's unique tours and experiences.</li>
                    <li>• Provide detailed, useful information about destinations.</li>
                    <li>• Encourage users to explore, contact, and book services.</li>
                    <li>• Build brand credibility and trust.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">2. Target Audience</h4>
                  <p className="mb-4 text-gray-700">Young to middle-aged individuals (25-55 years old) in Australia with stable incomes, a love for adventurous travel, cultural immersion, and a search for unique, off-the-beaten-path journeys.</p>
                  <p className="mb-4 text-gray-700">Couples, groups of friends, or solo travelers from Australia who desire well-planned trips that still offer freedom and unexpected discoveries. Those seeking a blend of adventure and comfort.</p>

                  <h4 className="font-semibold mb-3 text-gray-900">3. Key Pages & Features</h4>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p><strong>Homepage:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Prominent slider/video with high-quality, engaging visuals that evoke "wanderlust."</li>
                        <li>• Brief introduction to Wanderlust Travel and its travel philosophy.</li>
                        <li>• Featured/most popular/top-rated tours/destinations.</li>
                        <li>• Clear Calls to Action (CTAs): "Explore Tours," "Contact Us," "Sign Up for Offers."</li>
                        <li>• Customer testimonials.</li>
                        <li>• Links to blog and social media.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Destinations:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• List of countries/regions where Wanderlust Travel offers tours. Focus on destinations popular and appealing to Australian travelers (e.g., Europe, Asia, New Zealand, Fiji, as well as unique Australian experiences).</li>
                        <li>• Each destination has its own page with an overview, highlights, and related tours.</li>
                        <li>• High-quality images/videos, interactive maps.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Experiences/Tours:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Tour categorization by theme (e.g., Adventure & Thrills, Cultural Immersion, Luxury Retreats, Culinary Journeys, Sustainable Travel).</li>
                        <li>• Each tour has a detailed page: Itinerary, pricing, inclusions/exclusions, images/videos, reviews, "Book Now" or "Request Consultation" CTA.</li>
                        <li>• Advanced tour filtering and search functionality.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>About Us:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Wanderlust Travel's story, philosophy, core values.</li>
                        <li>• Team introduction (if applicable).</li>
                        <li>• Commitment to service quality and responsible tourism.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Blog/Travel Guides:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• A section for in-depth articles on destinations, travel tips, experiences, and inspiring stories. Pay special attention to articles useful for Australian travelers (e.g., visa requirements for Australian citizens, currency exchange tips when traveling overseas from Australia).</li>
                        <li>• SEO-friendly content to attract organic traffic.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Contact Us:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Contact form, phone number, email, office address in Australia.</li>
                        <li>• Frequently Asked Questions (FAQ).</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Testimonials/Reviews:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Dedicated area showcasing positive reviews from past customers.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Offers & Promotions:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Updates on special promotions and discounted tours.</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3 mt-4 text-gray-900">4. Website Content Strategy</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li><strong>High-Quality Images & Videos:</strong> Use professional, authentic visuals focusing on emotion and experience. Short, captivating videos are a priority.</li>
                    <li><strong>Engaging Descriptions:</strong> Write tour and destination content that not only provides information but also sparks imagination and a sense of adventure.</li>
                    <li><strong>Travel Storytelling:</strong> Share narratives about trips, local cultures, and memorable moments.</li>
                    <li><strong>User-Generated Content (UGC):</strong> Encourage customers to share their photos/videos and stories, then feature them on the website (with permission).</li>
                    <li><strong>Detailed Guides:</strong> Provide practical information such as visa requirements, currency, culture, and safety to add value for readers.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">5. Website Design Principles</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li><strong>Intuitive & Modern Interface:</strong> Clean, easy to navigate, image-centric.</li>
                    <li><strong>Responsive Design:</strong> Optimized for display on all devices (desktop, tablet, mobile).</li>
                    <li><strong>Fast Loading Speed:</strong> Crucial for user experience and SEO.</li>
                    <li><strong>Color Palette & Fonts:</strong> Use a consistent palette and fonts that align with Wanderlust's adventurous and sophisticated brand. (e.g., blues/greens of nature, yellows/oranges of sunset, modern, readable fonts).</li>
                    <li><strong>Easy Integration:</strong> Social media sharing buttons, map integration, sign-up forms.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">6. SEO Strategy (Search Engine Optimization)</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li><strong>Keyword Research:</strong> Identify keywords related to "adventure travel," "unique tours," "European destinations," "wanderlust travel," and integrate them into content. Specifically target keywords with "Australia" or "from Australia" elements (e.g., "Europe tours from Australia," "Vietnam travel from Sydney").</li>
                    <li><strong>On-page Optimization:</strong> Titles, meta descriptions, H1-H6 tags, friendly URLs, image optimization.</li>
                    <li><strong>Quality Content:</strong> Regularly publish blog posts, providing real value to readers.</li>
                    <li><strong>Mobile Optimization:</strong> The website must perform perfectly on mobile devices.</li>
                    <li><strong>Link Building:</strong> Acquire quality backlinks from relevant travel websites.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">7. Calls to Action (CTA)</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• "Explore Our European Tours"</li>
                    <li>• "Plan Your Dream Trip"</li>
                    <li>• "Contact Us for a Free Consultation"</li>
                    <li>• "Sign Up for Exclusive Offers"</li>
                    <li>• "Read More Travel Stories"</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">8. Creative Website Ideas (NEW)</h4>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p><strong>Interactive "Wanderlust Map":</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• An interactive world/Europe map where users can click on destinations to quickly view related tours, images, videos, and stories.</li>
                        <li>• Can highlight "hotspots" with unique experiences.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>"Dream Trip Builder" Tool:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Allows users to select their preferences (adventure, culture, food, relaxation), budget, duration, and desired destinations.</li>
                        <li>• The system suggests suitable tours or generates a preliminary personalized itinerary.</li>
                        <li>• CTA: "Get Your Personalized Itinerary!"</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Virtual Tour Experiences:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Integrate 360-degree videos or panoramic photos of key highlights within tours.</li>
                        <li>• Allows users to "step into" the destination and visualize their experience.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>"Traveler's Spotlight" Section:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• A monthly/quarterly feature showcasing a story, photos, and videos from a Wanderlust Travel customer.</li>
                        <li>• Creates authentic connection and inspiration.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>"Exploration Badges" System:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Gamification: Customers can earn digital badges after completing specific tours (e.g., "Alps Conqueror," "Italian Culinary Expert").</li>
                        <li>• Encourages loyalty and social sharing.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Smart Chatbot/Live Support:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Integrate an AI chatbot to answer common questions about tours, destinations, and booking processes.</li>
                        <li>• Option to transfer to live agent chat when needed.</li>
                      </ul>
                    </div>
                  </div>
                </MarketingSection>
              </Card>

              {/* Social Media Plan */}
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <MarketingSection id="social" title="Social Media Plan" icon={Users}>
                  <h4 className="font-semibold mb-3 text-gray-900">1. Social Media Objectives</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• Increase brand awareness and engagement.</li>
                    <li>• Drive traffic to the website.</li>
                    <li>• Build a community of travel enthusiasts.</li>
                    <li>• Promote tours and special offers.</li>
                    <li>• Listen to feedback and build trust.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">2. Target Audience</h4>
                  <p className="mb-4 text-gray-700">Similar to the website audience, but potentially broader to include younger demographics who prefer short, visual, and quick interactive content.</p>

                  <h4 className="font-semibold mb-3 text-gray-900">3. Platform Selection</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li><strong>Instagram:</strong> Primary platform for high-quality images and short videos. Ideal for inspiring travel.</li>
                    <li><strong>Facebook:</strong> For community building, sharing longer posts, organizing events, running ads.</li>
                    <li><strong>TikTok:</strong> For creating short, creative, trending videos, reaching a younger audience.</li>
                    <li><strong>Pinterest:</strong> Excellent platform for beautiful visuals and travel ideas, helping users "pin" their favorite tours/destinations.</li>
                    <li><strong>YouTube:</strong> Ideal channel for longer videos, tour vlogs, detailed travel guides.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">4. Social Media Content Strategy (Per Platform)</h4>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p><strong>Instagram:</strong></p>
                      <div className="ml-4">
                        <p className="font-medium mb-2">Content Types:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• High-quality Photos/Videos: Beautiful scenery, memorable moments from tours.</li>
                          <li>• Reels/Shorts: Short, fast-paced, trending videos about destinations, travel tips, behind-the-scenes tour moments. (e.g., "10 seconds exploring Paris," "Smart packing hacks").</li>
                          <li>• Stories: Q&A sessions, polls, live updates from trips.</li>
                          <li>• Carousels: Collections of photos/videos about a specific destination or tour.</li>
                        </ul>

                        <p className="font-medium mb-2">Content Themes:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• "Dream Destinations": Showcase unique places.</li>
                          <li>• "Wanderlust Moments": Share special experiences from tours.</li>
                          <li>• "Smart Travel Tips": Useful guides and advice.</li>
                          <li>• "Meet the Fellow Travelers": Feature customers or guides.</li>
                        </ul>

                        <p className="font-medium mb-2">Frequency: 3-5 posts/week (feed), 3-5 stories/day.</p>
                        <p className="font-medium mb-2">Hashtags: Use relevant hashtags, combining brand hashtags (#WanderlustTravel), general hashtags (#EuropeTravel, #TravelGram), niche hashtags (#HiddenGems, #AdventureTravel). Add Australian local hashtags (#TravelAustralia, #ExploreAustralia, #AustralianTravel).</p>
                      </div>
                    </div>

                    <div>
                      <p><strong>Facebook:</strong></p>
                      <div className="ml-4">
                        <p className="font-medium mb-2">Content Types:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• Long-form Posts: Share blog articles from the website, detailed travel stories.</li>
                          <li>• Photo Albums/Videos: Compilations of images/videos from tours.</li>
                          <li>• Livestream: Q&A about tours, introduce new destinations.</li>
                          <li>• Events: Create events for tour consultations, travel webinars.</li>
                        </ul>

                        <p className="font-medium mb-2">Content Themes:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• "Tour Highlight of the Week": Detailed feature of a tour.</li>
                          <li>• "Stories from Our Customers": Share customer reviews and experiences.</li>
                          <li>• "Travel Challenges": Mini-games, interactive quizzes.</li>
                          <li>• "Travel News": Useful updates on visas, regulations. Especially news related to international travel for Australian citizens.</li>
                        </ul>

                        <p className="font-medium mb-2">Frequency: 1-2 posts/day.</p>
                        <p className="font-medium mb-2">Community Group: Create a private group for past customers or travel enthusiasts for deeper interaction.</p>
                      </div>
                    </div>

                    <div>
                      <p><strong>TikTok:</strong></p>
                      <div className="ml-4">
                        <p className="font-medium mb-2">Content Types:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• Short, fast-paced videos with trending audio: Quick cuts, unique effects.</li>
                          <li>• Trends: Participate in TikTok trends with travel-related content.</li>
                          <li>• POV (Point of View): Put viewers in the shoes of experiencing a tour.</li>
                          <li>• Funny/Creative Travel Hacks.</li>
                        </ul>

                        <p className="font-medium mb-2">Content Themes:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• "Europe Travel in 30 Seconds."</li>
                          <li>• "Things You Need to Know Before Tour X."</li>
                          <li>• "The 'Wow' Moments from Our Trips."</li>
                          <li>• "Behind-the-Scenes at Wanderlust Travel." Consider adding videos about iconic Australian destinations.</li>
                        </ul>

                        <p className="font-medium mb-2">Frequency: 3-5 videos/week.</p>
                      </div>
                    </div>

                    <div>
                      <p><strong>Pinterest:</strong></p>
                      <div className="ml-4">
                        <p className="font-medium mb-2">Content Types:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• Infographics: Maps, tour itineraries, "things to do" lists.</li>
                          <li>• High-quality Photos: Focus on landscapes, architecture, cuisine.</li>
                          <li>• Idea Pins: Combine video and images for storytelling.</li>
                        </ul>

                        <p className="font-medium mb-2">Content Themes:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• "European Travel Inspiration Board."</li>
                          <li>• "Italy Cultural Exploration Tour."</li>
                          <li>• "Paris Travel Guide."</li>
                          <li>• "European Street Food." Add idea boards for Australian travel and nearby destinations.</li>
                        </ul>

                        <p className="font-medium mb-2">Frequency: 5-10 pins/week.</p>
                      </div>
                    </div>

                    <div>
                      <p><strong>YouTube:</strong></p>
                      <div className="ml-4">
                        <p className="font-medium mb-2">Content Types:</p>
                        <ul className="space-y-1 mb-3">
                          <li>• Tour Vlogs: Longer videos documenting detailed tour itineraries.</li>
                          <li>• In-depth Travel Guides: "How to Apply for a Schengen Visa," "Europe Backpacking Tips." Add specific guides for Australian travelers (e.g., "Budget Travel Tips from Australia," "Best Travel Insurance for Australians").</li>
                          <li>• Interviews: Customers, tour guides, travel experts.</li>
                          <li>• Company/Team Introduction Videos.</li>
                        </ul>

                        <p className="font-medium mb-2">Frequency: 1-2 videos/month.</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3 text-gray-900">5. Interaction & Community Principles</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li><strong>Prompt Responses:</strong> Respond to comments, messages, and reviews in a timely and professional manner.</li>
                    <li><strong>Encourage UGC:</strong> Organize photo/video contests, use Wanderlust Travel's dedicated hashtag, and reshare customer content.</li>
                    <li><strong>Foster Conversation:</strong> Ask questions, run polls, encourage users to share their experiences.</li>
                    <li><strong>Engage with Other Accounts:</strong> Comment on, like, and share content from partners and travel bloggers.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">6. Influencer Marketing</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li><strong>Identify Influencers:</strong> Find travel bloggers, vloggers, and photographers with relevant followings and a style that aligns with Wanderlust Travel. Prioritize influencers based in Australia or with a significant Australian audience.</li>
                    <li><strong>Collaboration Formats:</strong> Invite them to experience tours (complimentary or discounted) in exchange for high-quality content (reviews, vlogs, posts).</li>
                    <li><strong>Objectives:</strong> Increase credibility, reach new audiences, generate authentic content.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">7. General Social Media Content Style Guidelines</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li><strong>Tone of Voice:</strong> Inspiring, adventurous, friendly, trustworthy, professional yet approachable. Always evoke curiosity and a desire to explore.</li>
                    <li><strong>Core Message:</strong> "Wanderlust Travel - Turning your desire to explore into unique and unforgettable journeys."</li>
                    <li><strong>Images & Videos:</strong> Always prioritize high quality, vibrant colors, and authenticity. Avoid overly staged stock photos.</li>
                    <li><strong>Copy:</strong> Concise, engaging, vivid language. Clear calls to action.</li>
                    <li><strong>Consistency:</strong> Ensure consistent visual style, tone, and messaging across all channels.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">8. Creative Social Media Ideas (NEW)</h4>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p><strong>"A Day in the Life of a Tour Guide" Series:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Create short video series (Reels/TikTok/Stories) documenting a day in the life of a Wanderlust Travel guide at a specific destination.</li>
                        <li>• Showcase authentic moments, behind-the-scenes glimpses, and the team's dedication.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Weekly/Monthly UGC Challenge:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Example: "Wanderlust Photo Challenge: Share your best moment in [Destination] with #WanderlustChallenge."</li>
                        <li>• Prizes could include tour discounts or travel merchandise.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Live Q&A Sessions with Travel Experts/Guides:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Host on Facebook Live or Instagram Live to directly answer viewer questions about destinations, travel tips, or Wanderlust Travel tours.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>"Local Culinary Discoveries" Series:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Short videos/Reels showcasing unique, authentic local dishes at tour destinations.</li>
                        <li>• Focus on the genuine culinary experience, not just the food itself.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>"Behind-the-Scenes" Content:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Share photos/videos of the tour planning process, destination scouting, and partner meetings.</li>
                        <li>• Helps customers understand Wanderlust Travel's professionalism and passion.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>AR (Augmented Reality) Filters on Instagram/TikTok:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Create filters with Wanderlust Travel's logo or travel elements (e.g., adventure hat, sunglasses, famous landmark overlay) for users to try and share.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Local Collaborations (at destinations):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Feature local artisans, traditional restaurants, or craft shops at tour destinations in videos/photos.</li>
                        <li>• Showcase cultural aspects and support local communities.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Interactive Mini-games/Quizzes on Stories/Facebook:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Examples: "Guess the Landmark," "Which Traveler Type Are You?," "Match the Dish to the Country."</li>
                        <li>• Boost engagement and user retention.</li>
                      </ul>
                    </div>
                  </div>
                </MarketingSection>
              </Card>

              {/* Integrated Marketing Strategy */}
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <MarketingSection id="integrated" title="Integrated Marketing Strategy" icon={TrendingUp}>
                  <h4 className="font-semibold mb-3 text-gray-900">1. Email Marketing</h4>
                  <p className="mb-2 text-gray-700"><strong>Objectives:</strong> Nurture leads, retain existing customers, promote tours and offers.</p>

                  <p className="font-medium mb-2 text-gray-900">Email Types:</p>
                  <ul className="space-y-1 mb-4 ml-4 text-gray-700">
                    <li>• <strong>Newsletter:</strong> Regular (monthly/quarterly) emails with featured blog posts, new tours, special destinations.</li>
                    <li>• <strong>Welcome Email:</strong> Sent to new subscribers, introducing Wanderlust Travel.</li>
                    <li>• <strong>Promotional Emails:</strong> Announce special offers and discounts.</li>
                    <li>• <strong>Tour Follow-up Emails:</strong> Sent to booked customers (pre-trip info, reminders).</li>
                    <li>• <strong>Post-Tour Emails:</strong> Thank you, review requests, suggestions for next tours.</li>
                  </ul>

                  <p className="mb-4 text-gray-700"><strong>Strategy:</strong> Personalize email content based on subscriber preferences and behavior.</p>

                  <h4 className="font-semibold mb-3 text-gray-900">2. Paid Advertising</h4>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p><strong>Google Ads (Search & Display):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>Search:</strong> Target keywords like "Europe tours," "adventure travel," "Italy tours," "wanderlust travel." Specifically target by geographic location in Australia.</li>
                        <li>• <strong>Display:</strong> Image ads on travel-related websites.</li>
                        <li>• <strong>Remarketing:</strong> Re-engage users who visited the website but didn't book.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Social Media Ads (Facebook Ads, Instagram Ads, TikTok Ads):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>Detailed Targeting:</strong> By interests (travel, adventure), demographics, behavior. Ensure targeting is set for users in Australia.</li>
                        <li>• <strong>Formats:</strong> Short videos, carousels, single images, stories.</li>
                        <li>• <strong>Objectives:</strong> Increase brand awareness, drive website traffic, generate leads.</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3 mt-4 text-gray-900">3. PR & Partnerships</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• <strong>Public Relations:</strong> Issue press releases about new tours, company achievements. Focus on Australian travel and lifestyle media outlets.</li>
                    <li>• <strong>Cross-promotion:</strong> Partner with relevant businesses (hotels, airlines, travel gear stores) for joint promotions. Prioritize partners based in or serving the Australian market.</li>
                    <li>• <strong>Event Participation:</strong> Attend travel expos and fairs in Australia to meet potential customers directly.</li>
                  </ul>
                </MarketingSection>
              </Card>

              {/* Measurement & Optimization */}
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <MarketingSection id="measurement" title="Measurement & Optimization" icon={BarChart3}>
                  <h4 className="font-semibold mb-3 text-gray-900">1. Key Performance Indicators (KPIs)</h4>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p><strong>Website:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Traffic: Number of visitors, sessions.</li>
                        <li>• Bounce Rate.</li>
                        <li>• Time on Page.</li>
                        <li>• Leads: Form submissions, calls.</li>
                        <li>• Conversion Rate: Number of successful tour bookings.</li>
                        <li>• SEO Keyword Rankings.</li>
                      </ul>
                    </div>

                    <div>
                      <p><strong>Social Media:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Reach & Impressions.</li>
                        <li>• Engagement Rate: Likes, comments, shares, saves.</li>
                        <li>• Followers Growth.</li>
                        <li>• Link Clicks to website.</li>
                        <li>• Message/Comment Response Rate.</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3 text-gray-900">2. Analytics Tools</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• <strong>Website:</strong> Google Analytics, Google Search Console.</li>
                    <li>• <strong>Social Media:</strong> Facebook Insights, Instagram Insights, TikTok Analytics, Pinterest Analytics, YouTube Analytics.</li>
                    <li>• <strong>Email Marketing:</strong> Email marketing platform tools (Mailchimp, ConvertKit).</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">3. Optimization Process</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• <strong>Regular Review:</strong> Weekly/monthly review of KPIs.</li>
                    <li>• <strong>Data Analysis:</strong> Identify trends, strengths, weaknesses.</li>
                    <li>• <strong>A/B Testing:</strong> Test different headlines, visuals, CTAs to see what performs better.</li>
                    <li>• <strong>Strategy Adjustment:</strong> Based on data and test results, optimize content, ads, and overall strategy.</li>
                  </ul>
                </MarketingSection>
              </Card>

              {/* Implementation Roadmap */}
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <MarketingSection id="roadmap" title="Implementation Roadmap" icon={Calendar}>
                  <h4 className="font-semibold mb-3 text-gray-900">Phase 1 (Months 1-2): Foundation Building</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• Website finalization (design, tour content, basic blog).</li>
                    <li>• Social media channel setup (profile optimization, cover photos, info).</li>
                    <li>• Initial keyword research and content planning.</li>
                    <li>• Analytics tool setup.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">Phase 2 (Months 3-6): Launch & Initial Growth</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• Website launch and announcement on social media.</li>
                    <li>• Ramp up regular content creation across all channels.</li>
                    <li>• Run initial paid advertising campaigns (brand awareness, traffic generation).</li>
                    <li>• Start email marketing with the first newsletter.</li>
                    <li>• Identify and contact potential influencers.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">Phase 3 (Month 7 onwards): Expansion & Optimization</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• Expand blog content, add new tours.</li>
                    <li>• Optimize SEO based on performance.</li>
                    <li>• Scale advertising budget based on ROI.</li>
                    <li>• Increase community engagement, organize online activities.</li>
                    <li>• Regularly review and adjust strategy (quarterly).</li>
                  </ul>
                </MarketingSection>
              </Card>

              {/* General Guidelines */}
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <MarketingSection id="guidelines" title="General Guidelines" icon={Target}>
                  <h4 className="font-semibold mb-3 text-gray-900">1. Tone of Voice & Brand Messaging</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• <strong>Tone of Voice:</strong> Inspiring, adventurous, friendly, trustworthy, professional yet approachable. Always evoke curiosity and a desire to explore.</li>
                    <li>• <strong>Core Message:</strong> "Wanderlust Travel - Turning your desire to explore into unique and unforgettable journeys."</li>
                    <li>• <strong>Key Keywords:</strong> Explore, adventure, unique, experience, culture, nature, freedom, memories, personalized.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">2. Visual Identity</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• <strong>Logo:</strong> Consistent use across all platforms.</li>
                    <li>• <strong>Color Palette:</strong> Adhere to the chosen color palette (e.g., greens/blues of nature, yellows/oranges of sunset) for brand recognition.</li>
                    <li>• <strong>Fonts:</strong> Use approved fonts for headlines and body content.</li>
                    <li>• <strong>Visual Style:</strong> Prioritize authentic, emotional photos/videos that showcase the diversity of destinations and experiences. Avoid overly generic stock photos.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">3. Customer Service on Digital Channels</h4>
                  <ul className="space-y-1 mb-4 text-gray-700">
                    <li>• <strong>Prompt Responses:</strong> Set a maximum response time for messages/comments (e.g., within 2-4 business hours).</li>
                    <li>• <strong>Professional & Friendly:</strong> Always maintain a positive attitude, answer questions clearly, and be willing to assist.</li>
                    <li>• <strong>Appropriate Redirection:</strong> For complex requests or those requiring personal information, redirect customers to direct contact channels (phone, email, website consultation form).</li>
                    <li>• <strong>Listen to Feedback:</strong> Collect and analyze customer feedback to improve services.</li>
                  </ul>

                  <h4 className="font-semibold mb-3 text-gray-900">4. Crisis Management</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>Preparedness Plan:</strong> Have a process in place for handling negative comments or minor crises on social media.</li>
                    <li>• <strong>Transparency & Honesty:</strong> Always respond transparently, honestly, and responsibly.</li>
                    <li>• <strong>Learn:</strong> Extract lessons from every situation to improve processes.</li>
                  </ul>
                </MarketingSection>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action - Modern Design */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Travel Business?</h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Let's create a comprehensive digital marketing strategy that drives results for your travel company.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <a href="/contact" className="flex items-center">
                  Start Your Project <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download Strategy PDF
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default WanderlustTravel;
