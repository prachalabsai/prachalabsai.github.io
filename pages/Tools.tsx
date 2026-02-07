
import React from 'react';
import { TOOLS } from '../data';
import { ExternalLink } from 'lucide-react';

export const Tools: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="font-serif text-3xl font-bold text-[var(--text-main)] mb-2">Tools</h1>
        <p className="font-mono text-xs text-[var(--text-muted)]">Research prototypes and utilities</p>
      </section>

      {/* Tools List */}
      <div className="space-y-8">
        {TOOLS.map((tool) => (
          <div
            key={tool.id}
            className="group pb-8 border-b border-[var(--border-main)] last:border-b-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-serif text-xl text-[var(--text-main)] group-hover:text-white transition-colors">
                    {tool.title}
                  </h2>
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${
                    tool.status === 'Live' ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <p className="font-serif text-base text-[var(--text-muted)] leading-relaxed mb-3">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {tool.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors mt-1"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
