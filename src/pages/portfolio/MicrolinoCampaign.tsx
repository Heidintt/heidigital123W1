
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
        backgroundImage="/lovable-uploads/895ec4fd-4907-4454-822d-b5a1f565408c.png"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Title Slide */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg overflow-hidden relative p-10 min-h-[400px] flex flex-col justify-center">
              <img 
                src="/lovable-uploads/895ec4fd-4907-4454-822d-b5a1f565408c.png" 
                alt="Microlino 2026 Australian Launch" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  Microlino 2026 Australian Launch Campaign
                </h2>
                <div className="text-xl md:text-2xl mb-4">Campaign: Microlino 2026 Australian Launch</div>
                <div className="text-xl md:text-2xl mb-4">Agency: Heisocial Communications</div>
                <div className="text-lg md:text-xl">Presenter: Thi Thu Huong Nguyen</div>
              </div>
            </div>
          </div>

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
                    <li>• Price < AUD 40,000 (Ricker, 2024)</li>
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

          {/* User Persona */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  User Persona
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 text-white p-6 rounded-lg">
                    <h4 className="text-2xl font-bold mb-4">Alex Tran</h4>
                    <div className="space-y-2">
                      <p><span className="font-medium">Age:</span> 29</p>
                      <p><span className="font-medium">Occupation:</span> UX Designer at a fintech startup</p>
                      <p><span className="font-medium">Income:</span> AUD 82,000/year</p>
                      <p><span className="font-medium">Location:</span> Inner-city Melbourne</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-600 text-white p-6 rounded-lg">
                    <h5 className="font-bold mb-3">Goals</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Reduce carbon footprint</li>
                      <li>• Stand out with a unique car</li>
                      <li>• Avoid parking stress</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-500 text-white p-6 rounded-lg">
                    <h5 className="font-bold mb-3">Pain Points</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• High EV prices</li>
                      <li>• Lack of charging options</li>
                      <li>• City parking frustration</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-400 text-white p-6 rounded-lg">
                    <h5 className="font-bold mb-3">Digital Presence</h5>
                    <p className="text-sm mb-2">Preferred Platforms: Instagram, YouTube, TikTok</p>
                    <p className="text-sm italic">"I want an eco-friendly, stylish car that fits my city lifestyle without costing a fortune—or a parking battle."</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Alex Tran - User Persona" 
                    className="w-full max-w-md h-auto rounded-lg shadow-lg"
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

          {/* Campaign Implementation */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Campaign Implementation
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-blue-600">
                      <span className="mr-3">⭐</span> Awareness Phase
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Digital billboards in CBD areas</li>
                      <li>• Instagram and TikTok campaigns</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-yellow-600">
                      <span className="mr-3">🎯</span> Interest Phase
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• YouTube product demonstrations</li>
                      <li>• Influencer partnerships</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-xl font-bold mb-4 flex items-center text-green-600">
                      <span className="mr-3">📍</span> Action Phase
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pop-up test drive events in Sydney and Melbourne</li>
                      <li>• Online pre-order platform with special launch incentives</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/3d47b2ad-06d3-4331-bf76-5c2b56c7e26e.png" 
                    alt="Campaign Implementation visualization" 
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-4">60%</div>
                  <h4 className="text-xl font-bold mb-2 text-blue-300">Aided Recall</h4>
                  <p className="text-gray-300">Among target demographic of 25-35 year old urban professionals</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-400 mb-4">5000</div>
                  <h4 className="text-xl font-bold mb-2 text-green-300">Test Drives</h4>
                  <p className="text-gray-300">Bookings through campaign channels</p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-purple-400 mb-4">2000</div>
                  <h4 className="text-xl font-bold mb-2 text-purple-300">Pre-orders</h4>
                  <p className="text-gray-300">Direct conversions from the campaign</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 inline-block px-8 py-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-2">Microlino: Leading the charge</h4>
                  <p className="text-lg">Drive the future, today.</p>
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
