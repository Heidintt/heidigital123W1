import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from "@/components/ui/carousel";

const MicrolinoCampaign = () => {
  return (
    <Layout>
      <Hero
        title="Microlino 2026 Launch Campaign"
        subtitle="Integrated Marketing Communications Campaign for Microlino's 2026 Australian Launch"
        backgroundImage="https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Campaign Overview"
            subtitle="An innovative marketing strategy for Microlino's Australian market entry"
            centered
          />

          <div className="mt-10 max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {/* Slide 1: Title Slide */}
                <CarouselItem>
                  <div className="bg-gradient-to-r from-heisocial-blue to-heisocial-purple h-[500px] rounded-lg overflow-hidden relative flex flex-col justify-center p-10">
                    <img 
                      src="https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Microlino in urban setting" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <div className="relative z-10 text-white text-center">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">Microlino 2026 Launch Campaign</h2>
                      <div className="text-xl md:text-2xl mb-8">Heisocial Communications</div>
                      <div className="text-lg md:text-xl">Presenter: Senior Strategist</div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 2: Campaign Rationale */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Campaign Rationale</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center">
                        <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-heisocial-blue text-3xl">💰</span>
                        </div>
                        <p className="font-medium">High EV Purchase Prices</p>
                        <p className="text-sm text-gray-600">Average EV cost premium ~15% vs ICE vehicles</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-heisocial-blue text-3xl">🔋</span>
                        </div>
                        <p className="font-medium">Range Anxiety in Cities</p>
                        <p className="text-sm text-gray-600">34% cite limited urban range as barrier</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-heisocial-blue text-3xl">🅿️</span>
                        </div>
                        <p className="font-medium">Urban Parking Challenges</p>
                        <p className="text-sm text-gray-600">&lt;1 parking spot per vehicle in CBDs</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-heisocial-blue text-3xl">🚗</span>
                        </div>
                        <p className="font-medium">Microlino Solution</p>
                        <p className="text-sm text-gray-600">Sub-AUD 40,000; 230 km city range</p>
                      </div>
                    </div>
                    <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                      <p className="text-heisocial-purple text-center">Microlino: Affordable EV with great range that charges from any 240V outlet</p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 3: Campaign Objectives */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Campaign Objectives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Awareness (Cognitive)</h4>
                        <p className="text-gray-700">Reach 60% aided recall in 25–35 yr urban professionals within 3 months</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Engagement (Affective)</h4>
                        <p className="text-gray-700">Generate 500 qualified test-drive bookings via microsite sign-up</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Conversion (Conative)</h4>
                        <p className="text-gray-700">Achieve 200 paid pre-order reservations by end of launch quarter</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-bold mb-2">Framework: Hierarchy of Effects</h4>
                      <div className="relative h-16">
                        <div className="absolute inset-x-0 h-6 bg-gradient-to-r from-heisocial-blue to-heisocial-purple rounded-full"></div>
                        <div className="absolute inset-0 flex justify-between items-center px-4 text-white text-sm">
                          <span>Awareness</span>
                          <span>Knowledge</span>
                          <span>Liking</span>
                          <span>Preference</span>
                          <span>Conviction</span>
                          <span>Purchase</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 4: Theoretical Framework */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Theoretical Framework</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Hierarchy of Effects</h4>
                        <p className="text-gray-700 mb-4">Guides sequential communication goals—from building awareness to driving purchase behavior</p>
                        <div className="relative h-48 bg-white rounded p-2 border border-gray-200">
                          <div className="absolute inset-x-0 top-0 h-8 bg-heisocial-blue text-white flex items-center justify-center rounded-t">Awareness</div>
                          <div className="absolute inset-x-0 top-8 h-8 bg-heisocial-blue/90 text-white flex items-center justify-center">Knowledge</div>
                          <div className="absolute inset-x-0 top-16 h-8 bg-heisocial-blue/80 text-white flex items-center justify-center">Liking</div>
                          <div className="absolute inset-x-0 top-24 h-8 bg-heisocial-blue/70 text-white flex items-center justify-center">Preference</div>
                          <div className="absolute inset-x-0 top-32 h-8 bg-heisocial-blue/60 text-white flex items-center justify-center">Conviction</div>
                          <div className="absolute inset-x-0 top-40 h-8 bg-heisocial-blue/50 text-white flex items-center justify-center rounded-b">Purchase</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Tri-Component Attitude Model</h4>
                        <ul className="space-y-4 mt-4">
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-heisocial-blue text-white flex items-center justify-center mr-3">C</div>
                            <div>
                              <p className="font-medium">Cognitive</p>
                              <p className="text-sm text-gray-600">Beliefs about price/range</p>
                            </div>
                          </li>
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-heisocial-purple text-white flex items-center justify-center mr-3">A</div>
                            <div>
                              <p className="font-medium">Affective</p>
                              <p className="text-sm text-gray-600">Emotional response (fun, pride)</p>
                            </div>
                          </li>
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">B</div>
                            <div>
                              <p className="font-medium">Behavioral</p>
                              <p className="text-sm text-gray-600">Intent to test-drive/purchase</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 5: Long-Term Brand Equity */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Long-Term Brand Equity</h3>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Tagline:</h4>
                      <div className="bg-heisocial-purple/10 p-4 rounded-lg text-center">
                        <p className="text-xl text-heisocial-purple font-bold">"Big Fun, Tiny Footprint"</p>
                        <p className="text-gray-600 mt-1">captures playfulness and eco-credentials</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Brand Associations:</h4>
                      {/* Triangle visualization based on the provided image */}
                      <div className="relative w-full max-w-[300px] mx-auto h-[280px]">
                        {/* Center triangle background */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-0 w-0 border-l-[150px] border-r-[150px] border-b-[260px] border-l-transparent border-r-transparent border-b-blue-100/60"></div>
                        
                        {/* Joy - Top */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center">
                          <div className="bg-white rounded-full p-3 shadow-lg mb-2">
                            <p className="font-bold text-xl text-heisocial-purple">Joy</p>
                            <p className="text-sm text-gray-600">delightful experience</p>
                          </div>
                        </div>
                        
                        {/* Sustainability - Right */}
                        <div className="absolute top-1/3 right-0 transform translate-x-1/4 text-center">
                          <div className="bg-white rounded-full p-3 shadow-lg">
                            <p className="font-bold text-xl text-green-500">Sustainability</p>
                            <p className="text-sm text-gray-600">zero emissions</p>
                          </div>
                        </div>
                        
                        {/* Affordability - Left */}
                        <div className="absolute top-1/3 left-0 transform -translate-x-1/4 text-center">
                          <div className="bg-white rounded-full p-3 shadow-lg">
                            <p className="font-bold text-xl text-heisocial-blue">Affordability</p>
                            <p className="text-sm text-gray-600">value for money</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <p className="font-medium">Loyalty: Consistent messaging builds emotional bonds → repeat purchase & advocacy (Keller, 1993)</p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 6: Creative Strategy Overview */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-8">Creative Strategy Overview</h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <div className="h-16 w-16 bg-heisocial-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">👥</span>
                        </div>
                        <h4 className="font-semibold mb-2">Target Audience Segmentation</h4>
                        <p className="text-sm text-gray-600">Urban professionals seeking eco-friendly transportation solutions</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <div className="h-16 w-16 bg-heisocial-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">💡</span>
                        </div>
                        <h4 className="font-semibold mb-2">Big Idea & Message Appeals</h4>
                        <p className="text-sm text-gray-600">"Big Fun, Tiny Footprint" - emotional & rational appeals</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <div className="h-16 w-16 bg-heisocial-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🎬</span>
                        </div>
                        <h4 className="font-semibold mb-2">Storyboard Sequence</h4>
                        <p className="text-sm text-gray-600">Visual narrative showcasing pain points & solutions</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <div className="h-16 w-16 bg-heisocial-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">📱</span>
                        </div>
                        <h4 className="font-semibold mb-2">AR Viral Activation</h4>
                        <p className="text-sm text-gray-600">Tiny EV Hunt - interactive AR experience</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 7: Tiny EV Hunt Overview */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-blue-600 mb-8">Tiny EV Hunt Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[380px]">
                      <div className="flex flex-col justify-center space-y-8">
                        <div className="flex items-start">
                          <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-3xl">📱</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xl mb-2">AR geocaching experience</h4>
                            <p className="text-gray-600">Users hunt for virtual Microlinos placed throughout city centers</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-3xl">📍</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xl mb-2">50 curated hotspots</h4>
                            <p className="text-gray-600">Strategic locations highlighting city parking challenges</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-3xl">🔍</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xl mb-2">Daily Instagram Story clues</h4>
                            <p className="text-gray-600">Social engagement driving participation and virality</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* Phone mockup */}
                          <div className="w-[280px] h-[550px] bg-black rounded-[36px] p-3 shadow-xl">
                            {/* Phone screen */}
                            <div className="w-full h-full bg-gray-100 rounded-[28px] overflow-hidden relative">
                              {/* AR screen content */}
                              <img 
                                src="public/lovable-uploads/ca187ee0-4c02-419d-9075-fd4eb38aab32.png" 
                                alt="AR Microlino overlay on cyclists" 
                                className="w-full h-full object-cover"
                              />
                              {/* AR UI elements */}
                              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full">
                                <div className="h-8 w-8 flex items-center justify-center">
                                  <span className="text-lg">🔍</span>
                                </div>
                              </div>
                              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800">
                                  Found 1 of 50 Microlinos!
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 8: Key Consumer Insight */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10 relative">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Key Consumer Insight</h3>
                    
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1517649763947-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt="Urban backdrop with Microlino" 
                        className="w-full h-[300px] object-cover rounded-lg opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-lg">
                          <div className="flex mb-3">
                            <div className="h-8 w-8 bg-heisocial-purple rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white text-lg">💬</span>
                            </div>
                            <p className="italic text-lg font-medium">
                              "I want an eco-friendly, stylish car that fits my city lifestyle, reflects my values, and won't blow my budget or my parking space."
                            </p>
                          </div>
                          <div className="h-px bg-gray-200 my-4"></div>
                          <p className="text-gray-700">
                            <span className="font-bold">Interpretation:</span> Addresses consumers' cognitive need for affordability, affective desire for style/fun, and behavioral readiness for action.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 9: Big Idea & Core Message */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Big Idea & Core Message</h3>
                    
                    <div className="text-center mb-6">
                      <div className="bg-heisocial-purple/10 inline-block px-6 py-3 rounded-full">
                        <h4 className="text-xl text-heisocial-purple font-bold">
                          "Big Fun, Tiny Footprint"
                        </h4>
                      </div>
                      <p className="mt-2 text-gray-600">as unifying creative concept</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3">Emotional Appeal</h4>
                        <div className="flex items-center">
                          <img 
                            src="https://images.unsplash.com/photo-1499476201947-8c73b4e0b76a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                            alt="Laughing driver" 
                            className="w-20 h-20 object-cover rounded-full mr-4"
                          />
                          <p>Relieves city driving frustration with humor and delight</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3">Rational Appeal</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-white p-2 rounded-lg">
                            <span className="font-medium">Price:</span>
                            <span className="text-heisocial-blue font-bold">sub-AUD 40,000</span>
                          </div>
                          <div className="flex items-center justify-between bg-white p-2 rounded-lg">
                            <span className="font-medium">Range:</span>
                            <span className="text-heisocial-blue font-bold">230 km</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 10: Storyboard Panel 1 */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Storyboard Panel 1</h3>
                    
                    <div className="max-w-lg mx-auto">
                      <div className="border-4 border-gray-300 p-2 rounded-lg mb-6">
                        <div className="bg-gray-200 p-2 rounded mb-2">
                          <p className="text-xs text-gray-500">SCENE 1</p>
                        </div>
                        <div className="h-[280px] bg-gray-100 rounded flex items-center justify-center mb-2">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🚙</div>
                            <p className="text-gray-600">SUV driver circles block for parking</p>
                            <p className="text-gray-600">Facial close-up shows stress</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Goal:</h4>
                        <p>Establish relatable problem and grab attention (Awareness stage)</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 11: Storyboard Panel 2 */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Storyboard Panel 2</h3>
                    
                    <div className="max-w-lg mx-auto">
                      <div className="border-4 border-gray-300 p-2 rounded-lg mb-6">
                        <div className="bg-gray-200 p-2 rounded mb-2">
                          <p className="text-xs text-gray-500">SCENE 2</p>
                        </div>
                        <div className="h-[280px] bg-gray-100 rounded flex items-center justify-center mb-2">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🚗</div>
                            <p className="text-gray-600">Cut to Microlino effortlessly sliding into half-size spot</p>
                            <p className="text-gray-600">Driver smiles broadly</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Goal:</h4>
                        <p>Demonstrate solution benefit and evoke positive emotion (Knowledge/Liking)</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 12: Storyboard Panels 3 & 4 */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Storyboard Panels 3 & 4</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="border-4 border-gray-300 p-2 rounded-lg mb-4">
                          <div className="bg-gray-200 p-2 rounded mb-2">
                            <p className="text-xs text-gray-500">SCENE 3</p>
                          </div>
                          <div className="h-[200px] bg-gray-100 rounded flex items-center justify-center mb-2">
                            <div className="text-center p-4">
                              <p className="text-xl font-bold text-heisocial-blue">"Big Fun, Tiny Footprint"</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-heisocial-lightpurple p-3 rounded-lg text-sm">
                          <p><span className="font-bold">Goal:</span> Preference building</p>
                        </div>
                      </div>

                      <div>
                        <div className="border-4 border-gray-300 p-2 rounded-lg mb-4">
                          <div className="bg-gray-200 p-2 rounded mb-2">
                            <p className="text-xs text-gray-500">SCENE 4</p>
                          </div>
                          <div className="h-[200px] bg-gray-100 rounded flex items-center justify-center mb-2">
                            <div className="text-center p-4">
                              <p className="text-lg font-medium text-gray-800">Book your free test-drive at</p>
                              <p className="text-xl font-bold text-heisocial-blue">microlino.com.au</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-heisocial-lightpurple p-3 rounded-lg text-sm">
                          <p><span className="font-bold">Goal:</span> Conviction → Action</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 13: Creative Rationale */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Creative Rationale</h3>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3">Humor + Benefits</h4>
                        <p>Engages emotionally and informs rationally</p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3">Model Alignment</h4>
                        <p className="mb-4">Storyboard maps to Hierarchy of Effects & Tri-Component stages</p>
                        
                        <div className="bg-white p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-heisocial-blue text-white flex items-center justify-center text-xs">1</div>
                            <p><span className="font-medium">Scene 1 (Parking Problem)</span> → Awareness → Cognitive</p>
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-heisocial-blue text-white flex items-center justify-center text-xs">2</div>
                            <p><span className="font-medium">Scene 2 (Solution)</span> → Knowledge/Liking → Cognitive/Affective</p>
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-heisocial-blue text-white flex items-center justify-center text-xs">3</div>
                            <p><span className="font-medium">Scene 3 (Tagline)</span> → Preference → Affective</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-heisocial-blue text-white flex items-center justify-center text-xs">4</div>
                            <p><span className="font-medium">Scene 4 (CTA)</span> → Conviction/Purchase → Behavioral</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 14: Media Strategy Overview */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Media Strategy Overview</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-heisocial-blue/10 p-4 rounded-lg text-center">
                        <div className="h-12 w-12 bg-heisocial-blue rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">📈</span>
                        </div>
                        <h4 className="font-semibold mb-1">Requirements</h4>
                        <p className="text-xs">Reach, frequency, creative flexibility</p>
                      </div>
                      <div className="bg-heisocial-blue/10 p-4 rounded-lg text-center">
                        <div className="h-12 w-12 bg-heisocial-blue rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">🔄</span>
                        </div>
                        <h4 className="font-semibold mb-1">Channel Mix</h4>
                        <p className="text-xs">Paid, Earned, Shared, Owned</p>
                      </div>
                      <div className="bg-heisocial-blue/10 p-4 rounded-lg text-center">
                        <div className="h-12 w-12 bg-heisocial-blue rounded-full flex items-center justify-center mx-auto mb-3
