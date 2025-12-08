
import { Experiment, Tool } from './types';

/* 
  =============================================================================
  PRACHALABS MANIFEST
  =============================================================================
  
  HOW TO ADD NEW CONTENT:
  1. Add your .md file to the `posts/journal/` or `posts/articles/` folder.
  2. Ensure the markdown file has the Frontmatter header (title, date, tags).
  3. Add the file path to the respective manifest array below.
*/

// Manifest of Markdown files for the Journal
export const JOURNAL_MANIFEST = [
  'posts/journal/emergence.md',
];

// Manifest of Markdown files for Articles
export const ARTICLE_MANIFEST = [
  'posts/articles/human-ai.md',
];


// 2. EXPERIMENT TRACKER (DASHBOARD DATA)
export const EXPERIMENTS: Experiment[] = [
  {
    id: 'exp-001',
    title: 'Cognitive Streams',
    status: 'In Progress',
    lastUpdate: '2025-01-28',
    description: 'Visualizing the "thought process" of LLMs using dynamic graph generation.',
    hypothesis: 'Mapping semantic drift in long-context reasoning reveals a fractal structure similar to human biological memory consolidation.',
    metrics: [
        { label: 'Context Win', value: '128k' },
        { label: 'Nodes', value: '14k' },
        { label: 'Drift', value: '-12%' }
    ],
    stack: ['Python', 'NetworkX', 'Gemini 1.5 Pro', 'React'],
    tags: ['NLP', 'Visualization', 'Interpretability']
  },
  {
    id: 'exp-002',
    title: 'Project: Scribe',
    status: 'Published',
    lastUpdate: '2025-01-15',
    description: 'A minimalist tool for converting unstructured audio ramblings into structured research hypotheses.',
    hypothesis: 'Unstructured audio capture reduces friction in hypothesis generation by 40% compared to text-first interfaces.',
    metrics: [
        { label: 'Users', value: 'Alpha' },
        { label: 'Latency', value: '200ms' }
    ],
    stack: ['Whisper', 'FastAPI', 'Tailwind'],
    tags: ['Audio', 'Productivity', 'Tools']
  },
  {
    id: 'exp-003',
    title: 'The Moral Compass',
    status: 'Hypothesis',
    lastUpdate: '2025-02-01',
    description: 'Attempting to quantify "research taste" as an objective function in automated discovery systems.',
    hypothesis: 'Research "taste" is not subjective but a learnable high-dimensional manifold of historical citation graphs and novelty scores.',
    metrics: [
        { label: 'Simulation', value: 'Pending' }
    ],
    stack: ['Pytorch', 'GraphRAG'],
    tags: ['Alignment', 'Theory']
  }
];

// 3. TOOLS / APPS (Design & Human Centered AI)
export const TOOLS: Tool[] = [
  {
    id: 'tool-001',
    title: 'Idea Weaver',
    description: 'A spatial canvas for non-linear thinking. It uses embedding clusters to help you weave connections between scattered notes and ideas.',
    url: 'https://github.com/prachalabs', 
    tags: ['Design', 'Thinking', 'Canvas'],
    status: 'Beta'
  },
  {
    id: 'tool-002',
    title: 'Zen Reader',
    description: 'An AI-wrapper that strips cognitive load from dense academic papers, presenting them as Socratic dialogues.',
    url: 'https://github.com/prachalabs',
    tags: ['Reading', 'Accessibility'],
    status: 'Alpha'
  }
];
