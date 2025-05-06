
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, ExternalLink } from "lucide-react";

const IChooseTheSun = () => {
  return (
    <Layout>
      <Hero
        title="I Choose The Sun Campaign"
        subtitle="A viral TikTok and Facebook campaign promoting positivity during COVID-19"
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      />

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Badge className="mb-3 bg-heisocial-lightpurple text-heisocial-purple">Case Study</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text">🌞 Stepping Into the Spotlight: My Role in "I Choose The Sun"</span>
                </h2>
                
                <div className="bg-gray-50 p-5 rounded-lg mb-6">
                  <p className="text-gray-700">
                    Sun Life is a subsidiary of Sun Life Financial – a global financial services company headquartered in Canada, with over 150 years of legacy. In Vietnam, Sun Life launched in 2013, positioning itself as a trusted provider of life insurance and financial solutions that empower clients to achieve lifetime financial security and live healthier lives.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Company Focus:</strong> Well-being, client-centric innovation, and digital engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Vision:</strong> Creating a brighter future by helping Vietnamese people live life to the fullest, both financially and emotionally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>My Role:</strong> Digital Marketing Specialist working directly on the campaign</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Campaign Launch:</strong> Collaboration with brand ambassador H'Hen Niê (Miss Universe Vietnam 2017 and Top 5 Miss Universe 2018)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>My Responsibilities:</strong> Content planning, social media integration (TikTok, Facebook), SEO, ad performance tracking, and cross-team collaboration</span>
                  </li>
                </ul>
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
                  <div className="text-gray-600">~1.2 billion VND (~$55,000 USD)</div>
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
            title="📣 Sparking Positivity: What Happened in the Campaign"
            subtitle="The 'I Choose The Sun' campaign during COVID-19 pandemic"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">Campaign Purpose & Target Audience</h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="font-bold mb-2">Purpose:</h4>
                <p className="text-gray-600 mb-4">Promote a lifestyle of optimism, well-being, and resilience through digital engagement and brand ambassadorship.</p>
                
                <h4 className="font-bold mb-2">Target Audience:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Demographic:</strong> Primarily Gen Z and Millennials (ages 16–35), digitally active and socially engaged</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Geographic:</strong> Urban areas across Vietnam, especially Ho Chi Minh City, Hanoi, and Da Nang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Psychographic:</strong> Individuals valuing wellness, personal growth, and inspiration from public figures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span><strong>Behavioral:</strong> Frequent users of TikTok and Facebook, active in hashtag challenges and influencer engagement</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-2">Strategy Elements:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Leverage the influence of H'Hen Niê to build emotional connection and visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Launch the #SongTichCuc hashtag challenge to encourage mass participation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Integrate short-form video, livestreams, and inspirational messaging to foster community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Create videos on health, finance, and being optimistic throughout the pandemic</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md mb-6">
                <div className="bg-heisocial-purple text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Initial KPI Targets</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <span>50 million video views (TikTok + Facebook)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <span>3,000 new TikTok followers</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <span>1,000+ UGC entries</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <span>10k+ engagements per flagship post</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-heisocial-purple text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Budget (1.2 billion VND / ~$55,000 USD)</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between">
                    <div>Influencer collaboration</div>
                    <div className="font-medium">480M VND (40%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Paid ads (Facebook, TikTok)</div>
                    <div className="font-medium">360M VND (30%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Livestream production</div>
                    <div className="font-medium">120M VND (10%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Billboard promotion</div>
                    <div className="font-medium">120M VND (10%)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Internal/reporting/contingency</div>
                    <div className="font-medium">120M VND (10%)</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <img 
                  src="/lovable-uploads/68e4b8a7-07fc-4da3-aa0f-29c41e7cd19b.png" 
                  alt="TikTok campaign metrics" 
                  className="w-full rounded-lg shadow-md mb-2"
                />
                <p className="text-gray-600 text-sm text-center">The #songtichcuc hashtag generated 75.6M views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Analysis Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="🔍 Behind the Scenes: What Worked, What Didn't"
            subtitle="Analysis of campaign performance and challenges"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Opportunities & Successes</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Cross-Platform UGC Reach:</strong> While TikTok was the main channel, repurposing top-performing content for Facebook expanded reach
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Hashtag & Influencer Leverage:</strong> H'Hen Niê's promotional efforts on her social platforms (with 1.5M TikTok and 2M Facebook followers) drove immense traffic
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Livestream Engagement:</strong> Collaborative livestreams with H'Hen Niê focused on wellness and positivity drew large real-time audiences
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Youth-Focused Brand Positioning:</strong> The campaign aligned Sun Life with wellness values popular among younger demographics
                    </div>
                  </li>
                </ul>
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
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Challenges & Learning Opportunities</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Low Conversion Rate:</strong> Despite 75M+ views, TikTok follower growth was only ~4,834, revealing weak CTA pathways and poor lead generation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Post-Campaign Drop-Off:</strong> Engagement dropped after the campaign due to lack of a nurturing or retargeting strategy
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <div>
                      <strong>Underused Owned Media:</strong> The brand's website lacked updated campaign assets and SEO-focused content
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3 text-heisocial-blue">Campaign Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-yellow-500 text-4xl font-bold mb-2">75.6M</div>
                    <p className="text-gray-600">Total views across platforms</p>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-500 text-4xl font-bold mb-2">8,000+</div>
                    <p className="text-gray-600">User-created videos</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/bc91eb16-44eb-43e6-bfae-634598663727.png" 
                  alt="Campaign visual metrics" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-gray-600 text-sm text-center">Cross-platform performance metrics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Learning Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="💡 Lessons from the Frontline: What I Learned"
            subtitle="Personal development and professional insights"
            centered
          />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Key Skills Developed</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Cross-departmental collaboration for campaign execution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Content planning with real-time performance analytics in mind</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Platform analytics interpretation, especially TikTok Ads Manager</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Brand alignment across multiple social platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Clear communication under time pressure</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Literature Connection:</strong> This reflection aligns with Kolb's Experiential Learning Cycle (1984), which highlights learning through doing and reflection as key to skill development.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">🔁 Growing Beyond Comfort: How I Evolved</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Took on challenging tasks: briefing creatives, coordinating influencer assets, and interpreting evolving analytics data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Developed solutions for overlapping feedback by creating standardized briefing templates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Improved performance report summaries for clearer stakeholder communication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Grew from hesitant collaboration to confidently leading creative rollout</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Learned to view pressure points as growth catalysts rather than setbacks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ambassador Section */}
      <section className="py-16 px-4">
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
                  H'Hen Niê - Miss Universe Vietnam 2017, Top 5 at Miss Universe 2018
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

      {/* Recommendations */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="🚀 If I Were to Shine Again: Recommendations for Future Campaigns"
            subtitle="Strategic improvements for future initiatives"
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
                  <span>Weekly short videos (≤60 seconds) on positivity, mental health, and finance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Hosted by H'Hen or trusted experts; ends with a strong CTA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Drives engagement while encouraging action</span>
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
                  <span>Interactive platform where users set and track wellness goals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Incentivized with e-vouchers and shout-outs from influencers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Encourages long-term engagement and lead capture</span>
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
                Use TikTok Hashtag Lab for Smarter Timing
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Align second campaign wave with trending topics (e.g., exam season, wellness resets)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Leverage TikTok's Hashtag Lab to identify ideal windows for launching phase 2</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Ensures the message stays socially relevant</span>
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
                Activate "Shine Together Challenge" (Team UGC Contest)
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Groups create uplifting content; top entries co-host livestreams with H'Hen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Organize a team-based challenge for groups of 2–4 people to submit videos spreading positivity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500 mt-1">•</span>
                  <span>Builds community and multiplies reach</span>
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="🛠 Making It Happen: Implementation Blueprint"
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
                            <span>Launch "1 Minute to Shine"</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Announce "Shine Together Challenge"</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Beta test "Wellness Map"</span>
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
                            <span>Release financial wellness episode with CTA</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Open group challenge entries</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Sync microsite with CRM for lead tracking</span>
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
                            <span>Host livestream "Shine Celebration" with top creators</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Analyze results using TikTok Hashtag Lab</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-yellow-500 mt-1">•</span>
                            <span>Turn microsite into permanent wellness hub</span>
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

      {/* Final Thoughts */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="🧠 Final Thoughts: Meaning, Impact & Career Vision"
            subtitle="Reflections on the campaign journey"
            centered
          />
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Professional Growth</h3>
              <p className="text-gray-600 mb-4">
                Reflecting on this experience, I see the value of aligning social storytelling with measurable business goals. The campaign not only improved my skills—it clarified my career path.
              </p>
              <p className="text-gray-600">
                I've seen firsthand how brand purpose, community values, and creative content can come together to elevate both audience impact and marketing performance. The interactions, livestreams, and reactions from users showed me the power of using marketing as a tool for emotional uplift and social impact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Career Vision</h3>
              <p className="text-gray-600 mb-4">
                This experience helped me define my future: I want to build campaigns that balance creativity with strategy, empathy with ROI. And it all started with choosing the sun.
              </p>
              <div className="mt-6 bg-yellow-50 p-5 rounded-lg">
                <div className="text-center text-2xl font-bold text-yellow-500 mb-2">75.6 Million Views</div>
                <p className="text-center text-gray-700">
                  A testament to the power of positive messaging during challenging times
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Link to="/portfolio">
            <Button className="bg-heisocial-purple hover:bg-heisocial-purple/90 flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" /> Back to Portfolio
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
