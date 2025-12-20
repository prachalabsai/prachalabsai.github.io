
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
    title: 'Rewire',
    description: 'Year-end reflection, reimagined as a gentle experiment. Not to dwell on the past, but to design a better next time.',
    url: 'https://rewire.prachalabs.com/',
    tags: ['Reflection', 'Counterfactual', 'Planning'],
    status: 'Beta'
  },
  {
    id: 'tool-002',
    title: 'BoundedAgents',
    description: 'Know your customer instantly. Enter any company website URL and generate data-driven customer personas using AI.',
    url: 'https://boundedagents-915250653588.us-west1.run.app/',
    tags: ['Analysis', 'Customer', 'Personas'],
    status: 'Alpha'
  },
  {
    id: 'tool-003',
    title: 'Holiday Bento',
    description: 'A warm recommender system for course planning. Prepare your feast - balanced like a perfect Thanksgiving plate.',
    url: 'https://bentocourse-elective-balancer-915250653588.us-west1.run.app/',
    tags: ['Education', 'Planning', 'Courses'],
    status: 'Beta'
  },
  {
    id: 'tool-004',
    title: 'CooC',
    description: 'Connected Universes - an omni-view projection tool for exploring and initializing interconnected knowledge domains.',
    url: 'https://nexus-connected-universes-569697114100.us-west1.run.app/',
    tags: ['Exploration', 'Knowledge', 'Visualization'],
    status: 'Alpha'
  }
];
