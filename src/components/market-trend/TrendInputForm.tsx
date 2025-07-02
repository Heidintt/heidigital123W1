
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus, TrendingUp } from "lucide-react";
import { AnalysisParams } from "./MarketTrendAnalyzerTool";

interface TrendInputFormProps {
  onAnalyze: (params: AnalysisParams) => void;
  isAnalyzing: boolean;
  initialParams: AnalysisParams;
}

const TrendInputForm = ({ onAnalyze, isAnalyzing, initialParams }: TrendInputFormProps) => {
  const [keywords, setKeywords] = useState<string[]>(["AI", "ChatGPT", "Marketing Automation"]);
  const [newKeyword, setNewKeyword] = useState("");
  const [timeframe, setTimeframe] = useState("90d");
  const [geo, setGeo] = useState("US");
  const [spikeThreshold, setSpikeThreshold] = useState(2.0);
  const [spikeWindow, setSpikeWindow] = useState(7);

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim()) && keywords.length < 5) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keywords.length === 0) return;
    
    onAnalyze({
      keywords,
      timeframe,
      geo,
      spikeThreshold,
      spikeWindow
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="keywords">Keywords to Analyze (Max 5)</Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="keywords"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                placeholder="Enter keyword..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
              />
              <Button 
                type="button" 
                onClick={addKeyword}
                disabled={!newKeyword.trim() || keywords.length >= 5}
                size="sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="flex items-center gap-1">
                  {keyword}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeKeyword(keyword)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="timeframe">Time Frame</Label>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 3 months</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="geo">Geography</Label>
            <Select value={geo} onValueChange={setGeo}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WORLDWIDE">Worldwide</SelectItem>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="VN">Vietnam</SelectItem>
                <SelectItem value="GB">United Kingdom</SelectItem>
                <SelectItem value="DE">Germany</SelectItem>
                <SelectItem value="FR">France</SelectItem>
                <SelectItem value="JP">Japan</SelectItem>
                <SelectItem value="KR">South Korea</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="spikeThreshold">Spike Detection Threshold</Label>
            <Input
              id="spikeThreshold"
              type="number"
              value={spikeThreshold}
              onChange={(e) => setSpikeThreshold(parseFloat(e.target.value))}
              min="1"
              max="5"
              step="0.1"
            />
            <p className="text-sm text-gray-500 mt-1">
              Higher values detect only more significant spikes (1-5)
            </p>
          </div>

          <div>
            <Label htmlFor="spikeWindow">Analysis Window (days)</Label>
            <Input
              id="spikeWindow"
              type="number"
              value={spikeWindow}
              onChange={(e) => setSpikeWindow(parseInt(e.target.value))}
              min="3"
              max="30"
            />
            <p className="text-sm text-gray-500 mt-1">
              Rolling window size for spike detection (3-30 days)
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Demo Mode</h4>
            <p className="text-sm text-blue-700">
              This tool uses simulated trend data for demonstration. 
              Real Google Trends integration available in production version.
            </p>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isAnalyzing || keywords.length === 0}
        className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90"
      >
        {isAnalyzing ? (
          "Analyzing Trends..."
        ) : (
          <>
            <TrendingUp className="mr-2 h-4 w-4" />
            Analyze Market Trends
          </>
        )}
      </Button>
    </form>
  );
};

export default TrendInputForm;
