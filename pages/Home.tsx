import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Context-Driven Demand Sensing / Time Series Forecasting',
    tags: ['probabilistic modeling', 'deep learning', 'forecasting'],
  },
  {
    title: 'Causal Native Recommendation Systems against Inversion Problem',
    tags: ['causality', 'recommendation', 'counterfactual'],
  },
  {
    title: "Energy's Duality — Energy Based Models and Port-Hamiltonian Systems",
    tags: ['energy models', 'dynamical systems', 'physics-informed'],
  },
  {
    title: 'Multi-Agent RL — Zero Shot Coordination',
    tags: ['MARL', 'reinforcement learning', 'coordination'],
  },
];

export const Home: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-20">

      {/* About */}
      <section className="pt-8">
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-[var(--text-main)]">
          PrachaLabs is an applied research studio exploring <strong>ML theory, science,
          and applications</strong>—with a fundamental interest in how machine learning
          methods work, why they work, and where they break.
        </p>
        <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)] mt-6">
          The core problem spaces live at the intersection of <em>Systems &times; Behavior
          &times; Intelligence</em>. <strong>Agentic Decision Science</strong> is the
          convergence lens—how these problem spaces come together when we study AI and
          humans as decision-making agents in shared environments. But the foundation
          is ML research: causality, probabilistic modeling, deep learning, reinforcement
          learning, and continual learning. The work is theory-driven and experiment-heavy,
          aimed at building interpretable, robust, and utility-oriented systems—turning
          research into publishable outcomes, reproducible artifacts, and long-run products
          under the PrachaLabs banner.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* WIP Projects */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          Work in Progress
        </h2>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group pb-6 border-b border-[var(--border-main)] last:border-b-0"
            >
              <h3 className="font-serif text-lg text-[var(--text-main)] group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* Coming Soon */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Research Blogs
          </h2>
          <span className="font-mono text-[10px] text-[var(--text-muted)]">coming soon</span>
        </div>
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Research Papers
          </h2>
          <span className="font-mono text-[10px] text-[var(--text-muted)]">coming soon</span>
        </div>
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Experiments &amp; Articles
          </h2>
          <span className="font-mono text-[10px] text-[var(--text-muted)]">coming soon</span>
        </div>
      </section>

    </div>
  );
};
