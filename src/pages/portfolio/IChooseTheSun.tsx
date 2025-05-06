
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
                    <span><strong>Company:</strong> Sun Life Vietnam with brand ambassador H'Hen Niê (Miss Universe Vietnam 2017)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Campaign:</strong> "Staying Positive During the COVID-19 Pandemic" (#SongTichCuc)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Results:</strong> 75.6M views and 8,000+ user-created videos across TikTok and Facebook</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Purpose:</strong> Promote optimism, well-being and resilience through digital engagement targeting Gen Z and Millennials</span>
                  </li>
                </ul>

                <div className="mt-6 bg-gray-50 p-5 rounded-lg">
                  <p className="text-gray-700">
                    The COVID-19 pandemic has had a significant impact on people's health and spirits. At Sun Life Vietnam, our purpose is clear: to help our clients achieve lifetime financial security and live healthier lives. This campaign provided clients with practical information to help them stay positive during the pandemic.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Campaign Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Company</div>
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
                  <div className="text-gray-600">TikTok, Facebook, Instagram, Zalo, YouTube</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Budget</div>
                  <div className="text-gray-600">~$55,000 USD</div>
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

      {/* Campaign Strategy Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="Campaign Strategy"
            subtitle="Staying Positive During the COVID-19 Pandemic"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">Strategy Elements</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Create videos on health, finance, and optimism throughout the pandemic with brand ambassador H'Hen Niê</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Organize contests on social media platforms to motivate people to exercise and stay positive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Post optimistic videos about the new normal life</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Leverage H'Hen Niê's influence (1.5M TikTok and 2M Facebook followers)</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Initial KPI Targets</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <span>25 posts across platforms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <span>20,000,000 impressions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-heisocial-purple text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Budget Allocation ($55,000 USD)</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between">
                    <div>Influencer engagement</div>
                    <div className="font-medium">$20,000 (36%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Paid ad boosting</div>
                    <div className="font-medium">$15,000 (27%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Livestream production</div>
                    <div className="font-medium">$5,000 (9%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Billboard advertising</div>
                    <div className="font-medium">$10,000 (18%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Internal design, performance reporting, and contingency buffer</div>
                    <div className="font-medium">$5,000 (10%)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="/lovable-uploads/68e4b8a7-07fc-4da3-aa0f-29c41e7cd19b.png" 
                  alt="TikTok campaign metrics" 
                  className="w-full rounded mb-4"
                />
                <p className="text-gray-600 text-sm italic">The #songtichcuc hashtag generated 75.6M views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Presence */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Sun Life Vietnam Social Media Presence"
            subtitle="Multi-platform engagement strategy"
            centered
          />
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">5</div>
                <p className="text-gray-600">Social media platforms including Facebook, Instagram, Zalo, YouTube and TikTok</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">600k+</div>
                <p className="text-gray-600">Social media followers engaging with Sun Life content</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">3M+</div>
                <p className="text-gray-600">Interactions on social media platforms in 2021</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Facebook Performance</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border">Posts</th>
                      <th className="py-2 px-4 border">Net Followers Gain</th>
                      <th className="py-2 px-4 border">Total Likes</th>
                      <th className="py-2 px-4 border">Video Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border text-center">40</td>
                      <td className="py-2 px-4 border text-center">177,518</td>
                      <td className="py-2 px-4 border text-center">302,000</td>
                      <td className="py-2 px-4 border text-center">20,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/c3380f42-094f-4304-8f5c-b202d3a65577.png" 
                  alt="Campaign metrics summary" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-gray-600 text-sm text-center">Campaign performance metrics on Facebook</p>
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">TikTok Performance</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 border">Posts</th>
                        <th className="py-2 px-4 border">Net Followers Gain</th>
                        <th className="py-2 px-4 border">Total Likes</th>
                        <th className="py-2 px-4 border">Video Views</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border text-center">17</td>
                        <td className="py-2 px-4 border text-center">4,834</td>
                        <td className="py-2 px-4 border text-center">63,000</td>
                        <td className="py-2 px-4 border text-center">3,545,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Instagram Performance</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 border">Posts</th>
                        <th className="py-2 px-4 border">Net Followers Gain</th>
                        <th className="py-2 px-4 border">Total Likes</th>
                        <th className="py-2 px-4 border">Bio Link Clicks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border text-center">22</td>
                        <td className="py-2 px-4 border text-center">495</td>
                        <td className="py-2 px-4 border text-center">903</td>
                        <td className="py-2 px-4 border text-center">4,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Results */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="Campaign Results"
            subtitle="Exceeding expectations across metrics"
            centered
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl md:text-5xl font-bold mb-3">183K</div>
                <div className="text-gray-700 font-medium">New Social Media Followers</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl md:text-5xl font-bold mb-3">74.6M</div>
                <div className="text-gray-700 font-medium">Total Impressions</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Campaign Results</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Success metrics: 79 videos uploaded, resulting in 74.6M impressions across platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Facebook: 40 posts, 58M impressions, 177.5K new followers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>TikTok: 17 posts, 3.5M impressions, 4.8K new followers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Instagram: 22 posts, 13M impressions, 495 new followers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-bold mb-4 text-heisocial-blue">#SongTichCuc Campaign Impact</h3>
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                        <div className="text-4xl font-bold">8K+</div>
                      </div>
                      <p className="text-gray-700">User-generated videos</p>
                    </div>
                    <div className="md:w-1/2">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                        <div className="text-4xl font-bold">75.6M</div>
                      </div>
                      <p className="text-gray-700">Video views</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/64a3f787-87c4-4873-8e73-be1bffa80a3b.png" 
                    alt="Social media campaign metrics" 
                    className="w-full rounded-lg mb-4" 
                  />
                  <p className="text-gray-600 text-sm text-center">TikTok and Facebook metrics from the campaign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Content Strategy */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Content Strategy and Target Audience"
            subtitle="Reaching Generation Z with engaging content"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Video Content Pillars</h3>
              <p className="mb-4 text-gray-600">Activating the Sun Life purpose to help clients achieve lifetime financial security and live healthier lives by:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Promoting a healthy lifestyle with top tips such as yoga and how to exercise at home</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Raising financial literacy with informative content on investment and savings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Creating videos on health, finance, and being optimistic throughout the pandemic with brand ambassador H'Hen Nie</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Organizing contests on social media platforms to motivate people to exercise and stay positive</span>
                </li>
              </ul>
              
              <img 
                src="/lovable-uploads/776be8eb-1741-43f7-996d-853bb0ad2471.png" 
                alt="Content Strategy" 
                className="w-full rounded-lg shadow-sm mt-6" 
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Target Audience: Generation Z</h3>
              
              <div className="mb-8 bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-yellow-500 text-5xl font-bold mb-4">60%</div>
                <p className="text-gray-700">of TikTok users are Generation Z'ers, according to Forbes</p>
              </div>
              
              <p className="mb-4 text-gray-600">Sun Life Vietnam aims to broaden their reach and capture a new generation with engaging video content.</p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Generation Z – characterized as those born between 1995 and 2010</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Just as millennials fueled the rise of Facebook and Instagram, Generation Z is fueling the rise of TikTok</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Digital natives with early technology access and preference for rich video formats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>High levels of social and cultural awareness with propensity to be expressive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ambassador Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="Leveraging Brand Ambassador: H'Hen Niê"
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
                  src="/lovable-uploads/c70b8597-1e6d-45af-90eb-9f855efb46fa.png" 
                  alt="H'Hen Niê in yellow outfit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md col-span-2">
                <img 
                  src="/lovable-uploads/061eb65e-da4b-4020-9d10-ef58fd034165.png" 
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
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Influential reach:</strong> 1.5M TikTok followers, 2M Facebook followers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Content performance:</strong> Yoga video generated 300,000+ views in May 2021</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Strategy:</strong> Collaborating with H'Hen Niê to create creative videos following latest trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standout Results */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Standout Results"
            subtitle="Beyond metrics and numbers"
            centered
          />
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">Trust Building Impact</h3>
                
                <p className="text-gray-600 mb-4">
                  This campaign not only promoted brand awareness and engagement on Sun Life Vietnam's channels but also helped to build customers trust:
                </p>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Customers actively contact the Sun Life Vietnam fan page and visit the website to leave information and call for advice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Users have left positive feedback and shared postings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Users have a better understanding of our mission: to help our clients achieve lifetime financial security and live healthier lives</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <img 
                  src="/lovable-uploads/bc91eb16-44eb-43e6-bfae-634598663727.png" 
                  alt="Campaign visual metrics" 
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600 text-sm text-center">Campaign performance metrics across platforms</p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">Learning from Other Brands</h3>
                <p className="text-gray-600 mb-4">Sun Life Vietnam studied successful TikTok strategies from global brands:</p>
                
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Washington Post:</strong> Comedic behind-the-scenes videos and skits that make journalists relatable to Gen Z
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>NBA:</strong> Motivational content and lighter side of the organization with players dancing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>BMW:</strong> Hashtag campaigns encouraging users to create content showing their best dance moves
                    </div>
                  </li>
                </ul>
                
                <img 
                  src="/lovable-uploads/80bc8d79-1215-4949-b652-f1e56d9536f5.png" 
                  alt="Social media engagement metrics" 
                  className="w-full rounded-lg mt-6"
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-3 text-heisocial-blue">TikTok Strategy Success</h3>
                <div className="flex flex-row items-center gap-8 justify-center">
                  <div className="text-center">
                    <div className="text-yellow-500 text-4xl font-bold mb-2">60</div>
                    <p className="text-gray-600 text-sm">videos published on TikTok</p>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-500 text-4xl font-bold mb-2">865K</div>
                    <p className="text-gray-600 text-sm">views to 100% of length</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & Action Items */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Conclusion</span>
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  The campaign was a massive success that exceeded our expectations. It not only helps Sun Life Vietnam grow and become more well-known, but it also provides clients with a wealth of important information on health, financial, and family protection.
                </p>
                <p className="text-gray-600 mb-4">
                  The COVID-19 pandemic is a challenge, but it also provides us with the ability to review our experiences. This campaign brings a lot of helpful information for the community and helps clients gain financial confidence and brighter life.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Action Items</span>
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Create more similar campaigns in the future to provide clients with more relevant information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Develop Sun Life Vietnam's channels as a reliable source of essential information by bringing trendy content, art, and cultural images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Use brand promotions to market more of our featured products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Continue to put the client first to make content more relevant to consumers</span>
                  </li>
                </ul>
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
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-heisocial-blue text-white text-sm mr-3">A</span>
                Launch a Micro-Series: "1 Minute to Shine"
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Develop a weekly series of short videos (≤60 seconds), themed around positivity, mental health, and financial wellbeing.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Hosted by H'Hen Niê or guest speakers such as doctors, coaches, or lifestyle influencers.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Each episode ends with a CTA like "Take your financial wellness quiz" or "Book a free Sun Life consultation."</span>
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="flex items-start">
                  <span className="text-yellow-500 mr-2">💡</span>
                  <span className="text-gray-700"><strong>Why it works:</strong> Capitalizes on the popularity of edutainment formats, shifting users from inspiration to measurable action.</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-heisocial-blue text-white text-sm mr-3">B</span>
                Create a Personalized "Wellness Map" Microsite
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Launch an interactive platform where users build their own positivity journey—from physical wellness to financial goals.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Users can create an account, set goals, track progress, and receive motivational content or rewards (e-vouchers, shout-outs from H'Hen).</span>
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="flex items-start">
                  <span className="text-yellow-500 mr-2">💡</span>
                  <span className="text-gray-700"><strong>Why it works:</strong> Extends user engagement post-campaign and captures warm leads for Sun Life's funnel.</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-heisocial-blue text-white text-sm mr-3">C</span>
                Use TikTok Hashtag Lab for Data-Driven Trend Timing
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Leverage TikTok's Hashtag Lab to identify ideal windows for launching phase 2 of #SongTichCuc.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Tie campaign messaging to seasonal or trending themes (e.g., back-to-school stress, digital detox, workplace burnout).</span>
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="flex items-start">
                  <span className="text-yellow-500 mr-2">💡</span>
                  <span className="text-gray-700"><strong>Why it works:</strong> Turns a one-off viral spike into a recurring brand movement anchored in social relevance.</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-heisocial-blue text-white text-sm mr-3">D</span>
                Activate the "Shine Together Challenge" (Group UGC Contest)
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Organize a team-based challenge encouraging groups of 2–4 people to submit videos spreading positivity.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Winning teams are invited to co-host a livestream with H'Hen and receive branded gifts or mentoring sessions.</span>
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="flex items-start">
                  <span className="text-yellow-500 mr-2">💡</span>
                  <span className="text-gray-700"><strong>Why it works:</strong> Builds a sense of belonging, increases content quality, and amplifies reach through peer networks.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Blueprint */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Implementation Blueprint"
            subtitle="Phased approach to continued success"
            centered
          />
          
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left">Phase</th>
                      <th className="py-3 px-4 text-left">Timeline</th>
                      <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 font-medium">Phase 1</td>
                      <td className="py-4 px-4">Weeks 1-2<br/><span className="text-sm text-gray-500">Activation Kick-Off</span></td>
                      <td className="py-4 px-4">
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Launch the first episodes of "1 Minute to Shine" across TikTok, Instagram Reels, and Facebook.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Announce the upcoming "Shine Together Challenge" with a teaser led by H'Hen Niê.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Publish the beta version of the "Wellness Map" microsite to invite early adopters.</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Phase 2</td>
                      <td className="py-4 px-4">Weeks 3-4<br/><span className="text-sm text-gray-500">Peak Engagement</span></td>
                      <td className="py-4 px-4">
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Release a key episode focused on financial wellbeing, including strong CTAs tied to Sun Life services.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Open entries for the "Shine Together Challenge" and activate community voting mechanisms.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Integrate user activity from the microsite into Sun Life's CRM system for lead tracking.</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Phase 3</td>
                      <td className="py-4 px-4">Month 2-3<br/><span className="text-sm text-gray-500">Community Retention & Growth</span></td>
                      <td className="py-4 px-4">
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Host a livestream event—"Shine Celebration"—featuring H'Hen and top challenge participants.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Analyze campaign data via TikTok Hashtag Lab to plan a trend-aligned wave 2.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Upgrade the "Wellness Map" into a permanent feature for future brand engagement initiatives.</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Link to="/portfolio">
            <Button className="bg-heisocial-purple hover:bg-heisocial-purple/90">
              Back to Portfolio
            </Button>
          </Link>
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
