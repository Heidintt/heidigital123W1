import React from "react";
import { ArrowLeft, Calendar, Target, TrendingUp, Car } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const MicrolinoStrategy = () => {
  // SEO optimization for Microlino Strategy case study
  useSEO({
    title: "Microlino Australia Launch Campaign | EV Marketing Strategy Case Study | Heidi Digital",
    description: "Strategic marketing campaign for Microlino 2026 Australian launch. 'Half the Space, Twice the Life' - comprehensive EV marketing strategy and execution.",
    keywords: "Microlino marketing, EV marketing strategy, electric vehicle launch, Australian market entry, automotive marketing, sustainable transport",
    url: "https://heidigital.info/portfolio/microlino-strategy",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">Campaign Strategy</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">EV Marketing</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Market Entry</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Microlino 2026 Australian Launch Campaign
              </h1>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Comprehensive strategic marketing communications campaign for Microlino's Australian market entry, 
                featuring the 'Half the Space, Twice the Life' concept and integrated multi-channel approach.
              </p>
              
              <div className="flex flex-wrap gap-6 text-green-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2026 Launch Campaign
                </div>
                <div className="flex items-center">
                  <Car className="mr-2 h-5 w-5" />
                  Electric Vehicle
                </div>
                <div className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Australian Market
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Campaign Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
                Campaign Overview: "Half the Space, Twice the Life"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Campaign Concept</h3>
                  <p className="text-gray-600 mb-6">
                    The "Half the Space, Twice the Life" campaign positions Microlino as the perfect urban 
                    solution for modern Australians, emphasizing efficiency, sustainability, and lifestyle enhancement 
                    in crowded city environments.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Key Messages</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Compact design, maximum convenience</li>
                    <li>• Sustainable urban mobility solution</li>
                    <li>• Cost-effective alternative to traditional cars</li>
                    <li>• Perfect for Australian city lifestyle</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Target Audience</h3>
                  <p className="text-gray-600 mb-4">
                    Urban professionals aged 25-45 in Sydney, Melbourne, and Brisbane who value sustainability, 
                    efficiency, and innovative solutions for city living.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Campaign Goals</h4>
                    <p className="text-green-800 text-sm">
                      Generate 10,000 pre-orders, achieve 25% brand awareness in target cities, 
                      and establish Microlino as the leading micro-EV brand in Australia.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy Components */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Integrated Marketing Strategy</CardTitle>
              <CardDescription>
                Multi-channel approach for maximum market impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Digital</div>
                  <p className="text-sm text-gray-600">Social media, influencer partnerships, and targeted ads</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">Events</div>
                  <p className="text-sm text-gray-600">Pop-up experiences and test drive campaigns</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">PR</div>
                  <p className="text-sm text-gray-600">Media launches and thought leadership</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Partnerships</div>
                  <p className="text-sm text-gray-600">Retail and eco-conscious brand collaborations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Next Big Campaign?</h3>
              <p className="mb-6 text-green-100">
                Let's create a comprehensive marketing strategy that drives real results for your brand.
              </p>
              <Button variant="secondary" size="lg">
                <a href="/contact">Start Your Campaign</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MicrolinoStrategy;
