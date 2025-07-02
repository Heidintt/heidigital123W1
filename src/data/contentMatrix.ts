
export interface ContentTemplate {
  type: string;
  template: string;
}

export const contentMatrix: ContentTemplate[] = [
  // Blog Post Templates
  { type: 'Blog Post', template: 'The Ultimate Step-by-Step Guide to {topic}' },
  { type: 'Blog Post', template: '10 Common Mistakes to Avoid in {topic}' },
  { type: 'Blog Post', template: 'Why {topic} is More Important Than You Think' },
  { type: 'Blog Post', template: 'Case Study: How We Achieved Success with {topic}' },
  { type: 'Blog Post', template: 'Comparing the Top 5 Tools for {topic}' },
  { type: 'Blog Post', template: 'The Complete Beginner\'s Guide to {topic}' },
  { type: 'Blog Post', template: '{topic} Trends to Watch in 2024' },
  { type: 'Blog Post', template: 'How to Master {topic} in 30 Days' },

  // YouTube Video Templates
  { type: 'YouTube Video', template: '{topic} for Beginners: Everything You Need to Know' },
  { type: 'YouTube Video', template: 'Expert Interview: The Future of {topic}' },
  { type: 'YouTube Video', template: 'My {topic} Journey: Lessons Learned' },
  { type: 'YouTube Video', template: 'Reacting to Popular {topic} Myths' },
  { type: 'YouTube Video', template: '{topic} Q&A: Answering Your Top Questions' },

  // TikTok Video Templates
  { type: 'TikTok Video', template: '3 Quick Tips for {topic} in Under 60 Seconds' },
  { type: 'TikTok Video', template: '{topic} Hacks That Actually Work' },
  { type: 'TikTok Video', template: 'Before vs After: My {topic} Transformation' },
  { type: 'TikTok Video', template: 'Things Nobody Tells You About {topic}' },

  // Instagram Post Templates
  { type: 'Instagram Post', template: 'Behind the Scenes: My {topic} Process' },
  { type: 'Instagram Post', template: '{topic} Inspiration: 5 Ideas to Try Today' },
  { type: 'Instagram Post', template: 'Monday Motivation: Why {topic} Changed My Life' },
  { type: 'Instagram Post', template: '{topic} Tools I Can\'t Live Without' },

  // LinkedIn Post Templates
  { type: 'LinkedIn Post', template: 'My Top 3 Learnings About {topic} This Year' },
  { type: 'LinkedIn Post', template: 'Why Every Professional Should Learn {topic}' },
  { type: 'LinkedIn Post', template: 'The {topic} Skills That Got Me Promoted' },
  { type: 'LinkedIn Post', template: 'Industry Insights: The Future of {topic}' },

  // Facebook Poll Templates
  { type: 'Facebook Poll', template: 'What is your biggest challenge with {topic}?' },
  { type: 'Facebook Poll', template: 'Which {topic} strategy works best for you?' },
  { type: 'Facebook Poll', template: 'What\'s your favorite {topic} tool?' },

  // Twitter Thread Templates
  { type: 'Twitter Thread', template: '🧵 Thread: 7 {topic} tips that changed everything for me' },
  { type: 'Twitter Thread', template: '🧵 The {topic} mistakes I wish I knew earlier' },
  { type: 'Twitter Thread', template: '🧵 How to get started with {topic} (beginner-friendly)' },

  // Infographic Templates
  { type: 'Infographic', template: 'The Entire {topic} Process in One Visual Guide' },
  { type: 'Infographic', template: '{topic} Statistics That Will Surprise You' },
  { type: 'Infographic', template: '{topic} vs Traditional Methods: A Comparison' },
  { type: 'Infographic', template: 'The {topic} Timeline: Past, Present, and Future' },

  // Podcast Episode Templates
  { type: 'Podcast Episode', template: 'Deep Dive: The Psychology Behind {topic}' },
  { type: 'Podcast Episode', template: 'Success Stories: How {topic} Transformed These Lives' },
  { type: 'Podcast Episode', template: 'Debunking {topic} Myths with Industry Experts' },

  // Email Newsletter Templates
  { type: 'Email Newsletter', template: 'Weekly {topic} Roundup: What You Missed' },
  { type: 'Email Newsletter', template: '{topic} Resources You Should Bookmark' },
  { type: 'Email Newsletter', template: 'Exclusive {topic} Tips for Our Subscribers' },

  // Case Study Templates
  { type: 'Case Study', template: 'How We Increased {topic} Results by 300%' },
  { type: 'Case Study', template: 'Real Client Results: {topic} Success Story' },
  { type: 'Case Study', template: 'From Zero to Hero: A {topic} Transformation' },

  // How-to Guide Templates
  { type: 'How-to Guide', template: 'How to Create a Winning {topic} Strategy' },
  { type: 'How-to Guide', template: 'How to Measure {topic} Success in 2024' },
  { type: 'How-to Guide', template: 'How to Overcome {topic} Challenges' },
  { type: 'How-to Guide', template: 'How to Scale Your {topic} Efforts' },
];
