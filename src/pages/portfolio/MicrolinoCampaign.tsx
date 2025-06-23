
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
          {/* Campaign Rationale & Objectives */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-heisocial-blue mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Campaign Rationale & Objectives
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Rationale */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-pink-500">Rationale</h4>
                  <p className="text-gray-700 mb-4">Australia's EV adoption is hindered by three main factors:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• High upfront cost</li>
                    <li>• Range anxiety in urban environments</li>
                    <li>• Scarcity of city parking (CPRC, 2023)</li>
                  </ul>
                </div>

                {/* Microlino's Response */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-500">Microlino's Response</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Price &lt; AUD 40,000 (Ricker, 2024)</li>
                    <li>• 230 km city range (Microlino, n.d.)</li>
                    <li>• Fits in half a parking spot; standard outlet charging (Microlino, n.d.)</li>
                  </ul>
                </div>

                {/* Objectives - #TwiceTheLife */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-500">Objectives - #TwiceTheLife</h4>
                  <p className="text-gray-700 mb-3">Hierarchy of Effects:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <span className="font-medium">Awareness:</span> 60% aided recall (25-35 y.o. urban professionals)</li>
                    <li>• <span className="font-medium">Engagement:</span> 5000 test-drive bookings</li>
                    <li>• <span className="font-medium">Conversion:</span> 2000 pre-orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks & Strategic Foundations */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Frameworks & Strategic Foundations
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Marketing Funnel */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-600">4 Marketing Funnel</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <h5 className="font-semibold">1. Awareness stage</h5>
                      <p className="text-sm text-gray-600">Building brand recognition</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg">
                      <h5 className="font-semibold">2. Engagement stage</h5>
                      <p className="text-sm text-gray-600">Creating interest and consideration</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-semibold">3. Conversion</h5>
                      <p className="text-sm text-gray-600">Driving purchase decisions</p>
                    </div>
                  </div>
                </div>

                {/* Strategic Models */}
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-purple-600">Hierarchy of Effects (Lavidge & Steiner, 1961)</h4>
                    <p className="text-sm text-gray-600">Guides consumer journey from awareness to purchase</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-indigo-600">Tri-Component Attitude Model (Ajzen & Fishbein, 1980)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><span className="font-medium">Cognitive:</span> Cost, Range, Parking</li>
                      <li><span className="font-medium">Affective:</span> Joy, Eco-pride</li>
                      <li><span className="font-medium">Behavioral:</span> Test-drive, Pre-order</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-green-600">Brand Equity Building (Keller, 1993)</h4>
                    <p className="text-sm text-gray-600">Reinforce "Half the Space, Twice the Life" consistently across all touch-points</p>
                    <p className="text-sm text-gray-600 mt-2">Build associations of affordability, sustainability, and joyful urban driving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Profile */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Target Audience Profile
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-800 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">📍</span> Geographic
                    </h4>
                    <p>Sydney, Brisbane & Melbourne CBDs</p>
                  </div>
                  
                  <div className="bg-slate-700 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">👤</span> Demographic
                    </h4>
                    <p>25-45 yrs, income AUD 75-90k</p>
                  </div>
                  
                  <div className="bg-slate-600 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">🧠</span> Psychographic
                    </h4>
                    <p>Eco-conscious, tech-savvy, design-driven</p>
                  </div>
                  
                  <div className="bg-slate-500 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="mr-3">🚗</span> Behavioral
                    </h4>
                    <p>Short-distance drivers, mobile-first, social sharers</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <img 
                    src="/lovable-uploads/a15882dc-97d3-47bb-b7cd-d3c2fac149c7.png" 
                    alt="Target audience visualization" 
                    className="w-full h-auto rounded-lg opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Message Strategy & Appeals */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Message Strategy & Appeals
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Message Strategy Wheel */}
                <div className="flex flex-col items-center">
                  <div className="relative w-80 h-80 mb-6">
                    <div className="absolute inset-0 rounded-full border-8 border-slate-600"></div>
                    
                    {/* Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    
                    {/* Urban Mobility */}
                    <div className="absolute top-4 left-8 bg-blue-500 p-4 rounded-lg">
                      <h5 className="font-bold text-sm">Urban Mobility</h5>
                      <p className="text-xs">Small, agile, easy to park</p>
                    </div>
                    
                    {/* Affordability */}
                    <div className="absolute top-4 right-8 bg-green-500 p-4 rounded-lg">
                      <h5 className="font-bold text-sm">Affordability</h5>
                      <p className="text-xs">Under AUD 40k</p>
                    </div>
                    
                    {/* Playful Design */}
                    <div className="absolute bottom-4 right-8 bg-purple-500 p-4 rounded-lg">
                      <h5 className="font-bold text-sm">Playful Design</h5>
                      <p className="text-xs">Stylish, joyful ownership</p>
                    </div>
                  </div>
                </div>
                
                {/* Appeal Types */}
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-pink-300">
                      <span className="mr-3">❤️</span> Emotional Appeals
                    </h4>
                    <ul className="space-y-2">
                      <li>• Joy</li>
                      <li>• Pride</li>
                      <li>• Ease of city life</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                      <span className="mr-3">⚖️</span> Rational Appeals
                    </h4>
                    <ul className="space-y-2">
                      <li>• Cost</li>
                      <li>• Charging</li>
                      <li>• Range</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-yellow-300">
                      <span className="mr-3">📚</span> Theoretical Support
                    </h4>
                    <p className="text-sm">Vakratsas & Ambler (1999): Effective ads blend emotion + logic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Big Idea */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Big Idea
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-xl font-bold mb-4 text-yellow-300">Concept</h4>
                  <p className="text-lg font-semibold">"Half the Space, Twice the Life"</p>
                </div>
                
                <div className="bg-slate-600 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="text-xl font-bold mb-4 text-blue-300">Product</h4>
                  <p>A pocket-EV that shrinks the car</p>
                </div>
                
                <div className="bg-slate-500 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="text-xl font-bold mb-4 text-green-300">Benefits</h4>
                  <p>Drivers gain time, space and unmistakable eco-style</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block px-6 py-3 rounded-full">
                  <p className="text-xl font-bold">Hashtag: #TwiceTheLife</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Ad Storyboard */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Hero Ad Storyboard
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-pink-300">Problem</h4>
                  <p>A driver stuck circling CBD, stressed</p>
                </div>
                
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-300">Solution</h4>
                  <p>Microlino glides into half-size space, stress-free</p>
                </div>
                
                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-green-300">Social Proof</h4>
                  <p>Friends admire the vehicle's compact beauty</p>
                </div>
              </div>
              
              <div className="bg-slate-600 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Action</h4>
                <p>Owner shares test-drive link with CTA overlay</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block px-6 py-3 rounded-lg">
                  <p className="font-bold">Overlay: "Half the Space, Twice the Life - Book a Test Drive at microlino.com.au" CTA + Hashtag: #TwiceTheLife</p>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/627626eb-2ca0-44f6-b25a-1da8b56dfc56.png" 
                  alt="Hero Ad Storyboard Visual" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Creative Strategy Rationale */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Creative Strategy Rationale
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">📚</span>
                      <h4 className="text-xl font-bold text-blue-600">Storytelling triggers affective response</h4>
                    </div>
                    <p className="text-gray-700">Emotional connection through narrative structure</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">🎯</span>
                      <h4 className="text-xl font-bold text-green-600">Experiential AR = emotional memory + earned media</h4>
                    </div>
                    <p className="text-gray-700">Creating lasting impressions through interactive experiences</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">⚓</span>
                      <h4 className="text-xl font-bold text-purple-600">Rational anchors reduce decision hesitation</h4>
                    </div>
                    <p className="text-gray-700">Providing logical justification for emotional decisions</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-indigo-500">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">📊</span>
                      <h4 className="text-xl font-bold text-indigo-600">Creative mapped to Hierarchy of Effects and Tri-Component Model</h4>
                    </div>
                    <p className="text-gray-700">Strategic alignment with established marketing frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tiny EV Hunt Activation */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Tiny EV Hunt Activation
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-pink-300">Mechanics</h4>
                  <ul className="space-y-3 text-white">
                    <li>• Instagram AR filter hunt in 50 key urban spots</li>
                    <li>• Daily clues via IG Stories</li>
                    <li>• Players scan and find virtual Microlino models</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-blue-300">Rewards</h4>
                  <ul className="space-y-3 text-white">
                    <li>• <span className="font-bold">Top 1000:</span> VIP Test Drive + 10% pre-order discount + Swag Pack</li>
                    <li>• <span className="font-bold">Top 4000:</span> 5% discount + Swag Pack (stackable with Banner Bonus) and Test Drive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Road Banner Bonus */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Road Banner Bonus
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4">New Microlino buyers</h4>
                    <p className="mb-4">Who display a "Half the Space, Twice the Life" rear-window banner for <span className="font-bold">6 months</span> receive an <span className="font-bold text-green-300">extra 5% off</span>—<span className="italic">stackable with any Hunt reward earned.</span></p>
                  </div>
                  
                  <div className="bg-slate-600 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4">Prospective buyers</h4>
                    <p>Who place the same banner on their current car for <span className="font-bold">6 months</span> earn a <span className="font-bold text-green-300">3% voucher</span> toward a future Microlino—also stackable.</p>
                  </div>
                  
                  <div className="bg-slate-500 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4">Mobile Billboard</h4>
                    <p>Each banner carries a QR code linking to the booking page, turning every participant into a mobile billboard.</p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="font-bold text-gray-700"><span className="text-blue-600">Objectives Supported:</span> Awareness, Engagement, Conversion, Encourages UGC and emotional bonding</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/16860d8e-50cd-470b-a2f5-cf778cef6db0.png" 
                    alt="Road Banner Bonus Visual" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Media Plan */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Integrated Media Plan - 6-Week Flight
                </span>
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Channel</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">PESO Role</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Hierarchy Stage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">KPI Target</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Budget Share</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Instagram & TikTok Reels (Paid)</td>
                      <td className="border border-gray-300 px-4 py-2">Paid</td>
                      <td className="border border-gray-300 px-4 py-2">Awareness → Engagement</td>
                      <td className="border border-gray-300 px-4 py-2">12M views, CTR ≥ 1.4%</td>
                      <td className="border border-gray-300 px-4 py-2">35%</td>
                      <td className="border border-gray-300 px-4 py-2">Daily 5-8 pm, Weeks 1-6</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-gray-300 px-4 py-2">YouTube Shorts (Paid)</td>
                      <td className="border border-gray-300 px-4 py-2">Paid</td>
                      <td className="border border-gray-300 px-4 py-2">Awareness</td>
                      <td className="border border-gray-300 px-4 py-2">3M views</td>
                      <td className="border border-gray-300 px-4 py-2">10%</td>
                      <td className="border border-gray-300 px-4 py-2">Weeks 1-3 burst</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">OOH Transit Shelters</td>
                      <td className="border border-gray-300 px-4 py-2">Paid</td>
                      <td className="border border-gray-300 px-4 py-2">Awareness → Knowledge</td>
                      <td className="border border-gray-300 px-4 py-2">6M impressions</td>
                      <td className="border border-gray-300 px-4 py-2">20%</td>
                      <td className="border border-gray-300 px-4 py-2">4-week flight, 24/7</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-gray-300 px-4 py-2">Micro-Influencer Vlogs</td>
                      <td className="border border-gray-300 px-4 py-2">Earned</td>
                      <td className="border border-gray-300 px-4 py-2">Preference</td>
                      <td className="border border-gray-300 px-4 py-2">2.5M views, 1% swipe-up</td>
                      <td className="border border-gray-300 px-4 py-2">8% (product contra)</td>
                      <td className="border border-gray-300 px-4 py-2">Drops Wk 3 & 4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Tiny EV Hunt (AR)</td>
                      <td className="border border-gray-300 px-4 py-2">Shared</td>
                      <td className="border border-gray-300 px-4 py-2">Engagement → Conviction</td>
                      <td className="border border-gray-300 px-4 py-2">3500 active hunters, 3000 UGC posts</td>
                      <td className="border border-gray-300 px-4 py-2">12% (dev + prizes)</td>
                      <td className="border border-gray-300 px-4 py-2">Weeks 2-4</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-gray-300 px-4 py-2">Banner Bonus Programme</td>
                      <td className="border border-gray-300 px-4 py-2">Shared/Owned</td>
                      <td className="border border-gray-300 px-4 py-2">Conviction → Purchase</td>
                      <td className="border border-gray-300 px-4 py-2">1000 banner sign-ups</td>
                      <td className="border border-gray-300 px-4 py-2">5%</td>
                      <td className="border border-gray-300 px-4 py-2">Launch Wk 3; active 6 mo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Microlino.com.au & CRM</td>
                      <td className="border border-gray-300 px-4 py-2">Owned</td>
                      <td className="border border-gray-300 px-4 py-2">Purchase</td>
                      <td className="border border-gray-300 px-4 py-2">5000 test-drives, 2000 pre-orders</td>
                      <td className="border border-gray-300 px-4 py-2">10%</td>
                      <td className="border border-gray-300 px-4 py-2">Always-on, retarget Wk 5-6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Content & Flight Calendar */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  6-Week Content & Flight Calendar
                </span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 rounded-full p-3">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-300">Week 1 – Hero Launch</h4>
                    <p className="text-gray-300">Paid Reels & Shorts + OOH domination; landing page live.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-300">Week 2 – AR Hunt Kick-off</h4>
                    <p className="text-gray-300">IG Stories clues; paid reach reminder.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 rounded-full p-3">
                    <span className="text-2xl">✖️</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-300">Week 3 – Influence & Banner Push</h4>
                    <p className="text-gray-300">5 lifestyle creators drop vlogs; announce Banner Bonus across channels.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 rounded-full p-3">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-orange-300">Week 4 – UGC Spotlight</h4>
                    <p className="text-gray-300">Reshare best Hunt videos & banner pics; 'Hall of Fame' carousel; earned PR pitch.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 rounded-full p-3">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-300">Week 5 – Booking Surge</h4>
                    <p className="text-gray-300">Retarget site visitors with dynamic ads; email countdown 'Last chance for 5% off'.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-500 rounded-full p-3">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-300">Week 6 – Pre-Order Finale</h4>
                    <p className="text-gray-300">Live Q&A Reel with product lead; final 48-hour flash ad; influencers post follow-up stories.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Evaluation & Conclusion */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Campaign Evaluation & Conclusion
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-4">60%</div>
                  <h4 className="text-xl font-bold mb-2 text-blue-300">Aided Recall</h4>
                  <p className="text-gray-300">Awareness KPI target</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-400 mb-4">1.2%</div>
                  <h4 className="text-xl font-bold mb-2 text-green-300">CTR</h4>
                  <p className="text-gray-300">Engagement minimum target</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-purple-400 mb-4">3500</div>
                  <h4 className="text-xl font-bold mb-2 text-purple-300">AR Users</h4>
                  <p className="text-gray-300">Engagement activity target</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-pink-400 mb-4">2000</div>
                  <h4 className="text-xl font-bold mb-2 text-pink-300">Pre-orders</h4>
                  <p className="text-gray-300">Conversion ultimate goal</p>
                </div>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Weekly Optimisation:</h4>
                <p className="text-gray-300">Dashboard-driven media allocation (Rigby et al., 2018)</p>
              </div>
              
              <div className="bg-slate-600 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-green-300">Conclusion:</h4>
                <p className="text-gray-300">This campaign fuses robust theory with playful creativity to move urban professionals seamlessly from awareness to purchase. Microlino empowers them to <span className="font-bold text-white">"Half the Space, Twice the Life."</span> Thank you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicrolinoCampaign;
