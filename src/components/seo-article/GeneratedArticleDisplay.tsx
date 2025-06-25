
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface GeneratedArticleDisplayProps {
  generatedArticle: string;
  onClear: () => void;
}

const GeneratedArticleDisplay: React.FC<GeneratedArticleDisplayProps> = ({
  generatedArticle,
  onClear,
}) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedArticle);
    toast({
      title: "Copied!",
      description: "Article has been copied to clipboard"
    });
  };

  if (!generatedArticle) return null;

  return (
    <div className="mt-8 bg-white p-6 rounded-lg border shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Generated SEO Article</h3>
        <Badge variant="outline" className="bg-green-50 text-green-700">
          Ready to Publish
        </Badge>
      </div>
      <div className="bg-gray-50 p-6 rounded border max-h-96 overflow-y-auto">
        <div className="whitespace-pre-wrap text-sm leading-relaxed">{generatedArticle}</div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="outline" onClick={handleCopy}>
          Copy Article
        </Button>
        <Button variant="outline" onClick={onClear}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default GeneratedArticleDisplay;
