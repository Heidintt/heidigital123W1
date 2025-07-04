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
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web3 DAO Models in FMCG Marketing Strategy
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Academic research exploring how Web3-based community-owned DAO models can transform 
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
              </div>
            </div>
          </div>
        </div>

        {/* Content continues with existing structure... */}
        <div className="container mx-auto px-4 py-16">
          {/* Project Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="mr-3 h-6 w-6 text-blue-600" />
                Research Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Research Objective</h3>
                  <p className="text-gray-600 mb-6">
                    This academic research investigates the potential integration of Web3 Decentralized 
                    Autonomous Organization (DAO) models within Fast-Moving Consumer Goods (FMCG) marketing 
                    strategies, projecting transformative impacts by 2035.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Key Research Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Community-driven brand governance</li>
                    <li>• Token-based loyalty programs</li>
                    <li>• Decentralized marketing decision-making</li>
                    <li>• Consumer ownership in brand ecosystems</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Methodology</h3>
                  <p className="text-gray-600 mb-4">
                    Mixed-methods approach combining literature review, industry analysis, 
                    and predictive modeling to forecast DAO adoption in FMCG marketing.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Expected Outcomes</h4>
                    <p className="text-blue-800 text-sm">
                      Framework for FMCG brands to evaluate and implement DAO marketing 
                      strategies, with projected ROI and consumer engagement metrics.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Key Research Findings</CardTitle>
              <CardDescription>
                Preliminary insights from the ongoing research project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
                  <p className="text-sm text-gray-600">Projected increase in brand loyalty through DAO governance</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">2035</div>
                  <p className="text-sm text-gray-600">Expected mainstream adoption timeline for FMCG DAOs</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                  <p className="text-sm text-gray-600">Potential reduction in traditional marketing costs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
