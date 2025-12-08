
import React from 'react';
import { RetroCard } from '../components/RetroCard';
import { TOOLS } from '../data';
import { ExternalLink, Hammer } from 'lucide-react';

export const Tools: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <section className="text-center py-10 border-b border-[var(--border-main)]">
        <h1 className="font-serif text-5xl font-bold italic mb-4 text-[var(--text-main)]">Tools for Thought</h1>
        <p className="font-serif text-xl text-[var(--text-muted)]">Human-centered design. AI wrappers. Better exploration.</p>
      </section>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TOOLS.map((tool) => (
          <RetroCard key={tool.id} className="group bg-[var(--bg-card)] hover:bg-[var(--bg-card)]" noPadding>
            <div className="flex flex-col h-full">
              {/* Toolbar style header */}
              <div className="border-b border-[var(--border-main)] bg-[var(--bg-main)] px-4 py-2 flex justify-between items-center">
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full border border-[var(--border-main)] bg-[var(--border-main)]"></div>
                    <div className="w-2 h-2 rounded-full border border-[var(--border-main)] bg-[var(--border-main)]"></div>
                 </div>
                 <span className={`font-pixel text-lg leading-none pt-1 px-1
                    ${tool.status === 'Live' ? 'text-green-500' : 'text-[var(--accent-primary)]'}
                 `}>
                    [{tool.status}]
                 </span>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col items-center text-center">
                 <div className="w-16 h-16 mb-6 border border-[var(--border-main)] rounded-full flex items-center justify-center bg-[var(--bg-main)] shadow-[2px_2px_0px_0px_var(--shadow-color)]">
                    <Hammer size={24} className="text-[var(--accent-secondary)]" />
                 </div>
                 
                 <h2 className="font-serif text-3xl font-bold mb-4 text-[var(--text-main)]">{tool.title}</h2>
                 <p className="font-serif text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                    {tool.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 justify-center mb-8">
                    {tool.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10px] text-[var(--text-main)] bg-[var(--bg-main)] px-2 py-1 border border-[var(--border-main)]">
                            {tag}
                        </span>
                    ))}
                 </div>

                 <a 
                   href={tool.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="mt-auto flex items-center gap-2 bg-[var(--bg-main)] text-[var(--text-main)] px-6 py-2 font-mono text-xs hover:text-[var(--accent-secondary)] border border-[var(--border-main)] hover:border-[var(--accent-secondary)] transition-colors"
                 >
                    LAUNCH_TOOL <ExternalLink size={14} />
                 </a>
              </div>
            </div>
          </RetroCard>
        ))}
      </div>
    </div>
  );
};
