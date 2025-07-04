import React from "react";
import { ArrowLeft, Calendar, Users, MapPin, Utensils } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const LuaHongBuffet = () => {
  // SEO optimization for Lua Hong Buffet case study
  useSEO({
    title: "Hot Pot Restaurant Marketing Strategy | Food & Beverage Case Study | Heidi Digital",
    description: "Comprehensive marketing strategy for Lửa Hồng Buffet in Ho Chi Minh City. Event marketing, social media strategy for restaurant industry.",
    keywords: "restaurant marketing, hot pot marketing, food beverage strategy, Ho Chi Minh City, event marketing, social media restaurant",
    url: "https://heidigital.info/portfolio/lua-hong-buffet",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
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
                <Badge variant="secondary" className="bg-white/20 text-white">Restaurant Marketing</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Event Strategy</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Social Media</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lửa Hồng Buffet Marketing Strategy
              </h1>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Vibrant marketing plan for a hot pot buffet in Ho Chi Minh City targeting youth demographics 
                with interactive content, engaging events, and community-building initiatives.
              </p>
              
              <div className="flex flex-wrap gap-6 text-red-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2024 Strategy
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Ho Chi Minh City
                </div>
                <div className="flex items-center">
                  <Utensils className="mr-2 h-5 w-5" />
                  Hot Pot Buffet
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Strategy Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 h-6 w-6 text-red-600" />
                Youth-Focused Marketing Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Target Audience</h3>
                  <p className="text-gray-600 mb-6">
                    Young adults aged 18-30 in Ho Chi Minh City who are active on social media, 
                    enjoy group dining experiences, and seek authentic, Instagram-worthy food experiences 
                    that offer great value for money.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Brand Positioning</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• "The hottest hot pot spot for young foodies"</li>
                    <li>• Premium quality at student-friendly prices</li>
                    <li>• Social media-first dining experience</li>
                    <li>• Community gathering place for youth</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Marketing Objectives</h3>
                  <p className="text-gray-600 mb-4">
                    Establish Lửa Hồng as the go-to hot pot destination for young people in HCMC, 
                    achieving 500+ daily customers and strong social media presence within 6 months.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Key Success Metrics</h4>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• 500+ daily customers</li>
                      <li>• 50K+ social media followers</li>
                      <li>• 80% customer retention rate</li>
                      <li>• Top 3 hot pot destination on review sites</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Tactics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Integrated Marketing Approach</CardTitle>
              <CardDescription>
                Multi-channel strategy designed for maximum youth engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">Social</div>
                  <p className="text-sm text-gray-600">TikTok challenges, Instagram stories, Facebook community groups</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Events</div>
                  <p className="text-sm text-gray-600">Student night discounts, group challenge competitions</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Influencers</div>
                  <p className="text-sm text-gray-600">Food bloggers, university KOLs, local micro-influencers</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">Community</div>
                  <p className="text-sm text-gray-600">University partnerships, student organization collaborations</p>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Signature Campaigns</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h5 className="font-semibold">Hot Pot Challenge</h5>
                      <p className="text-sm text-gray-600">Monthly eating challenges with prizes and social media buzz</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold">Student Squad Nights</h5>
                      <p className="text-sm text-gray-600">Group discounts and special pricing for university students</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3">Digital Strategy</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold">Content Creation</h5>
                      <p className="text-sm text-gray-600">Behind-the-scenes videos, food preparation content, customer stories</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold">Community Building</h5>
                      <p className="text-sm text-gray-600">Facebook groups, loyalty programs, birthday celebrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Spice Up Your Restaurant Marketing?</h3>
              <p className="mb-6 text-red-100">
                Let's create a comprehensive marketing strategy that fills your restaurant with happy customers.
              </p>
              <Button variant="secondary" size="lg">
                <a href="/contact">Get Your Strategy</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LuaHongBuffet;
