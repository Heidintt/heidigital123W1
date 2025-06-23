
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const MicrolinoStrategy = () => {
  return (
    <Layout>
      <Hero
        title="Microlino 2026 Australian Launch Campaign"
        subtitle="Strategic Marketing Communications Campaign - 'Half the Space, Twice the Life'"
        backgroundImage="/lovable-uploads/4122d0a9-afef-4722-8fc3-da6801946f64.png"
      />

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
                  <p className="text-gray-300 mb-4">Australia's EV adoption is hindered by three main factors:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• High upfront cost</li>
                    <li>• Range anxiety in urban environments</li>
                    <li>• Scarcity of city parking (CPRC, 2023)</li>
                  </ul>
                </div>

                {/* Microlino's Response */}
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-300">Microlino's Response</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Price < AUD 40,000 (Ricker, 2024)</li>
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
                    <p className="text-sm text-gray-300">Reinforce "Half the Space, Twice the Life" consistently across all touch-points</p>
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
                      <p className="text-sm text-gray-300 italic">"I want an eco-friendly, stylish car that fits my city lifestyle without costing a fortune—or a parking battle."</p>
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
                  <p className="text-2xl font-bold text-white">"Microlino: Leading the charge"</p>
                  <p className="text-sm text-gray-300 mt-2">Drive the future, today.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default MicrolinoStrategy;
