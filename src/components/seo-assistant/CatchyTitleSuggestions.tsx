
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TitleSuggestion {
  type: string;
  title: string;
}

interface CatchyTitleSuggestionsProps {
  suggestions: TitleSuggestion[];
}

const CatchyTitleSuggestions: React.FC<CatchyTitleSuggestionsProps> = ({
  suggestions
}) => {
  const { toast } = useToast();

  const handleCopyTitle = (title: string) => {
    navigator.clipboard.writeText(title);
    toast({
      title: "Đã sao chép!",
      description: "Tiêu đề đã được sao chép vào clipboard"
    });
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'list': return 'bg-blue-100 text-blue-800';
      case 'how-to': return 'bg-green-100 text-green-800';
      case 'question': return 'bg-yellow-100 text-yellow-800';
      case 'secret': return 'bg-red-100 text-red-800';
      case 'benefit': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          Catchy Title Suggestions
        </CardTitle>
        <CardDescription>
          Các gợi ý tiêu đề hấp dẫn sẵn sàng sử dụng
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="bg-white/70 rounded-lg p-4 border border-yellow-100 hover:bg-white/90 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getTypeColor(suggestion.type)}>
                      {suggestion.type}
                    </Badge>
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {suggestion.title}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopyTitle(suggestion.title)}
                  className="flex-shrink-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-xs text-yellow-600 flex items-center gap-1">
          <span>🎯</span>
          <span>Click vào icon copy để sao chép tiêu đề bạn thích</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatchyTitleSuggestions;
