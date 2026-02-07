// Agentic Decision Sciences Framework Data

export interface AgentType {
  id: string;
  name: string;
  description: string;
}

export interface TheoryLens {
  id: string;
  name: string;
  shortName: string;
  description: string;
  coreQuestion: string;
}

export interface ProblemSpace {
  id: string;
  name: string;
  description: string;
  connectedTheories: string[];
}

export interface PathwayExample {
  id: string;
  agent: string;
  theory: string;
  problem: string;
  question: string;
}

// Core: The Three Agent Types
export const AGENT_TYPES: AgentType[] = [
  {
    id: 'human',
    name: 'Human',
    description: 'Embodied, emotional, social, bounded. Biological agents with intuition, creativity, and inherent biases.',
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'Algorithmic, scalable, optimizable. Artificial agents with emergent capabilities and alignment challenges.',
  },
  {
    id: 'coexistence',
    name: 'Co-existence',
    description: 'Augmented, collaborative, co-evolutionary. Combined human-AI systems that leverage both substrates.',
  },
];

// Inner Ring: 8 Theoretical Lenses
export const THEORY_LENSES: TheoryLens[] = [
  {
    id: 'behavioral-economics',
    name: 'Behavioral Economics',
    shortName: 'Behavioral',
    description: 'How psychological factors systematically influence economic decisions and judgment.',
    coreQuestion: 'Why do agents make predictable "mistakes"?',
  },
  {
    id: 'statistical-bayesian',
    name: 'Statistical/Bayesian',
    shortName: 'Bayesian',
    description: 'Uncertainty as probability distributions, learning as belief updating.',
    coreQuestion: 'How should agents reason under uncertainty?',
  },
  {
    id: 'learning-theory',
    name: 'Learning Theory',
    shortName: 'Learning',
    description: 'Adaptation as algorithmic process, sample complexity, generalization.',
    coreQuestion: 'How efficiently can agents learn from data?',
  },
  {
    id: 'cognitive-architecture',
    name: 'Cognitive Architecture',
    shortName: 'Cognitive',
    description: 'Internal mechanisms of thinking, memory, attention, and reasoning.',
    coreQuestion: 'What computations happen inside agents?',
  },
  {
    id: 'complexity-science',
    name: 'Complexity Science',
    shortName: 'Complexity',
    description: 'Emergence from interaction, self-organization, adaptation.',
    coreQuestion: 'How does collective behavior emerge?',
  },
  {
    id: 'system-dynamics',
    name: 'System Dynamics',
    shortName: 'Systems',
    description: 'Feedback loops, stocks, flows, delays, and nonlinear behavior.',
    coreQuestion: 'Why do systems oscillate, overshoot, collapse?',
  },
  {
    id: 'chaos-nonlinear',
    name: 'Chaos & Nonlinear',
    shortName: 'Chaos',
    description: 'Sensitive dependence on initial conditions, attractors, unpredictability.',
    coreQuestion: 'What are the limits of prediction?',
  },
  {
    id: 'causality',
    name: 'Causality',
    shortName: 'Causality',
    description: 'Interventions, counterfactuals, and causal reasoning.',
    coreQuestion: 'What happens if agents do X instead of Y?',
  },
];

// Outer Ring: 10 Problem Spaces
export const PROBLEM_SPACES: ProblemSpace[] = [
  {
    id: 'discovery',
    name: 'Discovery',
    description: 'Finding what you don\'t know to look for',
    connectedTheories: ['learning-theory', 'complexity-science'],
  },
  {
    id: 'learning',
    name: 'Learning',
    description: 'Improving from experience',
    connectedTheories: ['learning-theory', 'cognitive-architecture', 'statistical-bayesian'],
  },
  {
    id: 'perception',
    name: 'Perception',
    description: 'Extracting signal from noise',
    connectedTheories: ['cognitive-architecture', 'statistical-bayesian'],
  },
  {
    id: 'coordination',
    name: 'Coordination',
    description: 'Aligning behavior with other agents',
    connectedTheories: ['complexity-science', 'behavioral-economics'],
  },
  {
    id: 'measurement',
    name: 'Measurement',
    description: 'Quantifying the world accurately',
    connectedTheories: ['statistical-bayesian', 'causality'],
  },
  {
    id: 'creation',
    name: 'Creation',
    description: 'Generating novel artifacts',
    connectedTheories: ['cognitive-architecture', 'learning-theory'],
  },
  {
    id: 'decision',
    name: 'Decision',
    description: 'Choosing under uncertainty',
    connectedTheories: ['behavioral-economics', 'statistical-bayesian', 'causality'],
  },
  {
    id: 'inference',
    name: 'Inference',
    description: 'Updating beliefs from evidence',
    connectedTheories: ['statistical-bayesian', 'causality'],
  },
  {
    id: 'prediction',
    name: 'Prediction',
    description: 'Forecasting future states',
    connectedTheories: ['statistical-bayesian', 'system-dynamics', 'chaos-nonlinear'],
  },
  {
    id: 'intervention',
    name: 'Intervention',
    description: 'Changing systems deliberately',
    connectedTheories: ['causality', 'system-dynamics', 'complexity-science'],
  },
];

// Example Pathways: Agent × Theory × Problem = Research Question
export const PATHWAY_EXAMPLES: PathwayExample[] = [
  {
    id: 'pathway-1',
    agent: 'Co-existence',
    theory: 'Complexity',
    problem: 'Coordination',
    question: 'How do human-AI teams self-organize without explicit protocols?',
  },
  {
    id: 'pathway-2',
    agent: 'AI',
    theory: 'Behavioral',
    problem: 'Decision',
    question: 'Do reward-optimizing agents exhibit human-like biases?',
  },
  {
    id: 'pathway-3',
    agent: 'Human',
    theory: 'Causality',
    problem: 'Intervention',
    question: 'How do people reason about counterfactuals when designing policy?',
  },
  {
    id: 'pathway-4',
    agent: 'AI',
    theory: 'Bayesian',
    problem: 'Prediction',
    question: 'How can foundation models perform zero-shot time series forecasting?',
  },
  {
    id: 'pathway-5',
    agent: 'Co-existence',
    theory: 'Cognitive',
    problem: 'Creation',
    question: 'What cognitive architectures best support human-AI co-creation?',
  },
];

// Framework metadata
export const FRAMEWORK_META = {
  title: 'Agentic Decision Sciences',
  subtitle: 'A Framework for Understanding Intelligence',
  coreProposition: 'Intelligence is not a property of systems but a phenomenon of agents making decisions under uncertainty.',
  tagline: 'Agents. Decisions. Ecosystems. Prosperity.',
};
