import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WORK } from '../content/work';
import { STREAMS } from '../content/streams';
import { usePageTitle } from '../utils/usePageTitle';

export const Work: React.FC = () => {
  usePageTitle('Work');

  return (
    <div>
      <section className="pt-8 mb-12">
        <h1 className="font-display text-3xl font-bold text-[var(--text-main)] mb-2">Work</h1>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          Real outputs — tools, experiments, papers, demos. If it could have been made by anyone
          with model access, it isn't here.
        </p>
      </section>

      <div className="space-y-6">
        {WORK.map((item) => {
          const streamNames = item.streams
            .map((n) => STREAMS.find((s) => s.number === n)?.name)
            .filter(Boolean);
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border border-[var(--border-main)] p-6 hover:border-accent hover:bg-[var(--accent-tint)] transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                    {item.type}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    {item.status}
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-[var(--text-muted)] group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="font-display text-3xl font-semibold text-[var(--text-main)] group-hover:text-accent transition-colors mb-1">
                {item.title}
              </h3>
              <p className="font-serif text-lg text-[var(--text-muted)] leading-snug mb-3">
                {item.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                {item.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
                {streamNames.length > 0 && (
                  <span className="font-mono text-[10px] text-accent">
                    · {streamNames.join(' · ')}
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
