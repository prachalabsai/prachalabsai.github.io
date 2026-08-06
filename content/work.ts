export type WorkType =
  | 'tool'
  | 'experiment'
  | 'venture'
  | 'paper'
  | 'demo'
  | 'case-study'
  | 'use-case'
  | 'artifact';
export type WorkStatus = 'Active' | 'Alpha' | 'Beta' | 'Live' | 'Archived';

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: WorkType;
  status: WorkStatus;
  streams: number[];
  tags: string[];
}

/* Real outputs only. If it could have been made by anyone with model access,
   it doesn't ship — and it doesn't get listed here. */
export const WORK: WorkItem[] = [
  {
    id: 'learning-philosophy',
    title: 'Learning Philosophy as a Problem Solver',
    description:
      'A public learning and research repo: philosophy as a problem-framing discipline — epistemology, kinds of claims, and how concepts become testable research questions in AI.',
    url: 'https://github.com/prabakaranc98/learning-philosophy-as-a-problemsolver',
    type: 'artifact',
    status: 'Active',
    streams: [5, 6],
    tags: ['Philosophy', 'Epistemology', 'Research Methods'],
  },
  {
    id: 'echologic',
    title: 'EchoLogic',
    description: 'A simulation engine of the human mind and behavior.',
    url: 'https://github.com/prabakaranc98/echologic',
    type: 'tool',
    status: 'Alpha',
    streams: [6],
    tags: ['Simulation', 'Cognition', 'Behavior'],
  },
];
