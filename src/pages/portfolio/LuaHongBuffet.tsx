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
          {/* Market Analysis & Brand Positioning */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                  Market Analysis & Brand Positioning
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-red-300">Market Context</h4>
                  <p className="text-gray-300 mb-4">Ho Chi Minh City's competitive hot pot landscape:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 500+ hot pot restaurants in HCMC</li>
                    <li>• Young demographics (60% under 30)</li>
                    <li>• Social dining culture preference</li>
                    <li>• Instagram-driven food trends</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-orange-300">Differentiation Strategy</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Youth-centric atmosphere & design</li>
                    <li>• Interactive dining experiences</li>
                    <li>• Social media integration</li>
                    <li>• Student-friendly pricing</li>
                    <li>• Late-night availability</li>
                  </ul>
                </div>

                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-yellow-300">Success Targets</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Daily Customers:</span> 500+ average</li>
                    <li>• <span className="font-medium">Social Following:</span> 50K+ across platforms</li>
                    <li>• <span className="font-medium">Customer Retention:</span> 80% return rate</li>
                    <li>• <span className="font-medium">Brand Recognition:</span> Top 3 HCMC hot pot</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Deep Dive */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                  Target Audience Deep Dive
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-800 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">🎓</span> Primary: Students & Young Professionals
                    </h4>
                    <div className="space-y-3">
                      <p><span className="font-medium text-red-300">Age Range:</span> 18-28 years</p>
                      <p><span className="font-medium text-red-300">Income:</span> ₫5-15M monthly</p>
                      <p><span className="font-medium text-red-300">Behavior:</span> Group dining enthusiasts</p>
                      <p><span className="font-medium text-red-300">Platform:</span> TikTok, Instagram active</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">👨‍👩‍👧‍👦</span> Secondary: Young Families
                    </h4>
                    <div className="space-y-3">
                      <p><span className="font-medium text-orange-300">Profile:</span> Parents aged 25-35</p>
                      <p><span className="font-medium text-orange-300">Motivation:</span> Affordable family dining</p>
                      <p><span className="font-medium text-orange-300">Frequency:</span> Weekend visits</p>
                      <p><span className="font-medium text-orange-300">Value:</span> Kid-friendly atmosphere</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-red-300">Persona: Linh Nguyen</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-lg text-orange-300">Profile</h5>
                      <p className="text-gray-300">Age: 22</p>
                      <p className="text-gray-300">Occupation: University Marketing Student</p>
                      <p className="text-gray-300">Income: ₫8M/month (part-time job + family support)</p>
                      <p className="text-gray-300">Location: District 1, HCMC</p>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-green-300">Social Behavior</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Active on TikTok (2+ hours daily)</li>
                        <li>• Instagram Stories enthusiast</li>
                        <li>• Influences friend group decisions</li>
                        <li>• Values authentic experiences</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-red-300">Dining Preferences</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Affordable but quality food</li>
                        <li>• Instagram-worthy presentation</li>
                        <li>• Group-friendly atmosphere</li>
                        <li>• Convenient location access</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-purple-300">Quote</h6>
                      <p className="text-sm text-gray-300 italic">"I want a place where my friends and I can enjoy great food, take amazing photos, and create memories without breaking our budget."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Big Idea & Brand Platform */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                  Big Idea & Brand Platform
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="text-xl font-bold mb-4 text-red-300">Big Idea</h4>
                  <p className="text-lg font-semibold">"Where Fire Meets Fun"</p>
                </div>
                
                <div className="bg-slate-600 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold mb-4 text-orange-300">Experience Promise</h4>
                  <p>Not just dining, but social experience creation</p>
                </div>
                
                <div className="bg-slate-500 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h4 className="text-xl font-bold mb-4 text-yellow-300">Social Currency</h4>
                  <p>Shareable moments that friends can't resist</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 inline-block px-6 py-3 rounded-full">
                  <p className="text-xl font-bold">Hashtag: #LuaHongMoments</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6-Month Campaign Strategy */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                  6-Month Integrated Campaign Strategy
                </span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-300 mb-2">Phase 1: Foundation Building (Months 1-2)</h4>
                    <p className="text-gray-300 mb-2">Establish brand presence and initial customer base</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Activities:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Social media setup and content creation</li>
                          <li>• Influencer seeding and first impressions</li>
                          <li>• Friends & family soft opening</li>
                          <li>• Staff training and service optimization</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Success Metrics:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 5K social media followers</li>
                          <li>• 200+ daily customers</li>
                          <li>• 4.5+ Google rating</li>
                          <li>• 50+ UGC posts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-300 mb-2">Phase 2: Community Building (Months 3-4)</h4>
                    <p className="text-gray-300 mb-2">Scale engagement and establish market presence</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Activities:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Student organization partnerships</li>
                          <li>• Monthly themed events launch</li>
                          <li>• Loyalty program implementation</li>
                          <li>• User-generated content campaigns</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Success Metrics:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 20K social media followers</li>
                          <li>• 400+ daily customers</li>
                          <li>• 60% repeat customer rate</li>
                          <li>• 200+ monthly UGC posts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-purple-300 mb-2">Phase 3: Market Domination (Months 5-6)</h4>
                    <p className="text-gray-300 mb-2">Establish as top youth dining destination</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Activities:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Major influencer collaborations</li>
                          <li>• Corporate team building packages</li>
                          <li>• Seasonal menu launches</li>
                          <li>• Community impact initiatives</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Final Results Achieved:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 50K+ total social followers</li>
                          <li>• 500+ daily customers</li>
                          <li>• 80% customer retention</li>
                          <li>• Top 3 HCMC hot pot ranking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Strategy & Social Media */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                  Content Strategy & Social Media Execution
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-red-300">Content Pillars</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Food Photography & Videos</span>
                        <span className="text-xs bg-red-600 px-2 py-1 rounded">35%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Customer Experience Stories</span>
                        <span className="text-xs bg-orange-600 px-2 py-1 rounded">25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Behind-the-Scenes Content</span>
                        <span className="text-xs bg-yellow-600 px-2 py-1 rounded">20%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Interactive Challenges</span>
                        <span className="text-xs bg-purple-600 px-2 py-1 rounded">20%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-orange-300">Platform Strategy</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-yellow-300">TikTok (40% focus)</h5>
                        <p className="text-xs text-gray-300">Viral challenges, food prep videos, customer reactions</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-blue-300">Instagram (35% focus)</h5>
                        <p className="text-xs text-gray-300">High-quality photos, Stories, Reels, IGTV tutorials</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-green-300">Facebook (25% focus)</h5>
                        <p className="text-xs text-gray-300">Event promotion, community groups, customer service</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300">Signature Campaigns</h4>
                    <div className="space-y-4">
                      <div className="bg-slate-700 p-4 rounded border-l-4 border-red-400">
                        <h5 className="font-bold text-red-300">Hot Pot Challenge</h5>
                        <p className="text-sm text-gray-300">Monthly spice level challenges with prizes and social media buzz</p>
                      </div>
                      <div className="bg-slate-700 p-4 rounded border-l-4 border-blue-400">
                        <h5 className="font-bold text-blue-300">Squad Nights</h5>
                        <p className="text-sm text-gray-300">Group discounts and special activities for university students</p>
                      </div>
                      <div className="bg-slate-700 p-4 rounded border-l-4 border-purple-400">
                        <h5 className="font-bold text-purple-300">Perfect Bowl Contest</h5>
                        <p className="text-sm text-gray-300">Photo contests showcasing creative hot pot combinations</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">Engagement Tactics</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Daily customer feature stories</li>
                      <li>• Interactive polls and Q&As</li>
                      <li>• Live cooking demonstrations</li>
                      <li>• Birthday celebration packages</li>
                      <li>• Seasonal menu voting campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Achieved */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                  Outstanding Results Achieved
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-200">
                  <div className="text-4xl font-bold text-red-600 mb-2">45%</div>
                  <p className="text-sm text-gray-600 font-medium">Youth Customer Base Increase</p>
                  <p className="text-xs text-gray-500 mt-1">From 30% to 75% of customers</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
                  <p className="text-sm text-gray-600 font-medium">Weekend Reservations Boost</p>
                  <p className="text-xs text-gray-500 mt-1">From 40% to 100% capacity</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">200%</div>
                  <p className="text-sm text-gray-600 font-medium">Social Media Growth</p>
                  <p className="text-xs text-gray-500 mt-1">50K+ total followers achieved</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
                  <p className="text-sm text-gray-600 font-medium">Average Group Size Increase</p>
                  <p className="text-xs text-gray-500 mt-1">From 3.2 to 4.3 people per table</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-red-300">Business Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Revenue Growth:</span> 180% increase in 6 months</li>
                    <li>• <span className="font-medium">Customer Retention:</span> 80% return rate achieved</li>
                    <li>• <span className="font-medium">Brand Recognition:</span> Top 3 HCMC hot pot destination</li>
                    <li>• <span className="font-medium">Word-of-Mouth:</span> 90% of new customers from referrals</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-orange-300">Social Media Success</h4>
                  <div className="bg-red-900/30 p-4 rounded-lg border border-red-700">
                    <ul className="text-sm text-red-200 space-y-1">
                      <li>• Instagram engagement rate: 8.5% (industry avg: 1.9%)</li>
                      <li>• TikTok videos: 50K+ average views</li>
                      <li>• Facebook community: 5K+ active members</li>
                      <li>• User-generated content: 300% increase</li>
                      <li>• Brand hashtag: #LuaHongMoments trending locally</li>
                    </ul>
                  </div>
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
