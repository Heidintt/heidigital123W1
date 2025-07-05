
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, TrendingUp, Target, BarChart3, Users, Search, ShoppingCart, Eye, MousePointer, Clock, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const CROGuide = () => {
  // SEO optimization
  useSEO({
    title: "Complete CRO Guide | Conversion Rate Optimization | Heidi Digital",
    description: "Master conversion rate optimization with our comprehensive CRO guide. Learn testing strategies, analytics, user experience optimization, and proven techniques to boost conversions.",
    keywords: "conversion rate optimization, CRO guide, A/B testing, landing page optimization, user experience, conversion funnel, analytics, website optimization, digital marketing, conversion strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    url: "https://heidigital.info/solutions/free-resources/cro-guide",
    type: "article"
  });

  // Structured Data for SEO
  React.useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://heidigital.info/solutions/free-resources/cro-guide#article",
          "headline": "Complete CRO Guide - Conversion Rate Optimization",
          "description": "Comprehensive guide to conversion rate optimization covering testing strategies, analytics, user experience, and proven techniques to boost conversions.",
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
            "@id": "https://heidigital.info/solutions/free-resources/cro-guide"
          },
          "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "HowTo",
          "name": "How to Optimize Conversion Rates",
          "description": "Step-by-step guide to improving website conversion rates",
          "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Analyze Current Performance",
              "text": "Use analytics tools to identify conversion bottlenecks and opportunities"
            },
            {
              "@type": "HowToStep", 
              "name": "Create Test Hypotheses",
              "text": "Develop data-driven hypotheses for optimization tests"
            },
            {
              "@type": "HowToStep",
              "name": "Run A/B Tests",
              "text": "Implement split testing to validate optimization ideas"
            },
            {
              "@type": "HowToStep",
              "name": "Analyze Results",
              "text": "Measure test results and implement winning variations"
            }
          ]
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
              "name": "Solutions",
              "item": "https://heidigital.info/solutions"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Free Resources",
              "item": "https://heidigital.info/solutions/free-resources"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "CRO Guide",
              "item": "https://heidigital.info/solutions/free-resources/cro-guide"
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

  const croFundamentals = [
    {
      title: "Understand Your Funnel",
      description: "Map out every step of your customer journey from awareness to conversion.",
      icon: <TrendingUp className="h-8 w-8 text-heisocial-purple" />,
    },
    {
      title: "Identify Bottlenecks",
      description: "Use analytics to find where users drop off in your conversion process.",
      icon: <Target className="h-8 w-8 text-heisocial-purple" />,
    },
    {
      title: "Test Everything",
      description: "Run systematic A/B tests on headlines, CTAs, forms, and page layouts.",
      icon: <BarChart3 className="h-8 w-8 text-heisocial-purple" />,
    },
    {
      title: "User-Centric Design",
      description: "Optimize for user experience and remove friction from conversion paths.",
      icon: <Users className="h-8 w-8 text-heisocial-purple" />,
    },
  ];

  const testingStrategies = [
    {
      category: "A/B Testing",
      description: "Split traffic between two versions to determine the winner",
      examples: ["Headlines", "Button colors", "Form layouts", "Product descriptions"]
    },
    {
      category: "Multivariate Testing",
      description: "Test multiple elements simultaneously to find optimal combinations",
      examples: ["Page layouts", "Multiple CTAs", "Content variations", "Design elements"]
    },
    {
      category: "User Testing",
      description: "Observe real users interacting with your site to identify issues",
      examples: ["Navigation problems", "Confusion points", "Mobile usability", "Checkout flow"]
    },
    {
      category: "Heatmap Analysis",
      description: "Understand user behavior through click and scroll tracking",
      examples: ["Click patterns", "Scroll depth", "Form interactions", "Mobile behavior"]
    }
  ];

  const optimizationAreas = [
    {
      area: "Landing Pages",
      techniques: [
        "Clear value proposition above the fold",
        "Single, prominent call-to-action",
        "Remove navigation distractions",
        "Use social proof and testimonials",
        "Optimize page load speed"
      ]
    },
    {
      area: "Product Pages",
      techniques: [
        "High-quality product images",
        "Detailed product descriptions",
        "Customer reviews and ratings",
        "Clear pricing and availability",
        "Related product recommendations"
      ]
    },
    {
      area: "Checkout Process",
      techniques: [
        "Minimize form fields",
        "Guest checkout option",
        "Multiple payment methods",
        "Progress indicators",
        "Trust signals and security badges"
      ]
    },
    {
      area: "Email Campaigns",
      techniques: [
        "Personalized subject lines",
        "Clear call-to-action buttons",
        "Mobile-responsive design",
        "Abandoned cart recovery",
        "Segmented targeting"
      ]
    }
  ];

  const kpiMetrics = [
    { metric: "Conversion Rate", description: "Percentage of visitors who complete desired action", benchmark: "2-5% (varies by industry)" },
    { metric: "Click-Through Rate", description: "Percentage of users who click on a specific link", benchmark: "2-5% for email, 0.9% for display ads" },
    { metric: "Bounce Rate", description: "Percentage of single-page sessions", benchmark: "26-40% is excellent, 41-55% is average" },
    { metric: "Average Order Value", description: "Average amount spent per transaction", benchmark: "Varies by industry and business model" },
    { metric: "Cart Abandonment Rate", description: "Percentage of started checkouts not completed", benchmark: "70% average across industries" },
    { metric: "Page Load Speed", description: "Time taken for page to fully load", benchmark: "Under 3 seconds for optimal conversion" }
  ];

  const toolsAndPlatforms = [
    {
      category: "Analytics & Tracking",
      tools: [
        { name: "Google Analytics 4", use: "Comprehensive website analytics and conversion tracking" },
        { name: "Google Tag Manager", use: "Tag management and event tracking setup" },
        { name: "Hotjar", use: "Heatmaps, session recordings, and user feedback" },
        { name: "Mixpanel", use: "Event-based analytics and user behavior tracking" }
      ]
    },
    {
      category: "A/B Testing",
      tools: [
        { name: "Google Optimize", use: "Free A/B testing and personalization" },
        { name: "Optimizely", use: "Enterprise-level experimentation platform" },
        { name: "VWO", use: "Visual website optimizer and testing suite" },
        { name: "Unbounce", use: "Landing page builder with built-in testing" }
      ]
    },
    {
      category: "User Research",
      tools: [
        { name: "UserTesting", use: "Remote user testing and feedback collection" },
        { name: "Crazy Egg", use: "Heatmaps and click tracking analysis" },
        { name: "FullStory", use: "Complete user session recordings" },
        { name: "Typeform", use: "User surveys and feedback forms" }
      ]
    }
  ];

  return (
    <Layout>
      <Hero
        title="Complete CRO Guide"
        subtitle="Master Conversion Rate Optimization with proven strategies, tools, and techniques to boost your website performance"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            title="What is Conversion Rate Optimization?"
            subtitle="Understanding the fundamentals of CRO"
            centered
          />

          <div className="prose prose-lg mx-auto mb-12">
            <p className="text-gray-700 leading-relaxed">
              Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors 
              who complete a desired action — whether that's filling out a form, becoming customers, or subscribing to a service. 
              CRO involves understanding how users move through your site, what actions they take, and what's stopping them from completing your goals.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              The beauty of CRO lies in its ability to maximize the value of your existing traffic. Instead of spending more money 
              to drive additional visitors, you optimize your site to convert more of your current visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {croFundamentals.map((fundamental, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-heisocial-purple">
                <div className="flex justify-center mb-4">
                  {fundamental.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-heisocial-blue">{fundamental.title}</h3>
                <p className="text-gray-600">{fundamental.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Strategies Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="CRO Testing Strategies"
            subtitle="Different approaches to optimization testing"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testingStrategies.map((strategy, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">{strategy.category}</h3>
                <p className="text-gray-700 mb-6">{strategy.description}</p>
                
                <h4 className="font-semibold mb-3 text-heisocial-purple">Common Test Examples:</h4>
                <ul className="space-y-2">
                  {strategy.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Key Optimization Areas"
            subtitle="Focus areas that drive the biggest conversion improvements"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-heisocial-purple">
                <div className="flex items-center mb-6">
                  <div className="bg-heisocial-purple p-3 rounded-full mr-4">
                    {area.area === "Landing Pages" && <Target className="h-6 w-6 text-white" />}
                    {area.area === "Product Pages" && <Search className="h-6 w-6 text-white" />}
                    {area.area === "Checkout Process" && <ShoppingCart className="h-6 w-6 text-white" />}
                    {area.area === "Email Campaigns" && <TrendingUp className="h-6 w-6 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-heisocial-blue">{area.area}</h3>
                </div>
                
                <ul className="space-y-3">
                  {area.techniques.map((technique, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{technique}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Metrics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Essential CRO Metrics & KPIs"
            subtitle="Key performance indicators to track your optimization success"
            centered
          />

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-heisocial-purple">
                  <TableHead className="text-white font-semibold">Metric</TableHead>
                  <TableHead className="text-white font-semibold">Description</TableHead>
                  <TableHead className="text-white font-semibold">Industry Benchmark</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpiMetrics.map((kpi, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <TableCell className="font-semibold text-heisocial-blue">{kpi.metric}</TableCell>
                    <TableCell className="text-gray-700">{kpi.description}</TableCell>
                    <TableCell className="text-gray-600">{kpi.benchmark}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Tools and Platforms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="CRO Tools & Platforms"
            subtitle="Essential tools to power your optimization efforts"
            centered
          />

          <div className="space-y-12">
            {toolsAndPlatforms.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-heisocial-blue p-3 rounded-full mr-4">
                    {category.category === "Analytics & Tracking" && <BarChart3 className="h-6 w-6 text-white" />}
                    {category.category === "A/B Testing" && <Zap className="h-6 w-6 text-white" />}
                    {category.category === "User Research" && <Eye className="h-6 w-6 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-heisocial-blue">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.tools.map((tool, idx) => (
                    <div key={idx} className="border-l-4 border-heisocial-purple pl-4">
                      <h4 className="font-bold text-lg mb-2">{tool.name}</h4>
                      <p className="text-gray-600">{tool.use}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Framework Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="CRO Implementation Framework"
            subtitle="Step-by-step process to optimize your conversions"
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-heisocial-purple to-heisocial-blue text-white">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Analyze</h3>
                <p>Use analytics to identify conversion bottlenecks and opportunities in your funnel.</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-heisocial-blue to-blue-600 text-white">
                <div className="flex justify-center mb-4">
                  <Target className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Hypothesize</h3>
                <p>Create data-driven hypotheses about what changes could improve conversions.</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <div className="flex justify-center mb-4">
                  <Zap className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Test</h3>
                <p>Run systematic A/B tests to validate your optimization hypotheses.</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">4. Optimize</h3>
                <p>Implement winning variations and continue iterating for ongoing improvement.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Best Practices for CRO Success</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-heisocial-purple">Do's</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Test one element at a time for clear results</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Run tests for statistical significance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Document all test results and learnings</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Focus on high-impact, low-effort changes first</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-red-500">Don'ts</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-red-500 mr-2 mt-0.5 flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span>End tests too early without statistical significance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-red-500 mr-2 mt-0.5 flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span>Make changes based on personal preferences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-red-500 mr-2 mt-0.5 flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span>Ignore mobile users in your optimization efforts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-red-500 mr-2 mt-0.5 flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span>Test without clear goals and KPIs defined</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Optimize Your Conversions?"
        description="Let our experts help you implement a data-driven CRO strategy that delivers measurable results."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default CROGuide;
