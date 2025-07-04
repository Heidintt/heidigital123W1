import React from "react";
import { ArrowLeft, Calendar, Users, Eye, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const IChooseTheSun = () => {
  // SEO optimization for I Choose The Sun case study
  useSEO({
    title: "Sun Life Vietnam Viral Campaign Case Study | TikTok Marketing Success | Heidi Digital",
    description: "75.6M views viral TikTok campaign for Sun Life Vietnam. Complete case study of 'I Choose The Sun' social media marketing strategy during COVID-19.",
    keywords: "viral marketing campaign, TikTok marketing, Sun Life Vietnam, I Choose The Sun, social media strategy, influencer marketing, COVID-19 campaign",
    url: "https://heidigital.info/portfolio/i-choose-the-sun",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
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
                <Badge variant="secondary" className="bg-white/20 text-white">Viral Campaign</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">TikTok Marketing</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Influencer Strategy</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sun Life Vietnam - "I Choose The Sun" Campaign
              </h1>
              
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                A viral influencer-led social media campaign promoting positivity during COVID-19 pandemic, 
                generating 75.6M views and 8,000+ user-generated videos across TikTok and social platforms.
              </p>
              
              <div className="flex flex-wrap gap-6 text-yellow-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2021 Campaign
                </div>
                <div className="flex items-center">
                  <Eye className="mr-2 h-5 w-5" />
                  75.6M Views
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  8,000+ UGC Videos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Campaign Results */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="mr-3 h-6 w-6 text-red-500" />
                Viral Campaign Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">75.6M</div>
                  <p className="text-sm text-gray-600">Total Video Views</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8,000+</div>
                  <p className="text-sm text-gray-600">User-Generated Videos</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-sm text-gray-600">Influencer Participants</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <p className="text-sm text-gray-600">Positive Sentiment</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Campaign Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    During the challenging COVID-19 period, Sun Life Vietnam launched "I Choose The Sun" 
                    to spread positivity and hope. The campaign leveraged TikTok's viral potential through 
                    strategic influencer partnerships and user-generated content.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Elements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Motivational hashtag challenge</li>
                    <li>• Celebrity and micro-influencer activation</li>
                    <li>• User-generated content amplification</li>
                    <li>• Cross-platform content syndication</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Campaign Impact</h3>
                  <p className="text-gray-600 mb-4">
                    The campaign successfully created a positive movement during difficult times, 
                    significantly boosting Sun Life Vietnam's brand awareness and emotional connection 
                    with Vietnamese consumers.
                  </p>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Award Recognition</h4>
                    <p className="text-yellow-800 text-sm">
                      Winner of Vietnam Digital Marketing Awards 2021 - Best Social Media Campaign 
                      and Most Creative Use of Influencer Marketing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy Breakdown */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Strategy Breakdown</CardTitle>
              <CardDescription>
                How we achieved viral success across multiple platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Phase 1: Influencer Seeding</h4>
                  <p className="text-gray-600">Partnered with top Vietnamese TikTok creators to launch the hashtag challenge with authentic, personal stories of choosing positivity.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Phase 2: Community Amplification</h4>
                  <p className="text-gray-600">Encouraged user participation through branded filters, music, and easy-to-replicate content formats that resonated with Vietnamese culture.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Phase 3: Cross-Platform Scaling</h4>
                  <p className="text-gray-600">Extended successful TikTok content to Facebook, Instagram, and YouTube, maximizing reach and engagement across demographics.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Viral Campaign?</h3>
              <p className="mb-6 text-yellow-100">
                Let's develop a social media strategy that connects with your audience and drives real engagement.
              </p>
              <Button variant="secondary" size="lg">
                <a href="/contact">Launch Your Campaign</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default IChooseTheSun;
