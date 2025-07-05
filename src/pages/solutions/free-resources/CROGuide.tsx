
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Check, 
  TrendingUp, 
  Target, 
  Eye, 
  MousePointer, 
  BarChart3, 
  Users, 
  Zap,
  Smartphone,
  Monitor,
  ShoppingCart,
  CreditCard
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const CROGuide = () => {
  // SEO optimization
  useSEO({
    title: "Complete CRO Guide 2024 | Conversion Rate Optimization | Heidi Digital",
    description: "Master conversion rate optimization with our comprehensive CRO guide. Learn proven strategies, tools, and techniques to increase your website conversion rates and boost revenue.",
    keywords: "conversion rate optimization, CRO guide, increase conversions, website optimization, A/B testing, landing page optimization, user experience, conversion funnel, CRO tools, conversion strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    url: "https://heidigital.info/solutions/free-resources/cro-guide",
    type: "article"
  });

  const croFundamentals = [
    {
      title: "What is CRO?",
      description: "Conversion Rate Optimization is the practice of increasing the percentage of visitors who complete desired actions on your website.",
      icon: <Target className="h-6 w-6 text-heisocial-purple" />
    },
    {
      title: "Why CRO Matters",
      description: "Improving conversions is often more cost-effective than driving more traffic to your site.",
      icon: <TrendingUp className="h-6 w-6 text-heisocial-purple" />
    },
    {
      title: "Key Metrics",
      description: "Track conversion rate, bounce rate, average session duration, and revenue per visitor.",
      icon: <BarChart3 className="h-6 w-6 text-heisocial-purple" />
    },
    {
      title: "User Experience",
      description: "Focus on creating seamless, intuitive experiences that guide users toward conversion.",
      icon: <Users className="h-6 w-6 text-heisocial-purple" />
    }
  ];

  const croChecklist = [
    {
      category: "Website Analysis",
      items: [
        "Analyze current conversion rates across all pages",
        "Identify high-traffic, low-converting pages",
        "Review user behavior with heatmaps and session recordings",
        "Audit website speed and mobile responsiveness",
        "Check for technical issues and broken elements"
      ]
    },
    {
      category: "Landing Page Optimization",
      items: [
        "Create compelling, benefit-focused headlines",
        "Use clear and prominent call-to-action buttons",
        "Minimize form fields and reduce friction",
        "Add social proof and testimonials",
        "Optimize page loading speed"
      ]
    },
    {
      category: "A/B Testing",
      items: [
        "Test different headlines and value propositions",
        "Experiment with CTA button colors and text",
        "Try different page layouts and designs",
        "Test various form lengths and field types",
        "Compare different pricing presentations"
      ]
    },
    {
      category: "User Experience",
      items: [
        "Ensure mobile-first responsive design",
        "Simplify navigation and site structure",
        "Improve page loading speeds",
        "Add trust signals and security badges",
        "Create clear conversion funnels"
      ]
    }
  ];

  const conversionElements = [
    {
      element: "Headlines",
      impact: "High",
      description: "Clear, benefit-focused headlines that communicate value immediately",
      tips: "Use numbers, ask questions, or make bold statements"
    },
    {
      element: "Call-to-Action Buttons",
      impact: "Very High",
      description: "Prominent, action-oriented buttons that stand out visually",
      tips: "Use contrasting colors and action verbs like 'Get', 'Start', 'Download'"
    },
    {
      element: "Forms",
      impact: "High", 
      description: "Streamlined forms that collect only essential information",
      tips: "Use progressive profiling and clear error messages"
    },
    {
      element: "Social Proof",
      impact: "Medium",
      description: "Testimonials, reviews, and trust badges that build credibility",
      tips: "Include photos, specific results, and recognizable company logos"
    },
    {
      element: "Page Speed",
      impact: "Very High",
      description: "Fast-loading pages that don't frustrate users",
      tips: "Aim for under 3 seconds load time, optimize images and code"
    }
  ];

  const croTools = [
    {
      tool: "Google Analytics",
      type: "Analytics",
      pricing: "Free",
      description: "Track conversions, user behavior, and identify optimization opportunities"
    },
    {
      tool: "Hotjar",
      type: "User Behavior",
      pricing: "Freemium",
      description: "Heatmaps, session recordings, and user feedback tools"
    },
    {
      tool: "Google Optimize",
      type: "A/B Testing",
      pricing: "Free",
      description: "Create and run A/B tests and personalization experiments"
    },
    {
      tool: "Unbounce",
      type: "Landing Pages",
      pricing: "Paid",
      description: "Build and optimize high-converting landing pages"
    },
    {
      tool: "OptinMonster",
      type: "Lead Generation",
      pricing: "Paid",
      description: "Create popups, slide-ins, and other conversion-focused opt-in forms"
    }
  ];

  const commonMistakes = [
    "Testing too many elements at once",
    "Not running tests long enough for statistical significance",
    "Ignoring mobile user experience",
    "Making assumptions instead of testing hypotheses",
    "Focusing only on homepage optimization",
    "Not segmenting traffic for targeted optimization"
  ];

  return (
    <Layout>
      <Hero
        title="Complete CRO Guide 2024"
        subtitle="Master Conversion Rate Optimization with proven strategies and actionable insights"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Understanding Conversion Rate Optimization"
            subtitle="The Foundation of Successful Digital Marketing"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {croFundamentals.map((item, index) => (
              <Card key={index} className="border-t-4 border-heisocial-purple">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {item.icon}
                    <CardTitle className="ml-2 text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-heisocial-purple to-pink-500 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Why This Guide Matters</h3>
            <p className="text-lg opacity-90 mb-4">
              A 1% improvement in conversion rate can lead to significant revenue increases. This comprehensive guide provides you with proven strategies and actionable tactics to optimize your website's performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold">2-5%</div>
                <div className="text-sm opacity-80">Average website conversion rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10-15%</div>
                <div className="text-sm opacity-80">Top-performing websites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">200%+</div>
                <div className="text-sm opacity-80">Potential improvement with CRO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRO Checklist Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Complete CRO Checklist"
            subtitle="Step-by-step optimization roadmap"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {croChecklist.map((section, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Check className="h-6 w-6 text-green-600 mr-2" />
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-4 h-4 border-2 border-gray-300 rounded mr-3 mt-1 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Conversion Elements */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Key Conversion Elements"
            subtitle="Critical components that drive conversions"
            centered
          />
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Impact Level</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Optimization Tips</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conversionElements.map((element, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold">{element.element}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={element.impact === 'Very High' ? 'destructive' : element.impact === 'High' ? 'default' : 'secondary'}
                    >
                      {element.impact}
                    </Badge>
                  </TableCell>
                  <TableCell>{element.description}</TableCell>
                  <TableCell className="text-sm">{element.tips}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CRO Tools Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Essential CRO Tools"
            subtitle="Software and platforms to power your optimization efforts"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {croTools.map((tool, index) => (
              <Card key={index} className="border-t-4 border-blue-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{tool.tool}</CardTitle>
                    <Badge variant="outline">{tool.pricing}</Badge>
                  </div>
                  <Badge className="w-fit">{tool.type}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tool.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device-Specific Optimization */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Device-Specific Optimization"
            subtitle="Tailoring experiences for different devices"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-t-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-6 w-6 text-green-500 mr-2" />
                  Mobile Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Thumb-friendly button sizes (44px minimum)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Single-column layouts for easy scrolling</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Minimize text input requirements</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Fast loading times (under 3 seconds)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Clear, readable fonts (16px minimum)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="h-6 w-6 text-blue-500 mr-2" />
                  Desktop Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Utilize whitespace effectively</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Multi-column layouts for better content organization</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Hover effects and interactive elements</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Detailed product information and comparisons</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Advanced filtering and search capabilities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Common CRO Mistakes to Avoid"
            subtitle="Learn from these frequent optimization pitfalls"
            centered
          />
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    ✕
                  </div>
                  <span className="text-gray-800">{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Specific Tips */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="E-commerce CRO Strategies"
            subtitle="Specific tactics for online stores"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-t-4 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="h-6 w-6 text-purple-500 mr-2" />
                  Product Page Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">High-Quality Images</h4>
                  <p className="text-gray-600">Multiple angles, zoom functionality, and lifestyle photos</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Clear Product Information</h4>
                  <p className="text-gray-600">Detailed descriptions, specifications, and sizing guides</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Reviews</h4>
                  <p className="text-gray-600">Display ratings, reviews, and Q&A sections</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stock Indicators</h4>
                  <p className="text-gray-600">Show availability and create urgency when appropriate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-6 w-6 text-orange-500 mr-2" />
                  Checkout Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Streamlined Process</h4>
                  <p className="text-gray-600">Minimize steps and offer guest checkout options</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Trust Signals</h4>
                  <p className="text-gray-600">Security badges, SSL certificates, and payment icons</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Multiple Payment Options</h4>
                  <p className="text-gray-600">Credit cards, PayPal, digital wallets, and BNPL services</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Transparent Pricing</h4>
                  <p className="text-gray-600">Show all costs upfront including shipping and taxes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Action Plan Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Your 30-Day CRO Action Plan"
            subtitle="Start optimizing your conversions today"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Week 1-2: Analyze</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Set up Google Analytics goals</li>
                <li>• Install heatmap tracking</li>
                <li>• Audit current conversion funnels</li>
                <li>• Identify high-impact pages</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Week 2-3: Test</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Create A/B test hypotheses</li>
                <li>• Launch first tests</li>
                <li>• Optimize page speed</li>
                <li>• Improve mobile experience</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Week 3-4: Optimize</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Implement winning variations</li>
                <li>• Plan next round of tests</li>
                <li>• Document learnings</li>
                <li>• Scale successful changes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Boost Your Conversions?"
        description="Get personalized CRO recommendations and start optimizing your website for better results today."
        primaryButtonText="Get CRO Audit"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Checklist"
        secondaryButtonLink="/downloads/cro-checklist.pdf"
        backgroundClass="bg-white"
      />
    </Layout>
  );
};

export default CROGuide;
