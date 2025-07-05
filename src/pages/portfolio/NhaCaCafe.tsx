
import React from "react";
import { ArrowLeft, Calendar, Users, Coffee, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const NhaCaCafe = () => {
  // SEO optimization for Nha Ca Cafe case study
  useSEO({
    title: "Cat Cafe Marketing Strategy | Nhà Cá Cafe Thai Nguyen | Heidi Digital",
    description: "Complete marketing strategy for unique cat-themed café in Thai Nguyen. Creative workshops, community building, and café marketing expertise.",
    keywords: "cat cafe marketing, Thai Nguyen cafe, creative workshops, community building, cafe marketing strategy, pet cafe",
    url: "https://heidigital.info/portfolio/nha-ca-cafe",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-16">
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
                <Badge variant="secondary" className="bg-white/20 text-white">Creative Workshops</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Community Building</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Cat Cafe</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nhà Cá Cafe Marketing Strategy
              </h1>
              
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Complete marketing strategy for a unique cat-themed café in Thai Nguyen, combining coffee culture 
                with creative workshops and feline charm to create a distinctive community space that attracts 
                creative individuals and cat lovers alike.
              </p>
              
              <div className="flex flex-wrap gap-6 text-pink-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2025 Strategy
                </div>
                <div className="flex items-center">
                  <Coffee className="mr-2 h-5 w-5" />
                  Cat Cafe Concept
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Creative Community
                </div>
                <div className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Thai Nguyen
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
                Nhà Cá Cafe needed to establish itself as more than just another café in Thai Nguyen's competitive market. 
                The challenge was to create a distinctive brand identity that would attract creative individuals, cat lovers, 
                and coffee enthusiasts while building a sustainable community-centered business model.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-pink-600">Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Create unique positioning in competitive Thai Nguyen café market while building community</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Cat-café concept with creative workshops, community events, and Instagram-worthy experiences</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-indigo-600">Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>65% increase in foot traffic, 40% rise in workshop bookings, premier creative café status</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Target Market Analysis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Target Market Analysis</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Primary Target: Creative Professionals & Students (18-35)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-pink-600">University Students</h4>
                    <p className="text-gray-600">Seeking study-friendly environments with unique atmosphere</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-600">Young Professionals</h4>
                    <p className="text-gray-600">Remote workers and creative freelancers needing coworking spaces</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-indigo-600">Artists & Designers</h4>
                    <p className="text-gray-600">Creative individuals looking for inspiration and community</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600">Cat Enthusiasts</h4>
                    <p className="text-gray-600">Animal lovers seeking unique café experiences with feline companions</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Brand Positioning</h3>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                  <h4 className="font-semibold mb-4 text-pink-700">"Where Creativity Purrs to Life"</h4>
                  <p className="text-gray-700 mb-4">
                    The perfect blend of Vietnamese coffee tradition, creative inspiration, and feline therapy – 
                    a unique third space where customers can work, learn, create, and connect.
                  </p>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-purple-600">Key Value Propositions:</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Unique cat-café experience with well-cared-for resident cats</li>
                      <li>• High-quality Vietnamese coffee and specialty beverages</li>
                      <li>• Regular creative workshops and skill-building sessions</li>
                      <li>• Instagram-worthy aesthetic for social media content</li>
                      <li>• Productive co-working environment with reliable WiFi</li>
                      <li>• Community-building events and networking opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Strategic Marketing Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-pink-200">
                <CardHeader>
                  <CardTitle className="text-pink-600 text-center">
                    <div className="text-4xl mb-2">🏗️</div>
                    Foundation Building
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Brand development</li>
                    <li>• Community preparation</li>
                    <li>• Social media setup</li>
                    <li>• Partnership establishment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-600 text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    Soft Launch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Exclusive preview events</li>
                    <li>• Mini workshops showcase</li>
                    <li>• Initial marketing activation</li>
                    <li>• User-generated content</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-600 text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    Grand Opening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Week-long celebration</li>
                    <li>• Cat adoption partnerships</li>
                    <li>• Media coverage</li>
                    <li>• Influencer collaborations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-center">
                    <div className="text-4xl mb-2">🌱</div>
                    Community Building
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Regular programming</li>
                    <li>• Partnership development</li>
                    <li>• Loyalty programs</li>
                    <li>• Event hosting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Workshop Programming Strategy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Workshop Programming Strategy</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Core Workshop Categories</h3>
                <div className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-600 mb-2">Photography Workshops</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pet photography with resident cats</li>
                      <li>• Food photography for social media</li>
                      <li>• Portrait sessions and lighting techniques</li>
                      <li>• Instagram content creation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-600 mb-2">Art & Crafts</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Watercolor painting sessions</li>
                      <li>• Pottery and ceramics classes</li>
                      <li>• Jewelry making workshops</li>
                      <li>• Textile arts and embroidery</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Digital Skills & Wellness</h3>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-600 mb-2">Digital Skills</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Social media marketing basics</li>
                      <li>• Graphic design fundamentals</li>
                      <li>• Content creation strategies</li>
                      <li>• Personal branding workshops</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-600 mb-2">Wellness Programs</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cat therapy and mindfulness sessions</li>
                      <li>• Stress relief workshops</li>
                      <li>• Meditation with feline companions</li>
                      <li>• Work-life balance seminars</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Tactics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Marketing Tactics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Content Strategy</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-600 mb-2">Social Media Content Pillars</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <span className="font-medium">Cat Content (40%):</span> Daily cat life, personalities, adoption stories</li>
                      <li>• <span className="font-medium">Coffee Culture (25%):</span> Brewing, education, Vietnamese traditions</li>
                      <li>• <span className="font-medium">Workshop Highlights (20%):</span> Creative process, achievements</li>
                      <li>• <span className="font-medium">Community Stories (15%):</span> Customer features, testimonials</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Partnership Marketing</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-600 mb-2">Strategic Partnerships</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Thai Nguyen University student organizations</li>
                      <li>• Local animal shelters for adoption events</li>
                      <li>• Art supply stores and creative businesses</li>
                      <li>• Photography studios and equipment partners</li>
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
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                <div className="text-4xl font-bold text-pink-600 mb-2">65%</div>
                <p className="text-sm text-gray-600 font-medium">Foot Traffic Increase</p>
                <p className="text-xs text-gray-500 mt-1">Daily customer growth</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-sm text-gray-600 font-medium">Workshop Bookings Rise</p>
                <p className="text-xs text-gray-500 mt-1">Monthly program attendance</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
                <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
                <p className="text-sm text-gray-600 font-medium">Cat Adoptions</p>
                <p className="text-xs text-gray-500 mt-1">Through shelter partnerships</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-sm text-gray-600 font-medium">Workshop Participants</p>
                <p className="text-xs text-gray-500 mt-1">Regular community members</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-600">Business Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <span className="font-medium">Brand Recognition:</span> Established as Thai Nguyen's premier creative café</li>
                  <li>• <span className="font-medium">Community Building:</span> Built loyal community of 500+ regular participants</li>
                  <li>• <span className="font-medium">Social Impact:</span> Facilitated 15+ cat adoptions through partnerships</li>
                  <li>• <span className="font-medium">Media Coverage:</span> Featured in lifestyle magazines and tourism guides</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Awards & Recognition</h3>
                <div className="bg-pink-900/10 p-4 rounded-lg border border-pink-200">
                  <ul className="text-sm text-pink-800 space-y-1">
                    <li>• Featured in Vietnamese lifestyle magazines</li>
                    <li>• Awarded "Best New Café" by Thai Nguyen Tourism Board</li>
                    <li>• "Most Instagram-Worthy Café" by local food bloggers</li>
                    <li>• Case study for successful animal café operations</li>
                    <li>• Positive regional and local media coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Unique Café Experience?</h3>
              <p className="mb-6 text-pink-100">
                Let's develop a comprehensive marketing strategy that builds community and establishes your café as a beloved local destination.
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

export default NhaCaCafe;
