import React from "react";
import { ArrowLeft, Calendar, Music, Users, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const KotoClub = () => {
  // SEO optimization for Koto Club case study
  useSEO({
    title: "Nightclub Marketing Strategy | Premium Nightlife Branding Case Study | Heidi Digital",
    description: "Marketing strategy for Koto Club Da Nang. Premium nightlife positioning, target audience analysis, and social media strategy for entertainment venue.",
    keywords: "nightclub marketing, nightlife branding, Da Nang entertainment, club marketing strategy, premium nightlife, venue marketing",
    url: "https://heidigital.info/portfolio/koto-club",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-16">
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
                <Badge variant="secondary" className="bg-white/20 text-white">Nightclub Marketing</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Premium Branding</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Event Strategy</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Koto Club Da Nang Marketing Plan
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Strategic marketing plan for an upscale nightclub in Da Nang, targeting 25-40 year old 
                professionals and tourists through curated experiences and premium positioning.
              </p>
              
              <div className="flex flex-wrap gap-6 text-purple-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2024 Strategy
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Da Nang, Vietnam
                </div>
                <div className="flex items-center">
                  <Music className="mr-2 h-5 w-5" />
                  Premium Nightclub
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Strategic Positioning */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Music className="mr-3 h-6 w-6 text-purple-600" />
                Premium Nightlife Positioning Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Target Demographics</h3>
                  <p className="text-gray-600 mb-6">
                    Affluent professionals aged 25-40, both local Da Nang residents and international tourists, 
                    who appreciate sophisticated nightlife experiences, premium service, and exclusive atmospheres.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Brand Positioning</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• "Da Nang's most exclusive nightlife destination"</li>
                    <li>• Premium service and curated experiences</li>
                    <li>• Sophisticated atmosphere for discerning clientele</li>
                    <li>• International-standard entertainment venue</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Competitive Advantages</h3>
                  <p className="text-gray-600 mb-4">
                    Koto Club differentiates itself through superior sound systems, premium bottle service, 
                    world-class DJs, and personalized VIP experiences that cater to sophisticated tastes.
                  </p>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Revenue Goals</h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• 300+ customers per weekend night</li>
                      <li>• 40% VIP table booking rate</li>
                      <li>• ₫500M monthly revenue target</li>
                      <li>• 70% customer retention rate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Strategy */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>360° Marketing Approach</CardTitle>
              <CardDescription>
                Integrated strategy for premium nightlife marketing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">VIP</div>
                  <p className="text-sm text-gray-600">Exclusive membership programs and personalized service</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600 mb-2">Events</div>
                  <p className="text-sm text-gray-600">Themed nights, celebrity DJ performances, private parties</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Digital</div>
                  <p className="text-sm text-gray-600">Instagram lifestyle content, influencer partnerships</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">Partnerships</div>
                  <p className="text-sm text-gray-600">Hotels, restaurants, luxury brands collaborations</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Premium Experience Marketing</h4>
                  <p className="text-gray-600">Focus on showcasing luxury amenities, exclusive events, and VIP treatment through high-quality visual content and testimonials.</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Tourist Attraction Strategy</h4>
                  <p className="text-gray-600">Partner with luxury hotels and travel agencies to position Koto Club as a must-visit destination for international visitors to Da Nang.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Local Influencer Network</h4>
                  <p className="text-gray-600">Collaborate with Da Nang's social elite, fashion influencers, and lifestyle content creators to build authentic local credibility.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-purple-800 to-pink-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Venue's Marketing?</h3>
              <p className="mb-6 text-purple-100">
                Let's create a premium marketing strategy that attracts your ideal customers and maximizes revenue.
              </p>
              <Button variant="secondary" size="lg">
                <a href="/contact">Elevate Your Brand</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default KotoClub;
