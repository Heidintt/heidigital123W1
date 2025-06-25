
import React from "react";
import { CheckCircle } from "lucide-react";

const ArticleFeatures: React.FC = () => {
  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Article Features</h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">800-1500 words professional content</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">No markdown formatting - ready to use</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">Meta title & description included</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">SEO-optimized URL slug</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">Image alt text suggestions</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">Internal & external link ideas</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">Professional English writing</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm">Comprehensive topic coverage</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Professional Tips:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Articles are generated in conversational, professional tone</li>
          <li>• Content includes industry insights and best practices</li>
          <li>• Each article covers the topic comprehensively</li>
          <li>• Ready to copy-paste into your CMS or website</li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleFeatures;
