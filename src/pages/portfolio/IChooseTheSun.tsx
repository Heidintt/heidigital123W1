
import React from "react";
import { ArrowLeft, Calendar, Users, Target, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const IChooseTheSun = () => {
  // SEO optimization for I Choose The Sun case study
  useSEO({
    title: "Mental Health Campaign Case Study | I Choose The Sun | Heidi Digital",
    description: "Comprehensive mental health awareness campaign strategy for I Choose The Sun. Social media strategy, community engagement, and crisis prevention initiatives.",
    keywords: "mental health marketing, crisis prevention, social media strategy, community engagement, awareness campaign, suicide prevention",
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
                <Badge variant="secondary" className="bg-white/20 text-white">Mental Health</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Crisis Prevention</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Community Engagement</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Social Impact</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                I Choose The Sun Mental Health Campaign
              </h1>
              
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                A comprehensive mental health awareness and crisis prevention campaign designed to provide support, 
                resources, and hope to individuals struggling with mental health challenges while building a 
                supportive community network.
              </p>
              
              <div className="flex flex-wrap gap-6 text-yellow-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2024 Campaign
                </div>
                <div className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Crisis Prevention
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Community Support
                </div>
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Mental Health Awareness
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Campaign Overview */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Campaign Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-yellow-600">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Provide accessible mental health resources and create a supportive community for individuals facing mental health challenges.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A world where mental health struggles are met with understanding, support, and effective resources for recovery.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Reduced stigma, increased help-seeking behavior, and strengthened community support networks.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Strategy & Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Strategy & Approach</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Strategies</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-600">Crisis Intervention</h4>
                    <p className="text-gray-600">24/7 support systems and immediate response protocols</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-600">Community Building</h4>
                    <p className="text-gray-600">Support groups and peer connection networks</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Education & Awareness</h4>
                    <p className="text-gray-600">Mental health literacy and stigma reduction</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Target Audience</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Primary Demographics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Young adults (18-35) experiencing mental health challenges</li>
                    <li>• Individuals in crisis or contemplating self-harm</li>
                    <li>• Family members and friends seeking support resources</li>
                    <li>• Mental health advocates and community supporters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Components */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Campaign Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-600 text-center">
                    <div className="text-4xl mb-2">🌞</div>
                    Digital Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• 24/7 crisis chat support</li>
                    <li>• Resource database</li>
                    <li>• Community forums</li>
                    <li>• Mental health tools</li>
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
                    <li>• Daily inspiration posts</li>
                    <li>• Mental health tips</li>
                    <li>• Community stories</li>
                    <li>• Crisis intervention</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 text-center">
                    <div className="text-4xl mb-2">🤝</div>
                    Community Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Support group facilitation</li>
                    <li>• Peer mentorship programs</li>
                    <li>• Community events</li>
                    <li>• Volunteer networks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-600 text-center">
                    <div className="text-4xl mb-2">📚</div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Mental health workshops</li>
                    <li>• Professional training</li>
                    <li>• Public awareness campaigns</li>
                    <li>• Research collaboration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Projected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg border border-yellow-200">
                <div className="text-4xl font-bold text-yellow-600 mb-2">10,000+</div>
                <p className="text-gray-600 font-medium">Individuals Reached</p>
                <p className="text-sm text-gray-500 mt-2">Through digital platforms and community outreach</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <p className="text-gray-600 font-medium">Crisis Interventions</p>
                <p className="text-sm text-gray-500 mt-2">Direct support provided during mental health crises</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-purple-50 p-8 rounded-lg border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">75%</div>
                <p className="text-gray-600 font-medium">Reported Improvement</p>
                <p className="text-sm text-gray-500 mt-2">In mental health outcomes among participants</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Supporting Mental Health Initiatives</h3>
              <p className="mb-6 text-yellow-100">
                Interested in developing impactful mental health awareness campaigns that make a real difference in your community?
              </p>
              <Button variant="secondary" size="lg">
                <a href="/contact">Discuss Your Campaign</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default IChooseTheSun;
