
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

// Updated function for generating detailed content calendar with enhanced creative prompt
export const generateDetailedContentPrompt = (
  topic: string,
  audience: string,
  goal: string,
  platform: string,
  ideaCount: number,
  contentPillars: ContentPillar[]
): string => {
  const pillarsText = contentPillars.map(p => p.name).join(', ');
  
  return `You are a Creative Content Strategist with 10 years of experience, famous for generating viral, engaging, and genuinely valuable content ideas.

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
5. **Output Structure:** Return the result as a complete Markdown table with the following **EXTREMELY DETAILED** column requirements:

   - **Week:** (Week 1, Week 2,...)
   - **Content Pillar:** (The pillar this idea belongs to)
   - **Funnel Stage:** (TOFU, MOFU, BOFU)
   - **Suggested Title:** (This is the most critical part. Generate a **specific, engaging, and viral-worthy headline** for a real article or video. **STRICTLY PROHIBIT** the use of generic, meaningless phrases like '${topic} Strategy' or 'Focus Week'. The title must evoke curiosity and look like a real headline someone would actually click. For example: "5 Common ${topic} Mistakes That Are Sabotaging Your Results" instead of "${topic} Topic Week 1".)
   - **Format:** (Video, Carousel, Blog Post, etc.)
   - **Brief Description/Notes:** (Write a short description (1-2 sentences) **for the end-user (the viewer/reader)**, summarizing the post's main content and the value they will get. **ABSOLUTELY DO NOT** write a strategic description like 'content focusing on...'. Write it like an actual social media caption that would appear under a real post.)
   - **Call to Action (CTA):** (A specific CTA that fits the content and goal. E.g., "Comment with the mistake you were making!", "Save this for later!", "Get your free consultation at the link in bio.")

Begin.`;
};

// Enhanced mock function to simulate AI call for detailed content calendar with more creative output
export const generateDetailedContentIdeas = async (
  topic: string,
  audience: string,
  goal: string,
  platform: string,
  contentPillars: ContentPillar[]
): Promise<ContentIdea[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const formats = ['Video', 'Carousel', 'Blog Post', 'Infographic', 'Case Study', 'Live Q&A', 'Short-form Video', 'Tutorial'];
  const funnelStages = ['TOFU', 'MOFU', 'BOFU'];
  
  // More creative CTAs
  const ctas = [
    'Comment your biggest challenge below',
    'Save this post for later reference',
    'Share this with someone who needs it',
    'Tag a friend who should see this',
    'Try this and let me know your results',
    'Get your free guide at the link in bio',
    'Book a free consultation today',
    'What\'s your experience with this?'
  ];
  
  // Creative title templates based on topic
  const getTitleTemplate = (pillar: string, topic: string, week: number) => {
    const templates = [
      `5 ${topic} Mistakes That Are Costing You Results`,
      `The ${topic} Secret Nobody Talks About`,
      `Why Your ${topic} Strategy Isn't Working (And How to Fix It)`,
      `${topic} Game-Changer: This Simple Trick Works Every Time`,
      `Before vs After: My ${topic} Transformation Story`,
      `The Truth About ${topic} That Will Shock You`,
      `${topic} Hack: Get Better Results in Half the Time`,
      `Stop Doing ${topic} Wrong: The Right Way to See Results`,
      `${topic} Myths Busted: What Really Works`,
      `From Zero to Hero: My ${topic} Journey`
    ];
    return templates[week % templates.length];
  };
  
  // Creative descriptions
  const getDescription = (title: string, audience: string) => {
    const descriptions = [
      `Discover the game-changing insights that transformed my approach to this topic. You'll be amazed by how simple changes can yield incredible results.`,
      `Ready to level up your game? This post reveals the strategies that actually work, backed by real experience and proven results.`,
      `Ever wondered why some people succeed while others struggle? Here's the insider knowledge that makes all the difference.`,
      `This breakthrough method has helped thousands achieve their goals faster. Your journey to success starts with this one simple shift.`,
      `Don't waste another day making these common mistakes. Learn the proven system that delivers consistent, measurable results.`
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };
  
  const ideas: ContentIdea[] = [];
  
  for (let i = 0; i < 12; i++) {
    const pillar = contentPillars[i % contentPillars.length];
    const format = formats[Math.floor(Math.random() * formats.length)];
    const funnelStage = funnelStages[Math.floor(Math.random() * funnelStages.length)];
    const cta = ctas[Math.floor(Math.random() * ctas.length)];
    
    const title = getTitleTemplate(pillar.name, topic, i);
    const description = getDescription(title, audience);
    
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
