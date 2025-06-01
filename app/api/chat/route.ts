import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  console.log('Chat API route called' + req.body);
  try {
    // Log the request headers
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));
    
    const body = await req.json();
    console.log('Received request body:', body);
    
    const { prompt }: { prompt: string } = body;
    if (!prompt) {
      console.error('No prompt provided in request');
      return Response.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is set
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not set in environment variables');
      return Response.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    console.log('Generating text with prompt:', prompt);
    try {
      const { text } = await generateText({
        model: openai('gpt-4o'),
        system: 'You are a helpful assistant.',
        prompt: "say hello",
      });
      console.log('Generated text:', text);

      return Response.json({ text });
    } catch (openaiError) {
      console.error('OpenAI API error:', {
        error: openaiError,
        message: openaiError instanceof Error ? openaiError.message : 'Unknown OpenAI error',
        stack: openaiError instanceof Error ? openaiError.stack : undefined
      });
      return Response.json(
        { error: 'Failed to generate response from OpenAI' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Detailed error in chat API:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}