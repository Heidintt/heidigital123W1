
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Award, Target, BarChart, Calendar } from "lucide-react";

const IChooseTheSun = () => {
  return (
    <Layout>
      <Hero
        title="I Choose The Sun Campaign"
        subtitle="A viral TikTok and Facebook campaign promoting positivity during COVID-19"
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      />

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Badge className="mb-3 bg-heisocial-lightpurple text-heisocial-purple">Case Study</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text">Campaign Overview</span>
                </h2>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Client:</strong> Sun Life Vietnam with brand ambassador H'Hen Niê (Miss Universe Vietnam 2017)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Campaign:</strong> "I Choose The Sun" promoted positivity during COVID-19 pandemic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Results:</strong> 75.6M views and 8,000+ user-created videos across TikTok and Facebook</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Role:</strong> Content planning, social media integration, SEO, ad performance tracking</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-2">Purpose:</h3>
                  <p className="text-gray-600">Promote optimism, well-being and resilience through digital engagement targeting Gen Z and Millennials</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Campaign Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Client</div>
                  <div className="text-gray-600">Sun Life Vietnam</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Industry</div>
                  <div className="text-gray-600">Financial Services & Insurance</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">2021-2022 (During COVID-19 Pandemic)</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Platforms</div>
                  <div className="text-gray-600">TikTok, Facebook, Instagram</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Budget</div>
                  <div className="text-gray-600">~$50,000 USD</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Primary Hashtag</div>
                  <div className="text-gray-600">#SongTichCuc ("Live Positively")</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="Target Audience"
            subtitle="Key demographics and behavioral insights"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Demographic</h3>
              <p className="text-gray-600">
                Gen Z and Millennials (16–35), digitally active
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Geographic</h3>
              <p className="text-gray-600">
                Urban Vietnam: Ho Chi Minh City, Hanoi, Da Nang
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Psychographic</h3>
              <p className="text-gray-600">
                Values wellness, personal development, follows public figures
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Behavioral</h3>
              <p className="text-gray-600">
                Heavy TikTok/Facebook users, active in challenges, follows H'Hen Niê
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <img 
                  src="/lovable-uploads/64a3f787-87c4-4873-8e73-be1bffa80a3b.png" 
                  alt="Content Strategy and Target Audience" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">Target Audience: Generation Z</h3>
                <div className="text-4xl font-bold text-yellow-500 mb-4">60%</div>
                <p className="text-gray-600 mb-4">
                  of TikTok users are Generation Z'ers
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Digital natives with early tech access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Driving TikTok growth similar to Millennials with Facebook/Instagram</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Prefers rich video content formats</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy and KPIs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Campaign Strategy</span>
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 bg-heisocial-purple/20 p-2 rounded-full text-heisocial-purple">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Influencer-Led Engagement</h3>
                    <p className="text-gray-600">
                      Leveraged H'Hen Niê's 1.5M TikTok and 2M Facebook followers
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-heisocial-purple/20 p-2 rounded-full text-heisocial-purple">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Hashtag Challenge</h3>
                    <p className="text-gray-600">
                      #SongTichCuc challenge for UGC around positive living
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-heisocial-purple/20 p-2 rounded-full text-heisocial-purple">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Multi-Format Content</h3>
                    <p className="text-gray-600">
                      Short videos, livestreams, and inspirational messaging
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-heisocial-purple text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Initial KPI Targets</h3>
                  <p>Campaign goals and budget allocation</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <div>
                      <span className="font-semibold">50 million</span> video views
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <div>
                      <span className="font-semibold">3,000</span> new TikTok followers
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <div>
                      <span className="font-semibold">1,000+</span> UGC entries
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <div>
                      <span className="font-semibold">10,000+</span> engagements per post
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6">
                  <h4 className="font-semibold mb-3">Budget Allocation ($50,000 USD)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div>Influencer engagement</div>
                      <div className="font-medium">$20,000 (40%)</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Paid ad boosting</div>
                      <div className="font-medium">$15,000 (30%)</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Livestream production</div>
                      <div className="font-medium">$5,000 (10%)</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Billboard advertising</div>
                      <div className="font-medium">$10,000 (20%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Integration */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Brand Ambassador: H'Hen Niê"
            subtitle="Strategic celebrity partnership"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/9eb28ab7-346b-41af-afe9-ecbea02aca51.png" 
                  alt="H'Hen Niê in Sun Life campaign" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/fc531de3-248c-4a05-8107-58c3840e9aa7.png" 
                  alt="H'Hen Niê in yellow outfit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md col-span-2">
                <img 
                  src="/lovable-uploads/e5594224-b518-49cf-af3a-0edcc57e788d.png" 
                  alt="H'Hen Niê doing yoga" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Ambassador Impact</h3>
                <p className="text-gray-600 mb-6">
                  H'Hen Niê - Miss Universe Vietnam 2018, Top 5 at Miss Universe globally
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 mr-4">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Influential Reach</h4>
                      <p className="text-gray-600">
                        1.5M TikTok followers, 2M Facebook followers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 mr-4">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Content Performance</h4>
                      <p className="text-gray-600">
                        Yoga video: 300,000+ views (May 2021)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Results */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Campaign Results"
            subtitle="Exceeding expectations across metrics"
            centered
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl md:text-5xl font-bold mb-3">75.6M</div>
                <div className="text-gray-700 font-medium">Campaign Video Views</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl md:text-5xl font-bold mb-3">8,000+</div>
                <div className="text-gray-700 font-medium">User-Generated Videos</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl md:text-5xl font-bold mb-3">183K</div>
                <div className="text-gray-700 font-medium">New Followers</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl md:text-5xl font-bold mb-3">30M+</div>
                <div className="text-gray-700 font-medium">Views on Top Post</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-heisocial-blue">Campaign Impact</h3>
                    <p className="text-gray-600 mb-6">
                      #SongTichCuc campaign exceeded all target KPIs
                    </p>
                    <img 
                      src="/lovable-uploads/bc91eb16-44eb-43e6-bfae-634598663727.png" 
                      alt="Campaign hashtag performance" 
                      className="w-full rounded-lg mb-6"
                    />
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2 text-yellow-500 mt-1">•</span>
                        <span>H'Hen Niê encouraged followers to create Sun Life inspired videos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-yellow-500 mt-1">•</span>
                        <span>Promoted positivity during COVID-19, providing value beyond brand promotion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/80bc8d79-1215-4949-b652-f1e56d9536f5.png" 
                  alt="Success Snapshot metrics" 
                  className="w-full rounded-lg shadow-lg mb-8"
                />
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Platform Performance</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Facebook</h4>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>Posts:</span>
                        <span>40</span>
                      </div>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>Follower Gain:</span>
                        <span>177,518</span>
                      </div>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>Video Views:</span>
                        <span>20M+</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">TikTok</h4>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>Posts:</span>
                        <span>17</span>
                      </div>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>Follower Gain:</span>
                        <span>4,834</span>
                      </div>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>Video Views:</span>
                        <span>3,545,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems and Opportunities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Problems and Opportunities"
            subtitle="Key insights from campaign execution"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Opportunities Leveraged</h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Multi-platform Exposure</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Cross-posted TikTok videos to Facebook</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Reached broader audience beyond Gen Z</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Influencer-Led Hashtag Challenge</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>H'Hen Niê promoted #SongTichCuc on personal channels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Expanded visibility through influencer network</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Interactive Livestreams</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Workshops co-hosted with H'Hen Niê</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Mental health and wellness focus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-heisocial-purple">Problems Identified</h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Engagement-to-Conversion Gap</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>High views but limited product inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Lacked clear call-to-action pathways</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Post-Campaign Drop-off</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Interest declined after main campaign</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>No ongoing content strategy</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Under-leveraged SEO</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Minimal website integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-500 mt-1">•</span>
                      <span>Limited search visibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Strategic Recommendations"
            subtitle="Building on campaign success"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-heisocial-blue text-white mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maximize Influencer Collaboration</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Re-engage H'Hen Niê with structured amplification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Create UGC gallery on official website</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-heisocial-purple text-white mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Conversion Infrastructure</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Dedicated landing page with lead forms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Link hashtags to clear CTAs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-heisocial-blue text-white mb-4">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Channel Strategy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Integrate Facebook, Instagram, TikTok, and website</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Repurpose content across platforms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-3">
              <h3 className="text-xl font-bold mb-4">Implementation Blueprint</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left">Phase</th>
                      <th className="py-3 px-4 text-left">Timeline</th>
                      <th className="py-3 px-4 text-left">Actions</th>
                      <th className="py-3 px-4 text-left">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">Phase 1</td>
                      <td className="py-3 px-4">Weeks 1-2</td>
                      <td className="py-3 px-4">Share UGC, TikTok retargeting, influencer briefs</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-red-100 text-red-800">High</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Phase 2</td>
                      <td className="py-3 px-4">Weeks 3-4</td>
                      <td className="py-3 px-4">Landing page, ambassador blog, email series</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Phase 3</td>
                      <td className="py-3 px-4">Month 2-3</td>
                      <td className="py-3 px-4">Positivity video content and livestream</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Reflection */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Personal Reflection</h2>
            <p className="text-lg text-gray-600">
              Key learnings and professional development
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">•</span>
                <span><strong>Skills developed:</strong> Influencer activation, cross-platform execution, social strategy design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">•</span>
                <span><strong>Challenges overcome:</strong> Cross-functional coordination, technical alignment, deadline pressure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">•</span>
                <span><strong>Growth areas:</strong> Data literacy, communication clarity, project coordination</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">•</span>
                <span><strong>Career impact:</strong> Inspired focus on strategic brand storytelling</span>
              </li>
            </ul>
            
            <div className="border-l-4 border-heisocial-blue pl-6 mb-6">
              <p className="italic text-gray-600">
                "Managing cross-functional expectations while aligning creative and technical elements across platforms pushed me beyond my comfort zone."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Conclusion</h2>
            <ul className="space-y-4 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">•</span>
                <span>Campaign strengthened Sun Life Vietnam's brand through influencer collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">•</span>
                <span>Next step: Build sustainable brand-consumer relationships</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">•</span>
                <span>Future focus: Digital strategies combining purpose, community, and innovation</span>
              </li>
            </ul>
            
            <div className="text-center">
              <Link to="/portfolio">
                <Button className="bg-heisocial-purple hover:bg-heisocial-purple/90">
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Create Your Own Success Story?"
        description="Let's discuss how our digital marketing expertise can help your business achieve remarkable results."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default IChooseTheSun;
