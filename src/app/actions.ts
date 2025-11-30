'use server';

import { FormData } from '@/types';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function generateResume(data: FormData) {
  const prompt = `
    You are a professional resume writer. Based on the following user data, generate a professional resume summary and enhance the job descriptions.
    
    User Data:
    ${JSON.stringify(data, null, 2)}
    
    Please provide the output in the following JSON format:
    {
      "summary": "Professional summary...",
      "enhancedExperience": [
        {
          "id": "job-id",
          "description": "Enhanced job description..."
        }
      ]
    }
    
    Keep the tone professional and action-oriented.
  `;

  try {
    const { text } = await generateText({
      model: google('gemini-1.5-flash'),
      prompt: prompt,
    });

    return { success: true, data: text };
  } catch (error) {
    console.error('Error generating resume:', error);
    return { success: false, error: 'Failed to generate resume' };
  }
}
