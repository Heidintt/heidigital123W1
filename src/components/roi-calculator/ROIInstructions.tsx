
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ROIInstructions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How to Use the Digital Marketing ROI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ol className="list-decimal list-inside space-y-2">
          <li>Go to the <strong>Data Input</strong> tab and enter your marketing data</li>
          <li>Review calculated metrics in the <strong>Results & Metrics</strong> tab</li>
          <li>Analyze charts and graphs in the <strong>Dashboard</strong> tab</li>
          <li>Use the Budget Optimizer recommendations for future planning</li>
        </ol>
        
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Key Metrics Calculated:</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>ROI (Return on Investment)</strong> = (Revenue - Spend) ÷ Spend</li>
            <li><strong>ROAS (Return on Ad Spend)</strong> = Revenue ÷ Spend</li>
            <li><strong>CPL (Cost Per Lead)</strong> = Spend ÷ Leads</li>
            <li><strong>ARPC (Average Revenue Per Customer)</strong> = Revenue ÷ Customers</li>
            <li><strong>Lead Conversion Rate</strong> = Leads ÷ Clicks</li>
            <li><strong>Customer Conversion Rate</strong> = Customers ÷ Clicks</li>
            <li><strong>CPC (Cost Per Click)</strong> = Spend ÷ Clicks</li>
            <li><strong>CAC (Customer Acquisition Cost)</strong> = Spend ÷ Customers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ROIInstructions;
