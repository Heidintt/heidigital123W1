
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GenerateContentRequest {
  topic: string;
  audience: string;
  goal: string;
  platform: string;
  contentPillars: Array<{ name: string }>;
  previousTitles?: string[];
  creativeAngle?: string;
}

const creativeAngles = [
  "Focus on myth-busting and challenging common misconceptions",
  "Take a data-driven approach with statistics and research",
  "Emphasize personal transformation and success stories",
  "Highlight contrarian viewpoints and unconventional wisdom",
  "Focus on practical, actionable step-by-step guides",
  "Take an emotional storytelling approach",
  "Emphasize urgency and time-sensitive opportunities",
  "Focus on behind-the-scenes and insider knowledge",
  "Take a problem-solving and troubleshooting angle",
  "Emphasize community and social proof"
];

const generateGeminiPrompt = (request: GenerateContentRequest): string => {
  const pillarsText = request.contentPillars.map(p => p.name).join(', ');
  
  let prompt = `You are a master-class Creative Strategist and a brilliant thinker, capable of deconstructing any topic to find the most unique angles for groundbreaking content.

### STEP 1: DEEP TOPIC ANALYSIS (Internal Thought Process)

Before doing anything else, deeply analyze the provided topic.

**Main Topic:** ${request.topic}

Silently think and list 3-5 core aspects, pain points, or hidden desires of the target audience related to this specific topic. (This step is for your internal reasoning only and should not be in the final output).

### STEP 2: CONTENT CALENDAR GENERATION

Now, using your deep understanding from Step 1 and the information below, create a detailed Content Calendar.

- **Target Audience:** ${request.audience}
- **Campaign Goal:** ${request.goal}
- **Platform:** ${request.platform}
- **Content Pillars:** ${pillarsText}

The quality requirements are **ABSOLUTE**:

1. **Topic-Specific Uniqueness:** Every Title and Description must authentically reflect the essence of "${request.topic}". A title for "meditation" must sound completely different from a title for "B2B marketing".
2. **Suggested Title:** Must be a complete, creative, and emotionally resonant or curiosity-driven headline. **STRICTLY FORBID** generic, placeholder-like titles.
3. **Brief Description:** Must be written like an actual social media caption, focusing on the value and benefits the viewer will receive.

Generate exactly 12 content ideas distributed across 4 weeks (3 per week). Return the result as a complete Markdown table with columns:
- Week
- Content Pillar
- Funnel Stage (TOFU/MOFU/BOFU)
- Suggested Title
- Format
- Brief Description/Notes
- Call to Action (CTA)`;

  // Add Smart Regenerate logic if applicable
  if (request.previousTitles && request.previousTitles.length > 0 && request.creativeAngle) {
    prompt += `

---
**(Smart Regenerate Mode)**

**CREATIVE ANGLE FOR THIS GENERATION:** ${request.creativeAngle}
**PREVIOUSLY GENERATED IDEAS TO AVOID:**
${request.previousTitles.join('\n')}

Based on the new creative angle, generate a completely different set of ideas, ensuring they are not similar to the ones in the avoidance list.
---`;
  }

  return prompt;
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY not found');
    }

    const requestData: GenerateContentRequest = await req.json();
    
    // Select random creative angle for regeneration if not provided
    const creativeAngle = requestData.creativeAngle || 
      creativeAngles[Math.floor(Math.random() * creativeAngles.length)];

    const prompt = generateGeminiPrompt({
      ...requestData,
      creativeAngle
    });

    console.log('Sending request to Gemini API with prompt:', prompt.substring(0, 200) + '...');

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Gemini API response received successfully');

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response format from Gemini API');
    }

    const generatedContent = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ 
      generatedContent,
      creativeAngle: creativeAngle
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-content-with-gemini function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: 'Failed to generate content with Gemini API'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
