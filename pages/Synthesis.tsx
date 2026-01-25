
import React, { useState } from 'react';
import { RetroCard } from '../components/RetroCard';
import { BookOpen, Lightbulb, GitMerge, Sparkles, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface SynthesisItem {
  id: string;
  title: string;
  description: string;
  category: 'paper' | 'survey' | 'idea';
  tags: string[];
  link?: string;
  date: string;
}

interface DiscussionTopic {
  id: string;
  title: string;
  description: string;
  theme: 'emergence' | 'expression' | 'convergence';
  questions: string[];
}

// Sample data - can be moved to a data file later
const synthesisItems: SynthesisItem[] = [
  {
    id: 'synth-1',
    title: 'Coming Soon: Survey on Agentic Reasoning',
    description: 'A comprehensive survey synthesizing recent advances in agentic reasoning, multi-step planning, and autonomous decision-making in large language models.',
    category: 'survey',
    tags: ['agents', 'reasoning', 'LLMs'],
    date: '2025',
  },
  {
    id: 'synth-2',
    title: 'Coming Soon: Human-AI Collaboration Patterns',
    description: 'Synthesis of research on effective human-AI collaboration paradigms, from assistive to autonomous systems.',
    category: 'paper',
    tags: ['collaboration', 'HCI', 'AI systems'],
    date: '2025',
  },
];

const discussionTopics: DiscussionTopic[] = [
  {
    id: 'disc-1',
    title: 'Emergence of Thoughts',
    description: 'How do novel ideas and understanding emerge from the interaction between human cognition and AI systems? What are the conditions that foster genuine emergence rather than mere recombination?',
    theme: 'emergence',
    questions: [
      'Can AI systems exhibit genuine emergent understanding, or only sophisticated pattern matching?',
      'How do collective human-AI systems produce insights neither could alone?',
      'What role does uncertainty play in the emergence of novel thoughts?',
    ],
  },
  {
    id: 'disc-2',
    title: 'Expression of Thoughts',
    description: 'The art and science of articulating complex ideas—how we externalize internal mental models, translate intuitions into shareable knowledge, and create artifacts that carry meaning.',
    theme: 'expression',
    questions: [
      'How do different modalities (text, code, visuals) shape what can be expressed?',
      'What is lost and gained when AI assists in expression?',
      'Can expression itself be a form of thinking, not just its output?',
    ],
  },
  {
    id: 'disc-3',
    title: 'Convergence of Ideas',
    description: 'The process by which diverse perspectives, hypotheses, and partial truths synthesize into coherent understanding—from exploration to proof, from divergent to convergent.',
    theme: 'convergence',
    questions: [
      'How do we recognize when ideas are ready to converge vs. need more exploration?',
      'What mechanisms help communities reach productive consensus without groupthink?',
      'Can AI accelerate convergence while preserving the value of diverse viewpoints?',
    ],
  },
];

const ThemeIcon = ({ theme }: { theme: 'emergence' | 'expression' | 'convergence' }) => {
  switch (theme) {
    case 'emergence':
      return <Sparkles size={20} className="text-[var(--accent-secondary)]" />;
    case 'expression':
      return <MessageCircle size={20} className="text-[var(--accent-primary)]" />;
    case 'convergence':
      return <GitMerge size={20} className="text-[var(--text-muted)]" />;
  }
};

const CategoryBadge = ({ category }: { category: 'paper' | 'survey' | 'idea' }) => {
  const styles = {
    paper: 'bg-[var(--accent-primary)] text-[var(--bg-main)]',
    survey: 'bg-[var(--accent-secondary)] text-[var(--bg-main)]',
    idea: 'bg-[var(--border-main)] text-[var(--text-main)]',
  };

  return (
    <span className={`font-mono text-[10px] uppercase px-2 py-1 ${styles[category]}`}>
      {category}
    </span>
  );
};

export const Synthesis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'papers' | 'discussions'>('papers');

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <section className="text-center py-10 border-b border-[var(--border-main)]">
        <h1 className="font-serif text-5xl font-bold italic mb-4 text-[var(--text-main)]">Synthesis</h1>
        <p className="font-serif text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
          Where research converges into understanding. Papers, surveys, and open explorations at the frontier of thought.
        </p>
      </section>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 border-b border-[var(--border-main)] pb-4">
        <button
          onClick={() => setActiveTab('papers')}
          className={`flex items-center gap-2 px-6 py-3 font-pixel text-sm uppercase tracking-wider transition-all ${
            activeTab === 'papers'
              ? 'text-[var(--accent-secondary)] border-b-2 border-[var(--accent-secondary)] -mb-[18px]'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
          }`}
        >
          <BookOpen size={16} />
          Papers & Surveys
        </button>
        <button
          onClick={() => setActiveTab('discussions')}
          className={`flex items-center gap-2 px-6 py-3 font-pixel text-sm uppercase tracking-wider transition-all ${
            activeTab === 'discussions'
              ? 'text-[var(--accent-secondary)] border-b-2 border-[var(--accent-secondary)] -mb-[18px]'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
          }`}
        >
          <Lightbulb size={16} />
          Open Discussions
        </button>
      </div>

      {/* Papers & Surveys Tab */}
      {activeTab === 'papers' && (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-mono text-sm text-[var(--text-muted)]">
              // SYNTHESIS_OF_RESEARCH // CURATED_INSIGHTS //
            </p>
          </div>

          {synthesisItems.map((item) => (
            <div key={item.id} className="group">
              <RetroCard className="bg-[var(--bg-card)] hover:border-[var(--accent-secondary)] transition-colors" noPadding>
                <div className="flex flex-col md:flex-row h-full">
                  {/* Metadata Column */}
                  <div className="md:w-36 bg-[var(--bg-main)] p-6 border-b md:border-b-0 md:border-r border-[var(--border-main)] flex flex-row md:flex-col justify-between md:justify-start gap-3">
                    <CategoryBadge category={item.category} />
                    <span className="font-mono text-xs text-[var(--text-muted)]">{item.date}</span>
                  </div>

                  {/* Content Column */}
                  <div className="p-6 md:p-8 flex-1">
                    <h2 className="font-serif text-2xl font-bold mb-3 text-[var(--text-main)] group-hover:text-[var(--accent-secondary)] transition-colors">
                      {item.title}
                    </h2>
                    <p className="font-serif text-base text-[var(--text-muted)] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] uppercase text-[var(--accent-primary)] border border-[var(--accent-primary)] px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--accent-secondary)] font-mono text-xs hover:underline"
                      >
                        READ_FULL <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </RetroCard>
            </div>
          ))}

          {synthesisItems.length === 0 && (
            <div className="text-center font-mono text-sm opacity-50 p-10 border border-dashed border-[var(--border-main)]">
              NO_SYNTHESIS_ITEMS_FOUND
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 border border-dashed border-[var(--border-main)]">
            <p className="font-mono text-sm text-[var(--text-muted)] mb-2">More syntheses in progress...</p>
            <p className="font-serif text-base text-[var(--text-muted)]">
              This section will grow as we synthesize more research at the intersection of humans, AI, and decision-making.
            </p>
          </div>
        </div>
      )}

      {/* Open Discussions Tab */}
      {activeTab === 'discussions' && (
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-mono text-sm text-[var(--text-muted)]">
              // OPEN_QUESTIONS // EVOLVING_IDEAS // JOIN_THE_DIALOGUE //
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-main)] p-8">
            <h2 className="font-pixel text-xl text-[var(--accent-secondary)] mb-4">The Space Between Ideas</h2>
            <p className="font-serif text-lg text-[var(--text-muted)] leading-relaxed">
              Some questions don't have answers yet—they have explorations. This is a space for ideas that are still forming,
              for the productive uncertainty that precedes understanding. These are invitations to think together.
            </p>
          </div>

          {/* Discussion Topics */}
          {discussionTopics.map((topic) => (
            <RetroCard key={topic.id} className="bg-[var(--bg-card)]">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[var(--border-main)] bg-[var(--bg-main)]">
                    <ThemeIcon theme={topic.theme} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] uppercase text-[var(--accent-primary)] tracking-wider">
                        {topic.theme}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-[var(--text-main)]">
                      {topic.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="font-serif text-lg text-[var(--text-muted)] leading-relaxed border-l-2 border-[var(--accent-primary)] pl-4">
                  {topic.description}
                </p>

                {/* Questions */}
                <div className="bg-[var(--bg-main)] border border-[var(--border-main)] p-6">
                  <h4 className="font-pixel text-sm text-[var(--accent-secondary)] mb-4">Open Questions</h4>
                  <ul className="space-y-3">
                    {topic.questions.map((question, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowRight size={14} className="text-[var(--accent-primary)] mt-1.5 flex-shrink-0" />
                        <span className="font-serif text-base text-[var(--text-main)]">{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RetroCard>
          ))}

          {/* Future Vision */}
          <section className="mt-16">
            <RetroCard title="The Bigger Picture" className="bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-main)]">
              <div className="prose prose-invert max-w-none font-serif text-[var(--text-main)]">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-[var(--border-main)] p-5 bg-[var(--bg-main)]">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={18} className="text-[var(--accent-secondary)]" />
                      <h3 className="font-pixel text-lg text-[var(--accent-secondary)]">Emergence</h3>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Raw hypotheses, nascent patterns, the first glimmers of understanding. Ideas in their most volatile, generative state.
                    </p>
                  </div>

                  <div className="border border-[var(--border-main)] p-5 bg-[var(--bg-main)]">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageCircle size={18} className="text-[var(--accent-primary)]" />
                      <h3 className="font-pixel text-lg text-[var(--accent-primary)]">Expression</h3>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      The act of articulation—giving form to intuition, shape to insight, structure to the formless.
                    </p>
                  </div>

                  <div className="border border-[var(--border-main)] p-5 bg-[var(--bg-main)]">
                    <div className="flex items-center gap-2 mb-3">
                      <GitMerge size={18} className="text-[var(--text-muted)]" />
                      <h3 className="font-pixel text-lg text-[var(--text-muted)]">Convergence</h3>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      When scattered threads weave together. Proofs crystallize. Understanding solidifies. The arrival point.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 border-2 border-[var(--accent-secondary)] bg-[var(--bg-main)] text-center">
                  <p className="font-pixel text-lg text-[var(--accent-secondary)] mb-2">
                    From raw intuition to refined proof
                  </p>
                  <p className="font-serif italic text-sm text-[var(--text-muted)]">
                    This lab exists to traverse that journey—publicly, collaboratively, iteratively.
                  </p>
                </div>
              </div>
            </RetroCard>
          </section>
        </div>
      )}
    </div>
  );
};
