
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Lightbulb, Clock, Copy, Download, Edit3 } from 'lucide-react';
import { advancedContentMatrix, eventContentMatrix, AdvancedContentTemplate } from '@/data/advancedContentMatrix';
import * as XLSX from 'xlsx';

interface ContentIdea {
  id: string;
  type: string;
  title: string;
  originalTitle: string;
  week: number;
  isEditing: boolean;
}

interface SavedCalendarData {
  topic: string;
  event: string;
  audience: string;
  platforms: string[];
  ideas: ContentIdea[];
  timestamp: number;
}

const ContentCalendarGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [event, setEvent] = useState('');
  const [audience, setAudience] = useState('General Audience');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<ContentIdea[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState('');

  const platformOptions = ['Blog', 'YouTube', 'Facebook', 'Instagram', 'TikTok', 'LinkedIn'];
  const audienceOptions = ['General Audience', 'Beginners', 'Experts'];

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('contentCalendarData');
    if (savedData) {
      try {
        const parsed: SavedCalendarData = JSON.parse(savedData);
        setTopic(parsed.topic);
        setEvent(parsed.event);
        setAudience(parsed.audience);
        setPlatforms(parsed.platforms);
        setGeneratedIdeas(parsed.ideas);
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage
  const saveToLocalStorage = (data: Partial<SavedCalendarData>) => {
    const currentData: SavedCalendarData = {
      topic,
      event,
      audience,
      platforms,
      ideas: generatedIdeas,
      timestamp: Date.now(),
      ...data
    };
    localStorage.setItem('contentCalendarData', JSON.stringify(currentData));
  };

  const handlePlatformChange = (platform: string, checked: boolean) => {
    if (checked) {
      setPlatforms(prev => [...prev, platform]);
    } else {
      setPlatforms(prev => prev.filter(p => p !== platform));
    }
  };

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const filterTemplates = (templates: AdvancedContentTemplate[], selectedAudience: string, selectedPlatforms: string[]) => {
    return templates.filter(template => {
      const audienceMatch = template.audience.includes('All') || template.audience.includes(selectedAudience);
      const platformMatch = template.platforms.some(platform => selectedPlatforms.includes(platform));
      return audienceMatch && platformMatch;
    });
  };

  const generateContentIdeas = async () => {
    if (!topic.trim() || platforms.length === 0) return;

    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const useEventMatrix = event.trim() !== '';
    const sourceMatrix = useEventMatrix ? eventContentMatrix : advancedContentMatrix;
    
    const filteredTemplates = filterTemplates(sourceMatrix, audience, platforms);
    
    if (filteredTemplates.length === 0) {
      alert('No content templates match your selected criteria. Please adjust your audience or platform selections.');
      setIsGenerating(false);
      return;
    }

    const shuffledTemplates = shuffleArray(filteredTemplates);
    const ideas: ContentIdea[] = [];
    let lastTwoTypes: string[] = [];

    for (let i = 0; i < 12; i++) {
      let selectedTemplate = shuffledTemplates[i % shuffledTemplates.length];
      let attempts = 0;
      
      while (lastTwoTypes.includes(selectedTemplate.type) && attempts < shuffledTemplates.length) {
        selectedTemplate = shuffledTemplates[(i + attempts) % shuffledTemplates.length];
        attempts++;
      }

      let generatedTitle = selectedTemplate.template.replace(/{topic}/g, topic);
      if (useEventMatrix && event.trim()) {
        generatedTitle = generatedTitle.replace(/{event}/g, event);
      }
      
      ideas.push({
        id: `idea-${i}`,
        type: selectedTemplate.type,
        title: generatedTitle,
        originalTitle: generatedTitle,
        week: Math.floor(i / 3) + 1,
        isEditing: false
      });

      lastTwoTypes.push(selectedTemplate.type);
      if (lastTwoTypes.length > 2) {
        lastTwoTypes.shift();
      }
    }

    setGeneratedIdeas(ideas);
    saveToLocalStorage({ ideas });
    setIsGenerating(false);
  };

  const startEditing = (id: string, currentTitle: string) => {
    setEditingId(id);
    setEditingValue(currentTitle);
  };

  const saveEdit = () => {
    if (editingId) {
      const updatedIdeas = generatedIdeas.map(idea =>
        idea.id === editingId ? { ...idea, title: editingValue } : idea
      );
      setGeneratedIdeas(updatedIdeas);
      saveToLocalStorage({ ideas: updatedIdeas });
    }
    setEditingId(null);
    setEditingValue('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingValue('');
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const exportToExcel = () => {
    const exportData = generatedIdeas.map(idea => ({
      Week: `Week ${idea.week}`,
      'Content Type': idea.type,
      Title: idea.title
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Content Calendar');

    const fileName = `content-calendar-${topic.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const getWeekIdeas = (weekNumber: number) => {
    return generatedIdeas.filter(idea => idea.week === weekNumber);
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Blog Post': 'bg-blue-100 text-blue-800',
      'YouTube Video': 'bg-red-100 text-red-800',
      'TikTok Video': 'bg-pink-100 text-pink-800',
      'Instagram Post': 'bg-purple-100 text-purple-800',
      'LinkedIn Post': 'bg-indigo-100 text-indigo-800',
      'Facebook Post': 'bg-blue-100 text-blue-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const isGenerateEnabled = topic.trim() !== '' && platforms.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 rounded-full">
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Advanced Content Strategy Planner</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create personalized content calendars with advanced filtering, inline editing, and export capabilities.
          </p>
        </div>

        {/* Control Panel */}
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
              onClick={generateContentIdeas}
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

        {/* Interactive Workspace */}
        <div className="max-w-6xl mx-auto">
          {generatedIdeas.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <Calendar className="h-12 w-12 text-gray-400" />
                  </div>
                  <p className="text-xl text-gray-500">
                    Your interactive content strategy will appear here...
                  </p>
                  <p className="text-gray-400">
                    Configure your parameters above and generate your personalized content calendar
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Export Button */}
              <div className="mb-6 flex justify-center">
                <Button
                  onClick={exportToExcel}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download as Excel
                </Button>
              </div>

              {/* Interactive Calendar */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((weekNumber) => (
                  <Card key={weekNumber} className="h-fit">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-indigo-600">{weekNumber}</span>
                        </div>
                        Week {weekNumber}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {getWeekIdeas(weekNumber).map((idea) => (
                        <div key={idea.id} className="p-4 bg-gray-50 rounded-lg border">
                          <div className="mb-2">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(idea.type)}`}>
                              {idea.type}
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            {editingId === idea.id ? (
                              <div className="flex-1">
                                <Input
                                  value={editingValue}
                                  onChange={(e) => setEditingValue(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') saveEdit();
                                    if (e.key === 'Escape') cancelEdit();
                                  }}
                                  onBlur={saveEdit}
                                  autoFocus
                                  className="text-sm"
                                />
                              </div>
                            ) : (
                              <>
                                <p 
                                  className="flex-1 text-sm font-medium text-gray-800 leading-relaxed cursor-pointer hover:text-indigo-600 transition-colors"
                                  onClick={() => startEditing(idea.id, idea.title)}
                                >
                                  {idea.title}
                                </p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(idea.title)}
                                  className="h-6 w-6 p-0 hover:bg-gray-200"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Info */}
        {generatedIdeas.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              💡 Generated {generatedIdeas.length} personalized content ideas
              {event && ` for "${event}"`} targeting {audience.toLowerCase()} on {platforms.join(', ')}
            </p>
            <div className="space-x-4">
              <Button
                variant="outline"
                onClick={() => {
                  setGeneratedIdeas([]);
                  localStorage.removeItem('contentCalendarData');
                }}
              >
                Clear Calendar
              </Button>
              <Button
                onClick={generateContentIdeas}
                disabled={!isGenerateEnabled || isGenerating}
              >
                Regenerate Ideas
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCalendarGenerator;
