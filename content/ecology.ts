/*
  The Ecology canvas — a living map of the downstream ecosystem, rendered at
  /ecology. A thinking surface: add, merge, and retire elements as clarity
  emerges. Growing this map = editing this file only. Belongs to Stream 2.
  Writing rule: every name and line must be instantly understandable — readers
  should get what it is without decoding any metaphor.
*/

export interface EcologyLayer {
  id: string;
  name: string;
  description: string;
  elements: string[];
  question?: string;
}

export const ECOLOGY_LAYERS: EcologyLayer[] = [
  {
    id: 'source',
    name: 'Where intelligence comes from',
    description:
      'A small number of labs build frontier models. Through APIs and open weights, that capability reaches everyone else.',
    elements: ['Frontier labs', 'Open-weight models', 'Model APIs', 'Research releases'],
    question: 'What is arriving next — and what does it make possible for the rest of us?',
  },
  {
    id: 'spread',
    name: 'How it spreads',
    description:
      'The channels that decide who can actually use this capability, and at what cost.',
    elements: [
      'Falling inference costs',
      'Long context',
      'Tool use & computer use',
      'Fine-tuning & post-training access',
      'Small & distilled models',
    ],
    question: 'Which channels are opening up, and which are still blocked?',
  },
  {
    id: 'built',
    name: 'What gets built on top',
    description:
      'The tools and systems that turn raw model capability into something dependable and useful.',
    elements: [
      'Agent systems',
      'Evaluation & verification',
      'Memory & context systems',
      'Data pipelines',
      'Orchestration',
      'Safety tooling',
    ],
    question: 'How much capability goes unused because these pieces are missing?',
  },
  {
    id: 'people',
    name: 'Who uses it',
    description:
      'People and organizations at every scale — each with different needs, budgets, and possibilities.',
    elements: [
      'Independent builders & researchers',
      'Data scientists',
      'Startups',
      'Small & family businesses',
      'Enterprises',
      'Public institutions & communities',
    ],
    question: 'What can each of them attempt now that was impossible before?',
  },
  {
    id: 'value',
    name: 'What value emerges',
    description:
      'What all of this produces when capability, tools, and people come together.',
    elements: [
      'New products & services',
      'New practices & professions',
      'Discoveries & new knowledge',
      'New markets & industries',
      'Education & capability building',
    ],
    question: 'Which of these compound over time — and which disappear with the next model release?',
  },
  {
    id: 'health',
    name: 'What keeps it healthy',
    description:
      'The conditions that decide whether the whole ecosystem stays beneficial as people and AI interact more and more.',
    elements: [
      'Safety & coexistence',
      'Interpretability & trust',
      'Governance & norms',
      'Skill preservation',
      'Fair distribution of benefit',
    ],
    question: 'How do we keep abundance safe, understandable, and fairly shared?',
  },
];

/* Directions being actively explored. Unfinished on purpose. */
export const POSSIBILITIES: string[] = [
  'One-person labs doing research that used to need a whole team',
  'AI-assisted discoveries that hold up to real scientific standards',
  'Small and family businesses using abundant intelligence without needing an AI team',
  'Healthcare, education, and agriculture reached by capability that never reached them before',
  'New professions: building agent systems, evaluating them, designing their context',
  'Ways of working where human judgment and AI capability strengthen each other',
];
