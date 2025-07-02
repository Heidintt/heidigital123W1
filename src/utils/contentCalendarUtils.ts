import { advancedContentMatrix, eventContentMatrix, AdvancedContentTemplate } from '@/data/advancedContentMatrix';

export interface ContentIdea {
  id: string;
  type: string;
  title: string;
  originalTitle: string;
  week: number;
  isEditing: boolean;
}

export interface SavedCalendarData {
  topic: string;
  event: string;
  audience: string;
  platforms: string[];
  ideas: ContentIdea[];
  timestamp: number;
}

export const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const filterTemplates = (templates: AdvancedContentTemplate[], selectedAudience: string, selectedPlatforms: string[]) => {
  return templates.filter(template => {
    const audienceMatch = template.audience.includes('All') || template.audience.includes(selectedAudience);
    const platformMatch = template.platforms.some(platform => selectedPlatforms.includes(platform));
    return audienceMatch && platformMatch;
  });
};

export const generateContentIdeas = (
  topic: string,
  event: string,
  audience: string,
  platforms: string[]
): ContentIdea[] => {
  const useEventMatrix = event.trim() !== '';
  const sourceMatrix = useEventMatrix ? eventContentMatrix : advancedContentMatrix;
  
  const filteredTemplates = filterTemplates(sourceMatrix, audience, platforms);
  
  if (filteredTemplates.length === 0) {
    throw new Error('No content templates match your selected criteria. Please adjust your audience or platform selections.');
  }

  const shuffledTemplates = shuffleArray(filteredTemplates);
  const ideas: ContentIdea[] = [];
  const usedTemplates: Set<string> = new Set();
  let lastTwoTypes: string[] = [];

  for (let i = 0; i < 12; i++) {
    let selectedTemplate: AdvancedContentTemplate;
    let attempts = 0;
    const maxAttempts = shuffledTemplates.length * 2;
    let shouldSkip = false;

    // Smart selection algorithm
    do {
      const templateIndex = (i + attempts) % shuffledTemplates.length;
      selectedTemplate = shuffledTemplates[templateIndex];
      attempts++;
      
      // Check if we should skip this template
      shouldSkip = 
        // Avoid same type in consecutive picks within the last 2 selections
        lastTwoTypes.includes(selectedTemplate.type) ||
        // If we have enough unused templates, avoid repeating until we've used more unique ones
        (usedTemplates.has(selectedTemplate.template) && (shuffledTemplates.length - usedTemplates.size) > 3);
        
    } while (shouldSkip && attempts < maxAttempts);

    // Generate the content idea
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

    // Update tracking
    usedTemplates.add(selectedTemplate.template);
    lastTwoTypes.push(selectedTemplate.type);
    if (lastTwoTypes.length > 2) {
      lastTwoTypes.shift();
    }
  }

  return ideas;
};

export const saveToLocalStorage = (data: SavedCalendarData) => {
  localStorage.setItem('contentCalendarData', JSON.stringify(data));
};

export const loadFromLocalStorage = (): SavedCalendarData | null => {
  const savedData = localStorage.getItem('contentCalendarData');
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }
  return null;
};
