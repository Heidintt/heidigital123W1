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
    description: "Case study showcasing marketing campaigns for Vanguard Health's IRIS program - innovative healthcare solutions for remote Australian communities. Includes infographics, video content, and campaign strategies.",
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

          {/* HERO BANNER ADDED HERE */}
          <section className="w-full mb-12">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden flex items-center justify-center bg-blue-100">
              <img
                src="/images/vanguard-health-1.svg"
                alt="Vanguard Health Hero Banner"
                className="object-cover w-full h-full"
                style={{ objectPosition: 'center' }}
              />
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-blue-900/30 pointer-events-none"></div>
              {/* Optional: Overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Vanguard Health - IRIS Program
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto drop-shadow">
                  Impactful Healthcare Marketing for Remote Australia
                </p>
              </div>
            </div>
          </section>
          {/* END HERO BANNER */}

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
              <strong>Case Study Notice:</strong> All data, metrics, and information presented in this portfolio are for educational and reference purposes only. This is a conceptual case study and does not represent actual patient data.
            </AlertDescription>
          </Alert>

          {/* Project Overview */}
          <section className="mb-16">
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

          {/* Campaign 1: Remote Nursing Recruitment Video */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 1: Remote Nursing Recruitment - Day in the Life</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Recruitment Video Campaign</CardTitle>
                  <CardDescription>Attracting qualified nurses for remote roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/o6Z-nE1p_mQ" 
                      title="Video nurses in remote area - Day in the Life" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Campaign Brief</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🎯 Strategic Approach</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Goal:</strong> Recruitment + Awareness (B2C – attracting qualified nurses for remote roles)</li>
                      <li><strong>Insight:</strong> Nurses crave meaningful impact and unique life experiences, but many hesitate due to fears of isolation and challenging conditions</li>
                      <li><strong>Concept:</strong> Storytelling through a personal, day-in-the-life journey — from sunrise to sunset</li>
                      <li><strong>Hook:</strong> "Ever wondered what it's like to be a nurse in Australia's most remote communities?"</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media Caption - Full Width, below, 1 column full width */}
            <div className="w-full">
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-xl">Social Media Caption</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-4 rounded-lg border text-gray-700">
                    <p className="mb-2">Ever wondered what it's really like to be a nurse in Australia's most remote communities?</p>
                    <p className="mb-2">From first light to the last glow of sunset, our Remote Area Nurses bring care, comfort, and connection to those who need it most.</p>
                    <p className="mb-2">Every mile travelled. Every call answered. More than a job — it's a calling.</p>
                    <p className="mb-2">If you're ready to make a real impact — and see a side of Australia most never will — join the team that goes further for care.</p>
                    <p className="mb-2">👉 Apply now: [vanguardhealth.com.au/jobs]</p>
                    <p className="text-blue-600">#RemoteNursing #LifeAtVanguard #NursingJobsAU #VanguardHealth #HealthcareHeroes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Campaign 2: Cataract Awareness Infographic */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 2: Cataract Awareness Infographic</h2>
            
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

            {/* Strategy and Caption: 2 box ngang hàng */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Goals & Insights bên trái */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">🎯 Goals & Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Goal:</strong> Awareness + Trust (IRIS program)</li>
                    <li><strong>Insight:</strong> Many don't recognise early cataract signs</li>
                    <li><strong>Concept:</strong> Practical + Warning approach</li>
                    <li><strong>Hook:</strong> "See these signs? Get checked."</li>
                    <li><strong>Value:</strong> 5 clear signs + actionable next steps</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Social Media Caption bên phải */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-xl">📱 Social Media Caption</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-4 rounded-lg border text-gray-700">
                    <p className="mb-2">See these 5 signs? Get your eyes checked. 👀</p>
                    <p className="mb-2">Early action changes lives. Learn how IRIS delivers sight-saving pathways across remote Australia.</p>
                    <p className="mb-2">Read more on our blog → [link with UTM]</p>
                    <p className="mb-2">(Images shared with permission; cultural protocols observed.)</p>
                    <p className="text-blue-600">#CataractAwareness #IRIS #EyeHealth #RemoteHealth #VanguardHealth</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Campaign 3: Nurse Quote Video */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 3: Voices from the Field - Nurse Quote Video</h2>
            
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

          {/* Campaign 4: LinkedIn Carousel */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 4: IRIS 800th Milestone - LinkedIn Carousel</h2>
            
            {/* LinkedIn Carousel - Full Width */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">LinkedIn Carousel - All 5 Slides</CardTitle>
                <CardDescription>Complete campaign showcase with navigation indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Mobile: Show slides vertically */}
                  <div className="block md:hidden space-y-3">
                    {carouselImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={image}
                          alt={`LinkedIn carousel slide ${index + 1} of 5`}
                          className="w-full h-auto rounded-lg border shadow-sm"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                          {index + 1} / 5
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Desktop: Show all 5 slides horizontally */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-5 gap-4">
                      {carouselImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={image}
                            alt={`LinkedIn carousel slide ${index + 1} of 5`}
                            className="w-full h-auto rounded-lg border shadow-sm transition-all group-hover:shadow-md group-hover:scale-105"
                          />
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                            {index + 1}
                          </div>
                          {index < carouselImages.length - 1 && (
                            <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-600 bg-white rounded-full p-1 shadow-md border" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    5-slide LinkedIn carousel showcasing IRIS program milestone achievements
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Strategy and Caption - Below Carousel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </section>

          {/* Campaign 5: Email Newsletter */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Campaign 5: Monthly Email Newsletter</h2>
            
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
                  <Button asChild size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white/10 hover:text-white">
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
