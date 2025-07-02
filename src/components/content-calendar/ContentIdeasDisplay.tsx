
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Copy, Download } from 'lucide-react';

interface ContentIdea {
  id: string;
  type: string;
  title: string;
  originalTitle: string;
  week: number;
  isEditing: boolean;
}

interface ContentIdeasDisplayProps {
  generatedIdeas: ContentIdea[];
  editingId: string | null;
  editingValue: string;
  startEditing: (id: string, currentTitle: string) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
  setEditingValue: (value: string) => void;
  copyToClipboard: (text: string) => Promise<void>;
  exportToExcel: () => void;
  topic: string;
  event: string;
  audience: string;
  platforms: string[];
  onClearCalendar: () => void;
  onRegenerateIdeas: () => void;
  isGenerateEnabled: boolean;
  isGenerating: boolean;
}

const ContentIdeasDisplay: React.FC<ContentIdeasDisplayProps> = ({
  generatedIdeas,
  editingId,
  editingValue,
  startEditing,
  saveEdit,
  cancelEdit,
  setEditingValue,
  copyToClipboard,
  exportToExcel,
  topic,
  event,
  audience,
  platforms,
  onClearCalendar,
  onRegenerateIdeas,
  isGenerateEnabled,
  isGenerating
}) => {
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

  if (generatedIdeas.length === 0) {
    return (
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
    );
  }

  return (
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

      {/* Footer Info */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          💡 Generated {generatedIdeas.length} personalized content ideas
          {event && ` for "${event}"`} targeting {audience.toLowerCase()} on {platforms.join(', ')}
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

export default ContentIdeasDisplay;
