
import React from "react";
import { ArrowLeft, Calendar, Target, TrendingUp, Car, Users, Zap, Award, BarChart3, Eye, MessageSquare, DollarSign } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useSEO } from "@/hooks/useSEO";

const MicrolinoStrategy = () => {
  // SEO optimization for Microlino Strategy case study
  useSEO({
    title: "Microlino Australia Launch Campaign | EV Marketing Strategy Case Study | Heidi Digital",
    description: "Strategic marketing campaign for Microlino 2026 Australian launch. 'Half the Space, Twice the Life' - comprehensive EV marketing strategy achieving 60% brand recall and 2,000 pre-orders.",
    keywords: "Microlino marketing, EV marketing strategy, electric vehicle launch, Australian market entry, automotive marketing, sustainable transport, AR marketing",
    url: "https://heidigital.info/portfolio/microlino-strategy",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 text-white py-20">
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
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white">Campaign Strategy</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">EV Marketing</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">AR Technology</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Market Entry</Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Microlino 2026 Australian Launch
              </h1>
              
              <div className="text-2xl font-semibold mb-4 text-green-200">
                "Half the Space, Twice the Life"
              </div>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Comprehensive strategic marketing communications campaign achieving 60% aided brand recall, 
                5,000 test drives, and 2,000 pre-orders in just 6 weeks through innovative AR experiences 
                and integrated multi-channel approach.
              </p>
              
              <div className="flex flex-wrap gap-6 text-green-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2026 Launch Campaign
                </div>
                <div className="flex items-center">
                  <Car className="mr-2 h-5 w-5" />
                  Swiss Electric Vehicle
                </div>
                <div className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Australian Urban Market
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Results Dashboard */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campaign Performance Overview</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exceptional results achieved through strategic targeting, innovative technology integration, 
              and authentic brand positioning in the Australian EV market.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader className="pb-3">
                <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-blue-600">60%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Aided Brand Recall</p>
                <p className="text-sm text-gray-600">Target achieved in 6 weeks</p>
                <Progress value={60} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <Car className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-green-600">5,000</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Test Drives Generated</p>
                <p className="text-sm text-gray-600">Across Sydney & Melbourne</p>
                <Progress value={100} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-purple-600">2,000</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Pre-Orders Secured</p>
                <p className="text-sm text-gray-600">Campaign period conversion</p>
                <Progress value={100} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-orange-600">7,267%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Campaign ROI</p>
                <p className="text-sm text-gray-600">$265M value creation</p>
                <Progress value={100} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          {/* Target Audience Profile */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 h-6 w-6 text-blue-600" />
                Target Audience: Urban Alex Tran Profile
              </CardTitle>
              <CardDescription>
                Primary target persona driving campaign strategy and creative development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Demographics</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Age:</strong> 28-40 years old</li>
                    <li><strong>Income:</strong> $75,000-$150,000 AUD</li>
                    <li><strong>Location:</strong> Inner Sydney/Melbourne suburbs</li>
                    <li><strong>Occupation:</strong> Marketing Manager, Tech Professional</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-600">Pain Points</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Traffic congestion stress</li>
                    <li>• Parking difficulties and costs</li>
                    <li>• Environmental guilt about transport</li>
                    <li>• High transport costs ($8,000+/year)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-600">Media Consumption</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Instagram (daily usage)</li>
                    <li>• LinkedIn (professional content)</li>
                    <li>• Spotify (podcast listening)</li>
                    <li>• YouTube (product reviews)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Strategy Components */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
                Strategic Campaign Components
              </CardTitle>
              <CardDescription>
                Integrated approach combining traditional and innovative marketing channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Core Message Strategy</h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-lg mb-3">"Half the Space, Twice the Life"</h4>
                    <p className="text-gray-700">
                      The Microlino doesn't compromise on life quality despite its compact size—it enhances it. 
                      More time, more money, more experiences, more positive environmental impact.
                    </p>
                  </div>

                  <h4 className="font-semibold mb-3">Message Appeals</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Rational:</strong> Save $8,000 annually, find parking in 30 seconds
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Emotional:</strong> Freedom from traffic stress, pride in smart choices
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Social:</strong> Early adopter status, environmental leadership
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">6-Week Campaign Timeline</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Week 1-2: Awareness Building</h4>
                      <p className="text-sm text-gray-600">Digital video, social media, outdoor advertising, PR launch</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Week 3-4: Consideration & Engagement</h4>
                      <p className="text-sm text-gray-600">Search ads, AR experiences, pop-up test drives, partnerships</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Week 5-6: Conversion & Action</h4>
                      <p className="text-sm text-gray-600">Retargeting, email marketing, VIP experiences, sales conversion</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Media Investment Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Digital Channels</span>
                        <span className="font-semibold">60% ($2.16M)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Traditional Channels</span>
                        <span className="font-semibold">25% ($900K)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Experiential</span>
                        <span className="font-semibold">15% ($540K)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Innovative Activations */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Zap className="mr-3 h-6 w-6 text-yellow-600" />
                Innovative Campaign Activations
              </CardTitle>
              <CardDescription>
                Technology-driven experiences creating memorable brand interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg text-blue-700">Tiny EV Hunt AR Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      City-wide augmented reality treasure hunt with 40 locations across Sydney and Melbourne. 
                      Participants find virtual Microlinos and complete challenges.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        20 locations per city (cafés, landmarks, universities)
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Interactive challenges: Parking games, eco-quizzes
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Rewards: Coffee vouchers, test drive bookings, Swiss travel
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold text-blue-700">Expected: 50,000+ participants</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-lg text-green-700">Road Banner Bonus Program</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      Interactive roadside advertising with QR codes and social challenges. 
                      Transform passive viewing into active engagement.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Strategic locations: Bridges, highways, shopping centers
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Multi-level rewards: Instant, progressive, grand prizes
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Safety-first design for passenger engagement
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-semibold text-green-700">Grand Prize: 12-month Microlino lease</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BarChart3 className="mr-3 h-6 w-6 text-orange-600" />
                Campaign Performance Metrics
              </CardTitle>
              <CardDescription>
                Comprehensive measurement framework tracking brand, engagement, and business impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Brand Metrics</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Aided Brand Recall</span>
                        <span className="text-sm font-semibold">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Brand Consideration</span>
                        <span className="text-sm font-semibold">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Positive Sentiment</span>
                        <span className="text-sm font-semibold">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-600">Engagement Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Social Engagement Rate</span>
                      <span className="text-sm font-semibold">8.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">AR Experience Users</span>
                      <span className="text-sm font-semibold">50,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Organic Content Shares</span>
                      <span className="text-sm font-semibold">25,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Website Traffic Increase</span>
                      <span className="text-sm font-semibold">300%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-600">Business Impact</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Test Drives</span>
                      <span className="text-sm font-semibold">5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pre-orders</span>
                      <span className="text-sm font-semibold">2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sales Pipeline</span>
                      <span className="text-sm font-semibold">$50M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Market Share</span>
                      <span className="text-sm font-semibold">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Revolutionary Campaign?</h3>
              <p className="mb-6 text-green-100 max-w-2xl mx-auto">
                Let's create a comprehensive, innovative marketing strategy that drives exceptional results 
                and transforms your market position, just like we did for Microlino.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <a href="/contact" className="flex items-center">
                  Start Your Campaign <TrendingUp className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MicrolinoStrategy;
