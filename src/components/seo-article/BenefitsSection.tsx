
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Target } from "lucide-react";

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Why Choose This Tool?"
          subtitle="Generate professional SEO articles that are ready to publish immediately"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Search className="h-10 w-10 text-blue-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Publication Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                No formatting needed - copy and paste directly into your website or blog
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-10 w-10 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Professional Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                High-quality English writing with comprehensive coverage and insights
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-10 w-10 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Complete SEO Package</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Includes all metadata, suggestions, and optimization elements you need
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
