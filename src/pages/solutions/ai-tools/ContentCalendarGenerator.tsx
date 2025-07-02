
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Lightbulb, Clock } from 'lucide-react';
import { contentMatrix } from '@/data/contentMatrix';

interface ContentIdea {
  type: string;
  title: string;
}

const ContentCalendarGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<ContentIdea[]>([]);

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateContentIdeas = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);

    // Simulate some processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    const shuffledMatrix = shuffleArray(contentMatrix);
    const ideas: ContentIdea[] = [];
    let lastTwoTypes: string[] = [];

    for (let i = 0; i < 12; i++) {
      // Find a template that doesn't repeat the same type as the last two
      let selectedTemplate = shuffledMatrix[i % shuffledMatrix.length];
      let attempts = 0;
      
      while (lastTwoTypes.includes(selectedTemplate.type) && attempts < shuffledMatrix.length) {
        selectedTemplate = shuffledMatrix[(i + attempts) % shuffledMatrix.length];
        attempts++;
      }

      const generatedTitle = selectedTemplate.template.replace(/{topic}/g, topic);
      
      ideas.push({
        type: selectedTemplate.type,
        title: generatedTitle
      });

      // Update the last two types tracker
      lastTwoTypes.push(selectedTemplate.type);
      if (lastTwoTypes.length > 2) {
        lastTwoTypes.shift();
      }
    }

    setGeneratedIdeas(ideas);
    setIsGenerating(false);
  };

  const getWeekIdeas = (weekNumber: number) => {
    const startIndex = (weekNumber - 1) * 3;
    return generatedIdeas.slice(startIndex, startIndex + 3);
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Blog Post': 'bg-blue-100 text-blue-800',
      'YouTube Video': 'bg-red-100 text-red-800',
      'TikTok Video': 'bg-pink-100 text-pink-800',
      'Instagram Post': 'bg-purple-100 text-purple-800',
      'LinkedIn Post': 'bg-indigo-100 text-indigo-800',
      'Facebook Poll': 'bg-blue-100 text-blue-800',
      'Twitter Thread': 'bg-cyan-100 text-cyan-800',
      'Infographic': 'bg-green-100 text-green-800',
      'Podcast Episode': 'bg-orange-100 text-orange-800',
      'Email Newsletter': 'bg-yellow-100 text-yellow-800',
      'Case Study': 'bg-gray-100 text-gray-800',
      'How-to Guide': 'bg-teal-100 text-teal-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 rounded-full">
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Content Calendar Generator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generate a month's worth of creative content ideas based on any topic. 
            Get 12 diverse content suggestions organized into a 4-week calendar.
          </p>
        </div>

        {/* Input Form */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              Generate Your Content Calendar
            </CardTitle>
            <CardDescription>
              Enter your main topic or keyword to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="topic" className="text-base font-medium">
                Enter Your Main Topic or Keyword
              </Label>
              <Input
                id="topic"
                type="text"
                placeholder="e.g., Digital Marketing, Fitness, Cooking, Photography..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-2 text-lg p-4 h-12"
              />
            </div>
            <Button
              onClick={generateContentIdeas}
              disabled={!topic.trim() || isGenerating}
              className="w-full h-12 text-lg font-semibold"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Clock className="h-5 w-5 mr-2 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Calendar className="h-5 w-5 mr-2" />
                  Generate Content Ideas
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Display */}
        <div className="max-w-6xl mx-auto">
          {generatedIdeas.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <Calendar className="h-12 w-12 text-gray-400" />
                  </div>
                  <p className="text-xl text-gray-500">
                    Your content calendar will appear here...
                  </p>
                  <p className="text-gray-400">
                    Enter a topic above and click "Generate Content Ideas" to get started
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
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
                    {getWeekIdeas(weekNumber).map((idea, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                        <div className="mb-2">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(idea.type)}`}>
                            {idea.type}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-800 leading-relaxed">
                          {idea.title}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer Info */}
        {generatedIdeas.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600">
              💡 Generated {generatedIdeas.length} unique content ideas for "{topic}"
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setGeneratedIdeas([]);
                setTopic('');
              }}
              className="mt-4"
            >
              Generate New Ideas
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCalendarGenerator;
