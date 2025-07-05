
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
          {/* Research Overview */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Research Overview</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                This academic research project explores the potential transformation of FMCG marketing through 
                Web3-based Decentralized Autonomous Organization (DAO) models, examining how community governance 
                and token economics could revolutionize brand loyalty and consumer engagement by 2035.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Research Problem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Traditional FMCG marketing faces declining brand loyalty and increasing demand for transparency and community involvement</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Methodology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Literature review, case study analysis, expert interviews, and predictive modeling for 2035 scenarios</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-indigo-600">Expected Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Framework for FMCG brands to evaluate and implement DAO marketing strategies for competitive advantage</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Research Questions & Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Research Questions & Framework</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Research Questions</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600">Consumer Engagement</h4>
                    <p className="text-gray-600">How can DAOs enhance FMCG brand loyalty and consumer engagement?</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-600">Governance Models</h4>
                    <p className="text-gray-600">What governance structures optimize consumer participation and brand value?</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-indigo-600">Token Economics</h4>
                    <p className="text-gray-600">How do token incentives impact purchase behavior and brand advocacy?</p>
                  </div>
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-semibold text-cyan-600">Implementation Challenges</h4>
                    <p className="text-gray-600">What are the barriers and solutions for FMCG DAO adoption?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Theoretical Framework</h3>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-4 text-blue-700">Integrated Model Approach</h4>
                  <p className="text-gray-700 mb-4">
                    Combining traditional marketing theory with blockchain technology and community governance principles 
                    to create a comprehensive framework for FMCG DAO implementation.
                  </p>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-purple-600">Core Theoretical Components:</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Brand Loyalty Theory (Jacoby & Chestnut, 1978)</li>
                      <li>• Relationship Marketing (Berry, 1983)</li>
                      <li>• Consumer Engagement Theory (Brodie et al., 2011)</li>
                      <li>• Decentralized Governance (Buterin, 2014)</li>
                      <li>• Token Economics (Catalini & Gans, 2016)</li>
                      <li>• Community Ownership Models (Hassan & De Filippi, 2021)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proposed DAO Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Proposed DAO Framework for FMCG</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-center">
                    <div className="text-4xl mb-2">🏛️</div>
                    Governance Layer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Community-driven brand decisions</li>
                    <li>• Token-based voting mechanisms</li>
                    <li>• Transparent decision processes</li>
                    <li>• Stakeholder representation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-600 text-center">
                    <div className="text-4xl mb-2">🪙</div>
                    Token Economics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Loyalty rewards through brand tokens</li>
                    <li>• Utility-based token design</li>
                    <li>• Programmable incentive structures</li>
                    <li>• Value distribution mechanisms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-600 text-center">
                    <div className="text-4xl mb-2">🤝</div>
                    Community Ownership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Shared value creation models</li>
                    <li>• Co-ownership of brand assets</li>
                    <li>• Community-driven product development</li>
                    <li>• Collaborative marketing initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Implementation Timeline</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-600 mb-2">Phase 1: Foundation (2025-2027)</h4>
                  <p className="text-sm text-gray-600">Token launch, community building, basic governance structures</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-600 mb-2">Phase 2: Integration (2028-2032)</h4>
                  <p className="text-sm text-gray-600">Product development participation, supply chain transparency</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-600 mb-2">Phase 3: Maturation (2033-2035)</h4>
                  <p className="text-sm text-gray-600">Full community ownership, autonomous operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projected Impact Analysis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Projected Impact Analysis (2035)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">65%</div>
                <p className="text-sm text-gray-600 font-medium">Brand Loyalty Increase</p>
                <p className="text-xs text-gray-500 mt-1">Through community governance</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-sm text-gray-600 font-medium">Marketing Cost Reduction</p>
                <p className="text-xs text-gray-500 mt-1">Community-driven promotion</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-lg border border-indigo-200">
                <div className="text-4xl font-bold text-indigo-600 mb-2">2035</div>
                <p className="text-sm text-gray-600 font-medium">Mainstream Adoption</p>
                <p className="text-xs text-gray-500 mt-1">Timeline for FMCG DAOs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Key Research Findings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <span className="font-medium">Consumer Engagement:</span> 3x higher in DAO communities</li>
                  <li>• <span className="font-medium">Brand Trust:</span> Significant increase through transparency</li>
                  <li>• <span className="font-medium">Innovation Speed:</span> 2x faster product development</li>
                  <li>• <span className="font-medium">Market Response:</span> Real-time consumer feedback integration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Implementation Challenges</h3>
                <div className="bg-blue-900/10 p-4 rounded-lg border border-blue-200">
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Regulatory compliance across jurisdictions</li>
                    <li>• Technical infrastructure development costs</li>
                    <li>• Consumer education and adoption barriers</li>
                    <li>• Organizational resistance to change</li>
                    <li>• Token volatility and economic stability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Contribution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Academic Contribution & Future Research</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Research Contributions</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-600 mb-2">Theoretical Framework</h4>
                    <p className="text-sm text-gray-700">First comprehensive FMCG DAO framework integrating marketing theory with blockchain technology</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-600 mb-2">Measurement Tools</h4>
                    <p className="text-sm text-gray-700">Novel consumer engagement metrics for DAO-based marketing environments</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-600 mb-2">Implementation Guidelines</h4>
                    <p className="text-sm text-gray-700">Practical roadmap for brands to evaluate and implement DAO strategies</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Future Research Directions</h3>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                  <ul className="space-y-3 text-gray-700">
                    <li>• <span className="font-medium text-blue-600">Empirical Testing:</span> Longitudinal studies on DAO marketing effectiveness</li>
                    <li>• <span className="font-medium text-purple-600">Cross-Cultural Analysis:</span> Adoption patterns across different markets</li>
                    <li>• <span className="font-medium text-indigo-600">Regulatory Framework:</span> Policy development requirements</li>
                    <li>• <span className="font-medium text-cyan-600">Technology Integration:</span> AI and IoT in DAO marketing</li>
                    <li>• <span className="font-medium text-blue-600">Sustainability:</span> ESG compliance in DAO models</li>
                  </ul>
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
