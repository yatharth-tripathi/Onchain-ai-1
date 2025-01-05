import openAI from 'openai';
import { Assistant } from 'openai/resources/beta/assistants.mjs';


export async function createAssistant(client: openAI): Promise<Assistant> {
  return await client.beta.assistants.create({
    model: "gpt-4o-mini",
    name: "yatiss world",
    instructions: `...`,
    tools:[]
});

}