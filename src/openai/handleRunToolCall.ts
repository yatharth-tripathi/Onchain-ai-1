import openAI from 'openai';
import { Thread } from 'openai/resources/beta/threads/threads.mjs';
import { Run } from 'openai/resources/beta/threads/runs/runs.mjs';
import { tools } from '../tools/allTools';

export async function handleRunToolCalls(run: Run, client:openAI, thread:Thread): Promise<Run> {
    
}