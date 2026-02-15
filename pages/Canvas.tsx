import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  FIRST_PRINCIPLES,
  PROBLEM_SPACES,
  SOLUTION_TOOLKITS,
} from '../data/canvasData';

const PillarSection = ({ pillar, label }: { pillar: string; label: string }) => {
  const [expanded, setExpanded] = useState(false);
  const spaces = PROBLEM_SPACES.filter(s => s.pillar === pillar);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between group"
      >
        <div className="flex items-baseline gap-3">
          <h3 className="font-serif text-lg text-[var(--text-main)] group-hover:text-white transition-colors">
            {label}
          </h3>
          <span className="font-mono text-[10px] text-[var(--text-muted)]">
            {spaces.length}
          </span>
        </div>
        {expanded
          ? <ChevronDown size={14} className="text-[var(--text-muted)]" />
          : <ChevronRight size={14} className="text-[var(--text-muted)]" />
        }
      </button>

      {expanded && (
        <div className="mt-4 ml-4 space-y-4 border-l border-[var(--border-main)] pl-4">
          {spaces.map(space => (
            <div key={space.id}>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-base text-[var(--text-main)]">
                  {space.title}
                </span>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  {space.subtitle}
                </span>
              </div>
              <p className="font-serif text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                {space.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Canvas: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-20">

      {/* Header */}
      <section className="pt-8">
        <h1 className="font-serif text-3xl font-bold text-[var(--text-main)] mb-2">
          The Canvas
        </h1>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          Architecture for exploration & experimentation
        </p>
      </section>

      {/* Visual Overview — Typographic Stack */}
      <section className="border border-[var(--border-main)]">
        {/* Solution Spaces */}
        <div className="p-5 border-b border-[var(--border-main)]">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
            III &mdash; Solution Spaces
          </div>
          <div className="font-mono text-xs text-[var(--text-main)] leading-relaxed">
            Algorithms &middot; Probabilistic ML &middot; Causal AI &middot; RL &middot; DL &middot; CL &middot; Econometrics
          </div>
        </div>

        {/* Problem Spaces */}
        <div className="p-5 border-b border-[var(--border-main)]">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
            II &mdash; Problem Spaces
          </div>
          <div className="flex gap-6 font-mono text-xs text-[var(--text-main)]">
            <span>Systems <span className="text-[var(--text-muted)]">(4)</span></span>
            <span>Behavior <span className="text-[var(--text-muted)]">(5)</span></span>
            <span>Intelligence <span className="text-[var(--text-muted)]">(9)</span></span>
          </div>
        </div>

        {/* First Principles */}
        <div className="p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
            I &mdash; First Principles
          </div>
          <div className="font-serif text-base text-[var(--text-main)]">
            Systems &times; Behavior &times; Intelligence
          </div>
        </div>
      </section>

      {/* How to Operate — Flow */}
      <section>
        <div className="border border-[var(--border-main)] p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4">
            How to Operate
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-main)]">
            <span className="border border-[var(--border-main)] px-3 py-1.5">Pick any problem</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="border border-[var(--border-main)] px-3 py-1.5">Frame hypothesis</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="border border-[var(--border-main)] px-3 py-1.5">Design experiment</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="border border-[var(--border-main)] px-3 py-1.5">Write it up</span>
          </div>
          <p className="font-serif text-sm text-[var(--text-muted)] mt-4 italic">
            Any slice is valid. Not every exploration needs to be end-to-end.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* I. First Principles */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          I. First Principles
        </h2>
        <div className="space-y-8">
          {FIRST_PRINCIPLES.map(principle => (
            <div key={principle.id} className="pb-8 border-b border-[var(--border-main)] last:border-b-0">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="font-serif text-xl text-[var(--text-main)]">
                  {principle.name}
                </h3>
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                  {principle.anchor}
                </span>
              </div>
              <p className="font-serif text-base text-[var(--text-muted)] leading-relaxed">
                {principle.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* II. Problem Spaces */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          II. Problem Spaces
        </h2>
        <div className="space-y-6">
          <PillarSection pillar="systems" label="Systems — Dynamics, Risk & Infrastructure" />
          <div className="border-t border-[var(--border-main)]" />
          <PillarSection pillar="behavior" label="Behavior — Intent, Agents & Decisions" />
          <div className="border-t border-[var(--border-main)]" />
          <PillarSection pillar="intelligence" label="Intelligence — Methods, Reasoning & Safety" />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* III. Solution Spaces */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          III. Solution Spaces
        </h2>
        <div className="space-y-6">
          {SOLUTION_TOOLKITS.map((toolkit, i) => (
            <div key={toolkit.id} className="pb-6 border-b border-[var(--border-main)] last:border-b-0">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  {String.fromCharCode(65 + i)}.
                </span>
                <h3 className="font-serif text-base text-[var(--text-main)]">
                  {toolkit.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {toolkit.items.map(item => (
                  <span key={item} className="font-mono text-[10px] text-[var(--text-muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
