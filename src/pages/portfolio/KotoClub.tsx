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
                <Badge variant="secondary" className="bg-white/20 text-white">VIP Experience</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Koto Club Da Nang Marketing Strategy
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Strategic marketing plan for an upscale nightclub in Da Nang, targeting affluent professionals 
                and international tourists through premium positioning and curated VIP experiences.
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
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  VIP Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Market Analysis & Objectives */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Market Analysis & Strategic Objectives
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Market Context</h4>
                  <p className="text-gray-300 mb-4">Da Nang's nightlife market characteristics:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Growing tourism industry</li>
                    <li>• Affluent expat community</li>
                    <li>• Limited premium nightlife options</li>
                    <li>• Opportunity for luxury positioning</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-pink-300">Competitive Advantage</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Premium sound system & lighting</li>
                    <li>• International DJ bookings</li>
                    <li>• Luxury VIP bottle service</li>
                    <li>• Exclusive membership program</li>
                    <li>• Prime beachfront location</li>
                  </ul>
                </div>

                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-indigo-300">Success Metrics</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Capacity:</span> 300+ customers/weekend</li>
                    <li>• <span className="font-medium">VIP Rate:</span> 40% table bookings</li>
                    <li>• <span className="font-medium">Revenue:</span> ₫500M monthly</li>
                    <li>• <span className="font-medium">Retention:</span> 70% customer return rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Segmentation */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Target Audience Segmentation
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-800 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">👑</span> Primary: Affluent Professionals
                    </h4>
                    <div className="space-y-3">
                      <p><span className="font-medium text-purple-300">Age:</span> 28-40 years</p>
                      <p><span className="font-medium text-purple-300">Income:</span> ₫50M+ annually</p>
                      <p><span className="font-medium text-purple-300">Lifestyle:</span> Success-oriented, social</p>
                      <p><span className="font-medium text-purple-300">Spending:</span> Premium experiences valued</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">🌍</span> Secondary: International Tourists
                    </h4>
                    <div className="space-y-3">
                      <p><span className="font-medium text-pink-300">Profile:</span> Luxury travelers</p>
                      <p><span className="font-medium text-pink-300">Duration:</span> 3-7 day stays</p>
                      <p><span className="font-medium text-pink-300">Motivation:</span> Exclusive experiences</p>
                      <p><span className="font-medium text-pink-300">Influence:</span> Social media active</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-purple-300">Persona: David Chen</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-lg text-pink-300">Profile</h5>
                      <p className="text-gray-300">Age: 32</p>
                      <p className="text-gray-300">Occupation: Tech Executive</p>
                      <p className="text-gray-300">Income: ₫80M/year</p>
                      <p className="text-gray-300">Location: Da Nang expat community</p>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-green-300">Preferences</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Premium service and quality</li>
                        <li>• International music and DJs</li>
                        <li>• Networking opportunities</li>
                        <li>• Exclusive, sophisticated atmosphere</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-red-300">Pain Points</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Limited quality nightlife options</li>
                        <li>• Crowded, non-exclusive venues</li>
                        <li>• Poor service standards</li>
                        <li>• Lack of international atmosphere</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-indigo-300">Quote</h6>
                      <p className="text-sm text-gray-300 italic">"I want a place where I can enjoy world-class entertainment with like-minded professionals in an exclusive setting."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Positioning Strategy */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Premium Positioning Strategy
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Brand Essence</h4>
                  <p className="text-lg font-semibold">"Da Nang's Most Exclusive Nightlife"</p>
                </div>
                
                <div className="bg-slate-600 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-bold mb-4 text-pink-300">Value Proposition</h4>
                  <p>International luxury experience in Vietnam</p>
                </div>
                
                <div className="bg-slate-500 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="text-xl font-bold mb-4 text-indigo-300">Differentiation</h4>
                  <p>Curated experiences for discerning clientele</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block px-6 py-3 rounded-full">
                  <p className="text-xl font-bold">Tagline: "Where Excellence Meets Elegance"</p>
                </div>
              </div>
            </div>
          </div>

          {/* 360° Marketing Mix */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  360° Marketing Mix Strategy
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-2">VIP</div>
                  <p className="text-sm text-gray-600">Exclusive membership programs and personalized service</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg border border-pink-200">
                  <div className="text-2xl font-bold text-pink-600 mb-2">Events</div>
                  <p className="text-sm text-gray-600">Themed nights, celebrity DJ performances, private parties</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Digital</div>
                  <p className="text-sm text-gray-600">Instagram lifestyle content, influencer partnerships</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">Partnerships</div>
                  <p className="text-sm text-gray-600">Hotels, restaurants, luxury brands collaborations</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-purple-300">Premium Experience Marketing</h4>
                  <p className="text-gray-300">Focus on showcasing luxury amenities, exclusive events, and VIP treatment through high-quality visual content and testimonials.</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-pink-300">Tourist Attraction Strategy</h4>
                  <p className="text-gray-300">Partner with luxury hotels and travel agencies to position Koto Club as a must-visit destination for international visitors to Da Nang.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-300">Local Influencer Network</h4>
                  <p className="text-gray-300">Collaborate with Da Nang's social elite, fashion influencers, and lifestyle content creators to build authentic local credibility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Strategy & VIP Programs */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Revenue Strategy & VIP Programs
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">VIP Membership Tiers</h4>
                    <div className="space-y-4">
                      <div className="bg-slate-800 p-4 rounded border-l-4 border-yellow-400">
                        <h5 className="font-bold text-yellow-300">Gold Member</h5>
                        <p className="text-sm text-gray-300">₫10M annual fee • Priority reservations • 10% discount</p>
                      </div>
                      <div className="bg-slate-800 p-4 rounded border-l-4 border-purple-400">
                        <h5 className="font-bold text-purple-300">Platinum Member</h5>
                        <p className="text-sm text-gray-300">₫25M annual fee • Private events access • Personal concierge</p>
                      </div>
                      <div className="bg-slate-800 p-4 rounded border-l-4 border-pink-400">
                        <h5 className="font-bold text-pink-300">Diamond Member</h5>
                        <p className="text-sm text-gray-300">₫50M annual fee • Exclusive floor access • Meet & greet with DJs</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-pink-300">Revenue Streams</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Table Service (40%)</span>
                        <span className="text-white font-bold">₫200M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Premium Drinks (30%)</span>
                        <span className="text-white font-bold">₫150M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">VIP Memberships (20%)</span>
                        <span className="text-white font-bold">₫100M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Events & Private Parties (10%)</span>
                        <span className="text-white font-bold">₫50M</span>
                      </div>
                      <div className="border-t border-slate-400 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-300 font-bold">Monthly Target</span>
                          <span className="text-yellow-300 font-bold">₫500M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Marketing Strategy */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Digital Marketing Strategy
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">Social Media Strategy</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Instagram Premium Content</span>
                        <span className="text-xs bg-purple-600 px-2 py-1 rounded">Daily</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Facebook Event Promotion</span>
                        <span className="text-xs bg-blue-600 px-2 py-1 rounded">Weekly</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">TikTok Behind-the-Scenes</span>
                        <span className="text-xs bg-pink-600 px-2 py-1 rounded">3x/week</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">LinkedIn B2B Networking</span>
                        <span className="text-xs bg-indigo-600 px-2 py-1 rounded">Bi-weekly</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-pink-300">Content Pillars</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">Luxury Experience Showcase (40%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">DJ & Entertainment (25%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">VIP Member Spotlights (20%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">Behind-the-Scenes (15%)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-indigo-300">Influencer Partnerships</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-sm mb-2 text-yellow-300">Tier 1: Celebrity Ambassadors</h5>
                        <p className="text-xs text-gray-300">2-3 Vietnamese celebrities • Exclusive events • ₫100M budget</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2 text-green-300">Tier 2: Lifestyle Influencers</h5>
                        <p className="text-xs text-gray-300">10-15 luxury lifestyle creators • Regular content • ₫50M budget</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2 text-blue-300">Tier 3: Micro-Influencers</h5>
                        <p className="text-xs text-gray-300">50+ local influencers • Authentic content • ₫25M budget</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300">Performance Tracking</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-300">Instagram Engagement Rate</span>
                        <span className="text-xs text-green-300">Target: 8%+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-300">Monthly Reach</span>
                        <span className="text-xs text-green-300">Target: 500K+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-300">Reservation Conversion</span>
                        <span className="text-xs text-green-300">Target: 5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-300">Brand Mention Sentiment</span>
                        <span className="text-xs text-green-300">Target: 90%+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership & Collaboration Strategy */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Partnership & Collaboration Strategy
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-4 text-yellow-300">Luxury Hotels</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• InterContinental Danang</li>
                    <li>• Hyatt Regency Danang</li>
                    <li>• Pullman Danang Beach Resort</li>
                    <li>• Guest concierge partnerships</li>
                    <li>• VIP transfer services</li>
                  </ul>
                </div>
                
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-4 text-blue-300">Fine Dining Restaurants</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Pre-club dining packages</li>
                    <li>• Chef collaboration events</li>
                    <li>• Wine & dine experiences</li>
                    <li>• Cross-promotional menus</li>
                    <li>• Michelin-starred partnerships</li>
                  </ul>
                </div>
                
                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-4 text-green-300">Luxury Brands</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Fashion show after-parties</li>
                    <li>• Luxury car display events</li>
                    <li>• Watch & jewelry showcases</li>
                    <li>• Premium spirit partnerships</li>
                    <li>• Co-branded VIP experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
