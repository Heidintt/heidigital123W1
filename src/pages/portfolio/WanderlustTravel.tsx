import React from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Target, TrendingUp, Users, Globe, Video, MessageSquare, BarChart3 } from "lucide-react";

const WanderlustTravel = () => {
  useSEO({
    title: "Wanderlust Travel - Digital Marketing Strategy & Brand Development | Portfolio",
    description: "Complete digital marketing strategy and brand development for Wanderlust Travel, including website design, social media strategy, and comprehensive marketing plan for European travel experiences.",
    keywords: "wanderlust travel, digital marketing, brand development, travel marketing, social media strategy, website design, European travel, marketing portfolio",
    url: "https://heididigital.com/portfolio/wanderlust-travel",
    canonicalUrl: "https://heididigital.com/portfolio/wanderlust-travel",
    image: "/lovable-uploads/c70b8597-1e6d-45af-90eb-9f855efb46fa.png",
    imageAlt: "Wanderlust Travel Digital Marketing Strategy Portfolio",
    schemaType: "CreativeWork",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Portfolio", url: "/portfolio" },
      { name: "Wanderlust Travel", url: "/portfolio/wanderlust-travel" }
    ]
  });

  React.useEffect(() => {
    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Wanderlust Travel - Digital Marketing Strategy & Brand Development",
      "description": "Complete digital marketing strategy and brand development for Wanderlust Travel, including website design, social media strategy, and comprehensive marketing plan for European travel experiences.",
      "creator": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heididigital.com"
      },
      "url": "https://heididigital.com/portfolio/wanderlust-travel",
      "image": "/lovable-uploads/c70b8597-1e6d-45af-90eb-9f855efb46fa.png",
      "genre": "Digital Marketing Strategy",
      "about": "Travel Marketing",
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-15"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(portfolioSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/c70b8597-1e6d-45af-90eb-9f855efb46fa.png')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">
            Digital Marketing Strategy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Wanderlust Travel
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Complete digital marketing ecosystem for European travel experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              Brand Strategy
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              Website Design
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              Social Media
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              Content Strategy
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wanderlust Travel needed a complete digital presence to establish themselves as the leading inspiration 
                  and trusted partner for European travel experiences targeting Australian travelers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Build brand awareness in competitive travel market</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Target Australian travelers aged 25-55</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Focus on European destinations and experiences</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We developed a comprehensive digital marketing strategy including brand identity, 
                  responsive website design, multi-platform social media strategy, and detailed implementation roadmap.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">Website Design</h4>
                  </Card>
                  <Card className="p-4 text-center">
                    <Video className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">Social Media</h4>
                  </Card>
                  <Card className="p-4 text-center">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">Content Strategy</h4>
                  </Card>
                  <Card className="p-4 text-center">
                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">Analytics</h4>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Showcase */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Website Design</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Modern, Inspiring Design</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The website features a clean, modern design that captures the spirit of wanderlust while providing 
                  practical information for travelers. Every element is optimized for conversion and user experience.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Interactive destination maps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Dream trip builder tool</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Virtual tour experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Mobile-optimized responsive design</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Website
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1 text-center text-sm text-gray-500">wanderlusttravel.com.au</div>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Homepage Preview</h4>
                        <p className="text-gray-600 text-sm">Interactive hero section with destination slider</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Social Media Strategy</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Video Content */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Video Content</h3>
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/m4fAh02eD20"
                    title="Wanderlust Travel - Sing Your Summer Across Europe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-muted-foreground">
                  Engaging short-form video content designed to inspire wanderlust and showcase European destinations 
                  with emotional storytelling and beautiful cinematography.
                </p>
              </div>

              {/* Caption Strategy */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Caption & Content Strategy</h3>
                <Card className="p-6 mb-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg">Sample Caption</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-muted/50 p-4 rounded-lg italic mb-4">
                      "Sing Your Summer Across Europe<br/>
                      Every corner of Europe has a song –<br/>
                      Paris sings of love, Italy hums with history,<br/>
                      Spain dances with passion,<br/>
                      and Croatia whispers of hidden treasures.<br/>
                      This summer, let Wanderlust Travel write your melody."
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">#WanderlustTravel</Badge>
                      <Badge variant="outline">#EuropeanSummer</Badge>
                      <Badge variant="outline">#TravelMelody</Badge>
                      <Badge variant="outline">#ParisToCroatia</Badge>
                      <Badge variant="outline">#SummerAdventure</Badge>
                      <Badge variant="outline">#ExploreEurope</Badge>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-primary" />
                    <span>Platform-specific content adaptation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Emotional storytelling approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Strategic hashtag research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Comprehensive Marketing Plan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Target Audience</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Australian travelers (25-55 years)</li>
                    <li>• Stable income, adventure seekers</li>
                    <li>• Cultural immersion enthusiasts</li>
                    <li>• Couples, groups, solo travelers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>SEO Strategy</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Europe tours from Australia</li>
                    <li>• Adventure travel keywords</li>
                    <li>• Local Australian geo-targeting</li>
                    <li>• Content marketing approach</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Multi-Platform</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Instagram & TikTok content</li>
                    <li>• Facebook community building</li>
                    <li>• Pinterest inspiration boards</li>
                    <li>• YouTube travel vlogs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Implementation Roadmap</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phase 1: Foundation (Months 1-2)</h4>
                    <p className="text-muted-foreground text-sm">Website finalization, social media setup, analytics implementation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phase 2: Launch & Growth (Months 3-6)</h4>
                    <p className="text-muted-foreground text-sm">Content creation, paid advertising, influencer partnerships</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phase 3: Optimization (Month 7+)</h4>
                    <p className="text-muted-foreground text-sm">Performance analysis, strategy refinement, scaling successful campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & KPIs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projected Results</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150%</div>
                <div className="text-muted-foreground">Brand Awareness Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Monthly Website Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-muted-foreground">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Social Media Followers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Travel Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a comprehensive digital marketing strategy that captures hearts and drives bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View More Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WanderlustTravel;