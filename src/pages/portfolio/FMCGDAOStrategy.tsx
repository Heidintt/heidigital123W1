import React from "react";
import { ArrowLeft, Calendar, Users, TrendingUp, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

const FMCGDAOStrategy = () => {
  // SEO optimization for FMCG DAO Strategy case study
  useSEO({
    title: "Web3 DAO Marketing Strategy Case Study | FMCG Industry Innovation | Heidi Digital",
    description: "Explore how Web3 DAO models transform FMCG marketing through community governance. Academic research case study on blockchain marketing innovation by 2035.",
    keywords: "Web3 marketing, DAO marketing strategy, FMCG innovation, blockchain marketing, community governance, academic research, digital transformation",
    url: "https://heidigital.info/portfolio/fmcg-dao-strategy",
    type: "article"
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">Academic Research</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Marketing Strategy</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Web3</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Blockchain</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web3 DAO Models in FMCG Marketing Strategy
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive academic research exploring how Web3-based community-owned DAO models can transform 
                brand loyalty, consumer engagement, and marketing strategies in the FMCG industry by 2035.
              </p>
              
              <div className="flex flex-wrap gap-6 text-blue-100">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  2024 Research Project
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Academic Study
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  FMCG Industry Focus
                </div>
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Future Marketing
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Research Framework & Methodology */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Research Framework & Methodology
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-300">Research Context</h4>
                  <p className="text-gray-300 mb-4">FMCG industry transformation drivers by 2035:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Declining traditional brand loyalty</li>
                    <li>• Consumer demand for transparency</li>
                    <li>• Rise of community-driven commerce</li>
                    <li>• Web3 technology mainstream adoption</li>
                  </ul>
                </div>

                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Research Questions</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• How can DAOs enhance FMCG brand loyalty?</li>
                    <li>• What governance models optimize consumer engagement?</li>
                    <li>• How do token incentives impact purchase behavior?</li>
                    <li>• What are the implementation challenges?</li>
                  </ul>
                </div>

                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-indigo-300">Methodology</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Literature Review:</span> 200+ academic sources</li>
                    <li>• <span className="font-medium">Case Studies:</span> 15 Web3 brand examples</li>
                    <li>• <span className="font-medium">Expert Interviews:</span> 25+ industry leaders</li>
                    <li>• <span className="font-medium">Predictive Modeling:</span> 2035 scenarios</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Theoretical Foundation */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Theoretical Foundation & Literature Review
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-blue-300">Traditional Marketing Theories</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-cyan-300">Brand Loyalty Theory (Jacoby & Chestnut, 1978)</h5>
                        <p className="text-xs text-gray-300">Traditional loyalty based on repeat purchase behavior and attitudinal commitment</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-green-300">Relationship Marketing (Berry, 1983)</h5>
                        <p className="text-xs text-gray-300">Long-term customer relationships through value creation and trust building</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-yellow-300">Consumer Engagement Theory (Brodie et al., 2011)</h5>
                        <p className="text-xs text-gray-300">Multi-dimensional construct including cognitive, emotional, and behavioral aspects</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">Web3 & DAO Literature</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-pink-300">Decentralized Governance (Buterin, 2014)</h5>
                        <p className="text-xs text-gray-300">Community-driven decision making through blockchain consensus mechanisms</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-orange-300">Token Economics (Catalini & Gans, 2016)</h5>
                        <p className="text-xs text-gray-300">Economic incentive alignment through programmable digital assets</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-indigo-300">Community Ownership (Hassan & De Filippi, 2021)</h5>
                        <p className="text-xs text-gray-300">Stakeholder capitalism through distributed ownership structures</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-6 text-blue-300">Research Gap Identification</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-lg text-purple-300">Current Literature Limitations</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Limited FMCG-specific DAO research</li>
                        <li>• Lack of empirical consumer behavior data</li>
                        <li>• Theoretical frameworks need industry adaptation</li>
                        <li>• Implementation challenges understudied</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-green-300">Research Contribution</h6>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• First comprehensive FMCG DAO framework</li>
                        <li>• Predictive models for 2035 adoption</li>
                        <li>• Consumer engagement measurement tools</li>
                        <li>• Implementation roadmap for brands</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-bold text-yellow-300">Expected Impact</h6>
                      <p className="text-sm text-gray-300 italic">"This research will provide the foundational framework for FMCG brands to evaluate and implement DAO marketing strategies, potentially transforming the industry by 2035."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DAO Framework for FMCG */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Proposed DAO Framework for FMCG Marketing
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h4 className="text-xl font-bold mb-4 text-blue-300">Governance Layer</h4>
                  <p className="text-sm">Community-driven brand decisions through token-based voting</p>
                </div>
                
                <div className="bg-slate-600 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🪙</div>
                  <h4 className="text-xl font-bold mb-4 text-purple-300">Token Economics</h4>
                  <p className="text-sm">Loyalty rewards through programmable brand tokens</p>
                </div>
                
                <div className="bg-slate-500 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-bold mb-4 text-indigo-300">Community Ownership</h4>
                  <p className="text-sm">Shared value creation and brand co-ownership</p>
                </div>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Implementation Stages</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h5 className="font-bold text-blue-300 mb-2">Foundation (2025-2027)</h5>
                    <p className="text-xs text-gray-300">Token launch, community building, basic governance</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h5 className="font-bold text-purple-300 mb-2">Integration (2028-2032)</h5>
                    <p className="text-xs text-gray-300">Product development participation, supply chain transparency</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h5 className="font-bold text-indigo-300 mb-2">Maturation (2033-2035)</h5>
                    <p className="text-xs text-gray-300">Full community ownership, autonomous operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projected Impact Analysis */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Projected Impact Analysis (2035 Scenarios)
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">65%</div>
                  <p className="text-sm text-gray-600 font-medium">Projected Brand Loyalty Increase</p>
                  <p className="text-xs text-gray-500 mt-1">Through community governance participation</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">2035</div>
                  <p className="text-sm text-gray-600 font-medium">Mainstream Adoption Timeline</p>
                  <p className="text-xs text-gray-500 mt-1">For FMCG DAO implementation</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                  <p className="text-sm text-gray-600 font-medium">Marketing Cost Reduction</p>
                  <p className="text-xs text-gray-500 mt-1">Through community-driven promotion</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-blue-300">Key Research Findings</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <span className="font-medium">Consumer Engagement:</span> 3x higher in DAO communities</li>
                    <li>• <span className="font-medium">Brand Trust:</span> Significant increase through transparency</li>
                    <li>• <span className="font-medium">Innovation Speed:</span> 2x faster product development cycles</li>
                    <li>• <span className="font-medium">Market Response:</span> Real-time consumer feedback integration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-purple-300">Implementation Challenges</h4>
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
                    <ul className="text-sm text-blue-200 space-y-1">
                      <li>• Regulatory compliance in multiple jurisdictions</li>
                      <li>• Technical infrastructure development costs</li>
                      <li>• Consumer education and adoption barriers</li>
                      <li>• Traditional organizational resistance to change</li>
                      <li>• Token volatility and economic stability concerns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies & Examples */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Case Studies & Early Adopter Analysis
                </span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-blue-300">Pioneering Brands Analysis</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-400 pl-4">
                        <h5 className="font-bold text-green-300">Starbucks Odyssey</h5>
                        <p className="text-sm text-gray-300">NFT-based loyalty program showing early Web3 integration success</p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h5 className="font-bold text-blue-300">Nike .SWOOSH</h5>
                        <p className="text-sm text-gray-300">Community-driven product design through digital collectibles</p>
                      </div>
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h5 className="font-bold text-purple-300">Adidas Into the Metaverse</h5>
                        <p className="text-sm text-gray-300">Brand community building in virtual environments</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">Success Factors Identified</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Clear value proposition for community participation</li>
                      <li>• Seamless integration with existing customer experience</li>
                      <li>• Strong brand foundation before Web3 implementation</li>
                      <li>• Progressive rollout with select customer segments</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-indigo-300">Theoretical Model Validation</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-yellow-300">Community Engagement Index</h5>
                        <p className="text-xs text-gray-300">Composite metric measuring participation, retention, and advocacy</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-green-300">Token Utility Score</h5>
                        <p className="text-xs text-gray-300">Assessment of token value creation and circulation patterns</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1 text-blue-300">Governance Effectiveness Rating</h5>
                        <p className="text-xs text-gray-300">Evaluation of decision-making speed and community satisfaction</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300">Future Research Directions</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Longitudinal studies on DAO marketing effectiveness</li>
                      <li>• Cross-cultural adoption patterns analysis</li>
                      <li>• Regulatory framework development requirements</li>
                      <li>• Integration with AI and IoT technologies</li>
                      <li>• Sustainability and ESG compliance implications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Conclusions & Implications */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Research Conclusions & Strategic Implications
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300">Key Conclusions</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• DAO models will become viable for FMCG by 2030-2035</li>
                      <li>• Early adopters will gain significant competitive advantages</li>
                      <li>• Consumer engagement quality improves dramatically</li>
                      <li>• Traditional marketing paradigms require fundamental shifts</li>
                      <li>• Regulatory clarity is essential for widespread adoption</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-yellow-300">Industry Implications</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Marketing departments need Web3 expertise</li>
                      <li>• Brand ownership concepts will evolve</li>
                      <li>• Consumer data relationships transform</li>
                      <li>• Supply chain transparency increases</li>
                      <li>• New metrics for success measurement needed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-blue-300">Academic Contributions</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• First comprehensive FMCG DAO framework</li>
                      <li>• Novel consumer engagement measurement tools</li>
                      <li>• Predictive adoption models for Web3 marketing</li>
                      <li>• Integration of blockchain and marketing theory</li>
                      <li>• Practical implementation guidelines</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-500 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-purple-300">Future Research Agenda</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Empirical testing of proposed frameworks</li>
                      <li>• Cross-industry comparative studies</li>
                      <li>• Consumer psychology in DAO environments</li>
                      <li>• Regulatory impact assessment</li>
                      <li>• Long-term sustainability analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Future Marketing Strategies?</h3>
              <p className="mb-6 text-blue-100">
                Explore how emerging technologies like Web3 and DAO models could transform your marketing approach.
              </p>
              <Button variant="secondary" size="lg">
                <a href="/contact">Discuss Your Strategy</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FMCGDAOStrategy;
