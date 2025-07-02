import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import * as XLSX from 'xlsx';
import { useToast } from '@/hooks/use-toast';
import ContentCalendarControlPanel from '@/components/content-calendar/ContentCalendarControlPanel';
import StrategicContentDisplay from '@/components/content-calendar/StrategicContentDisplay';
import {
  ContentIdea,
  ContentPillar,
  SavedCalendarData,
  generateContentPillars,
  generateDetailedContentIdeas,
  saveToLocalStorage,
  loadFromLocalStorage
} from '@/utils/contentCalendarUtils';

const ContentCalendarGenerator: React.FC = () => {
  const { toast } = useToast();
  const [topic, setTopic] = useState('');
  const [event, setEvent] = useState('');
  const [audience, setAudience] = useState('General Audience');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [goal, setGoal] = useState('');
  const [contentPillars, setContentPillars] = useState<ContentPillar[]>([]);
  const [isGeneratingPillars, setIsGeneratingPillars] = useState(false);
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<ContentIdea[]>([]);
  const [currentStep, setCurrentStep] = useState<'initial' | 'pillars' | 'content'>('initial');
  const [previousTitles, setPreviousTitles] = useState<string[]>([]);
  const [lastCreativeAngle, setLastCreativeAngle] = useState<string>('');
  
  // Pillar editing states
  const [editingPillarId, setEditingPillarId] = useState<string | null>(null);
  const [editingPillarValue, setEditingPillarValue] = useState('');

  // Load saved data on component mount
  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setTopic(savedData.topic);
      setEvent(savedData.event);
      setAudience(savedData.audience);
      setPlatforms(savedData.platforms);
      setGoal(savedData.goal || '');
      setContentPillars(savedData.contentPillars || []);
      setGeneratedIdeas(savedData.ideas);
      
      if (savedData.ideas.length > 0) {
        setCurrentStep('content');
      } else if (savedData.contentPillars && savedData.contentPillars.length > 0) {
        setCurrentStep('pillars');
      }
    }
  }, []);

  // Save data to localStorage
  const saveData = (data: Partial<SavedCalendarData>) => {
    const currentData: SavedCalendarData = {
      topic,
      event,
      audience,
      platforms,
      goal,
      contentPillars,
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

  const handleGeneratePillars = async () => {
    if (!topic.trim()) return;

    setIsGeneratingPillars(true);
    try {
      const pillars = await generateContentPillars(topic);
      setContentPillars(pillars);
      setCurrentStep('pillars');
      saveData({ contentPillars: pillars });
      
      toast({
        title: "Content Pillars Generated",
        description: `Successfully created ${pillars.length} content pillars using AI.`,
      });
    } catch (error) {
      console.error('Error generating pillars:', error);
      toast({
        title: "Error",
        description: "Failed to generate content pillars. Please try again.",
        variant: "destructive",
      });
    }
    setIsGeneratingPillars(false);
  };

  const handleGenerateContent = async (isRegenerate = false) => {
    if (!topic.trim() || platforms.length === 0 || contentPillars.length === 0) return;

    setIsGeneratingContent(true);
    try {
      const primaryPlatform = platforms[0];
      const previousTitlesToAvoid = isRegenerate ? previousTitles : undefined;
      
      const { ideas, creativeAngle } = await generateDetailedContentIdeas(
        topic, 
        audience, 
        goal, 
        primaryPlatform, 
        contentPillars,
        previousTitlesToAvoid,
        isRegenerate
      );
      
      // Store previous titles for next regeneration
      const newTitles = ideas.map(idea => idea.title);
      setPreviousTitles(newTitles);
      setLastCreativeAngle(creativeAngle);
      
      setGeneratedIdeas(ideas);
      setCurrentStep('content');
      saveData({ 
        ideas, 
        previousTitles: newTitles,
        lastCreativeAngle: creativeAngle
      });
      
      toast({
        title: isRegenerate ? "Content Regenerated" : "Content Generated",
        description: `Successfully created ${ideas.length} unique content ideas using AI.`,
      });
      
      if (isRegenerate) {
        toast({
          title: "Smart Regenerate Applied",
          description: `Creative angle: ${creativeAngle}`,
        });
      }
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "Error",
        description: "Failed to generate content ideas. Please try again.",
        variant: "destructive",
      });
    }
    setIsGeneratingContent(false);
  };

  const handleRegenerateIdeas = () => {
    handleGenerateContent(true);
  };

  const onSavePillarEdit = () => {
    if (editingPillarId && editingPillarValue.trim()) {
      const updatedPillars = contentPillars.map(pillar =>
        pillar.id === editingPillarId 
          ? { ...pillar, name: editingPillarValue.trim() }
          : pillar
      );
      setContentPillars(updatedPillars);
      saveData({ contentPillars: updatedPillars });
    }
    setEditingPillarId(null);
    setEditingPillarValue('');
  };

  const onCancelPillarEdit = () => {
    setEditingPillarId(null);
    setEditingPillarValue('');
  };

  const onAddPillar = () => {
    const newPillar: ContentPillar = {
      id: `pillar-${Date.now()}`,
      name: 'New Content Pillar',
      isEditing: false
    };
    const updatedPillars = [...contentPillars, newPillar];
    setContentPillars(updatedPillars);
    setEditingPillarId(newPillar.id);
    setEditingPillarValue(newPillar.name);
  };

  const onDeletePillar = (id: string) => {
    const updatedPillars = contentPillars.filter(pillar => pillar.id !== id);
    setContentPillars(updatedPillars);
    saveData({ contentPillars: updatedPillars });
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
      'Content Pillar': idea.pillar,
      'Funnel Stage': idea.funnelStage,
      'Suggested Title': idea.title,
      'Format': idea.format,
      'Brief Description/Notes': idea.description,
      'Call to Action (CTA)': idea.cta
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Strategic Content Calendar');

    const fileName = `strategic-content-calendar-${topic.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const clearCalendar = () => {
    setGeneratedIdeas([]);
    setContentPillars([]);
    setCurrentStep('initial');
    localStorage.removeItem('contentCalendarData');
  };

  const isGenerateEnabled = topic.trim() !== '' && platforms.length > 0 && goal.trim() !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 rounded-full">
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Strategic Content Calendar Generator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create professional, strategic content calendars with AI-powered content pillars, funnel-aligned ideas, and comprehensive planning.
          </p>
          {lastCreativeAngle && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Last Creative Angle:</strong> {lastCreativeAngle}
              </p>
            </div>
          )}
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
          goal={goal}
          setGoal={setGoal}
          contentPillars={contentPillars}
          setContentPillars={setContentPillars}
          isGeneratingPillars={isGeneratingPillars}
          isGeneratingContent={isGeneratingContent}
          onGeneratePillars={handleGeneratePillars}
          onGenerateContent={() => handleGenerateContent(false)}
          currentStep={currentStep}
          editingPillarId={editingPillarId}
          setEditingPillarId={setEditingPillarId}
          editingPillarValue={editingPillarValue}
          setEditingPillarValue={setEditingPillarValue}
          onSavePillarEdit={onSavePillarEdit}
          onCancelPillarEdit={onCancelPillarEdit}
          onAddPillar={onAddPillar}
          onDeletePillar={onDeletePillar}
        />

        {/* Strategic Content Display */}
        <div className="max-w-7xl mx-auto">
          <StrategicContentDisplay
            generatedIdeas={generatedIdeas}
            topic={topic}
            audience={audience}
            goal={goal}
            platforms={platforms}
            contentPillars={contentPillars}
            copyToClipboard={copyToClipboard}
            exportToExcel={exportToExcel}
            onClearCalendar={clearCalendar}
            onRegenerateIdeas={handleRegenerateIdeas}
            isGenerateEnabled={isGenerateEnabled && contentPillars.length > 0}
            isGenerating={isGeneratingContent}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCalendarGenerator;
