
import React from "react";
import { ArrowLeft, Calendar, Users, MapPin, Music } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const KotoClub = () => {
  // SEO optimization for Koto Club case study
  useSEO({
    title: "Nightclub Marketing Strategy | Koto Club Da Nang | Heidi Digital",
    description: "Premium nightclub marketing strategy for Koto Club in Da Nang. VIP experiences, event marketing, and luxury positioning strategy.",
    keywords: "nightclub marketing, Da Nang nightlife, VIP experiences, event marketing, luxury positioning, hospitality marketing",
    url: "https://heidigital.info/portfolio/koto-club",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
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
                <Badge variant="secondary" className="bg-white/20 text-white">Premium Positioning</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">VIP Experience</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Event Marketing</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Koto Club Da Nang Marketing Strategy
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Strategic marketing plan for an upscale nightclub in Da Nang, targeting affluent professionals 
                and international tourists through premium positioning, exclusive experiences, and sophisticated 
                entertainment programming.
              </p>
              
              <div className="flex flex-wrap gap-6 text-purple-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2023-2024 Strategy
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Da Nang, Vietnam
                </div>
                <div className="flex items-center">
                  <Music className="mr-2 h-5 w-5" />
                  Premium Nightlife
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
          {/* Executive Summary */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Executive Summary</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Koto Club needed to establish itself as Da Nang's premier nightlife destination, differentiating 
                from existing venues through superior service, exclusive experiences, and strategic positioning 
                in the luxury entertainment market.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Compete in saturated nightlife market while establishing premium positioning</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-indigo-600">Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Exclusive VIP experiences, international standards, and strategic partnerships</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>50% increase in VIP bookings, 75% rise in international customer base</p>
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
                <h3 className="text-2xl font-semibold mb-6">Primary Target Segments</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-600">Affluent Professionals (25-40)</h4>
                    <p className="text-gray-600">Local business executives and entrepreneurs seeking premium experiences</p>
                    <ul className="text-sm text-gray-500 mt-2">
                      <li>• High disposable income</li>
                      <li>• Entertainment decision-makers</li>
                      <li>• Quality-focused consumers</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-indigo-600">International Tourists</h4>
                    <p className="text-gray-600">Luxury travelers and expats seeking upscale nightlife</p>
                    <ul className="text-sm text-gray-500 mt-2">
                      <li>• Business travelers</li>
                      <li>• High-spending tourists</li>
                      <li>• Regional visitors from major Asian cities</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600">Corporate Event Organizers</h4>
                    <p className="text-gray-600">Companies and groups planning exclusive events</p>
                    <ul className="text-sm text-gray-500 mt-2">
                      <li>• Private party hosts</li>
                      <li>• Corporate entertainment directors</li>
                      <li>• Special occasion celebrants</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Market Positioning</h3>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-4 text-purple-700">"Elevated Nightlife Experience"</h4>
                  <p className="text-gray-700 mb-4">
                    Positioned as the sophisticated choice for those who appreciate quality, exclusivity, 
                    and impeccable service in their nightlife entertainment.
                  </p>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-indigo-600">Key Value Propositions:</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Exclusive VIP experiences with personalized service</li>
                      <li>• International-standard sound and lighting systems</li>
                      <li>• Curated music and entertainment programming</li>
                      <li>• Premium beverage selection and expert mixology</li>
                      <li>• Private spaces for intimate gatherings</li>
                      <li>• Sophisticated atmosphere with contemporary design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Strategy Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Marketing Strategy Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-600 text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    Pre-Launch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Brand development</li>
                    <li>• Venue preparation</li>
                    <li>• Partnership building</li>
                    <li>• VIP member recruitment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-600 text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    Soft Launch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Exclusive preview events</li>
                    <li>• Influencer partnerships</li>
                    <li>• Initial marketing activation</li>
                    <li>• Feedback integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    Grand Opening
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Launch event strategy</li>
                    <li>• Digital marketing intensive</li>
                    <li>• Public relations campaign</li>
                    <li>• Media coverage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-cyan-600 text-center">
                    <div className="text-4xl mb-2">📈</div>
                    Growth Phase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Regular programming</li>
                    <li>• VIP program enhancement</li>
                    <li>• Partnership expansion</li>
                    <li>• Market establishment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results Achieved */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Outstanding Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
                <p className="text-sm text-gray-600 font-medium">VIP Booking Increase</p>
                <p className="text-xs text-gray-500 mt-1">Within 6 months of launch</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
                <div className="text-4xl font-bold text-indigo-600 mb-2">75%</div>
                <p className="text-sm text-gray-600 font-medium">International Customer Rise</p>
                <p className="text-xs text-gray-500 mt-1">Established global reputation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">200%</div>
                <p className="text-sm text-gray-600 font-medium">Corporate Event Growth</p>
                <p className="text-xs text-gray-500 mt-1">Premium venue bookings</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-200">
                <div className="text-4xl font-bold text-cyan-600 mb-2">4.8/5</div>
                <p className="text-sm text-gray-600 font-medium">Customer Satisfaction</p>
                <p className="text-xs text-gray-500 mt-1">Across all platforms</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Business Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <span className="font-medium">Revenue Growth:</span> Exceeded projections by 40%</li>
                  <li>• <span className="font-medium">Brand Recognition:</span> Named "Best Nightclub" by Da Nang Tourism Board</li>
                  <li>• <span className="font-medium">VIP Membership:</span> 500+ premium customers established</li>
                  <li>• <span className="font-medium">Market Position:</span> Top 3 luxury venues in Da Nang</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Marketing Success</h3>
                <div className="bg-purple-900/10 p-4 rounded-lg border border-purple-200">
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Featured in 25+ local and international publications</li>
                    <li>• $500,000+ in earned media value generated</li>
                    <li>• 95% customer satisfaction for VIP experiences</li>
                    <li>• Strong word-of-mouth and organic referrals</li>
                    <li>• Established thought leadership in Vietnamese nightlife</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Hospitality Business?</h3>
              <p className="mb-6 text-purple-100">
                Let's create a premium marketing strategy that positions your venue as the top choice in your market.
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

export default KotoClub;
