import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useSEO } from "@/hooks/useSEO";
import { Info, Calendar, Users, Target, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IRISHealthcare: React.FC = () => {
  // SEO Configuration
  useSEO({
    title: "Vanguard Health - IRIS Program Case Study | Healthcare Marketing Portfolio",
    description: "Case study showcasing marketing campaigns for Vanguard Health's IRIS program - innovative healthcare solutions for remote Australian communities. Includes infographics, video content, LinkedIn campaigns and email marketing.",
    keywords: "healthcare marketing, IRIS program, Vanguard Health, remote healthcare, cataract awareness, medical marketing, healthcare communications, Australian healthcare",
    url: "https://heidigital.info/portfolio/iris-healthcare",
    canonicalUrl: "https://heidigital.info/portfolio/iris-healthcare",
    image: "/images/blog/ai-tools/info.png",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Portfolio", url: "/portfolio" },
      { name: "IRIS Healthcare Campaign", url: "/portfolio/iris-healthcare" }
    ]
  });

  // Structured Data
  useEffect(() => {
    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Vanguard Health - IRIS Program Marketing Campaign Case Study",
      "description": "Comprehensive marketing campaign case study for Vanguard Health's IRIS program, showcasing healthcare communication strategies for remote Australian communities",
      "creator": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
      },
      "url": "https://heidigital.info/portfolio/iris-healthcare",
      "genre": "Healthcare Marketing Case Study",
      "about": {
        "@type": "MedicalOrganization",
        "name": "Vanguard Health",
        "description": "Healthcare organization providing specialized services to remote Australian communities"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-08-09"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(portfolioSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const [currentCarouselIndex, setCurrentCarouselIndex] = React.useState(0);
  const carouselImages = [
    "/images/blog/ai-tools/1.png",
    "/images/blog/ai-tools/2.png", 
    "/images/blog/ai-tools/3.png",
    "/images/blog/ai-tools/4.png",
    "/images/blog/ai-tools/5.png"
  ];

  const nextSlide = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Layout>
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Healthcare Marketing Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Vanguard Health - IRIS Program
                <span className="block text-2xl md:text-3xl text-blue-600 mt-2">Healthcare Marketing Campaign</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive marketing campaigns for remote healthcare services across Australia
              </p>
            </div>
          </section>

          {/* Disclaimer Banner */}
          <Alert className="mb-12 border-amber-200 bg-amber-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-amber-800">
              <strong>Case Study Notice:</strong> All data, metrics, and information presented in this portfolio are for educational and reference purposes only. This is a conceptual case study and does not represent actual campaign performance or real client results.
            </AlertDescription>
          </Alert>

          {/* Project Overview */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Project Timeline</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">6-month integrated campaign</p>
                  <p className="text-sm text-gray-500">Jan 2024 - Jun 2024</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Target Audience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Remote Australian communities</p>
                  <p className="text-sm text-gray-500">Healthcare professionals & decision-makers</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Campaign Objectives</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Awareness & Trust Building</p>
                  <p className="text-sm text-gray-500">Reduce healthcare wait times</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">About IRIS Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  The IRIS (Integrated Remote and Indigenous Specialist) program is Vanguard Health's flagship initiative, 
                  providing specialized eye care services to remote and Indigenous communities across Australia. 
                  The program focuses on reducing wait times for cataract surgery and improving access to sight-saving care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">800+</div>
                    <div className="text-blue-200">Surgeries Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-blue-200">Remote Locations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">30%</div>
                    <div className="text-blue-200">Wait Time Reduction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Campaign 1: Cataract Awareness Infographic */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 1: Cataract Awareness Infographic</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Design Option A</CardTitle>
                  <CardDescription>Clean, medical-focused layout</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/images/blog/ai-tools/info.png" 
                    alt="Cataract awareness infographic - clean medical design"
                    className="w-full h-auto rounded-lg border shadow-sm"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Design Option B</CardTitle>
                  <CardDescription>Engaging, community-focused approach</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/images/blog/ai-tools/info2.png" 
                    alt="Cataract awareness infographic - community-focused design"
                    className="w-full h-auto rounded-lg border shadow-sm"
                  />
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-xl">Campaign Strategy & Social Media Caption</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Goals & Insights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Goal:</strong> Awareness + Trust (IRIS program)</li>
                    <li><strong>Insight:</strong> Many don't recognise early cataract signs</li>
                    <li><strong>Concept:</strong> Practical + Warning approach</li>
                    <li><strong>Hook:</strong> "See these signs? Get checked."</li>
                    <li><strong>Value:</strong> 5 clear signs + actionable next steps</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📱 Social Media Caption</h4>
                  <div className="bg-white p-4 rounded-lg border text-gray-700">
                    <p className="mb-2">See these 5 signs? Get your eyes checked. 👀</p>
                    <p className="mb-2">Early action changes lives. Learn how IRIS delivers sight-saving pathways across remote Australia.</p>
                    <p className="mb-2">Read more on our blog → [link with UTM]</p>
                    <p className="mb-2">(Images shared with permission; cultural protocols observed.)</p>
                    <p className="text-blue-600">#CataractAwareness #IRIS #EyeHealth #RemoteHealth #VanguardHealth</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Campaign 2: Nurse Quote Video */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 2: Voices from the Field - Nurse Quote Video</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Video Content</CardTitle>
                    <CardDescription>Authentic stories from remote area nurses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/K7lMRndIsxg" 
                        title="IRIS Program - Voices from the Field" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Campaign Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🎯 Strategic Approach</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Goal:</strong> Build trust with RNs & healthcare partners</li>
                        <li><strong>Insight:</strong> Real quotes from field staff feel authentic and emotional</li>
                        <li><strong>Concept:</strong> Inspiration + Real people stories</li>
                        <li><strong>Hook:</strong> Natural portrait + short bold quote</li>
                        <li><strong>Value:</strong> Motivation, reinforces mission</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl">Social Media Caption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white p-4 rounded-lg border text-gray-700">
                      <p className="mb-2 font-medium">"The longest distance isn't kilometres — it's the wait for care." — [Name], Remote Area Nurse</p>
                      <p className="mb-2">Every week our teams help close that distance for remote communities.</p>
                      <p className="mb-2">Follow for #LifeAtVanguard stories - and if you're ready to make yours: Register here → [link with UTM]</p>
                      <p className="text-blue-600">#VanguardHealth #RemoteCare #NurseLife #HealthEquity</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Campaign 3: LinkedIn Carousel */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 3: IRIS 800th Milestone - LinkedIn Carousel</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Interactive Carousel</CardTitle>
                  <CardDescription>Swipe through the 5-slide LinkedIn campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={carouselImages[currentCarouselIndex]}
                      alt={`LinkedIn carousel slide ${currentCarouselIndex + 1} of 5`}
                      className="w-full h-auto"
                    />
                    
                    {/* Navigation Buttons */}
                    <button 
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentCarouselIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentCarouselIndex 
                              ? 'bg-blue-600' 
                              : 'bg-white/60 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Slide {currentCarouselIndex + 1} of {carouselImages.length}
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">B2B/B2G Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🎯 Strategic Focus</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Goal:</strong> Awareness + Trust (B2B/B2G audiences)</li>
                        <li><strong>Insight:</strong> Healthcare decision-makers value data, results, and waitlist reduction</li>
                        <li><strong>Concept:</strong> Journey + Data + Achievement showcase</li>
                        <li><strong>Hook:</strong> "800 cataract surgeries. Faster access to care."</li>
                        <li><strong>Value:</strong> Concrete metrics, proven outcomes, partnership opportunities</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl">LinkedIn Caption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white p-4 rounded-lg border text-gray-700">
                      <p className="mb-2 font-medium">"800 cataract surgeries. Thousands of kilometres. One mission: faster access to sight-saving care for remote and Indigenous communities.</p>
                      <p className="mb-2">Integrated specialist teams. Proven outcomes. Cultural safety at the core.</p>
                      <p className="mb-2">Let's reduce waitlists together.</p>
                      <p className="mb-2">→ Contact us: [link with UTM]</p>
                      <p className="text-blue-600">#IRIS #RemoteHealth #WaitlistReduction #IntegratedCare #VanguardHealth</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Campaign 4: Email Newsletter */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 4: Monthly Email Newsletter</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Newsletter Template</CardTitle>
                  <CardDescription>Monthly communication design</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/images/blog/ai-tools/email newsletter.png" 
                    alt="IRIS program monthly email newsletter template"
                    className="w-full h-auto rounded-lg border shadow-sm"
                  />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Content Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📧 Newsletter Strategy</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Frequency:</strong> Monthly updates to stakeholders</li>
                        <li><strong>Content Mix:</strong> Program updates, success stories, upcoming initiatives</li>
                        <li><strong>Audience:</strong> Healthcare professionals, government partners, community leaders</li>
                        <li><strong>Goal:</strong> Maintain engagement and build ongoing relationships</li>
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📊 Design Principles</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Clean, professional healthcare branding</li>
                        <li>Clear visual hierarchy and readability</li>
                        <li>Mobile-responsive design</li>
                        <li>Accessible color contrast and typography</li>
                        <li>Cultural sensitivity in imagery and messaging</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-xl">Performance Metrics (Case Study)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">85%</div>
                        <div className="text-sm text-gray-600">Open Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">42%</div>
                        <div className="text-sm text-gray-600">Click Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">1,200+</div>
                        <div className="text-sm text-gray-600">Subscribers</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-sm text-gray-600">Retention</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Create Impactful Healthcare Campaigns?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our healthcare marketing expertise can help your organization reach and serve communities more effectively.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Link to="/contact" className="flex items-center">
                      Start Your Campaign <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/portfolio">
                      View More Work
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default IRISHealthcare;