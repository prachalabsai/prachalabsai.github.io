import React, { useCallback, useRef } from 'react';
import { ArrowRight, Zap, Brain, Users, Bot, Sparkles } from 'lucide-react';
import { RetroCard } from '../components/RetroCard';
import { AgenticCanvas } from '../components/vision/AgenticCanvas';
import {
  AGENT_TYPES,
  THEORY_LENSES,
  PROBLEM_SPACES,
  PATHWAY_EXAMPLES,
  FRAMEWORK_META,
} from '../data/visionData';

export const Vision: React.FC = () => {
  const frameworkRef = useRef<HTMLDivElement>(null);
  const theoryRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);

  const handleNodeClick = useCallback((nodeId: string, nodeType: 'core' | 'theory' | 'problem') => {
    let targetRef: React.RefObject<HTMLDivElement> | null = null;

    if (nodeType === 'core') {
      targetRef = frameworkRef;
    } else if (nodeType === 'theory') {
      targetRef = theoryRef;
    } else if (nodeType === 'problem') {
      targetRef = problemRef;
    }

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const getAgentIcon = (id: string) => {
    switch (id) {
      case 'human': return <Users size={24} className="text-[var(--accent-primary)]" />;
      case 'ai': return <Bot size={24} className="text-[var(--accent-secondary)]" />;
      case 'coexistence': return <Sparkles size={24} className="text-[var(--text-muted)]" />;
      default: return <Brain size={24} />;
    }
  };

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Header */}
      <section className="text-center py-10 border-b border-[var(--border-main)]">
        <div className="font-pixel text-sm text-[var(--accent-secondary)] mb-4 tracking-widest">
          // A_FRAMEWORK_FOR_CONVERGENCE
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold italic mb-4 text-[var(--text-main)]">
          {FRAMEWORK_META.title}
        </h1>
        <p className="font-serif text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
          {FRAMEWORK_META.subtitle}
        </p>
      </section>

      {/* Interactive Instruction */}
      <div className="text-center">
        <p className="font-mono text-sm text-[var(--accent-secondary)] animate-pulse">
          [ HOVER_TO_EXPLORE // CLICK_TO_NAVIGATE ]
        </p>
      </div>

      {/* Canvas Visualization */}
      <section className="relative">
        <AgenticCanvas onNodeClick={handleNodeClick} />
      </section>

      {/* Legend */}
      <section className="flex justify-center gap-6 md:gap-10 flex-wrap px-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[var(--accent-primary)]"></div>
          <span className="font-mono text-xs text-[var(--text-muted)]">Core: Agents</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-[var(--accent-secondary)] bg-[var(--bg-card)]"></div>
          <span className="font-mono text-xs text-[var(--text-muted)]">Inner: Theory Lenses</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-[var(--text-muted)] bg-[var(--bg-card)]"></div>
          <span className="font-mono text-xs text-[var(--text-muted)]">Outer: Problem Spaces</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[var(--accent-secondary)]"></div>
          <span className="font-mono text-xs text-[var(--text-muted)]">Pathways</span>
        </div>
      </section>

      {/* Core Proposition */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-[var(--bg-card)] border-l-4 border-[var(--accent-primary)] p-6 md:p-8">
          <p className="font-pixel text-sm text-[var(--accent-secondary)] mb-3">THE_CORE_PROPOSITION</p>
          <p className="font-serif text-xl md:text-2xl italic text-[var(--text-main)] leading-relaxed">
            "{FRAMEWORK_META.coreProposition}"
          </p>
        </div>
      </section>

      {/* The Framework - Agents */}
      <section ref={frameworkRef} className="scroll-mt-24">
        <RetroCard title="The Core: Agents" className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <p className="font-serif text-lg text-[var(--text-muted)] leading-relaxed">
              An agent is any entity that perceives, models, chooses, acts, and learns in an environment
              where outcomes are uncertain. The universal process all agents share:
            </p>

            <div className="bg-[var(--bg-main)] border border-[var(--border-main)] p-4 text-center">
              <p className="font-mono text-sm text-[var(--accent-secondary)]">
                Perceive → Model → Decide → Act → Observe → Learn → (repeat)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {AGENT_TYPES.map((agent) => (
                <div
                  key={agent.id}
                  className="border border-[var(--border-main)] p-5 bg-[var(--bg-main)] hover:border-[var(--accent-secondary)] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {getAgentIcon(agent.id)}
                    <h3 className="font-pixel text-lg text-[var(--text-main)]">{agent.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RetroCard>
      </section>

      {/* Theory Lenses */}
      <section ref={theoryRef} className="scroll-mt-24">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-[var(--text-main)] mb-2">
            Eight Theoretical Lenses
          </h2>
          <p className="font-mono text-sm text-[var(--text-muted)]">
            // INNER_RING // WAYS_OF_SEEING //
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {THEORY_LENSES.map((lens) => (
            <div
              key={lens.id}
              className="group border border-[var(--border-main)] bg-[var(--bg-card)] p-5 hover:border-[var(--accent-secondary)] hover:shadow-[4px_4px_0px_0px_var(--accent-secondary)] transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap size={14} className="text-[var(--accent-secondary)]" />
                <h3 className="font-pixel text-sm text-[var(--accent-secondary)] uppercase tracking-wider">
                  {lens.shortName}
                </h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                {lens.description}
              </p>
              <div className="pt-3 border-t border-[var(--border-main)]">
                <p className="font-mono text-[10px] text-[var(--accent-primary)] uppercase">
                  Core Question
                </p>
                <p className="text-xs text-[var(--text-main)] italic mt-1">
                  {lens.coreQuestion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Spaces */}
      <section ref={problemRef} className="scroll-mt-24">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-[var(--text-main)] mb-2">
            Ten Problem Spaces
          </h2>
          <p className="font-mono text-sm text-[var(--text-muted)]">
            // OUTER_RING // WHERE_AGENTS_OPERATE //
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {PROBLEM_SPACES.map((space) => (
            <div
              key={space.id}
              className="group border border-[var(--border-main)] bg-[var(--bg-card)] p-4 text-center hover:border-[var(--text-muted)] hover:bg-[var(--bg-main)] transition-all duration-200"
            >
              <h3 className="font-pixel text-sm text-[var(--text-main)] mb-2">
                {space.name}
              </h3>
              <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                {space.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pathway Generator */}
      <section className="max-w-4xl mx-auto">
        <RetroCard title="The Generative Engine" className="bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-main)]">
          <div className="space-y-6">
            <p className="font-serif text-lg text-[var(--text-muted)] leading-relaxed">
              Every research question traces a path: <strong className="text-[var(--text-main)]">Core → Theory → Problem</strong>.
              This isn't just organizational—it's <em>generative</em>.
            </p>

            <div className="bg-[var(--bg-main)] border border-[var(--accent-secondary)] p-4 text-center">
              <p className="font-mono text-sm text-[var(--accent-secondary)]">
                Agent Type × Theory × Problem = Research Question
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-pixel text-sm text-[var(--accent-primary)]">EXAMPLE_PATHWAYS</p>

              {PATHWAY_EXAMPLES.map((pathway) => (
                <div
                  key={pathway.id}
                  className="border border-[var(--border-main)] p-4 hover:border-[var(--accent-secondary)] transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs px-2 py-1 bg-[var(--accent-primary)] text-[var(--bg-main)]">
                      {pathway.agent}
                    </span>
                    <ArrowRight size={12} className="text-[var(--accent-secondary)]" />
                    <span className="font-mono text-xs px-2 py-1 bg-[var(--accent-secondary)] text-[var(--bg-main)]">
                      {pathway.theory}
                    </span>
                    <ArrowRight size={12} className="text-[var(--accent-secondary)]" />
                    <span className="font-mono text-xs px-2 py-1 border border-[var(--text-muted)] text-[var(--text-muted)]">
                      {pathway.problem}
                    </span>
                  </div>
                  <p className="font-serif text-sm text-[var(--text-main)] italic">
                    "{pathway.question}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RetroCard>
      </section>

      {/* Closing */}
      <section className="max-w-3xl mx-auto text-center py-12 border-t border-[var(--border-main)]">
        <p className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">
          {FRAMEWORK_META.tagline}
        </p>
        <p className="font-serif text-lg text-[var(--text-muted)] italic">
          A Big Tent with Sharp Focus
        </p>
        <p className="font-mono text-xs text-[var(--text-muted)] mt-6 opacity-50">
          The canvas is here. The work begins.
        </p>
      </section>
    </div>
  );
};
