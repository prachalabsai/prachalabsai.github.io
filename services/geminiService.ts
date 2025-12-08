import { GoogleGenAI } from "@google/genai";

// Initialize the client. 
// Note: In a real deployment, ensure process.env.API_KEY is set.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const critiqueHypothesis = async (hypothesis: string): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    
    const prompt = `
      You are a senior research collaborator at PrachaLabs. 
      The user is a researcher proposing a hypothesis. 
      
      Your goal is to:
      1. Analyze the hypothesis for theoretical soundness.
      2. Suggest 1 counter-argument or potential pitfall.
      3. Propose an interdisciplinary angle (e.g., connection to biology, psychology, or physics).
      
      Keep the tone academic yet encouraging, "retro-futuristic", and concise.
      Format the output in Markdown.

      Hypothesis: "${hypothesis}"
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "Analysis complete. No output generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The lab equipment is currently offline. Please check your API key configuration.";
  }
};
