
export interface AdvancedContentTemplate {
  type: string;
  template: string;
  audience: string[];
  platforms: string[];
}

export const advancedContentMatrix: AdvancedContentTemplate[] = [
  // Blog Post Templates (15 templates)
  { type: 'Blog Post', template: 'The Ultimate Step-by-Step Guide to {topic}', audience: ['Beginners', 'General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '10 Common Mistakes to Avoid in {topic}', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Why {topic} is More Important Than You Think', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Advanced {topic} Strategies for Professionals', audience: ['Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Case Study: How We Achieved Success with {topic}', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Comparing the Top 5 Tools for {topic}', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'The Complete Beginner\'s Guide to {topic}', audience: ['Beginners'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '{topic} Trends to Watch in 2024', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'The Psychology Behind {topic}: What You Need to Know', audience: ['Experts', 'General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'How to Master {topic} in 30 Days', audience: ['Beginners', 'General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'The Hidden Costs of Ignoring {topic}', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '{topic} Myths Debunked by Industry Experts', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'From Zero to Hero: My {topic} Journey', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'The Future of {topic}: Predictions and Insights', audience: ['Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'How {topic} Can Transform Your Business in 2024', audience: ['General Audience'], platforms: ['Blog'] },

  // YouTube Video Templates (12 templates)
  { type: 'YouTube Video', template: '{topic} for Beginners: Everything You Need to Know', audience: ['Beginners'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Expert Interview: The Future of {topic}', audience: ['Experts'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'My {topic} Journey: Lessons Learned', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Reacting to Popular {topic} Myths', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{topic} Q&A: Answering Your Top Questions', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Advanced {topic} Techniques Revealed', audience: ['Experts'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Behind the Scenes: How I Use {topic} Daily', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{topic} Tools Review: What Actually Works?', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Live Tutorial: {topic} Step-by-Step', audience: ['Beginners', 'General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'The Biggest {topic} Mistakes I Made (So You Don\'t Have To)', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{topic} Challenge: 7 Days to Success', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Collaboration: {topic} Experts Share Their Secrets', audience: ['Experts'], platforms: ['YouTube'] },

  // TikTok Video Templates (8 templates)
  { type: 'TikTok Video', template: '3 Quick Tips for {topic} in Under 60 Seconds', audience: ['Beginners', 'General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{topic} Hacks That Actually Work', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'Before vs After: My {topic} Transformation', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'Things Nobody Tells You About {topic}', audience: ['General Audience', 'Experts'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{topic} Red Flags You Need to Avoid', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'POV: You Just Started {topic}', audience: ['Beginners'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{topic} Trend vs Reality Check', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'Rating {topic} Advice from the Internet', audience: ['General Audience'], platforms: ['TikTok'] },

  // Instagram Post Templates (10 templates)
  { type: 'Instagram Post', template: 'Behind the Scenes: My {topic} Process', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{topic} Inspiration: 5 Ideas to Try Today', audience: ['Beginners', 'General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Monday Motivation: Why {topic} Changed My Life', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{topic} Tools I Can\'t Live Without', audience: ['General Audience', 'Experts'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Carousel: {topic} Statistics That Will Shock You', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Before & After: {topic} Results That Speak', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{topic} Aesthetic: Creating the Perfect Setup', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Throwback: How {topic} Has Evolved', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{topic} Fails and What I Learned', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Quick Poll: What\'s Your {topic} Style?', audience: ['General Audience'], platforms: ['Instagram'] },

  // LinkedIn Post Templates (8 templates)
  { type: 'LinkedIn Post', template: 'My Top 3 Learnings About {topic} This Year', audience: ['General Audience', 'Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Why Every Professional Should Learn {topic}', audience: ['General Audience'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'The {topic} Skills That Got Me Promoted', audience: ['General Audience', 'Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Industry Insights: The Future of {topic}', audience: ['Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Unpopular Opinion: {topic} is Overrated (Here\'s Why)', audience: ['Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'How {topic} Saved My Career During Tough Times', audience: ['General Audience'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'The {topic} Conversation We Need to Have', audience: ['Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Career Advice: How to Get Started with {topic}', audience: ['Beginners'], platforms: ['LinkedIn'] },

  // Facebook Post Templates (7 templates)
  { type: 'Facebook Post', template: 'What is your biggest challenge with {topic}?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Which {topic} strategy works best for you?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'What\'s your favorite {topic} tool?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Let\'s discuss: The future of {topic}', audience: ['General Audience', 'Experts'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Share your {topic} wins from this week!', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Community Question: Best {topic} resources?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Would you rather: {topic} edition', audience: ['General Audience'], platforms: ['Facebook'] },
];

export const eventContentMatrix: AdvancedContentTemplate[] = [
  // Holiday/Event-Specific Templates (50+ templates)
  { type: 'Blog Post', template: 'How to Leverage {topic} to Maximize Your {event} Results', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Don\'t Make These {topic} Mistakes During {event}', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '{event} {topic} Strategy: What You Need to Know', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'The Ultimate {event} {topic} Preparation Checklist', audience: ['Beginners', 'General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'How {topic} Can Make Your {event} Unforgettable', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '{event} Case Study: How {topic} Boosted Our Results by 300%', audience: ['General Audience', 'Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Last-Minute {event} {topic} Ideas That Actually Work', audience: ['General Audience'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'Why {event} is the Perfect Time to Start {topic}', audience: ['Beginners'], platforms: ['Blog'] },
  { type: 'Blog Post', template: '{event} {topic} Trends That Will Dominate This Year', audience: ['Experts'], platforms: ['Blog'] },
  { type: 'Blog Post', template: 'From Planning to Execution: {event} {topic} Mastery', audience: ['General Audience'], platforms: ['Blog'] },
  
  { type: 'Instagram Post', template: '{event} {topic} Ideas That Convert', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Getting Ready for {event} with {topic}', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{event} Countdown: {topic} Checklist', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{event} Mood: {topic} Edition', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Behind the Scenes: Our {event} {topic} Setup', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{event} Inspiration: {topic} Style Guide', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Carousel: {event} {topic} Do\'s and Don\'ts', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{event} Giveaway: Win {topic} Essentials', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: 'Poll: What\'s Your {event} {topic} Priority?', audience: ['General Audience'], platforms: ['Instagram'] },
  { type: 'Instagram Post', template: '{event} Throwback: {topic} Evolution', audience: ['General Audience'], platforms: ['Instagram'] },

  { type: 'YouTube Video', template: '{event} {topic} Preparation Guide', audience: ['Beginners', 'General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Last-Minute {event} {topic} Tips', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{event} {topic} Haul and Review', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Live: {event} {topic} Q&A Session', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{event} {topic} Challenge: Join Me!', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Expert Interview: {topic} Trends for {event}', audience: ['Experts'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{event} {topic} Transformation: Before & After', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'Reacting to {event} {topic} Fails', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: '{event} {topic} Budget vs Luxury Comparison', audience: ['General Audience'], platforms: ['YouTube'] },
  { type: 'YouTube Video', template: 'My {event} {topic} Routine Revealed', audience: ['General Audience'], platforms: ['YouTube'] },

  { type: 'TikTok Video', template: '{event} {topic} Hacks You Need to Try', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{event} {topic} Mistakes to Avoid', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'POV: It\'s {event} and You Need {topic}', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{event} {topic} Expectations vs Reality', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'Rating {event} {topic} Trends', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{event} {topic} in 60 Seconds', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: 'Last Minute {event} {topic} Ideas', audience: ['General Audience'], platforms: ['TikTok'] },
  { type: 'TikTok Video', template: '{event} {topic} Transformation Challenge', audience: ['General Audience'], platforms: ['TikTok'] },

  { type: 'LinkedIn Post', template: 'Professional {topic} Tips for {event}', audience: ['General Audience', 'Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'How {event} Impacts {topic} Strategy', audience: ['Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: '{event} Networking: The {topic} Advantage', audience: ['General Audience'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'B2B {topic} Strategies for {event}', audience: ['Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: '{event} ROI: Measuring {topic} Success', audience: ['Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Career Growth: Using {event} for {topic}', audience: ['General Audience'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: 'Industry Report: {event} {topic} Insights', audience: ['Experts'], platforms: ['LinkedIn'] },
  { type: 'LinkedIn Post', template: '{event} Lessons: What {topic} Taught Me', audience: ['General Audience'], platforms: ['LinkedIn'] },

  { type: 'Facebook Post', template: 'What are your {event} {topic} plans?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Share your {event} {topic} success stories!', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: '{event} {topic} group challenge - who\'s in?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Best {event} {topic} memories from last year?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: '{event} {topic} tips exchange thread', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Poll: {event} {topic} priorities this year?', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: '{event} {topic} community support thread', audience: ['General Audience'], platforms: ['Facebook'] },
  { type: 'Facebook Post', template: 'Local {event} {topic} events - let\'s connect!', audience: ['General Audience'], platforms: ['Facebook'] },
];
