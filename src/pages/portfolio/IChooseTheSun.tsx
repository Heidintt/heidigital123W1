
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
        subtitle="A viral TikTok and Facebook campaign promoting positivity and health during the COVID-19 pandemic"
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
                <p className="text-gray-600 mb-4">
                  As a <strong>Digital Marketing Specialist</strong> at <strong>Sun Life Vietnam</strong>, I worked directly on the campaign 
                  <strong> "I Choose The Sun"</strong>, launched in collaboration with brand ambassador <strong>H'Hen Niê</strong> (Miss Universe Vietnam 2017 
                  and Top 5 Miss Universe 2018). The campaign promoted positivity and healthy living during the COVID-19 pandemic, encouraging 
                  users to create uplifting videos.
                </p>
                <p className="text-gray-600 mb-4">
                  This initiative gained strong traction on <strong>TikTok and Facebook</strong>, collectively generating over <strong>75.6 million views</strong> and <strong>8,000+ user-created videos</strong>, 
                  according to campaign analytics. My role encompassed <strong>content planning, social media channel integration (TikTok, Facebook), SEO, ad performance tracking</strong>, and collaboration with my line manager.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Purpose</h3>
                <p className="text-gray-600 mb-4">
                  Promote a lifestyle of optimism, well-being, and resilience through digital engagement and brand ambassadorship 
                  during the COVID-19 pandemic to uplift community morale and promote healthy living habits. It centered around 
                  user-generated content (UGC) and social storytelling to resonate with Gen Z and Millennials.
                </p>
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
                  <div className="text-gray-600">~1.2 billion VND</div>
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
            subtitle="The campaign was strategically designed to reach specific demographics"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Demographic</h3>
              <p className="text-gray-600">
                Primarily Gen Z and Millennials (ages 16–35), digitally active and socially engaged.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Geographic</h3>
              <p className="text-gray-600">
                Urban areas across Vietnam, with higher emphasis on major cities such as Ho Chi Minh City, Hanoi, and Da Nang.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Psychographic</h3>
              <p className="text-gray-600">
                Individuals who value wellness, personal development, and inspiration from public figures; those seeking optimism during uncertain times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-heisocial-blue">Behavioral</h3>
              <p className="text-gray-600">
                Heavy users of TikTok and Facebook, active in hashtag challenges and video creation, follow influencers like H'Hen Niê, and engage with branded content.
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
                  of TikTok users are Generation Z'ers, according to Forbes
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Gen Z are true digital natives with access to technology from a young age</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Just as millennials fueled the rise of Facebook and Instagram, Generation Z is fueling the rise of TikTok</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500 mt-1">•</span>
                    <span>Generation Z often prefers to consume content in rich video formats</span>
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
                      Leverage the influence of H'Hen Niê to drive emotional connection and visibility, 
                      using her reach of over 1.5 million followers on TikTok and nearly 2 million on Facebook.
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
                      Launch the #SongTichCuc hashtag challenge to encourage mass participation 
                      and user-generated content around positive living practices.
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
                      Integrate short-form video, livestreams, and inspirational messaging to foster 
                      community and provide value during challenging pandemic times.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-heisocial-purple text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Initial KPI Targets</h3>
                  <p>The campaign's ambitious goals were clearly outlined</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-heisocial-purple mr-3" />
                    <div>
                      <span className="font-semibold">50 million</span> combined video views (TikTok + Facebook)
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
                      <span className="font-semibold">10,000+</span> engagements per flagship post
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6">
                  <h4 className="font-semibold mb-3">Budget Allocation (Total: ~1.2 billion VND)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div>Influencer engagement</div>
                      <div className="font-medium">480M VND (40%)</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Paid ad boosting</div>
                      <div className="font-medium">360M VND (30%)</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Livestream production</div>
                      <div className="font-medium">120M VND (10%)</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Billboard advertising</div>
                      <div className="font-medium">120M VND (10%)</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Internal design & contingency</div>
                      <div className="font-medium">120M VND (10%)</div>
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
            title="Leveraging Brand Ambassador: H'Hen Niê"
            subtitle="Strategic partnership with a national celebrity figure"
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
                  Sun Life Vietnam's Brand Ambassador is local celebrity H'Hen Niê, Vietnamese model and beauty pageant winner — 
                  crowned Miss Universe Vietnam 2018 and placing in the Top 5 at Miss Universe globally.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 mr-4">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Influential Reach</h4>
                      <p className="text-gray-600">
                        With over 1.5 million followers on TikTok and nearly 2 million on Facebook, her personal influence 
                        expanded campaign visibility exponentially.
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
                        Sun Life TikTok videos featuring H'Hen Niê generated strong performance: a video of her doing yoga at home 
                        generated 300,000+ views in May 2021.
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
            subtitle="Exceeding expectations across all key metrics"
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
                    <h3 className="text-xl font-bold mb-2 text-heisocial-blue">Campaign Impact: I Choose The Sun</h3>
                    <p className="text-gray-600 mb-6">
                      The Sun Life Vietnam campaign featuring the #SongTichCuc hashtag significantly exceeded all target KPIs.
                    </p>
                    <img 
                      src="/lovable-uploads/bc91eb16-44eb-43e6-bfae-634598663727.png" 
                      alt="Campaign hashtag performance" 
                      className="w-full rounded-lg mb-6"
                    />
                    <div className="space-y-4 text-gray-600">
                      <p>
                        <span className="font-medium">Recent campaign featured Brand Ambassador H'Hen Niê</span> encouraging 
                        followers to create their own Sun Life inspired video - <em>to see the sun</em>.
                      </p>
                      <p>
                        <span className="font-medium">The series promoted positivity and mental health</span> during the 
                        COVID-19 outbreak, providing value beyond brand promotion.
                      </p>
                    </div>
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
                  <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Platform-Specific Performance</h3>
                  
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
                        <span>20,000,000+</span>
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
            subtitle="Key insights identified during campaign execution"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-heisocial-blue">Opportunities Leveraged</h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Multi-platform Exposure through UGC</h4>
                  <p className="text-gray-600">
                    While TikTok was the campaign's primary platform, cross-posting videos to Facebook significantly 
                    amplified visibility and engagement. Our team repurposed top-performing TikTok videos onto Sun Life 
                    Vietnam's Facebook page, allowing broader reach beyond younger audiences.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Influencer-Led Hashtag Challenge Impact</h4>
                  <p className="text-gray-600">
                    H'Hen Niê actively promoted the campaign via her own TikTok and Facebook profiles, using the hashtag 
                    <strong> #SongTichCuc ("Live Positively")</strong>, which generated additional user engagement and traffic. 
                    Her personal influence expanded campaign visibility exponentially.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Interactive Livestreams and Workshops</h4>
                  <p className="text-gray-600">
                    The campaign also featured several workshops and livestream events co-hosted by H'Hen Niê and Sun Life Vietnam. 
                    These focused on mental health, positive mindset, and wellness—further reinforcing the brand's positioning and 
                    attracting large live audiences.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-heisocial-purple">Problems Identified</h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Engagement-to-Conversion Gap</h4>
                  <p className="text-gray-600">
                    Despite wide reach and participation, conversion into actionable leads was limited. This gap in 
                    conversion versus views is supported by TikTok analytics which mentions that although the campaign 
                    reached over 75 million views, deeper product inquiry was limited. The campaign lacked integrated 
                    call-to-action pathways linking viewers to consultation or product discovery.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Post-Campaign Momentum Drop-off</h4>
                  <p className="text-gray-600">
                    After the main activation ended, audience interest dropped sharply due to the absence of ongoing 
                    content or nurturing strategy.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Under-leveraged SEO and Owned Media</h4>
                  <p className="text-gray-600">
                    While engagement on social platforms was strong, the campaign had minimal presence on Sun Life's 
                    website or blog, reducing search visibility and long-tail engagement potential.
                  </p>
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
            subtitle="Building on campaign success for future initiatives"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-heisocial-blue text-white mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maximize Influencer Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Re-engage H'Hen Niê or similar-tier influencers in future campaigns with a structured amplification plan: 
                cross-channel promotion, behind-the-scenes content, and interactive livestreams.
              </p>
              <p className="text-gray-600">
                Curate a UGC gallery from campaign entries and feature them on the official website with ambassador 
                endorsements to prolong engagement lifecycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-heisocial-purple text-white mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Conversion Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Develop a dedicated landing page featuring campaign videos, motivational content, and embedded forms for 
                lead generation or product interest capture.
              </p>
              <p className="text-gray-600">
                Link campaign hashtags and influencer content to CTAs (e.g., financial well-being quiz, "book a consultation" button).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-heisocial-blue text-white mb-4">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strengthen Cross-Channel Strategy</h3>
              <p className="text-gray-600 mb-4">
                Integrate Facebook, Instagram, TikTok, and the Sun Life website in all campaign phases to ensure 
                users can flow between inspiration and information.
              </p>
              <p className="text-gray-600">
                Repurpose TikTok content into Instagram Reels, Facebook shorts, and SEO-optimized blog content to build evergreen value.
              </p>
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
                      <td className="py-3 px-4">Share UGC across platforms, launch TikTok retargeting, draft influencer re-engagement briefs</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-red-100 text-red-800">High</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Phase 2</td>
                      <td className="py-3 px-4">Weeks 3-4</td>
                      <td className="py-3 px-4">Launch landing page, publish ambassador blog/interview on campaign story, initiate email series</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Phase 3</td>
                      <td className="py-3 px-4">Month 2-3</td>
                      <td className="py-3 px-4">Pilot positivity-themed video content and livestream, track engagement and workshop turnout</td>
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
            <h2 className="text-3xl font-bold mb-6">Personal Reflection and Career Impact</h2>
            <p className="text-lg text-gray-600">
              This campaign provided invaluable firsthand experience and professional development
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              This campaign gave me first-hand experience in <strong>influencer activation, cross-platform campaign execution, and social strategy design</strong>. 
              I deepened my practical skills in managing channel-specific content, launching UGC-driven engagement mechanics, and analyzing 
              campaign performance in high-traffic environments.
            </p>
            
            <div className="border-l-4 border-heisocial-blue pl-6 mb-6">
              <p className="italic text-gray-600">
                "One significant challenge I faced was managing cross-functional expectations and campaign timelines while aligning creative 
                and technical elements across platforms. For example, coordinating with external influencers like H'Hen Niê, ensuring brand 
                tone alignment across TikTok and Facebook, and drafting real-time performance briefs pushed me beyond my comfort zone."
              </p>
            </div>
            
            <p className="text-gray-600 mb-6">
              I had to strengthen my communication clarity, data literacy (especially in TikTok Ads Manager), and resilience under deadline pressure. 
              To address these challenges, I proactively learned how to interpret ad performance data, collaborated closely with IT and design teams, 
              and engaged in rapid A/B testing of content hooks. As a result, I improved my project coordination skills and my ability to adapt quickly 
              when campaign metrics changed.
            </p>
            
            <p className="text-gray-600 mb-6">
              More importantly, it showed me how digital marketing can intersect with social good. By working directly with senior team members, 
              briefing creatives, interpreting campaign KPIs, and adjusting tactics on the fly, I developed a clearer understanding of how strategic 
              alignment, timing, and tone directly influence campaign success.
            </p>
            
            <p className="text-gray-600">
              The livestreams and comments from participants illustrated the power of content in uplifting public morale. These interactions 
              inspired me to pursue a career in <strong>strategic brand storytelling</strong>, combining emotional impact with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Conclusion</h2>
            <p className="text-gray-600 mb-6">
              The "I Choose The Sun" campaign was a meaningful and results-driven initiative that strengthened Sun Life Vietnam's 
              brand through influencer collaboration, wellness-oriented messaging, and user participation. While it achieved remarkable 
              reach, the next step is building sustainable brand-consumer relationships through strategic integration, content sequencing, 
              and conversion design.
            </p>
            
            <p className="text-gray-600 mb-8">
              Reflecting on this experience, I see my future in crafting digital strategies that combine <strong>purpose, community, and innovation</strong>—and 
              this campaign remains a cornerstone of that journey.
            </p>
            
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
