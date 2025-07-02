import { supabase } from '@/integrations/supabase/client';
import { advancedContentMatrix, eventContentMatrix, AdvancedContentTemplate } from '@/data/advancedContentMatrix';

export interface ContentIdea {
  id: string;
  type: string;
  title: string;
  originalTitle: string;
  week: number;
  isEditing: boolean;
  pillar?: string;
  funnelStage?: string;
  format?: string;
  description?: string;
  cta?: string;
}

export interface ContentPillar {
  id: string;
  name: string;
  isEditing: boolean;
}

export interface SavedCalendarData {
  topic: string;
  event: string;
  audience: string;
  platforms: string[];
  goal: string;
  contentPillars: ContentPillar[];
  ideas: ContentIdea[];
  previousTitles?: string[];
  lastCreativeAngle?: string;
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

// Fallback content pillars for different topics
const getFallbackPillars = (topic: string): string[] => {
  const topicLower = topic.toLowerCase();
  
  if (topicLower.includes('fitness') || topicLower.includes('health') || topicLower.includes('workout')) {
    return [
      'Workout Routines & Exercise Tips',
      'Nutrition & Healthy Eating',
      'Mental Health & Wellness',
      'Success Stories & Motivation'
    ];
  } else if (topicLower.includes('business') || topicLower.includes('marketing') || topicLower.includes('entrepreneur')) {
    return [
      'Strategy & Planning',
      'Marketing & Growth',
      'Leadership & Management',
      'Industry Insights & Trends'
    ];
  } else if (topicLower.includes('technology') || topicLower.includes('tech') || topicLower.includes('ai')) {
    return [
      'Latest Tech Trends',
      'How-to Guides & Tutorials',
      'Industry Analysis',
      'Future Predictions & Innovation'
    ];
  } else if (topicLower.includes('food') || topicLower.includes('cooking') || topicLower.includes('recipe')) {
    return [
      'Quick & Easy Recipes',
      'Cooking Tips & Techniques',
      'Healthy Meal Planning',
      'Food Culture & Stories'
    ];
  } else if (topicLower.includes('travel') || topicLower.includes('adventure')) {
    return [
      'Destination Guides',
      'Travel Tips & Hacks',
      'Cultural Experiences',
      'Budget Travel & Planning'
    ];
  } else {
    // Generic fallback pillars
    return [
      `${topic} Fundamentals & Basics`,
      `Advanced ${topic} Strategies`,
      `${topic} Tips & Best Practices`,
      `${topic} Success Stories & Case Studies`
    ];
  }
};

// Enhanced function for generating content pillars with Gemini
export const generateContentPillars = async (topic: string): Promise<ContentPillar[]> => {
  try {
    console.log('Generating content pillars with Gemini for topic:', topic);
    
    const { data, error } = await supabase.functions.invoke('generate-pillars-with-gemini', {
      body: { topic }
    });

    if (error) {
      console.error('Error calling Gemini pillars function:', error);
      
      // Check if it's a quota/rate limit error
      if (error.message && (error.message.includes('quota') || error.message.includes('429') || error.message.includes('RESOURCE_EXHAUSTED'))) {
        console.log('API quota exceeded, using fallback pillars');
        const fallbackPillars = getFallbackPillars(topic);
        return fallbackPillars.map((pillar: string, index: number) => ({
          id: `pillar-${index}`,
          name: pillar,
          isEditing: false
        }));
      }
      
      throw error;
    }

    if (!data || !data.pillars) {
      console.log('Invalid API response, using fallback pillars');
      const fallbackPillars = getFallbackPillars(topic);
      return fallbackPillars.map((pillar: string, index: number) => ({
        id: `pillar-${index}`,
        name: pillar,
        isEditing: false
      }));
    }

    return data.pillars.map((pillar: string, index: number) => ({
      id: `pillar-${index}`,
      name: pillar,
      isEditing: false
    }));

  } catch (error) {
    console.error('Error generating content pillars:', error);
    
    // Always provide fallback pillars instead of throwing an error
    console.log('Using fallback pillars due to API error');
    const fallbackPillars = getFallbackPillars(topic);
    return fallbackPillars.map((pillar: string, index: number) => ({
      id: `pillar-${index}`,
      name: pillar,
      isEditing: false
    }));
  }
};

// Parse Gemini response into structured content ideas
const parseGeminiResponse = (response: string): ContentIdea[] => {
  const ideas: ContentIdea[] = [];
  const lines = response.split('\n').filter(line => line.trim());
  
  let currentIdea: Partial<ContentIdea> = {};
  let ideaIndex = 0;

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip markdown table headers and separators
    if (trimmedLine.includes('|---') || trimmedLine.includes('Week') && trimmedLine.includes('Content Pillar')) {
      continue;
    }
    
    // Parse table rows
    if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
      const columns = trimmedLine.split('|').map(col => col.trim()).filter(col => col);
      
      if (columns.length >= 6) {
        const weekMatch = columns[0].match(/Week (\d+)/);
        const week = weekMatch ? parseInt(weekMatch[1]) : Math.floor(ideaIndex / 3) + 1;
        
        ideas.push({
          id: `idea-${ideaIndex}`,
          type: columns[4] || 'Blog Post',
          title: columns[3] || `Content Idea ${ideaIndex + 1}`,
          originalTitle: columns[3] || `Content Idea ${ideaIndex + 1}`,
          week: week,
          isEditing: false,
          pillar: columns[1] || 'General',
          funnelStage: columns[2] || 'TOFU',
          format: columns[4] || 'Blog Post',
          description: columns[5] || 'Engaging content description',
          cta: columns[6] || 'Learn more!'
        });
        
        ideaIndex++;
      }
    }
  }
  
  // If parsing failed, create fallback ideas
  if (ideas.length === 0) {
    console.log('Fallback: Creating structured ideas from text response');
    const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 10);
    
    for (let i = 0; i < Math.min(12, sentences.length); i++) {
      ideas.push({
        id: `idea-${i}`,
        type: 'Blog Post',
        title: sentences[i].trim(),
        originalTitle: sentences[i].trim(),
        week: Math.floor(i / 3) + 1,
        isEditing: false,
        pillar: 'General Content',
        funnelStage: ['TOFU', 'MOFU', 'BOFU'][i % 3] as 'TOFU' | 'MOFU' | 'BOFU',
        format: ['Blog Post', 'Video', 'Infographic', 'Case Study'][i % 4],
        description: 'AI-generated content idea with unique insights and practical value.',
        cta: 'Engage with this content!'
      });
    }
  }
  
  return ideas.slice(0, 12); // Ensure we have exactly 12 ideas
};

// Enhanced function for generating detailed content ideas with Gemini and Smart Regenerate
export const generateDetailedContentIdeas = async (
  topic: string,
  audience: string,
  goal: string,
  platform: string,
  contentPillars: ContentPillar[],
  previousTitles?: string[],
  isRegenerate: boolean = false
): Promise<{ ideas: ContentIdea[], creativeAngle: string }> => {
  try {
    console.log('Generating detailed content ideas with Gemini');
    console.log('Previous titles for avoidance:', previousTitles);
    
    const requestData = {
      topic,
      audience,
      goal,
      platform,
      contentPillars,
      previousTitles: isRegenerate ? previousTitles : undefined
    };

    const { data, error } = await supabase.functions.invoke('generate-content-with-gemini', {
      body: requestData
    });

    if (error) {
      console.error('Error calling Gemini content function:', error);
      
      // Check if it's a quota/rate limit error and provide fallback
      if (error.message && (error.message.includes('quota') || error.message.includes('429') || error.message.includes('RESOURCE_EXHAUSTED'))) {
        console.log('API quota exceeded, generating fallback content ideas');
        const fallbackIdeas = generateFallbackContentIdeas(topic, contentPillars);
        return { ideas: fallbackIdeas, creativeAngle: 'Fallback content generation due to API limits' };
      }
      
      throw error;
    }

    if (!data || !data.generatedContent) {
      console.log('Invalid API response, generating fallback content ideas');
      const fallbackIdeas = generateFallbackContentIdeas(topic, contentPillars);
      return { ideas: fallbackIdeas, creativeAngle: 'Fallback content generation' };
    }

    const ideas = parseGeminiResponse(data.generatedContent);
    const creativeAngle = data.creativeAngle || 'Standard creative approach';
    
    console.log('Successfully generated', ideas.length, 'content ideas');
    console.log('Creative angle used:', creativeAngle);
    
    return { ideas, creativeAngle };

  } catch (error) {
    console.error('Error generating detailed content ideas:', error);
    
    // Always provide fallback content instead of throwing an error
    console.log('Using fallback content ideas due to API error');
    const fallbackIdeas = generateFallbackContentIdeas(topic, contentPillars);
    return { ideas: fallbackIdeas, creativeAngle: 'Fallback content generation due to API limits' };
  }
};

// Generate fallback content ideas when API is unavailable
const generateFallbackContentIdeas = (topic: string, contentPillars: ContentPillar[]): ContentIdea[] => {
  const ideas: ContentIdea[] = [];
  const funnelStages: ('TOFU' | 'MOFU' | 'BOFU')[] = ['TOFU', 'MOFU', 'BOFU'];
  const formats = ['Blog Post', 'Video', 'Infographic', 'Social Post'];
  
  contentPillars.forEach((pillar, pillarIndex) => {
    for (let i = 0; i < 3; i++) {
      const ideaIndex = pillarIndex * 3 + i;
      const week = Math.floor(ideaIndex / 3) + 1;
      
      ideas.push({
        id: `idea-${ideaIndex}`,
        type: formats[ideaIndex % formats.length],
        title: `${pillar.name}: ${topic} Guide ${i + 1}`,
        originalTitle: `${pillar.name}: ${topic} Guide ${i + 1}`,
        week: week,
        isEditing: false,
        pillar: pillar.name,
        funnelStage: funnelStages[i % 3],
        format: formats[ideaIndex % formats.length],
        description: `Comprehensive guide covering ${pillar.name.toLowerCase()} in ${topic}. Perfect for your audience.`,
        cta: 'Learn more about this topic!'
      });
    }
  });
  
  return ideas.slice(0, 12);
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
