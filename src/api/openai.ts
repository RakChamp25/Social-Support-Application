import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-3.5-turbo";

export interface AISuggestionResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export async function getAISuggestion(prompt: string): Promise<string> {
  const key = import.meta.env.VITE_OPENAI_KEY;

  if (!key) {
    console.error("Missing OpenAI API key. Set VITE_OPENAI_KEY in .env file.");
    throw new Error("OpenAI API key is missing.");
  }

  try {
    const response = await axios.post<AISuggestionResponse>(
      API_URL,
      {
        model: MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error: any) {
    console.error("Error fetching AI suggestion:", error);
    throw new Error(
      error?.response?.data?.error?.message || "Failed to get AI suggestion"
    );
  }
}
