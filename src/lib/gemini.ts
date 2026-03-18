import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

async function gemini(
  prompt: string,
  instruction?: string,
): Promise<string | undefined> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: instruction,
    },
  });

  return response.text;
}

export default gemini;
