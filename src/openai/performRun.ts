import openAI from 'openai';
import { Thread } from 'openai/resources/beta/threads/threads.mjs';
import { Run } from 'openai/resources/beta/threads/runs/runs.mjs';
import { handleRunToolCalls } from './handleRunToolCall';

export async function performRun(run: Run, client:openAI, thread:Thread)   {     
  while (run.status === "requires_action") {
    run = await handleRunToolCalls(run,client,thread);
  }
  if (run.status === 'failed') {
    const errorMessages = `I encountered an error while : ${run.last_error?.message || 'Unknown error'}`;
    console.error('Run failed:', run.last_error);
    await client.beta.threads.messages.create(thread.id, {
        role: 'assistant',
        content: errorMessages,

    });

    return {
        type: 'text',
        text:{
            value :errorMessages,
            annotations: []
        }
    };
  }
        const message = await client.beta.threads.messages.list(thread.id);
        const assistantMessages = message.data.find(message => message.role === 'assistant');

        return assistantMessages?.content[0] || 
           {type : 'text' , text: {value: 'I have no response', annotations: []}};
   
}
