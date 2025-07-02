
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GeneratePillarsRequest {
  topic: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY not found');
    }

    const { topic }: GeneratePillarsRequest = await req.json();

    const prompt = `You are a Content Strategist. Based on the Main Topic "${topic}", propose 4 Content Pillars for building a content plan. Content Pillars are broad, overarching themes from which many smaller ideas can be developed. 

Each pillar should be:
1. Specific to the topic "${topic}"
2. Distinct from the others
3. Broad enough to generate multiple content ideas
4. Relevant to the target audience interested in "${topic}"

Return the result as a simple numbered list with just the pillar names, one per line.`;

    console.log('Generating content pillars for topic:', topic);

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
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 512,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Content pillars generated successfully');

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response format from Gemini API');
    }

    const generatedText = data.candidates[0].content.parts[0].text;
    
    // Parse the generated pillars
    const pillars = generatedText
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(pillar => pillar.length > 0)
      .slice(0, 4); // Ensure we only get 4 pillars

    return new Response(JSON.stringify({ pillars }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-pillars-with-gemini function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: 'Failed to generate content pillars with Gemini API'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
