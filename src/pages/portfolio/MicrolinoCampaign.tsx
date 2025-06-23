
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

const MicrolinoCampaign = () => {
  return (
    <Layout>
      <Hero
        title="Microlino 2026 Australian Launch Campaign"
        subtitle="Integrated Marketing Communications Campaign by Heisocial Communications"
        backgroundImage="/lovable-uploads/4122d0a9-afef-4722-8fc3-da6801946f64.png"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Campaign Overview */}
          <div className="mb-16">
            <SectionHeading
              title="Campaign Overview"
              subtitle="A comprehensive integrated marketing communications strategy for Microlino's Australian market entry"
              centered
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Objective</h3>
                <p className="text-gray-600">Build brand awareness and drive pre-orders for the 2026 Australian launch</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Target Audience</h3>
                <p className="text-gray-600">Urban professionals aged 25-45 in Sydney, Melbourne, and Brisbane</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Key Message</h3>
                <p className="text-gray-600">"Half the Space, Twice the Life" - #TwiceTheLife</p>
              </div>
            </div>
          </div>

          {/* Campaign Strategy */}
          <div className="mb-16">
            <SectionHeading
              title="Strategic Approach"
              subtitle="Multi-channel integrated marketing campaign"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-heisocial-blue">Campaign Rationale</h3>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Market Challenges</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• High EV upfront costs</li>
                    <li>• Range anxiety in urban environments</li>
                    <li>• Scarcity of city parking</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Microlino's Solution</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Price under AUD 40,000</li>
                    <li>• 230 km city range</li>
                    <li>• Fits in half a parking spot</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-heisocial-blue">Campaign Objectives</h3>
                <div className="bg-gradient-to-br from-heisocial-blue to-heisocial-purple text-white p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">Awareness</h4>
                      <p className="text-sm opacity-90">60% aided recall among target audience</p>
                    </div>
                    <div>
                      <h4 className="font-bold">Engagement</h4>
                      <p className="text-sm opacity-90">5,000 test-drive bookings</p>
                    </div>
                    <div>
                      <h4 className="font-bold">Conversion</h4>
                      <p className="text-sm opacity-90">2,000 pre-orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Strategy */}
          <div className="mb-16">
            <SectionHeading
              title="Integrated Media Plan"
              subtitle="6-week multi-channel campaign"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">Digital Advertising</h4>
                <p className="text-sm text-gray-600 mb-3">Instagram & TikTok Reels, YouTube Shorts</p>
                <div className="text-xs text-gray-500">35% budget allocation</div>
              </div>
              
              <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow">
                <h4 className="font-bold text-green-600 mb-2">Out-of-Home</h4>
                <p className="text-sm text-gray-600 mb-3">Transit shelters in CBD areas</p>
                <div className="text-xs text-gray-500">20% budget allocation</div>
              </div>
              
              <div className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow">
                <h4 className="font-bold text-purple-600 mb-2">Influencer Marketing</h4>
                <p className="text-sm text-gray-600 mb-3">Micro-influencer vlogs</p>
                <div className="text-xs text-gray-500">8% budget allocation</div>
              </div>
              
              <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow">
                <h4 className="font-bold text-orange-600 mb-2">AR Experience</h4>
                <p className="text-sm text-gray-600 mb-3">Tiny EV Hunt activation</p>
                <div className="text-xs text-gray-500">12% budget allocation</div>
              </div>
              
              <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow">
                <h4 className="font-bold text-red-600 mb-2">Banner Program</h4>
                <p className="text-sm text-gray-600 mb-3">Customer advocacy initiative</p>
                <div className="text-xs text-gray-500">5% budget allocation</div>
              </div>
              
              <div className="bg-white border-l-4 border-indigo-500 p-6 rounded-lg shadow">
                <h4 className="font-bold text-indigo-600 mb-2">Owned Media</h4>
                <p className="text-sm text-gray-600 mb-3">Website & CRM campaigns</p>
                <div className="text-xs text-gray-500">10% budget allocation</div>
              </div>
            </div>
          </div>

          {/* Key Activations */}
          <div className="mb-16">
            <SectionHeading
              title="Key Campaign Activations"
              subtitle="Innovative engagement strategies"
              centered
            />
            
            <div className="space-y-8 mt-12">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">🔍 Tiny EV Hunt</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Mechanics</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Instagram AR filter hunt in 50 urban locations</li>
                      <li>• Daily clues via Instagram Stories</li>
                      <li>• Virtual Microlino model discovery</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Rewards</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Top 1000: VIP test drive + 10% discount</li>
                      <li>• Top 4000: 5% discount + swag pack</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">🎯 Road Banner Bonus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">For New Buyers</h4>
                    <p className="text-gray-600">Display banner for 6 months → extra 5% discount (stackable)</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">For Prospects</h4>
                    <p className="text-gray-600">Display banner on current car → 3% future voucher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expected Results */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-8">Expected Campaign Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">60%</div>
                  <div className="text-sm opacity-90">Aided Brand Recall</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5K</div>
                  <div className="text-sm opacity-90">Test Drive Bookings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2K</div>
                  <div className="text-sm opacity-90">Pre-orders</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3.5K</div>
                  <div className="text-sm opacity-90">AR Hunt Participants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicrolinoCampaign;
