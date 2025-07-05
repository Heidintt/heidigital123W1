
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, TrendingUp, Zap } from "lucide-react";

const TechnologySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Technology-Powered Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Technology
            <br />
            <span className="text-blue-300">Meets Marketing Excellence</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Harness the power of cutting-edge technology and data analytics to revolutionize your marketing strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="bg-blue-500 p-4 rounded-xl w-fit mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Intelligent Content Systems</h3>
            <p className="text-white/80">Advanced algorithms create high-converting, SEO-optimized content that adapts to your brand voice and audience preferences in real-time.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="bg-pink-500 p-4 rounded-xl w-fit mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Predictive Market Analytics</h3>
            <p className="text-white/80">Machine learning models predict market trends, consumer behavior, and campaign performance to keep you ahead of the competition.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Automated Optimization</h3>
            <p className="text-white/80">Self-learning systems continuously optimize campaigns, budgets, and targeting to maximize ROI while minimizing manual intervention.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500">
            <Link to="/solutions/ai-tools">Explore Technology Tools →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
