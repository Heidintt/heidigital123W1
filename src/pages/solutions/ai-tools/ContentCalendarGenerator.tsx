
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import * as XLSX from 'xlsx';
import ContentCalendarControlPanel from '@/components/content-calendar/ContentCalendarControlPanel';
import ContentIdeasDisplay from '@/components/content-calendar/ContentIdeasDisplay';
import {
  ContentIdea,
  SavedCalendarData,
  generateContentIdeas,
  saveToLocalStorage,
  loadFromLocalStorage
} from '@/utils/contentCalendarUtils';

const ContentCalendarGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [event, setEvent] = useState('');
  const [audience, setAudience] = useState('General Audience');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<ContentIdea[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState('');

  // Load saved data on component mount
  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setTopic(savedData.topic);
      setEvent(savedData.event);
      setAudience(savedData.audience);
      setPlatforms(savedData.platforms);
      setGeneratedIdeas(savedData.ideas);
    }
  }, []);

  // Save data to localStorage
  const saveData = (data: Partial<SavedCalendarData>) => {
    const currentData: SavedCalendarData = {
      topic,
      event,
      audience,
      platforms,
      ideas: generatedIdeas,
      timestamp: Date.now(),
      ...data
    };
    saveToLocalStorage(currentData);
  };

  const handlePlatformChange = (platform: string, checked: boolean) => {
    if (checked) {
      setPlatforms(prev => [...prev, platform]);
    } else {
      setPlatforms(prev => prev.filter(p => p !== platform));
    }
  };

  const handleGenerateContentIdeas = async () => {
    if (!topic.trim() || platforms.length === 0) return;

    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const ideas = generateContentIdeas(topic, event, audience, platforms);
      setGeneratedIdeas(ideas);
      saveData({ ideas });
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred while generating content ideas.');
    }

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
      saveData({ ideas: updatedIdeas });
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

  const clearCalendar = () => {
    setGeneratedIdeas([]);
    localStorage.removeItem('contentCalendarData');
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
        <ContentCalendarControlPanel
          topic={topic}
          setTopic={setTopic}
          event={event}
          setEvent={setEvent}
          audience={audience}
          setAudience={setAudience}
          platforms={platforms}
          handlePlatformChange={handlePlatformChange}
          isGenerating={isGenerating}
          onGenerate={handleGenerateContentIdeas}
        />

        {/* Interactive Workspace */}
        <div className="max-w-6xl mx-auto">
          <ContentIdeasDisplay
            generatedIdeas={generatedIdeas}
            editingId={editingId}
            editingValue={editingValue}
            startEditing={startEditing}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
            setEditingValue={setEditingValue}
            copyToClipboard={copyToClipboard}
            exportToExcel={exportToExcel}
            topic={topic}
            event={event}
            audience={audience}
            platforms={platforms}
            onClearCalendar={clearCalendar}
            onRegenerateIdeas={handleGenerateContentIdeas}
            isGenerateEnabled={isGenerateEnabled}
            isGenerating={isGenerating}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCalendarGenerator;
