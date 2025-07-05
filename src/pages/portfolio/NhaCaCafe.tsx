import React from "react";
import { ArrowLeft, Calendar, Coffee, Heart, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const NhaCaCafe = () => {
  // SEO optimization for Nha Ca Cafe case study
  useSEO({
    title: "Cat Cafe Marketing Plan | Creative Workshop Strategy Case Study | Heidi Digital",
    description: "Complete 2025 marketing plan for Nhà Cá Cafe in Thai Nguyen. Cat cafe branding, workshop marketing, and community engagement strategy.",
    keywords: "cat cafe marketing, creative workshop strategy, Thai Nguyen cafe, cafe branding, community engagement, workshop marketing",
    url: "https://heidigital.info/portfolio/nha-ca-cafe",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-16">
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
                <Badge variant="secondary" className="bg-white/20 text-white">Cafe Marketing</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Brand Development</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Community Strategy</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Creative Workshops</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nhà Cá Cafe Marketing Strategy
              </h1>
              
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                Comprehensive marketing plan for a unique cat-themed café in Thai Nguyen, combining 
                coffee culture with creative workshops and feline charm to create a distinctive community space.
              </p>
              
              <div className="flex flex-wrap gap-6 text-amber-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2025 Marketing Plan
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Thai Nguyen City
                </div>
                <div className="flex items-center">
                  <Coffee className="mr-2 h-5 w-5" />
                  Cat Cafe & Workshops
                </div>
                <div className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Community Focus
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Market Analysis & Opportunity */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Market Analysis & Strategic Opportunity
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-amber-300">Thai Nguyen Market</h4>
                  <p className="text-gray-300 mb-4">Emerging coffee culture in university city:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 50+ traditional cafes in city center</li>
                    <li>• Growing student population (40K+)</li>
                    <li>• Limited specialty/themed venues</li>
                    <li>• Strong community culture preference</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-orange-300">Unique Value Proposition</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• First cat cafe in Thai Nguyen</li>
                    <li>• Integrated creative workshop space</li>
                    <li>• Premium Vietnamese coffee focus</li>
                    <li>• Animal welfare partnership</li>
                    <li>• Co-working friendly environment</li>
                  </ul>
                </div>

                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-pink-300">Success Metrics</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Daily Visitors:</span> 150+ average</li>
                    <li>• <span className="font-medium">Workshop Participation:</span> 80+ monthly</li>
                    <li>• <span className="font-medium">Social Following:</span> 10K+ local audience</li>
                    <li>• <span className="font-medium">Cat Adoptions:</span> 2+ monthly facilitated</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Analysis */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Target Audience Analysis
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-800 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">🎨</span> Primary: Creative Students & Professionals
                    </h4>
                    <div className="space-y-3">
                      <p><span className="font-medium text-amber-300">Age Range:</span> 18-35 years</p>
                      <p><span className="font-medium text-amber-300">Profile:</span> University students, young professionals</p>
                      <p><span className="font-medium text-amber-300">Interests:</span> Art, creativity, animal welfare</p>
                      <p><span className="font-medium text-amber-300">Behavior:</span> Social media active, community-oriented</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">💼</span> Secondary: Remote Workers & Freelancers
                    </h4>
                    <div className="space-y-3">
                      <p><span className="font-medium text-orange-300">Need:</span> Alternative workspace</p>
                      <p><span className="font-medium text-orange-300">Value:</span> Quiet, inspiring environment</p>
                      <p><span className="font-medium text-orange-300">Duration:</span> 2-4 hour stays</p>
                      <p><span className="font-medium text-orange-300">Frequency:</span> 3-5 times per week</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-amber-300">Persona: Mai Tran</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-lg text-orange-300">Profile</h5>
                      <p className="text-gray-300">Age: 24</p>
                      <p className="text-gray-300">Occupation: Graphic Design Student at TNU</p>
                      <p className="text-gray-300">Income: ₫5M/month (family support + freelance)</p>
                      <p className="text-gray-300">Location: Thai Nguyen University area</p>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-green-300">Motivations</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Seeks creative inspiration and community</li>
                        <li>• Animal lover without pet ownership ability</li>
                        <li>• Values unique, Instagram-worthy experiences</li>
                        <li>• Wants to develop creative skills</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-red-300">Pain Points</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Limited creative spaces in Thai Nguyen</li>
                        <li>• Lack of skill development opportunities</li>
                        <li>• Missing community of like-minded people</li>
                        <li>• Desire for pet interaction without ownership</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-purple-300">Quote</h6>
                      <p className="text-sm text-gray-300 italic">"I want a place where I can be creative, learn new skills, and connect with cats and other creative people in a cozy, inspiring environment."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Concept & Experience Design */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Brand Concept & Experience Design
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🐱</div>
                  <h4 className="text-xl font-bold mb-4 text-amber-300">Brand Essence</h4>
                  <p className="text-lg font-semibold">"Where Creativity Purrs to Life"</p>
                </div>
                
                <div className="bg-slate-600 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">☕</div>
                  <h4 className="text-xl font-bold mb-4 text-orange-300">Experience Promise</h4>
                  <p>Premium coffee + Cat therapy + Creative growth</p>
                </div>
                
                <div className="bg-slate-500 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="text-xl font-bold mb-4 text-pink-300">Community Mission</h4>
                  <p>Fostering creativity and animal welfare together</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 inline-block px-6 py-3 rounded-full">
                  <p className="text-xl font-bold">Tagline: "Sip, Create, Connect, Care"</p>
                </div>
              </div>
            </div>
          </div>

          {/* 12-Month Marketing Roadmap */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  12-Month Marketing Roadmap
                </span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-300 mb-2">Phase 1: Pre-Launch & Soft Opening (Months 1-3)</h4>
                    <p className="text-gray-300 mb-2">Build anticipation and establish initial customer base</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Activities:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Social media setup and cat introduction</li>
                          <li>• University partnership establishment</li>
                          <li>• Local animal shelter collaboration</li>
                          <li>• Staff training and soft opening events</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Success Metrics:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 2K social media followers</li>
                          <li>• 50+ daily visitors</li>
                          <li>• 5+ university partnerships</li>
                          <li>• 1 successful cat adoption</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-300 mb-2">Phase 2: Growth & Workshop Launch (Months 4-8)</h4>
                    <p className="text-gray-300 mb-2">Scale operations and establish workshop programming</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Activities:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Monthly workshop series launch</li>
                          <li>• Corporate team building packages</li>
                          <li>• Influencer collaboration campaigns</li>
                          <li>• Loyalty program implementation</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Success Metrics:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 5K social media followers</li>
                          <li>• 100+ daily visitors</li>
                          <li>• 50+ monthly workshop participants</li>
                          <li>• 10+ successful cat adoptions</li>
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
                    <h4 className="text-xl font-bold text-purple-300 mb-2">Phase 3: Community Leadership (Months 9-12)</h4>
                    <p className="text-gray-300 mb-2">Establish as Thai Nguyen's premier creative community space</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Activities:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Annual creative festival hosting</li>
                          <li>• Regional expansion planning</li>
                          <li>• Media coverage and awards</li>
                          <li>• Franchise model development</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Final Results:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 10K+ total social followers</li>
                          <li>• 150+ daily visitors</li>
                          <li>• 80+ monthly workshop participants</li>
                          <li>• 25+ total cat adoptions facilitated</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Programming Strategy */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Workshop Programming Strategy
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-amber-300">Core Workshop Categories</h4>
                    <div className="space-y-4">
                      <div className="bg-slate-800 p-4 rounded border-l-4 border-blue-400">
                        <h5 className="font-bold text-blue-300">Photography Workshops</h5>
                        <p className="text-sm text-gray-300">Pet photography, food styling, portrait sessions with cats</p>
                      </div>
                      <div className="bg-slate-800 p-4 rounded border-l-4 border-green-400">
                        <h5 className="font-bold text-green-300">Art & Crafts</h5>
                        <p className="text-sm text-gray-300">Watercolor, cat-themed crafts, pottery with feline inspiration</p>
                      </div>
                      <div className="bg-slate-800 p-4 rounded border-l-4 border-purple-400">
                        <h5 className="font-bold text-purple-300">Digital Skills</h5>
                        <p className="text-sm text-gray-300">Social media content creation, graphic design basics</p>
                      </div>
                      <div className="bg-slate-800 p-4 rounded border-l-4 border-pink-400">
                        <h5 className="font-bold text-pink-300">Wellness</h5>
                        <p className="text-sm text-gray-300">Cat therapy sessions, mindfulness with animals</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-orange-300">Monthly Programming</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Photography Saturdays</span>
                        <span className="text-xs bg-blue-600 px-2 py-1 rounded">Weekly</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Art Therapy Sundays</span>
                        <span className="text-xs bg-green-600 px-2 py-1 rounded">Weekly</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Digital Skills Workshop</span>
                        <span className="text-xs bg-purple-600 px-2 py-1 rounded">Bi-weekly</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Cat Care Education</span>
                        <span className="text-xs bg-pink-600 px-2 py-1 rounded">Monthly</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300">Revenue Model</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-300">Basic Workshops</span>
                        <span className="text-xs text-green-300">₫200K/person</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-300">Premium Sessions</span>
                        <span className="text-xs text-green-300">₫400K/person</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-300">Corporate Team Building</span>
                        <span className="text-xs text-green-300">₫2M/group</span>
                      </div>
                      <div className="border-t border-slate-400 pt-2 mt-2">
                        <div className="flex justify-between">
                          <span className="text-yellow-300 font-bold text-sm">Monthly Workshop Revenue</span>
                          <span className="text-yellow-300 font-bold text-sm">₫15M+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Achieved */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Projected & Initial Results
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <div className="text-4xl font-bold text-amber-600 mb-2">65%</div>
                  <p className="text-sm text-gray-600 font-medium">Foot Traffic Increase</p>
                  <p className="text-xs text-gray-500 mt-1">From 50 to 150+ daily visitors</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
                  <p className="text-sm text-gray-600 font-medium">Workshop Booking Rise</p>
                  <p className="text-xs text-gray-500 mt-1">80+ monthly participants</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
                  <p className="text-sm text-gray-600 font-medium">Cat Adoptions Facilitated</p>
                  <p className="text-xs text-gray-500 mt-1">In partnership with local shelters</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10K</div>
                  <p className="text-sm text-gray-600 font-medium">Social Media Followers</p>
                  <p className="text-xs text-gray-500 mt-1">Strong local community engagement</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-amber-300">Business Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Revenue Streams:</span> Coffee + Workshops + Partnerships</li>
                    <li>• <span className="font-medium">Community Building:</span> 500+ regular customers</li>
                    <li>• <span className="font-medium">Brand Recognition:</span> Thai Nguyen's premier creative café</li>
                    <li>• <span className="font-medium">Social Impact:</span> Animal welfare advocacy success</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-orange-300">Strategic Achievements</h4>
                  <div className="bg-amber-900/30 p-4 rounded-lg border border-amber-700">
                    <ul className="text-sm text-amber-200 space-y-1">
                      <li>• First cat cafe in Thai Nguyen - market pioneer</li>
                      <li>• Tourism board partnership for city promotion</li>
                      <li>• Featured in Vietnamese lifestyle media</li>
                      <li>• Model for socially responsible business</li>
                      <li>• Expansion opportunities to other cities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-amber-600 to-orange-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Brew Up Success for Your Business?</h3>
              <p className="mb-6 text-amber-100">
                Let's create a marketing strategy that builds genuine community connections and drives sustainable growth.
              </p>
              <Button variant="secondary" size="lg">
                <a href="/contact">Start Your Strategy</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default NhaCaCafe;
