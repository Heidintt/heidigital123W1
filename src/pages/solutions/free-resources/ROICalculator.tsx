
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, Calculator, BarChart3 } from "lucide-react";

const ROICalculator = () => {
  return (
    <Layout>
      <Hero
        title="Digital Marketing ROI Calculator"
        subtitle="Interactive tool to measure and forecast the return on your marketing investments"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Measure Your Marketing Success"
                subtitle="Calculate and optimize the ROI of your digital marketing campaigns"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Making data-driven decisions is essential for marketing success. Our Digital Marketing ROI Calculator helps you accurately measure the return on investment for your various marketing channels and campaigns, allowing you to allocate your budget more effectively and maximize results.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What This Tool Offers</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calculator className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Multi-Channel ROI Tracking</strong> - Calculate ROI across different marketing channels (SEO, PPC, Social Media, Email, etc.)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calculator className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Campaign Comparison</strong> - Compare the performance of different campaigns side by side
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Forecasting Capabilities</strong> - Project future returns based on historical performance
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Visualization Dashboard</strong> - Automatically generated charts and graphs for better understanding
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calculator className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Budget Allocation Optimizer</strong> - Recommendations for optimal budget distribution
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Key Metrics Calculated</h3>
                
                <p className="text-gray-700 mb-6">
                  Our calculator helps you track and analyze all the essential marketing ROI metrics, including:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li><strong>Return on Ad Spend (ROAS)</strong> - Measure the revenue generated for every dollar spent on advertising</li>
                  <li><strong>Cost Per Acquisition (CPA)</strong> - Track how much it costs to acquire a new customer</li>
                  <li><strong>Customer Lifetime Value (CLV)</strong> - Calculate the total value a customer brings to your business over time</li>
                  <li><strong>Conversion Rate</strong> - Monitor the percentage of visitors who take a desired action</li>
                  <li><strong>Cost Per Click (CPC)</strong> - Track the cost efficiency of your pay-per-click campaigns</li>
                  <li><strong>Customer Acquisition Cost (CAC)</strong> - Understand the full cost of acquiring new customers</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">How to Use the Calculator</h3>
                
                <p className="text-gray-700 mb-6">
                  Our Excel-based calculator comes with detailed instructions and is designed to be user-friendly:
                </p>
                
                <ol className="list-decimal pl-5 space-y-4 text-gray-700 mb-8">
                  <li>
                    <strong>Input Your Marketing Expenses</strong> - Enter your spending across different channels and campaigns
                  </li>
                  <li>
                    <strong>Add Revenue Data</strong> - Input the revenue attributed to each marketing channel
                  </li>
                  <li>
                    <strong>Review Automatic Calculations</strong> - The spreadsheet will automatically calculate all key metrics
                  </li>
                  <li>
                    <strong>Analyze Visual Reports</strong> - Examine the auto-generated charts and graphs
                  </li>
                  <li>
                    <strong>Use the Budget Optimizer</strong> - Get recommendations for future budget allocation
                  </li>
                </ol>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Calculator Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This ROI calculator is perfect for marketing managers, business owners, digital marketing professionals, and anyone responsible for marketing budget decisions. Whether you're running a small business or managing enterprise-level marketing campaigns, this tool will help you make more informed decisions about your marketing investments.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Calculator (Excel, 2.5MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> Excel Spreadsheet</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Compatibility:</strong> Excel 2016+ / Google Sheets</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> January 2025</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 2.5MB</span>
                  </div>
                </div>
                
                <Button className="w-full mb-4 bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" /> Download Now
                </Button>
                
                <p className="text-sm text-gray-500 mb-6">
                  No email required. Free for personal and commercial use.
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold mb-4">Related Resources</h4>
                  
                  <ul className="space-y-3">
                    <li>
                      <a href="/solutions/ai-tools/campaign-optimizer" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> AI Campaign Optimizer
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/cro-guide" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Website Conversion Rate Optimization Guide
                      </a>
                    </li>
                    <li>
                      <a href="/services/digital-ads" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Digital Advertising Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Need Help Optimizing Your Marketing ROI?"
        description="Our digital marketing experts can help you analyze your current performance and develop strategies to improve your marketing ROI."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Digital Ad Services"
        secondaryButtonLink="/services/digital-ads"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default ROICalculator;
