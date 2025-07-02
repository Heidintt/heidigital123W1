
export interface AdvancedContentTemplate {
  type: string;
  template: string;
  audience: string[];
  platforms: string[];
}

export const advancedContentMatrix: AdvancedContentTemplate[] = [
  // Blog Post Templates
  { type: 'Blog Post', template: 'The Ultimate Step-by-Step Guide to {topic}', audience: ['Beginners', 'General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '10 Common Mistakes to Avoid in {topic}', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Why {topic} is More Important Than You Think', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Advanced {topic} Strategies for Professionals', audience: ['Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Case Study: How We Achieved Success with {topic}', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Comparing the Top 5 Tools for {topic}', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'The Complete Beginner\'s Guide to {topic}', audience: ['Beginners'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '{topic} Trends to Watch in 2024', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },

  // YouTube Video Templates
  { type: 'YouTube Video', template: '{topic} for Beginners: Everything You Need to Know', audience: ['Beginners'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Expert Interview: The Future of {topic}', audience: ['Experts'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'My {topic} Journey: Lessons Learned', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Reacting to Popular {topic} Myths', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{topic} Q&A: Answering Your Top Questions', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Advanced {topic} Techniques Revealed', audience: ['Experts'], platforms: ['YouTube'] },

  // TikTok Video Templates
  { type: 'TikTok Video', template: '3 Quick Tips for {topic} in Under 60 Seconds', audience: ['Beginners', 'General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{topic} Hacks That Actually Work', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'Before vs After: My {topic} Transformation', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'Things Nobody Tells You About {topic}', audience: ['General Audience', 'Experts'], platforms: ['TikTok'] },

  // Instagram Post Templates
  { type: 'Instagram Post', template: 'Behind the Scenes: My {topic} Process', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{topic} Inspiration: 5 Ideas to Try Today', audience: ['Beginners', 'General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Monday Motivation: Why {topic} Changed My Life', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{topic} Tools I Can\'t Live Without', audience: ['General Audience', 'Experts'], platforms: ['Instagram'] },

  // LinkedIn Post Templates
  { type: 'LinkedIn Post', template: 'My Top 3 Learnings About {topic} This Year', audience: ['General Audience', 'Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Why Every Professional Should Learn {topic}', audience: ['General Audience'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'The {topic} Skills That Got Me Promoted', audience: ['General Audience', 'Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Industry Insights: The Future of {topic}', audience: ['Experts'], platforms: ['LinkedIn'] },

  // Facebook Post Templates
  { type: 'Facebook Post', template: 'What is your biggest challenge with {topic}?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Which {topic} strategy works best for you?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'What\'s your favorite {topic} tool?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Let\'s discuss: The future of {topic}', audience: ['General Audience', 'Experts'], platforms: ['Facebook'] },
];

export const eventContentMatrix: AdvancedContentTemplate[] = [
  // Holiday/Event-Specific Templates
  { type: 'Blog Post', template: 'How to Use {topic} for Your {event} Campaign', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '{event} {topic} Strategy: What You Need to Know', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Instagram Post', template: '{event} {topic} Ideas That Convert', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Getting Ready for {event} with {topic}', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'YouTube Video', template: '{event} {topic} Preparation Guide', audience: ['Beginners', 'General Audience'], platforms: ['YouTube'] },
  { type: 'TikTok Video', template: '{event} {topic} Hacks You Need to Try', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'LinkedIn Post', template: 'Professional {topic} Tips for {event}', audience: ['General Audience', 'Experts'], platforms: ['LinkedIn'] },
  { type: 'Facebook Post', template: 'What are your {event} {topic} plans?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Blog Post', template: '{event} Case Study: How {topic} Boosted Our Results', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Instagram Post', template: '{event} Countdown: {topic} Checklist', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'YouTube Video', template: 'Last-Minute {event} {topic} Tips', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'TikTok Video', template: '{event} {topic} Mistakes to Avoid', audience: ['General Audience'], platforms: ['TikTok'] },
];
