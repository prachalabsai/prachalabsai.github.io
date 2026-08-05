/*
  The Ecology canvas — a living map of the downstream basin, rendered at /ecology.
  This is deliberately a thinking surface: throw elements in, merge, retire, and
  reshape them as clarity emerges. Growing this map = editing this file only.
  Belongs to Stream 2 (The Ecology of Intelligence).
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
    name: 'The Source',
    description: 'Where capability enters the basin — made by few, flowing to everyone.',
    elements: [
      'Frontier labs',
      'Open-weight models',
      'Model APIs',
      'Research releases',
    ],
    question: 'What arrives next, and what does each arrival newly make possible?',
  },
  {
    id: 'flows',
    name: 'The Flows',
    description: 'How capability actually moves and spreads — the currents that decide who can use what.',
    elements: [
      'Falling inference costs',
      'Long context',
      'Tool use & computer use',
      'Post-training access',
      'Distillation & small models',
    ],
    question: 'Which flows are widening, and which are still dammed?',
  },
  {
    id: 'ground',
    name: 'The Ground',
    description: 'What gets built on and into — the working substrate between raw capability and real use.',
    elements: [
      'Agent systems & harnesses',
      'Evaluation & verification',
      'Memory & context systems',
      'Data pipelines',
      'Orchestration',
      'Safety tooling',
    ],
    question: 'How much capability sits unharvested behind missing or bad substrate?',
  },
  {
    id: 'inhabitants',
    name: 'The Inhabitants',
    description: 'Everyone who lives and works in the basin — value creation at every scale.',
    elements: [
      'Independent builders & researchers',
      'Data scientists',
      'Startups',
      'Small & family businesses',
      'Enterprises',
      'Public institutions & communities',
    ],
    question: 'What does each inhabitant newly attempt that was impossible before?',
  },
  {
    id: 'growth',
    name: 'What Grows',
    description: 'The value forms the basin produces when capability, substrate, and people meet.',
    elements: [
      'New products & services',
      'New practices & crafts',
      'Discoveries & new knowledge',
      'New markets & industries',
      'Education & capability building',
    ],
    question: 'Which of these compound, and which evaporate with the next release?',
  },
  {
    id: 'climate',
    name: 'The Climate',
    description: 'The conditions that decide whether the whole basin flourishes — the throughlines, operating at ecosystem scale.',
    elements: [
      'Safety & coexistence',
      'Interpretability & trust',
      'Governance & norms',
      'Skill preservation',
      'Distribution of benefit',
    ],
    question: 'What keeps abundance beneficial as humans and intelligence increasingly interact?',
  },
];

/* Open territories — possibilities being actively thought about. Unfinished on purpose. */
export const POSSIBILITIES: string[] = [
  'One-person labs producing frontier-grade downstream research',
  'Verified discovery — AI-assisted findings that pass real evidence standards',
  'Small-business intelligence — what a family business does with abundant capability',
  'Domain deltas — science, healthcare, education, agriculture reached by capability that never reached them before',
  'New crafts — harness engineering, evaluation, and context design as professions',
  'Coexistence patterns — interaction designs where human judgment and machine capability compound each other',
];
