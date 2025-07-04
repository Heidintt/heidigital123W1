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
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Concept Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="mr-3 h-6 w-6 text-pink-600" />
                Unique Cafe Concept: Coffee, Cats & Creativity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">The Nhà Cá Experience</h3>
                  <p className="text-gray-600 mb-6">
                    Nhà Cá Cafe combines the relaxing atmosphere of a traditional Vietnamese cafe with 
                    the joy of cat companionship and creative workshop activities, creating a unique 
                    third space for Thai Nguyen's creative community.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Core Offerings</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Premium coffee and Vietnamese beverages</li>
                    <li>• Friendly resident cats for companionship</li>
                    <li>• Creative workshops (art, crafts, photography)</li>
                    <li>• Co-working space for freelancers and students</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Target Market</h3>
                  <p className="text-gray-600 mb-4">
                    Young professionals, university students, and creative individuals in Thai Nguyen 
                    aged 18-35 who appreciate unique experiences, love animals, and seek inspiring 
                    environments for work and socializing.
                  </p>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Brand Promise</h4>
                    <p className="text-amber-800 text-sm">
                      "Where creativity purrs to life" - A warm, inspiring space where coffee culture, 
                      feline companionship, and creative expression come together.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Strategy */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Comprehensive Marketing Strategy</CardTitle>
              <CardDescription>
                Building a beloved community brand in Thai Nguyen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600 mb-2">Social</div>
                  <p className="text-sm text-gray-600">Instagram, TikTok featuring cats and workshops</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Community</div>
                  <p className="text-sm text-gray-600">Local partnerships and creative collaborations</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Experience</div>
                  <p className="text-sm text-gray-600">Monthly themes and special events</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Phase 1: Soft Launch (Months 1-2)</h4>
                  <p className="text-gray-600">Build anticipation through social media teasers, introduce resident cats, and establish core customer base through friends and family previews.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Phase 2: Grand Opening (Month 3)</h4>
                  <p className="text-gray-600">Major launch event with local influencers, free workshops, cat adoption partnerships, and media coverage to establish market presence.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2">Phase 3: Community Building (Months 4-12)</h4>
                  <p className="text-gray-600">Regular workshop programming, loyalty programs, seasonal campaigns, and partnerships with local artists and businesses.</p>
                </div>
              </div>
            </CardContent>
          </Card>

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
