
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

// New function for generating content pillars
export const generateContentPillarsPrompt = (topic: string): string => {
  return `You are a Content Strategist. Based on the Main Topic "${topic}", propose 4 Content Pillars for building a content plan. Content Pillars are broad, overarching themes from which many smaller ideas can be developed. Return the result as a simple bulleted list.`;
};

// Mock function to simulate AI call for content pillars
export const generateContentPillars = async (topic: string): Promise<ContentPillar[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock AI response based on topic
  const mockPillars = [
    `${topic} Fundamentals & Education`,
    `${topic} Trends & Industry Insights`,
    `${topic} Success Stories & Case Studies`,
    `${topic} Tools & Resources`
  ];
  
  return mockPillars.map((pillar, index) => ({
    id: `pillar-${index}`,
    name: pillar,
    isEditing: false
  }));
};

// New function for generating detailed content calendar
export const generateDetailedContentPrompt = (
  topic: string,
  audience: string,
  goal: string,
  platform: string,
  ideaCount: number,
  contentPillars: ContentPillar[]
): string => {
  const pillarsText = contentPillars.map(p => p.name).join(', ');
  
  return `You are an expert Content Strategist with 10 years of experience, specializing in creating highly engaging, creative, and business-oriented content plans.

Based on the following information:
- **Main Topic:** ${topic}
- **Target Audience:** ${audience}
- **Primary Campaign Goal:** ${goal}
- **Primary Platform:** ${platform}
- **Number of Ideas to Generate:** ${ideaCount}
- **Defined Content Pillars:** ${pillarsText}

Your task is to build a detailed Content Calendar. You must ensure the following:
1. **Adherence to Content Pillars:** All ideas must be developed from the provided list of Content Pillars. Distribute the ideas evenly among these pillars.
2. **Format Diversity:** Suggest a variety of formats suitable for the platform, not just articles. Examples: Short-form Video (Reels/Shorts), Carousels, Infographics, Livestream Q&A, Case Studies, Behind-the-scenes content.
3. **Marketing Funnel Allocation:** Logically assign ideas to the three customer journey stages: Top of Funnel (TOFU - Awareness), Middle of Funnel (MOFU - Consideration), and Bottom of Funnel (BOFU - Conversion).
4. **Creativity and Depth:** Each idea must have a unique angle and avoid generic statements.
5. **Output Structure:** Return the result as a complete Markdown table with the following columns:
   - **Week:** (Week 1, Week 2,...)
   - **Content Pillar:** (The pillar this idea belongs to)
   - **Funnel Stage:** (TOFU, MOFU, BOFU)
   - **Suggested Title:** (A catchy, attention-grabbing headline)
   - **Format:** (Video, Carousel, Blog Post, etc.)
   - **Brief Description/Notes:** (Briefly explain the content and why it would appeal to the target audience)
   - **Call to Action (CTA):** (e.g., "Share your thoughts below," "Save this post for later," "Learn more at the link in bio," "Register now")

Begin.`;
};

// Mock function to simulate AI call for detailed content calendar
export const generateDetailedContentIdeas = async (
  topic: string,
  audience: string,
  goal: string,
  platform: string,
  contentPillars: ContentPillar[]
): Promise<ContentIdea[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const formats = ['Video', 'Carousel', 'Blog Post', 'Infographic', 'Case Study', 'Live Q&A'];
  const funnelStages = ['TOFU', 'MOFU', 'BOFU'];
  const ctas = [
    'Share your thoughts below',
    'Save this post for later',
    'Learn more at the link in bio',
    'Register now',
    'Tag someone who needs this',
    'What\'s your experience with this?'
  ];
  
  const ideas: ContentIdea[] = [];
  
  for (let i = 0; i < 12; i++) {
    const pillar = contentPillars[i % contentPillars.length];
    const format = formats[Math.floor(Math.random() * formats.length)];
    const funnelStage = funnelStages[Math.floor(Math.random() * funnelStages.length)];
    const cta = ctas[Math.floor(Math.random() * ctas.length)];
    
    const title = `${topic} Strategy: ${pillar.name.split(' ')[0]} Focus Week ${Math.floor(i / 3) + 1}`;
    const description = `Strategic content focusing on ${pillar.name.toLowerCase()} designed for ${audience.toLowerCase()} to achieve ${goal.toLowerCase()}.`;
    
    ideas.push({
      id: `idea-${i}`,
      type: format,
      title,
      originalTitle: title,
      week: Math.floor(i / 3) + 1,
      isEditing: false,
      pillar: pillar.name,
      funnelStage,
      format,
      description,
      cta
    });
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
