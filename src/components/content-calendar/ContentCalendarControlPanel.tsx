
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Lightbulb, Clock, Target, Edit, Plus, Trash2 } from 'lucide-react';
import { ContentPillar } from '@/utils/contentCalendarUtils';

interface ContentCalendarControlPanelProps {
  topic: string;
  setTopic: (topic: string) => void;
  event: string;
  setEvent: (event: string) => void;
  audience: string;
  setAudience: (audience: string) => void;
  platforms: string[];
  handlePlatformChange: (platform: string, checked: boolean) => void;
  goal: string;
  setGoal: (goal: string) => void;
  contentPillars: ContentPillar[];
  setContentPillars: (pillars: ContentPillar[]) => void;
  isGeneratingPillars: boolean;
  isGeneratingContent: boolean;
  onGeneratePillars: () => void;
  onGenerateContent: () => void;
  currentStep: 'initial' | 'pillars' | 'content';
  editingPillarId: string | null;
  setEditingPillarId: (id: string | null) => void;
  editingPillarValue: string;
  setEditingPillarValue: (value: string) => void;
  onSavePillarEdit: () => void;
  onCancelPillarEdit: () => void;
  onAddPillar: () => void;
  onDeletePillar: (id: string) => void;
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
  goal,
  setGoal,
  contentPillars,
  setContentPillars,
  isGeneratingPillars,
  isGeneratingContent,
  onGeneratePillars,
  onGenerateContent,
  currentStep,
  editingPillarId,
  setEditingPillarId,
  editingPillarValue,
  setEditingPillarValue,
  onSavePillarEdit,
  onCancelPillarEdit,
  onAddPillar,
  onDeletePillar
}) => {
  const platformOptions = ['Blog', 'YouTube', 'Facebook', 'Instagram', 'TikTok', 'LinkedIn'];
  const audienceOptions = ['General Audience', 'Beginners', 'Experts'];
  const goalOptions = [
    'Brand Awareness',
    'Lead Generation',
    'Customer Engagement',
    'Sales Conversion',
    'Community Building',
    'Thought Leadership'
  ];

  const isInitialStepComplete = topic.trim() !== '' && platforms.length > 0 && goal.trim() !== '';
  const isPillarsStepComplete = contentPillars.length > 0;

  const startEditingPillar = (pillar: ContentPillar) => {
    setEditingPillarId(pillar.id);
    setEditingPillarValue(pillar.name);
  };

  return (
    <Card className="max-w-4xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          Strategic Content Planning - {currentStep === 'initial' ? 'Step 1 of 2' : 'Step 2 of 2'}
        </CardTitle>
        <CardDescription>
          {currentStep === 'initial' 
            ? 'Configure your content strategy parameters' 
            : 'Review and customize your content pillars'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Initial Configuration */}
        {currentStep === 'initial' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div>
                <Label htmlFor="event" className="text-base font-medium">
                  Specific Event or Campaign (Optional)
                </Label>
                <Input
                  id="event"
                  type="text"
                  placeholder="e.g., Product Launch, Black Friday..."
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div>
                <Label className="text-base font-medium">Primary Campaign Goal *</Label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a goal...</option>
                  {goalOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

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
              onClick={onGeneratePillars}
              disabled={!isInitialStepComplete || isGeneratingPillars}
              className="w-full h-12 text-lg font-semibold"
              size="lg"
            >
              {isGeneratingPillars ? (
                <>
                  <Clock className="h-5 w-5 mr-2 animate-spin" />
                  Generating Content Pillars...
                </>
              ) : (
                <>
                  <Target className="h-5 w-5 mr-2" />
                  Suggest Content Pillars
                </>
              )}
            </Button>
          </>
        )}

        {/* Step 2: Content Pillars Review & Edit */}
        {currentStep === 'pillars' && (
          <>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Your Content Pillars</h3>
              <p className="text-blue-700 text-sm">
                Review and customize these content pillars. You can edit, delete, or add new ones to better align with your strategy.
              </p>
            </div>

            <div className="space-y-3">
              {contentPillars.map((pillar) => (
                <div key={pillar.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                  {editingPillarId === pillar.id ? (
                    <>
                      <Input
                        value={editingPillarValue}
                        onChange={(e) => setEditingPillarValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') onSavePillarEdit();
                          if (e.key === 'Escape') onCancelPillarEdit();
                        }}
                        className="flex-1"
                        autoFocus
                      />
                      <Button size="sm" onClick={onSavePillarEdit}>Save</Button>
                      <Button size="sm" variant="outline" onClick={onCancelPillarEdit}>Cancel</Button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 font-medium">{pillar.name}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => startEditingPillar(pillar)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onDeletePillar(pillar.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              ))}
            </div>

            <Button
              onClick={onAddPillar}
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add New Content Pillar
            </Button>

            <Button
              onClick={onGenerateContent}
              disabled={!isPillarsStepComplete || isGeneratingContent}
              className="w-full h-12 text-lg font-semibold"
              size="lg"
            >
              {isGeneratingContent ? (
                <>
                  <Clock className="h-5 w-5 mr-2 animate-spin" />
                  Generating Detailed Content Calendar...
                </>
              ) : (
                <>
                  <Calendar className="h-5 w-5 mr-2" />
                  Generate Detailed Content Calendar
                </>
              )}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentCalendarControlPanel;
