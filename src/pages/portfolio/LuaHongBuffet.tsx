
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
                <Badge variant="secondary" className="bg-white/20 text-white">Youth Marketing</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lửa Hồng Buffet Marketing Strategy
              </h1>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Comprehensive marketing strategy for a vibrant hot pot buffet in Ho Chi Minh City, targeting youth demographics 
                through interactive content, engaging events, and community-building initiatives.
              </p>
              
              <div className="flex flex-wrap gap-6 text-red-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2023-2024 Strategy
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Ho Chi Minh City
                </div>
                <div className="flex items-center">
                  <Utensils className="mr-2 h-5 w-5" />
                  Hot Pot Buffet
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Youth Focus
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Project Overview */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Lửa Hồng Buffet needed to establish itself as the go-to destination for young diners in 
                Ho Chi Minh City's competitive hot pot market. The strategy focused on creating memorable 
                experiences that would encourage social sharing and repeat visits.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Compete in saturated HCMC hot pot market while targeting budget-conscious youth demographics</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Interactive experiences, social media first approach, and community-building initiatives</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-yellow-600">Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>45% increase in youth customer base, 60% boost in weekend reservations</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Target Audience Analysis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Target Audience Analysis</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Primary Target: Young Adults (18-28)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Students and Young Professionals</h4>
                    <p className="text-gray-600">University students and entry-level professionals seeking affordable social dining</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-600">Social Media Active Users</h4>
                    <p className="text-gray-600">Heavy Instagram, TikTok, and Facebook users who share dining experiences</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-600">Group Dining Enthusiasts</h4>
                    <p className="text-gray-600">Prefer communal dining experiences with friends and social groups</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Secondary Target: Young Families (25-35)</h3>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                  <h4 className="font-semibold mb-4 text-red-700">Characteristics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Parents looking for affordable family dining options</li>
                    <li>• Interested in authentic Vietnamese cuisine experiences</li>
                    <li>• Value convenience and quality for family outings</li>
                    <li>• Weekend dining preference with children</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-4 text-orange-700">Marketing Approach</h4>
                  <p className="text-gray-600 text-sm">
                    Family-friendly promotions, kid-friendly menu options, and weekend special events 
                    designed to accommodate families with children.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Strategic Approach</h2>
            
            <div className="mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-red-600">"Where Fire Meets Fun"</h3>
                <p className="text-gray-600">Brand positioning as a social experience destination, not just a dining venue</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    Differentiation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Interactive hot pot experience</li>
                    <li>• Instagram-worthy presentation</li>
                    <li>• Affordable student pricing</li>
                    <li>• Late-night availability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-600 text-center">
                    <div className="text-4xl mb-2">📱</div>
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Daily food photography</li>
                    <li>• Customer experience videos</li>
                    <li>• User-generated content</li>
                    <li>• Interactive challenges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-600 text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Student discount nights</li>
                    <li>• Group dining competitions</li>
                    <li>• Birthday celebrations</li>
                    <li>• Corporate team building</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600 text-center">
                    <div className="text-4xl mb-2">🤝</div>
                    Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• University partnerships</li>
                    <li>• Influencer collaborations</li>
                    <li>• Customer loyalty programs</li>
                    <li>• Local community events</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Marketing Tactics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Marketing Tactics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Social Media Marketing</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-600 mb-2">Instagram Strategy</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• High-quality food photography posted daily</li>
                      <li>• Stories featuring customer experiences</li>
                      <li>• Reels showcasing cooking process</li>
                      <li>• User-generated content reposting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-600 mb-2">TikTok Content</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fun cooking videos and time-lapse content</li>
                      <li>• Staff personality showcases</li>
                      <li>• Trending audio adaptations</li>
                      <li>• Customer reaction videos</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Event Marketing</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-600 mb-2">Student-Focused Events</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Study session specials during exam periods</li>
                      <li>• University partnership events</li>
                      <li>• Graduation celebration packages</li>
                      <li>• Inter-university competition nights</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-600 mb-2">Community Events</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Family night specials</li>
                      <li>• Corporate lunch packages</li>
                      <li>• Birthday party hosting</li>
                      <li>• Holiday celebration events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Achieved */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Results Achieved</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">45%</div>
                <p className="text-sm text-gray-600 font-medium">Youth Customer Increase</p>
                <p className="text-xs text-gray-500 mt-1">18-28 age demographic growth</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
                <p className="text-sm text-gray-600 font-medium">Weekend Reservations</p>
                <p className="text-xs text-gray-500 mt-1">Boost in weekend bookings</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-green-50 rounded-lg border border-yellow-200">
                <div className="text-4xl font-bold text-yellow-600 mb-2">200%</div>
                <p className="text-sm text-gray-600 font-medium">Social Media Growth</p>
                <p className="text-xs text-gray-500 mt-1">Followers across platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                <p className="text-sm text-gray-600 font-medium">Customer Retention</p>
                <p className="text-xs text-gray-500 mt-1">Return customer rate</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Business Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <span className="font-medium">Brand Recognition:</span> Established as top youth dining destination</li>
                  <li>• <span className="font-medium">Community Building:</span> Created loyal customer base and advocates</li>
                  <li>• <span className="font-medium">Market Position:</span> Recognized as premier group dining spot</li>
                  <li>• <span className="font-medium">Word-of-Mouth:</span> High organic referral rates</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Social Media Success</h3>
                <div className="bg-red-900/10 p-4 rounded-lg border border-red-200">
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Instagram engagement rate: 8.5% (industry avg: 1.9%)</li>
                    <li>• TikTok videos achieving 50K+ average views</li>
                    <li>• Facebook community group: 5,000+ members</li>
                    <li>• User-generated content increased 300%</li>
                    <li>• Brand hashtag trending locally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
