
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Lightbulb, Clock } from 'lucide-react';

interface ContentCalendarControlPanelProps {
  topic: string;
  setTopic: (topic: string) => void;
  event: string;
  setEvent: (event: string) => void;
  audience: string;
  setAudience: (audience: string) => void;
  platforms: string[];
  handlePlatformChange: (platform: string, checked: boolean) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

const ContentCalendarControlPanel: React.FC<ContentCalendarControlPanelProps> = ({
  topic,
  setTopic,
  event,
  setEvent,
  audience,
  setAudience,
  platforms,
  handlePlatformChange,
  isGenerating,
  onGenerate
}) => {
  const platformOptions = ['Blog', 'YouTube', 'Facebook', 'Instagram', 'TikTok', 'LinkedIn'];
  const audienceOptions = ['General Audience', 'Beginners', 'Experts'];
  const isGenerateEnabled = topic.trim() !== '' && platforms.length > 0;

  return (
    <Card className="max-w-4xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          Control Panel
        </CardTitle>
        <CardDescription>
          Configure your content strategy parameters
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Topic */}
          <div>
            <Label htmlFor="topic" className="text-base font-medium">
              Main Topic/Keyword *
            </Label>
            <Input
              id="topic"
              type="text"
              placeholder="e.g., Digital Marketing, Fitness, Cooking..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-2"
            />
          </div>

          {/* Event */}
          <div>
            <Label htmlFor="event" className="text-base font-medium">
              Specific Event or Occasion (Optional)
            </Label>
            <Input
              id="event"
              type="text"
              placeholder="e.g., Black Friday, New Year, Christmas..."
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <Label className="text-base font-medium">Target Audience *</Label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {audienceOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Target Platforms */}
        <div>
          <Label className="text-base font-medium">Target Platforms * (Select at least one)</Label>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
            {platformOptions.map(platform => (
              <div key={platform} className="flex items-center space-x-2">
                <Checkbox
                  id={platform}
                  checked={platforms.includes(platform)}
                  onCheckedChange={(checked) => handlePlatformChange(platform, checked as boolean)}
                />
                <Label htmlFor={platform} className="text-sm font-normal">
                  {platform}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onGenerate}
          disabled={!isGenerateEnabled || isGenerating}
          className="w-full h-12 text-lg font-semibold"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Clock className="h-5 w-5 mr-2 animate-spin" />
              Generating Strategy...
            </>
          ) : (
            <>
              <Calendar className="h-5 w-5 mr-2" />
              Generate Content Strategy
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContentCalendarControlPanel;
