export interface SprintData {
  day: string;
  ideal: number;
  actual: number;
  remaining?: number;
}

export interface BacklogItem {
  id: string;
  title: string;
  description: string;
  points: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Ready' | 'In Progress' | 'Backlog' | 'Done';
  complexity: 'Very High' | 'High' | 'Medium' | 'Low';
  businessValue: 'Critical' | 'High' | 'Medium' | 'Low';
  riskLevel: 'High' | 'Medium' | 'Low';
  dependencies: string[];
  aiSuggestion?: string;
  flagged: boolean;
  estimatedHours: number;
  acceptanceCriteria: number;
}

export interface StandupData {
  date: string;
  summary: string;
  attendees: string[];
  blockers: Array<{
    issue: string;
    owner: string;
    days: number;
    severity: 'Critical' | 'Medium' | 'Low';
    impact: string;
  }>;
  metrics: {
    velocityTrend: string;
    burnRate: string;
    codeQuality: string;
    testCoverage: string;
  };
}

export interface Sprint {
  name: string;
  goal: string;
  daysRemaining: number;
  totalDays: number;
  pointsCompleted: number;
  totalPoints: number;
  velocity: number;
  confidenceLevel: number;
  riskLevel: 'High' | 'Medium' | 'Low';
}

export interface Notification {
  id: number;
  type: 'success' | 'warning' | 'info' | 'critical';
  message: string;
  priority: 'high' | 'medium' | 'low';
  timestamp: string;
}