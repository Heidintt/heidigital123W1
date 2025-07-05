
import React from "react";
import { ArrowLeft, Calendar, Users, Eye, Heart, TrendingUp, Target, Award } from "lucide-react";
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
                <Badge variant="secondary" className="bg-white/20 text-white">Award Winner</Badge>
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
                <div className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Award Winner
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Campaign Overview & Objectives */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Campaign Overview & Objectives
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-yellow-300">Context</h4>
                  <p className="text-gray-300 mb-4">During the challenging COVID-19 pandemic, Vietnam faced unprecedented social and economic pressures:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Nationwide lockdowns and isolation</li>
                    <li>• Rising anxiety and depression rates</li>
                    <li>• Need for hope and positivity</li>
                    <li>• Increased social media consumption</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-orange-300">Strategy</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Create uplifting content movement</li>
                    <li>• Leverage TikTok's viral potential</li>
                    <li>• Partner with diverse influencers</li>
                    <li>• Encourage authentic user participation</li>
                  </ul>
                </div>

                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-red-300">Objectives</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Brand Awareness:</span> 50M+ total video views</li>
                    <li>• <span className="font-medium">Engagement:</span> 5,000+ UGC videos</li>
                    <li>• <span className="font-medium">Sentiment:</span> 90%+ positive brand sentiment</li>
                    <li>• <span className="font-medium">Recognition:</span> Industry award recognition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Results - Enhanced */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Outstanding Campaign Results
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">75.6M</div>
                  <p className="text-sm text-gray-600 font-medium">Total Video Views</p>
                  <p className="text-xs text-gray-500 mt-1">51% above target</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">8,000+</div>
                  <p className="text-sm text-gray-600 font-medium">User-Generated Videos</p>
                  <p className="text-xs text-gray-500 mt-1">60% above target</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-sm text-gray-600 font-medium">Influencer Participants</p>
                  <p className="text-xs text-gray-500 mt-1">Organic growth</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                  <p className="text-sm text-gray-600 font-medium">Positive Sentiment</p>
                  <p className="text-xs text-gray-500 mt-1">Exceeded 90% target</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-yellow-300">Campaign Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Social Movement:</span> Created nationwide positivity trend</li>
                    <li>• <span className="font-medium">Brand Recognition:</span> 300% increase in brand mentions</li>
                    <li>• <span className="font-medium">Community Building:</span> Lasting online community formed</li>
                    <li>• <span className="font-medium">Cultural Impact:</span> Influenced Vietnamese social media culture</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-orange-300">Awards & Recognition</h4>
                  <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-700">
                    <div className="flex items-center mb-2">
                      <Award className="mr-2 h-5 w-5 text-yellow-400" />
                      <h5 className="font-semibold text-yellow-300">Vietnam Digital Marketing Awards 2021</h5>
                    </div>
                    <ul className="text-sm text-yellow-200 space-y-1">
                      <li>• Best Social Media Campaign - Gold</li>
                      <li>• Most Creative Use of Influencer Marketing - Gold</li>
                      <li>• Campaign of the Year - Finalist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Framework */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Strategic Framework & Theoretical Foundation
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                      <TrendingUp className="mr-3 h-6 w-6" />
                      Viral Marketing Theory
                    </h4>
                    <p className="text-gray-300 mb-3">Based on Berger & Milkman's (2012) research on viral content:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• High emotional arousal content</li>
                      <li>• Positive emotions drive sharing</li>
                      <li>• Social currency and practical value</li>
                      <li>• Public visibility and storytelling</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-green-300">
                      <Target className="mr-3 h-6 w-6" />
                      Social Contagion Model
                    </h4>
                    <p className="text-gray-300 mb-3">Applied Watts & Dodds' influence network theory:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Multi-step influence cascade</li>
                      <li>• Ordinary influencers activation</li>
                      <li>• Network effects amplification</li>
                      <li>• Threshold-based adoption</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-purple-300">
                      <Heart className="mr-3 h-6 w-6" />
                      Emotional Contagion Theory
                    </h4>
                    <p className="text-gray-300 mb-3">Leveraged Hatfield's emotional contagion principles:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Automatic mimicry and synchrony</li>
                      <li>• Emotional convergence in groups</li>
                      <li>• Positive emotion amplification</li>
                      <li>• Social validation mechanisms</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-yellow-300">Campaign Hashtag Strategy</h4>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 inline-block px-6 py-3 rounded-full mb-3">
                        <p className="text-xl font-bold">#IChooseTheSun</p>
                      </div>
                      <p className="text-sm text-gray-300">Simple, memorable, emotionally positive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Analysis */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Target Audience Analysis
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-800 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">📱</span> Primary Audience
                    </h4>
                    <div className="space-y-3">
                      <p><span className="font-medium text-yellow-300">Age:</span> 18-35 years old</p>
                      <p><span className="font-medium text-yellow-300">Platform:</span> TikTok active users</p>
                      <p><span className="font-medium text-yellow-300">Behavior:</span> Content creators and sharers</p>
                      <p><span className="font-medium text-yellow-300">Motivation:</span> Seeking positivity and connection</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">🎯</span> Psychographics
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Values authenticity and genuine emotion</li>
                      <li>• Seeks community during isolation</li>
                      <li>• Responds to uplifting content</li>
                      <li>• Influenced by peer participation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-yellow-300">User Persona</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-lg text-orange-300">Minh Nguyen</h5>
                      <p className="text-gray-300">Age: 24</p>
                      <p className="text-gray-300">Occupation: University Student</p>
                      <p className="text-gray-300">Location: Ho Chi Minh City</p>
                      <p className="text-gray-300">Social Status: Active TikTok user</p>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-green-300">Goals</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Stay connected during lockdown</li>
                        <li>• Create and share positive content</li>
                        <li>• Build online community</li>
                        <li>• Express creativity and personality</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-red-300">Pain Points</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Isolation and loneliness</li>
                        <li>• Anxiety about future</li>
                        <li>• Limited social interaction</li>
                        <li>• Need for emotional outlet</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-purple-300">Quote</h6>
                      <p className="text-sm text-gray-300 italic">"I want to spread positivity and connect with others who choose to see the bright side, even in difficult times."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Phase Campaign Strategy */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  3-Phase Campaign Strategy
                </span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-300 mb-2">Phase 1: Seeding (Week 1-2)</h4>
                    <p className="text-gray-300 mb-2">Celebrity and macro-influencer activation to establish hashtag and demonstrate content format</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Actions:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 10 top Vietnamese celebrities launch videos</li>
                          <li>• Coordinated posting schedule</li>
                          <li>• Clear hashtag introduction</li>
                          <li>• Branded content guidelines</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Success Metrics:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 5M initial views</li>
                          <li>• 10K hashtag uses</li>
                          <li>• 85% positive sentiment</li>
                          <li>• Trending hashtag achievement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌊</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-300 mb-2">Phase 2: Amplification (Week 3-4)</h4>
                    <p className="text-gray-300 mb-2">Micro-influencer and ordinary user activation to drive viral spread</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Actions:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 500+ micro-influencer partnerships</li>
                          <li>• User-generated content encouragement</li>
                          <li>• Interactive challenges introduction</li>
                          <li>• Community management activation</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Success Metrics:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 30M cumulative views</li>
                          <li>• 50K hashtag uses</li>
                          <li>• 2K daily new videos</li>
                          <li>• Cross-platform spread</li>
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
                    <h4 className="text-xl font-bold text-purple-300 mb-2">Phase 3: Sustaining (Week 5-6)</h4>
                    <p className="text-gray-300 mb-2">Community-driven content and long-term engagement maintenance</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Key Actions:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• User story highlighting</li>
                          <li>• Community challenges</li>
                          <li>• Behind-the-scenes content</li>
                          <li>• Impact measurement sharing</li>
                        </ul>
                      </div>
                      <div className="bg-slate-600 p-4 rounded">
                        <h5 className="font-bold text-sm mb-2">Final Results:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• 75.6M total views achieved</li>
                          <li>• 8K+ total videos created</li>
                          <li>• Sustained community formed</li>
                          <li>• Brand love increased 400%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Strategy & Creative Execution */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Content Strategy & Creative Execution
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-yellow-300">Content Pillars</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">Personal Positivity Stories (40%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">Community Support (25%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">Creative Challenges (20%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">Inspirational Messages (15%)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-orange-300">Creative Guidelines</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Authentic, unpolished aesthetic</li>
                      <li>• Bright, sunny visual elements</li>
                      <li>• Upbeat, energetic music</li>
                      <li>• Personal storytelling focus</li>
                      <li>• Clear hashtag visibility</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300">Engagement Tactics</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Daily featured creator highlights</li>
                      <li>• Interactive response videos</li>
                      <li>• Community challenges with prizes</li>
                      <li>• Cross-creator collaborations</li>
                      <li>• Real-time trend participation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">Success Factors</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Timing during peak isolation</li>
                      <li>• Universal positive message</li>
                      <li>• Easy participation barrier</li>
                      <li>• Multi-tier influencer strategy</li>
                      <li>• Consistent community management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Timeline & Milestones */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Campaign Timeline & Milestones
                </span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-yellow-300">Week 1: Launch</h4>
                    <span className="text-sm text-gray-400">March 1-7, 2021</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Milestone:</p>
                      <p className="text-xs text-gray-400">Hashtag trending #1 Vietnam</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Views:</p>
                      <p className="text-xs text-gray-400">5.2M views achieved</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Participation:</p>
                      <p className="text-xs text-gray-400">500+ videos created</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-600 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-orange-300">Week 2-3: Viral Peak</h4>
                    <span className="text-sm text-gray-400">March 8-21, 2021</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Milestone:</p>
                      <p className="text-xs text-gray-400">Cross-platform viral spread</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Views:</p>
                      <p className="text-xs text-gray-400">45M cumulative views</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Participation:</p>
                      <p className="text-xs text-gray-400">5,000+ videos created</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-500 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-green-300">Week 4-6: Sustained Impact</h4>
                    <span className="text-sm text-gray-400">March 22 - April 4, 2021</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Milestone:</p>
                      <p className="text-xs text-gray-400">Community self-sustaining</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Views:</p>
                      <p className="text-xs text-gray-400">75.6M total views</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Participation:</p>
                      <p className="text-xs text-gray-400">8,000+ total videos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Learnings & Best Practices */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Key Learnings & Best Practices
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300">What Worked</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Authentic emotional message resonated deeply</li>
                      <li>• Multi-tier influencer strategy maximized reach</li>
                      <li>• Simple participation format encouraged UGC</li>
                      <li>• Perfect timing during social need</li>
                      <li>• Consistent community engagement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-blue-300">Innovation Elements</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• First major brand positivity campaign in Vietnam</li>
                      <li>• Pioneer in pandemic-era marketing</li>
                      <li>• Created new template for social movements</li>
                      <li>• Demonstrated brand's social responsibility</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-yellow-300">Challenges Overcome</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Navigating sensitive pandemic messaging</li>
                      <li>• Managing massive volume of content</li>
                      <li>• Maintaining authentic brand voice</li>
                      <li>• Coordinating diverse influencer network</li>
                      <li>• Sustaining momentum beyond viral peak</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">Long-term Impact</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Elevated Sun Life Vietnam brand perception</li>
                      <li>• Created lasting community connections</li>
                      <li>• Influenced Vietnamese digital marketing</li>
                      <li>• Established brand as culture leader</li>
                      <li>• Generated ongoing organic mentions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
