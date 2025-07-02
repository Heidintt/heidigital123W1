
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Copy, Calendar, Target, Users, Lightbulb } from 'lucide-react';
import { ContentIdea, ContentPillar } from '@/utils/contentCalendarUtils';

interface StrategicContentDisplayProps {
  generatedIdeas: ContentIdea[];
  topic: string;
  audience: string;
  goal: string;
  platforms: string[];
  contentPillars: ContentPillar[];
  copyToClipboard: (text: string) => Promise<void>;
  exportToExcel: () => void;
  onClearCalendar: () => void;
  onRegenerateIdeas: () => void;
  isGenerateEnabled: boolean;
  isGenerating: boolean;
}

const StrategicContentDisplay: React.FC<StrategicContentDisplayProps> = ({
  generatedIdeas,
  topic,
  audience,
  goal,
  platforms,
  contentPillars,
  copyToClipboard,
  exportToExcel,
  onClearCalendar,
  onRegenerateIdeas,
  isGenerateEnabled,
  isGenerating
}) => {
  const getFunnelStageColor = (stage: string) => {
    const colors: { [key: string]: string } = {
      'TOFU': 'bg-green-100 text-green-800',
      'MOFU': 'bg-yellow-100 text-yellow-800',
      'BOFU': 'bg-red-100 text-red-800',
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  const getFormatColor = (format: string) => {
    const colors: { [key: string]: string } = {
      'Video': 'bg-purple-100 text-purple-800',
      'Carousel': 'bg-blue-100 text-blue-800',
      'Blog Post': 'bg-indigo-100 text-indigo-800',
      'Infographic': 'bg-pink-100 text-pink-800',
      'Case Study': 'bg-orange-100 text-orange-800',
      'Live Q&A': 'bg-teal-100 text-teal-800',
    };
    return colors[format] || 'bg-gray-100 text-gray-800';
  };

  if (generatedIdeas.length === 0) {
    return (
      <Card className="text-center py-16">
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-gray-100 rounded-full">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <p className="text-xl text-gray-500">
              Your strategic content calendar will appear here...
            </p>
            <p className="text-gray-400">
              Complete the two-step process above to generate your comprehensive content strategy
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* Strategy Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-indigo-600" />
            Content Strategy Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-sm font-medium">Topic</p>
                <p className="text-sm text-gray-600">{topic}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Audience</p>
                <p className="text-sm text-gray-600">{audience}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm font-medium">Goal</p>
                <p className="text-sm text-gray-600">{goal}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-600" />
              <div>
                <p className="text-sm font-medium">Platforms</p>
                <p className="text-sm text-gray-600">{platforms.join(', ')}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Content Pillars:</p>
            <div className="flex flex-wrap gap-2">
              {contentPillars.map((pillar) => (
                <Badge key={pillar.id} variant="outline" className="text-xs">
                  {pillar.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Button */}
      <div className="mb-6 flex justify-center">
        <Button
          onClick={exportToExcel}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Strategic Calendar
        </Button>
      </div>

      {/* Strategic Content Table */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Content Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Week</TableHead>
                  <TableHead>Content Pillar</TableHead>
                  <TableHead>Funnel Stage</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Format</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>CTA</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {generatedIdeas.map((idea) => (
                  <TableRow key={idea.id}>
                    <TableCell className="font-medium">Week {idea.week}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {idea.pillar}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-xs ${getFunnelStageColor(idea.funnelStage || '')}`}>
                        {idea.funnelStage}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="font-medium text-sm leading-tight">{idea.title}</p>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-xs ${getFormatColor(idea.format || '')}`}>
                        {idea.format}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm text-gray-600 leading-tight">{idea.description}</p>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm italic text-gray-500">{idea.cta}</p>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(`${idea.title}\n\n${idea.description}\n\nCTA: ${idea.cta}`)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Footer Info */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          🎯 Generated {generatedIdeas.length} strategic content ideas across {contentPillars.length} content pillars
          targeting {audience.toLowerCase()} with the goal of {goal.toLowerCase()}
        </p>
        <div className="space-x-4">
          <Button
            variant="outline"
            onClick={onClearCalendar}
          >
            Clear Calendar
          </Button>
          <Button
            onClick={onRegenerateIdeas}
            disabled={!isGenerateEnabled || isGenerating}
          >
            Regenerate Ideas
          </Button>
        </div>
      </div>
    </>
  );
};

export default StrategicContentDisplay;
