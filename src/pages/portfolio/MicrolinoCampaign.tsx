
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
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10 flex flex-col justify-between">
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
                      <div className="relative h-[200px] w-[200px] mx-auto">
                        {/* Pyramid visualization */}
                        <div className="absolute bottom-0 left-0 right-0 h-0 w-0 border-l-[100px] border-r-[100px] border-b-[173.2px] border-l-transparent border-r-transparent border-b-heisocial-blue/20 flex items-center justify-center">
                          <div className="absolute top-[100px] text-center w-full">
                            <div className="bg-white/80 rounded-lg p-2">
                              <p className="font-bold">Affordability</p>
                              <p className="text-xs">value for money</p>
                            </div>
                          </div>
                          <div className="absolute top-[60px] left-[-20px] text-center">
                            <div className="bg-white/80 rounded-lg p-2">
                              <p className="font-bold">Sustainability</p>
                              <p className="text-xs">zero emissions</p>
                            </div>
                          </div>
                          <div className="absolute top-[60px] right-[-20px] text-center">
                            <div className="bg-white/80 rounded-lg p-2">
                              <p className="font-bold">Joy</p>
                              <p className="text-xs">delightful experience</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
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

                {/* Slide 7: Target Audience Segmentation */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Target Audience Segmentation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <h4 className="font-bold mb-1">Geographic</h4>
                          <p className="text-gray-700">CBDs & inner suburbs of Sydney/Melbourne—high density, limited parking</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold mb-1">Demographic</h4>
                          <p className="text-gray-700">Professionals aged 25–35; annual income AUD 60–90K; singles/couples</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <h4 className="font-bold mb-1">Psychographic</h4>
                          <p className="text-gray-700">Eco-aware, design-savvy, early tech adopters, value experience over status</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold mb-1">Behavioral</h4>
                          <p className="text-gray-700">Frequent short-distance trips (&lt;35 km/day), heavy mobile/social media use, price sensitive</p>
                        </div>
                      </div>
                    </div>

                    {/* Persona visualization */}
                    <div className="mt-6 flex items-center justify-center">
                      <div className="flex items-center bg-heisocial-lightpurple p-4 rounded-lg max-w-md">
                        <div className="h-16 w-16 bg-heisocial-purple rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-2xl">👨‍💼</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Urban Professional</h4>
                          <p className="text-sm">30 years old, earns AUD 75K, commutes 20km daily, environmentally conscious, tech-savvy</p>
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
                        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
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
                        <div className="h-12 w-12 bg-heisocial-blue rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">🕒</span>
                        </div>
                        <h4 className="font-semibold mb-1">Schedule</h4>
                        <p className="text-xs">Timing, bursts</p>
                      </div>
                      <div className="bg-heisocial-blue/10 p-4 rounded-lg text-center">
                        <div className="h-12 w-12 bg-heisocial-blue rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">🧩</span>
                        </div>
                        <h4 className="font-semibold mb-1">Rationale</h4>
                        <p className="text-xs">Strategic integration</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <img 
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt="Media mix visualization" 
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 15: Media Requirements & Audience Habits */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Media Requirements & Audience Habits</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Reach</h4>
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-heisocial-blue rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-lg">75%</span>
                          </div>
                          <p>of target in CBDs (Moriarty et al., 2014)</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Frequency</h4>
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-heisocial-blue rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-lg">3×</span>
                          </div>
                          <p>exposures minimum to ensure recall</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-bold mb-3">Habits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-heisocial-blue mr-2">▶️</span>
                          <p>Evening mobile video consumption peaks (5–8 pm)</p>
                        </li>
                        <li className="flex items-center">
                          <span className="text-heisocial-blue mr-2">▶️</span>
                          <p>Daily foot traffic at transit hubs</p>
                        </li>
                        <li className="flex items-center">
                          <span className="text-heisocial-blue mr-2">▶️</span>
                          <p>Familiarity with AR filters on Instagram</p>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                      <p className="font-medium text-center text-heisocial-purple">
                        Strategy: Target high mobile usage periods and transit locations where pain points are most relevant
                      </p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 16: Media Mix (Paid & Owned) */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Media Mix (Paid & Owned)</h3>
                    
                    <div className="overflow-auto">
                      <table className="min-w-full bg-white border border-gray-200 mb-4">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Channel</th>
                            <th className="py-2 px-4 border-b text-left">Format</th>
                            <th className="py-2 px-4 border-b text-left">Timing</th>
                            <th className="py-2 px-4 border-b text-left">KPI</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Digital Video Ads</td>
                            <td className="py-2 px-4 border-b">15″ Instagram Reels, TikTok, YouTube Shorts</td>
                            <td className="py-2 px-4 border-b">5–8 pm Tues–Sun (4 wk)</td>
                            <td className="py-2 px-4 border-b">1.5M impressions; CTR {`>`} 1.2%</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">OOH Advertising</td>
                            <td className="py-2 px-4 border-b">Transit shelters & bike-share hubs</td>
                            <td className="py-2 px-4 border-b">24/7, 4 wk</td>
                            <td className="py-2 px-4 border-b">500K weekly impressions</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Website & Social</td>
                            <td className="py-2 px-4 border-b">Cost-savings calculator, blog posts, booking portal</td>
                            <td className="py-2 px-4 border-b">Continuous</td>
                            <td className="py-2 px-4 border-b">1,000 test-drive leads</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🚌</span>
                      </div>
                      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💻</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 17: Media Mix (Earned & Shared) */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Media Mix (Earned & Shared)</h3>
                    
                    <div className="overflow-auto">
                      <table className="min-w-full bg-white border border-gray-200 mb-4">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Channel</th>
                            <th className="py-2 px-4 border-b text-left">Format</th>
                            <th className="py-2 px-4 border-b text-left">Timing</th>
                            <th className="py-2 px-4 border-b text-left">KPI</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Micro-Influencer Vlogs</td>
                            <td className="py-2 px-4 border-b">1-min authentic test-drive reviews</td>
                            <td className="py-2 px-4 border-b">Weeks 1–4</td>
                            <td className="py-2 px-4 border-b">5 influencers → 250K views</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Tiny EV Hunt (AR)</td>
                            <td className="py-2 px-4 border-b">Instagram geocaching lens</td>
                            <td className="py-2 px-4 border-b">Daily (7 days)</td>
                            <td className="py-2 px-4 border-b">1,000+ participants; 200+ UGC posts</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-3">Instagram AR Lens</h4>
                        <div className="bg-gray-200 h-[120px] rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <span className="text-3xl">📱</span>
                            <p className="text-sm mt-1">AR Geocaching Experience</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-3">Influencer Partners</h4>
                        <div className="flex flex-wrap gap-2">
                          <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full"></div>
                          <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full"></div>
                          <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full"></div>
                          <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full"></div>
                          <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 18: Media Rationale */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Media Rationale</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">PESO Integration:</h4>
                      <p className="mb-4">Synchronizes paid, earned, shared, owned media for maximum impact (Breakenridge, 2012)</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        <div className="bg-blue-100 p-3 rounded-lg text-center">
                          <p className="font-bold text-blue-700 mb-1">Paid</p>
                          <p className="text-xs text-blue-600">Digital & OOH</p>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg text-center">
                          <p className="font-bold text-green-700 mb-1">Earned</p>
                          <p className="text-xs text-green-600">Influencer Content</p>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded-lg text-center">
                          <p className="font-bold text-yellow-700 mb-1">Shared</p>
                          <p className="text-xs text-yellow-600">AR Hunt & UGC</p>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-lg text-center">
                          <p className="font-bold text-purple-700 mb-1">Owned</p>
                          <p className="text-xs text-purple-600">Website & Social</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Channel Alignment:</h4>
                      <p className="mb-3">Each media fulfills specific Hierarchy stage:</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2">P</div>
                          <p className="text-sm">Paid → Awareness/Knowledge</p>
                        </div>
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-2">E</div>
                          <p className="text-sm">Earned → Liking/Preference</p>
                        </div>
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mr-2">S</div>
                          <p className="text-sm">Shared → Conviction/Desire</p>
                        </div>
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-2">O</div>
                          <p className="text-sm">Owned → Action/Retention</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 19: Campaign Evaluation */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Campaign Evaluation</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-3">A/B Testing:</h4>
                        <p>Humor-focused vs Benefit-focused video variants (Weeks 1–2)</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-3">Optimization:</h4>
                        <p>Weekly performance dashboards; agile budget reallocations (Rigby, Sutherland, & Noble, 2018)</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold mb-3">KPIs:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-heisocial-blue/10 p-3 rounded-lg">
                          <p className="font-semibold mb-1">Awareness:</p>
                          <p className="text-sm">+60% aided recall (pre/post surveys)</p>
                        </div>
                        <div className="bg-heisocial-blue/10 p-3 rounded-lg">
                          <p className="font-semibold mb-1">Engagement:</p>
                          <p className="text-sm">CTR {`>`} 1.2%; 2,000 OOH QR scans; 1,000+ AR Hunt entries</p>
                        </div>
                        <div className="bg-heisocial-blue/10 p-3 rounded-lg">
                          <p className="font-semibold mb-1">Conversion:</p>
                          <p className="text-sm">500 test-drive bookings; 200 pre-orders</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-200 h-[140px] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl">📊</span>
                        <p className="text-sm mt-1">Mock Dashboard Visualization</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 20: Conclusion & Theoretical Tie-In */}
                <CarouselItem>
                  <div className="bg-white h-[500px] rounded-lg shadow-lg p-10">
                    <h3 className="text-3xl font-bold text-heisocial-blue mb-6">Conclusion & Theoretical Tie-In</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-heisocial-blue text-xl">1</span>
                        </div>
                        <div>
                          <p className="font-bold">Hierarchy of Effects</p>
                          <p className="text-gray-600">→ Structured message journey</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-heisocial-blue text-xl">2</span>
                        </div>
                        <div>
                          <p className="font-bold">Tri-Component Model</p>
                          <p className="text-gray-600">→ Cognitive, Affective, Behavioral alignment</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-heisocial-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-heisocial-blue text-xl">3</span>
                        </div>
                        <div>
                          <p className="font-bold">"Big Fun, Tiny Footprint"</p>
                          <p className="text-gray-600">→ Enduring brand equity (Keller, 1993)</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-heisocial-blue to-heisocial-purple rounded-lg text-white text-center">
                      <p className="text-xl font-bold mb-2">Microlino: The go-to urban micro-EV</p>
                      <p>combining affordability, sustainability, and joy.</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <div className="flex items-center justify-between mt-4">
                <CarouselPrevious />
                <CarouselDots className="flex-1" />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicrolinoCampaign;
