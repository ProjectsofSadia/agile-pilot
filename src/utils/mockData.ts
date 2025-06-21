import { SprintData, BacklogItem, StandupData } from '../types';

export const generateSprintData = (): SprintData[] => {
  return Array.from({ length: 10 }, (_, i) => ({
    day: `Day ${i + 1}`,
    ideal: 100 - (i * 10),
    actual: Math.max(0, 100 - (i * 10) + Math.random() * 10 - 5),
    remaining: Math.max(0, 32 - (i * 3.2))
  }));
};

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const simulateAIProcessing = async (action: string): Promise<string> => {
  await delay(2000 + Math.random() * 1000);
  return `AI ${action} completed successfully with 94% confidence`;
};