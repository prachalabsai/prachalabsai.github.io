// The Integrated AI Research, Engineering & Entrepreneurship Stack

export interface Principle {
  id: string;
  name: string;
  anchor: string;
  definition: string;
}

export interface ProblemSpace {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pillar: 'systems' | 'behavior' | 'intelligence';
}

export interface SolutionToolkit {
  id: string;
  name: string;
  items: string[];
}

export const FIRST_PRINCIPLES: Principle[] = [
  {
    id: 'systems',
    name: 'Systems',
    anchor: 'Ontology',
    definition: 'The structural reality of the world. Understanding that everything is an interconnected web of dynamics, risks, and infrastructures.',
  },
  {
    id: 'behavior',
    name: 'Behavior',
    anchor: 'Phenomenology',
    definition: 'The interactive reality. The study of intent, incentives, and the decisions made by agents—human or synthetic—operating within those systems.',
  },
  {
    id: 'intelligence',
    name: 'Intelligence',
    anchor: 'Methodology',
    definition: 'The cognitive reality. The mechanisms of reasoning, learning, and safety required to process systems and behavior effectively.',
  },
];

// Problem Spaces grouped by pillar
export const PROBLEM_SPACES: ProblemSpace[] = [
  // Systems — Dynamics, Risk & Infrastructure
  {
    id: 'forecasting-macro',
    title: 'Forecasting Macro Outcomes',
    subtitle: 'Predictive Systems',
    description: 'Engineering early-warning forecasting engines for trajectory shifts in interconnected, feedback-driven environments.',
    pillar: 'systems',
  },
  {
    id: 'chaotic-systems',
    title: 'Predicting the Unpredictable',
    subtitle: 'Chaotic Systems',
    description: 'Modeling highly sensitive environments beyond standard time horizons while retaining predictive power.',
    pillar: 'systems',
  },
  {
    id: 'regime-shifts',
    title: 'Adapting to Sudden Changes',
    subtitle: 'Regime Shifts',
    description: 'Designing continuous learning pipelines that detect structural breaks and adapt without catastrophic failure.',
    pillar: 'systems',
  },
  {
    id: 'uncertainty-quantification',
    title: 'Guaranteeing Safety in the Unknown',
    subtitle: 'Uncertainty Quantification',
    description: 'Mathematically bounding uncertainty in high-stakes, partially observable environments.',
    pillar: 'systems',
  },

  // Behavior — Intent, Agents & Decisions
  {
    id: 'digital-populations',
    title: 'Simulating Human Dynamics',
    subtitle: 'Digital Populations',
    description: 'Constructing synthetic populations of bounded AI agents to stress-test policies and interventions.',
    pillar: 'behavior',
  },
  {
    id: 'performative-loop',
    title: 'Solving the Performative Loop',
    subtitle: 'Recommendation Systems',
    description: 'Modeling user preferences while accounting for how recommendations actively alter desire over time.',
    pillar: 'behavior',
  },
  {
    id: 'strategic-behavior',
    title: 'Defeating Algorithmic Gaming',
    subtitle: 'Strategic Behavior',
    description: 'Engineering robust incentive structures to prevent adversarial exploitation of AI-mediated systems.',
    pillar: 'behavior',
  },
  {
    id: 'user-modeling',
    title: 'Isolating True Intent',
    subtitle: 'User Modeling',
    description: 'Inferring underlying motives and goals from streaming behavioral data, stripping away selection bias.',
    pillar: 'behavior',
  },
  {
    id: 'human-ai-trust',
    title: 'Calibrating Human-AI Trust',
    subtitle: 'Copilot Design',
    description: 'Designing copilots that dynamically adjust to human cognitive limits while preventing skill degradation.',
    pillar: 'behavior',
  },

  // Intelligence — Methods, Reasoning & Safety
  {
    id: 'world-models',
    title: 'Simulating the Physics of Reality',
    subtitle: 'World Models',
    description: 'Foundation models that internalize underlying physics and dynamics for complex planning.',
    pillar: 'intelligence',
  },
  {
    id: 'multimodality',
    title: 'Fusing Senses for Real-World Action',
    subtitle: 'Multimodality',
    description: 'Combining vision, audio, text, and action streams into grounded representations.',
    pillar: 'intelligence',
  },
  {
    id: 'causal-intelligence',
    title: 'Moving from Correlation to Causation',
    subtitle: 'Causal Intelligence',
    description: 'Building models that understand why things happen, unlocking accurate intervention scenarios.',
    pillar: 'intelligence',
  },
  {
    id: 'latent-reasoning',
    title: 'Escaping the Token Bottleneck',
    subtitle: 'Latent Space Reasoning',
    description: 'Processing information using abstract concepts, bypassing purely text-based autoregressive limitations.',
    pillar: 'intelligence',
  },
  {
    id: 'logical-verification',
    title: 'Verifying Logical Reasoning',
    subtitle: 'Formal Verification',
    description: 'Mathematically verifying chains of thought to eliminate hallucinations for regulated industries.',
    pillar: 'intelligence',
  },
  {
    id: 'small-models',
    title: 'Compressing Elite Capabilities',
    subtitle: 'Small Language Models',
    description: 'Distilling complex reasoning into sub-3B parameter models for private, edge-device deployment.',
    pillar: 'intelligence',
  },
  {
    id: 'continual-learning',
    title: 'Learning Without Forgetting',
    subtitle: 'Continual Learning',
    description: 'Continuously updating knowledge from streaming data without catastrophic forgetting.',
    pillar: 'intelligence',
  },
  {
    id: 'emergent-reasoning',
    title: 'Incentivizing Emergent Reasoning',
    subtitle: 'Reinforcement Learning',
    description: 'Designing reward environments where models discover complex reasoning strategies autonomously.',
    pillar: 'intelligence',
  },
  {
    id: 'neuro-symbolic',
    title: 'Bridging Logic and Learning',
    subtitle: 'Neuro-Symbolic AI',
    description: 'Fusing symbolic logic with neural pattern-recognition for exact-precision problems.',
    pillar: 'intelligence',
  },
];

// Solution Spaces — The Toolkits
export const SOLUTION_TOOLKITS: SolutionToolkit[] = [
  {
    id: 'theoretical-core',
    name: 'Theoretical & Algorithmic Core',
    items: ['Algorithms', 'Statistical Learning Theory', 'Theory of ML / RL / DL'],
  },
  {
    id: 'causal-probabilistic',
    name: 'Causal & Probabilistic Engine',
    items: ['Probabilistic ML', 'Statistical Inference', 'Causal Inference & Causal AI', 'Risk Modeling'],
  },
  {
    id: 'learning-adaptation',
    name: 'Learning & Adaptation Paradigms',
    items: ['Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Continual Learning'],
  },
  {
    id: 'applied-economic',
    name: 'Applied & Economic Layer',
    items: ['Advanced Analytics', 'Econometrics', 'Policy Simulation'],
  },
];
