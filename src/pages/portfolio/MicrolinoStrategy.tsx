import React from "react";
import Layout from "@/components/Layout";

const MicrolinoStrategy = () => {
  return (
    <Layout>
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Microlino 2026 Australian Launch Campaign
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Strategic Marketing Communications Campaign - &apos;Half the Space, Twice the Life&apos;
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Campaign Rationale & Objectives */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Campaign Rationale & Objectives
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Rationale */}
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-pink-300">Rationale</h4>
                  <p className="text-gray-300 mb-4">Australia&apos;s EV adoption is hindered by three main factors:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• High upfront cost</li>
                    <li>• Range anxiety in urban environments</li>
                    <li>• Scarcity of city parking (CPRC, 2023)</li>
                  </ul>
                </div>

                {/* Microlino's Response */}
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-300">Microlino&apos;s Response</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Price &lt; AUD 40,000 (Ricker, 2024)</li>
                    <li>• 230 km city range (Microlino, n.d.)</li>
                    <li>• Fits in half a parking spot; standard outlet charging (Microlino, n.d.)</li>
                  </ul>
                </div>

                {/* Objectives - #TwiceTheLife */}
                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Objectives - #TwiceTheLife</h4>
                  <p className="text-gray-300 mb-3">Hierarchy of Effects:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Awareness:</span> 60% aided recall (25–35 y.o. urban professionals)</li>
                    <li>• <span className="font-medium">Engagement:</span> 5000 test-drive bookings</li>
                    <li>• <span className="font-medium">Conversion:</span> 2000 pre-orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks & Strategic Foundations */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Frameworks & Strategic Foundations
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Marketing Funnel */}
                <div className="bg-slate-700 p-8 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-yellow-300 text-center">4 Marketing Funnel</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-500 p-4 rounded-lg text-center">
                      <h5 className="font-bold text-lg">1. Awareness stage</h5>
                      <p className="text-sm">Building brand recognition</p>
                    </div>
                    <div className="bg-yellow-500 p-4 rounded-lg text-center text-black">
                      <h5 className="font-bold text-lg">2. Engagement stage</h5>
                      <p className="text-sm">Creating interest and consideration</p>
                    </div>
                    <div className="bg-green-500 p-4 rounded-lg text-center">
                      <h5 className="font-bold text-lg">3. Conversion</h5>
                      <p className="text-sm">Driving purchase decisions</p>
                    </div>
                  </div>
                </div>

                {/* Strategic Models */}
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-blue-300">Hierarchy of Effects (Lavidge & Steiner, 1961)</h4>
                    <p className="text-sm text-gray-300">Guides consumer journey from awareness to purchase</p>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-indigo-300">Tri-Component Attitude Model (Ajzen & Fishbein, 1980)</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li><span className="font-medium">Cognitive:</span> Cost, Range, Parking</li>
                      <li><span className="font-medium">Affective:</span> Joy, Eco-pride</li>
                      <li><span className="font-medium">Behavioral:</span> Test-drive, Pre-order</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-green-300">Brand Equity Building (Keller, 1993)</h4>
                    <p className="text-sm text-gray-300">Reinforce &quot;Half the Space, Twice the Life&quot; consistently across all touch-points</p>
                    <p className="text-sm text-gray-300 mt-2">Build associations of affordability, sustainability, and joyful urban driving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Profile */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
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
                
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-pink-300">User Persona</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-lg text-blue-300">Alex Tran</h5>
                      <p className="text-gray-300">Age: 29</p>
                      <p className="text-gray-300">Occupation: UX Designer at a fintech startup</p>
                      <p className="text-gray-300">Income: AUD 82,000/year</p>
                      <p className="text-gray-300">Location: Inner-city Melbourne</p>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-green-300">Goals</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• Reduce carbon footprint</li>
                        <li>• Stand out with a unique car</li>
                        <li>• Avoid parking stress</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-red-300">Pain Points</h6>
                      <ul className="text-sm text-gray-300">
                        <li>• High EV prices</li>
                        <li>• Lack of charging options</li>
                        <li>• City parking frustration</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-purple-300">Digital Presence</h6>
                      <p className="text-sm text-gray-300">Preferred Platforms: Instagram, YouTube, TikTok</p>
                      <p className="text-sm text-gray-300 italic">&quot;I want an eco-friendly, stylish car that fits my city lifestyle without costing a fortune—or a parking battle.&quot;</p>
                    </div>
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
                  <p className="text-lg font-semibold">&quot;Half the Space, Twice the Life&quot;</p>
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
                      <span className="text-2xl">🚗</span>
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
                  <p>Friends admire the vehicle&apos;s compact beauty</p>
                </div>
              </div>
              
              <div className="bg-slate-600 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Action</h4>
                <p>Owner shares test-drive link with CTA overlay</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block px-6 py-3 rounded-lg">
                  <p className="font-bold">Overlay: &quot;Half the Space, Twice the Life - Book a Test Drive at microlino.com.au&quot; CTA + Hashtag: #TwiceTheLife</p>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Implementation */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Campaign Implementation
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                      <span className="mr-3">⭐</span> Awareness Phase
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Digital billboards in CBD areas</li>
                      <li>• Instagram and TikTok campaigns</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300 flex items-center">
                      <span className="mr-3">🎯</span> Interest Phase
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• YouTube product demonstrations</li>
                      <li>• Influencer partnerships</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300 flex items-center">
                      <span className="mr-3">📍</span> Action Phase
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Pop-up test drive events in Sydney and Melbourne</li>
                      <li>• Online pre-order platform with special launch incentives</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4712d239-b2f3-444d-92fa-6b80b6eb52a0.png" 
                    alt="Campaign Implementation Visual" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Expected Outcomes
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-slate-700 p-8 rounded-lg">
                  <div className="text-6xl font-bold text-blue-400 mb-4">60%</div>
                  <h4 className="text-xl font-bold mb-2 text-blue-300">Aided Recall</h4>
                  <p className="text-gray-300">Among target demographic of 25-35 year old urban professionals</p>
                </div>
                
                <div className="bg-slate-600 p-8 rounded-lg">
                  <div className="text-6xl font-bold text-green-400 mb-4">5000</div>
                  <h4 className="text-xl font-bold mb-2 text-green-300">Test Drives</h4>
                  <p className="text-gray-300">Bookings through campaign channels</p>
                </div>
                
                <div className="bg-slate-500 p-8 rounded-lg">
                  <div className="text-6xl font-bold text-purple-400 mb-4">2000</div>
                  <h4 className="text-xl font-bold mb-2 text-purple-300">Pre-orders</h4>
                  <p className="text-gray-300">Direct conversions from the campaign</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-slate-600 p-6 rounded-lg inline-block">
                  <p className="text-lg font-bold text-yellow-300">Campaign Tagline:</p>
                  <p className="text-2xl font-bold text-white">&quot;Microlino: Leading the charge&quot;</p>
                  <p className="text-sm text-gray-300 mt-2">Drive the future, today.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Strategy Rationale */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Creative Strategy Rationale
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🎬</span>
                      </div>
                      <h4 className="text-xl font-bold text-blue-300">Storytelling triggers affective response</h4>
                    </div>
                    <p className="text-gray-300">Emotional connection through narrative structure</p>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="text-xl font-bold text-purple-300">Experiential AR = emotional memory + earned media</h4>
                    </div>
                    <p className="text-gray-300">Creating lasting impressions through interactive experiences</p>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">⚓</span>
                      </div>
                      <h4 className="text-xl font-bold text-green-300">Rational anchors reduce decision hesitation</h4>
                    </div>
                    <p className="text-gray-300">Providing logical justification for emotional decisions</p>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h4 className="text-xl font-bold text-orange-300">Creative mapped to Hierarchy of Effects and Tri-Component Model</h4>
                    </div>
                    <p className="text-gray-300">Strategic alignment with established marketing frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Media Plan - 6-Week Flight */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Integrated Media Plan – 6-Week Flight
                </span>
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="py-3 px-4 text-pink-300">Channel</th>
                      <th className="py-3 px-4 text-blue-300">PESO Role</th>
                      <th className="py-3 px-4 text-green-300">Hierarchy Stage</th>
                      <th className="py-3 px-4 text-yellow-300">KPI Target</th>
                      <th className="py-3 px-4 text-purple-300">Budget Share</th>
                      <th className="py-3 px-4 text-orange-300">Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Instagram & TikTok Reels (Paid)</td>
                      <td className="py-3 px-4">Paid</td>
                      <td className="py-3 px-4">Awareness → Engagement</td>
                      <td className="py-3 px-4">12M views, CTR ≥ 1.4%</td>
                      <td className="py-3 px-4">35%</td>
                      <td className="py-3 px-4">Daily 5-8 pm, Weeks 1-6</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">YouTube Shorts (Paid)</td>
                      <td className="py-3 px-4">Paid</td>
                      <td className="py-3 px-4">Awareness</td>
                      <td className="py-3 px-4">3M views</td>
                      <td className="py-3 px-4">10%</td>
                      <td className="py-3 px-4">Weeks 1-3 burst</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">OOH Transit Shelters</td>
                      <td className="py-3 px-4">Paid</td>
                      <td className="py-3 px-4">Awareness → Knowledge</td>
                      <td className="py-3 px-4">6M impressions</td>
                      <td className="py-3 px-4">20%</td>
                      <td className="py-3 px-4">4-week flight, 24/7</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Micro-Influencer Vlogs</td>
                      <td className="py-3 px-4">Earned</td>
                      <td className="py-3 px-4">Preference</td>
                      <td className="py-3 px-4">2.5M views, 1% swipe-up</td>
                      <td className="py-3 px-4">8% (product contra)</td>
                      <td className="py-3 px-4">Drops Wk 3 & 4</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Tiny EV Hunt (AR)</td>
                      <td className="py-3 px-4">Shared</td>
                      <td className="py-3 px-4">Engagement → Conviction</td>
                      <td className="py-3 px-4">3500 active hunters, 3000 UGC posts</td>
                      <td className="py-3 px-4">12% (dev + prizes)</td>
                      <td className="py-3 px-4">Weeks 2-4</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Banner Bonus Programme</td>
                      <td className="py-3 px-4">Shared/Owned</td>
                      <td className="py-3 px-4">Conviction → Purchase</td>
                      <td className="py-3 px-4">1000 banner sign-ups</td>
                      <td className="py-3 px-4">5%</td>
                      <td className="py-3 px-4">Launch Wk 3; active 6 mo</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Microlino.com.au & CRM</td>
                      <td className="py-3 px-4">Owned</td>
                      <td className="py-3 px-4">Purchase</td>
                      <td className="py-3 px-4">5000 test-drives, 2000 pre-orders</td>
                      <td className="py-3 px-4">10%</td>
                      <td className="py-3 px-4">Always-on, retarget Wk 5-6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 6-Week Content & Flight Calendar */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  6-Week Content & Flight Calendar
                </span>
              </h3>
              
              <div className="space-y-8">
                {/* Week 1 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-300 mb-2">Week 1 – Hero Launch</h4>
                    <p className="text-gray-300">Paid Reels & Shorts + OOH domination; landing page live.</p>
                  </div>
                </div>

                {/* Week 2 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-purple-300 mb-2">Week 2 – AR Hunt Kick-off</h4>
                    <p className="text-gray-300">IG Stories clues; paid reach reminder.</p>
                  </div>
                </div>

                {/* Week 3 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✖️</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-300 mb-2">Week 3 – Influence & Banner Push</h4>
                    <p className="text-gray-300">5 lifestyle creators drop vlogs; announce Banner Bonus across channels.</p>
                  </div>
                </div>

                {/* Week 4 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-yellow-300 mb-2">Week 4 – UGC Spotlight</h4>
                    <p className="text-gray-300">Reshare best Hunt videos & banner pics; &apos;Hall of Fame&apos; carousel; earned PR pitch.</p>
                  </div>
                </div>

                {/* Week 5 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-red-300 mb-2">Week 5 – Booking Surge</h4>
                    <p className="text-gray-300">Retarget site visitors with dynamic ads; email countdown &apos;Last chance for 5% off&apos;.</p>
                  </div>
                </div>

                {/* Week 6 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-indigo-300 mb-2">Week 6 – Pre-Order Finale</h4>
                    <p className="text-gray-300">Live Q&A Reel with product lead; final 48-hour flash ad; influencers post follow-up stories.</p>
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
                {/* Mechanics */}
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-pink-300">Mechanics</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Instagram AR filter hunt in 50 key urban spots</li>
                    <li>• Daily clues via IG Stories</li>
                    <li>• Players scan and find virtual Microlino models</li>
                  </ul>
                </div>
                
                {/* Rewards */}
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-blue-300">Rewards</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• <span className="font-medium">Top 1000:</span> VIP Test Drive + 10% pre-order discount + Swag Pack</li>
                    <li>• <span className="font-medium">Top 4000:</span> 5% discount + Swag Pack (stackable with Banner Bonus) and Test Drive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Road Banner Bonus */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Road Banner Bonus
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* New Microlino buyers */}
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-pink-300">New Microlino buyers</h4>
                  <p className="text-gray-300 mb-4">Who display a &quot;Half the Space, Twice the Life&quot; rear-window banner for <span className="font-bold">6 months</span> receive an <span className="font-bold text-green-300">extra 5% off</span>—<span className="font-style-italic">stackable with any Hunt reward earned.</span></p>
                </div>

                {/* Prospective buyers */}
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-300">Prospective buyers</h4>
                  <p className="text-gray-300">Who place the same banner on their current car for <span className="font-bold">6 months</span> earn a <span className="font-bold text-green-300">3% voucher</span> toward a future Microlino—also stackable.</p>
                </div>

                {/* Mobile Billboard */}
                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Mobile Billboard</h4>
                  <p className="text-gray-300">Each banner carries a QR code linking to the booking page, turning every participant into a mobile billboard.</p>
                </div>
              </div>
              
              <div className="bg-slate-600 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Objectives Supported:</h4>
                <p className="text-gray-300">Awareness, Engagement, Conversion, Encourages UGC and emotional bonding</p>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/1cbe524d-f771-4ed1-a266-0fd8ed35c5f9.png" 
                  alt="Road Banner Bonus Visual" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-8">
                <div className="bg-slate-700 p-8 rounded-lg">
                  <div className="text-6xl font-bold text-blue-400 mb-4">60%</div>
                  <h4 className="text-xl font-bold mb-2 text-blue-300">Aided Recall</h4>
                  <p className="text-gray-300 text-sm">Awareness KPI target</p>
                </div>
                
                <div className="bg-slate-600 p-8 rounded-lg">
                  <div className="text-6xl font-bold text-green-400 mb-4">1.2%</div>
                  <h4 className="text-xl font-bold mb-2 text-green-300">CTR</h4>
                  <p className="text-gray-300 text-sm">Engagement minimum target</p>
                </div>
                
                <div className="bg-slate-500 p-8 rounded-lg">
                  <div className="text-6xl font-bold text-purple-400 mb-4">3500</div>
                  <h4 className="text-xl font-bold mb-2 text-purple-300">AR Users</h4>
                  <p className="text-gray-300 text-sm">Engagement activity target</p>
                </div>
                
                <div className="bg-slate-400 p-8 rounded-lg">
                  <div className="text-6xl font-bold text-yellow-400 mb-4">2000</div>
                  <h4 className="text-xl font-bold mb-2 text-yellow-300">Pre-orders</h4>
                  <p className="text-gray-300 text-sm">Conversion ultimate goal</p>
                </div>
              </div>
              
              <div className="bg-slate-600 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Weekly Optimisation:</h4>
                <p className="text-gray-300">Dashboard-driven media allocation (Rigby et al., 2018)</p>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-green-300">Conclusion:</h4>
                <p className="text-gray-300 mb-4">This campaign fuses robust theory with playful creativity to move urban professionals seamlessly from awareness to purchase. Microlino empowers them to <span className="font-bold text-white">&quot;Half the Space, Twice the Life.&quot;</span> Thank you.</p>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  References
                </span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>Ajzen, I., & Fishbein, M. (1980). <em>Understanding attitudes and predicting social behavior.</em> Prentice-Hall.</p>
                
                <p>Keller, K. L. (1993). Conceptualizing, measuring, and managing customer-based brand equity. <em>Journal of Marketing</em>, 57(1), 1-22. https://doi.org/10.1177/002224299305700101</p>
                
                <p>Lavidge, R. J., & Steiner, G. A. (1961). A model for predictive measurements of advertising effectiveness. <em>Journal of Marketing</em>, 25(6), 59-62. https://doi.org/10.2307/1248516</p>
                
                <p>Mintel. (2023). <em>Australian urban consumer trends report 2023.</em> Mintel Group Ltd.</p>
                
                <p>NALSPA. (2022). <em>Australian electric-vehicle consumer insights survey.</em> National Automotive Leasing & Salary Packaging Association.</p>
                
                <p>Rigby, D. K., Sutherland, J., & Noble, A. (2018). Agile at scale. <em>Harvard Business Review</em>, 96(3), 88-96.</p>
                
                <p>Vakratsas, D., & Ambler, T. (1999). How advertising works: What do we really know? <em>Journal of Marketing</em>, 63(1), 26-43. https://doi.org/10.1177/002224299906300103</p>
                
                <p>Ricker, T. (2024, March 14). Microlino electric bubble car review: urban delight. <em>The Verge</em>. https://www.theverge.com/24093189/microlino-review-microcar-specs-price</p>
                
                <p>Microlino. (n.d.). <em>Discover the microlino.</em> https://microlino-car.com/en-us/microlino</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default MicrolinoStrategy;
