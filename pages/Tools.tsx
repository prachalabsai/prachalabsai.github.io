
import React from 'react';
import { RetroCard } from '../components/RetroCard';
import { TOOLS } from '../data';
import { ExternalLink, Hammer } from 'lucide-react';

export const Tools: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <section className="text-center py-10">
        <h1 className="font-serif text-5xl font-bold italic mb-4">Tools for Thought</h1>
        <p className="font-serif text-xl opacity-70">Human-centered design. AI wrappers. Better exploration.</p>
      </section>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TOOLS.map((tool) => (
          <RetroCard key={tool.id} className="group bg-white hover:bg-[#FDFBF7]" noPadding>
            <div className="flex flex-col h-full">
              {/* Toolbar style header */}
              <div className="border-b-2 border-[#1c1c1c] bg-[#F2EFE9] px-4 py-2 flex justify-between items-center">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full border border-[#1c1c1c] bg-white"></div>
                    <div className="w-3 h-3 rounded-full border border-[#1c1c1c] bg-white"></div>
                 </div>
                 <span className={`font-mono text-[10px] uppercase border border-[#1c1c1c] px-1 bg-white
                    ${tool.status === 'Live' ? 'text-green-700' : 'text-[#B44C43]'}
                 `}>
                    {tool.status}
                 </span>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col items-center text-center">
                 <div className="w-16 h-16 mb-6 border-2 border-[#1c1c1c] rounded-full flex items-center justify-center bg-[#FDFBF7] shadow-[2px_2px_0px_0px_rgba(28,28,28,0.2)]">
                    <Hammer size={24} className="text-[#1c1c1c]" />
                 </div>
                 
                 <h2 className="font-serif text-3xl font-bold mb-4">{tool.title}</h2>
                 <p className="font-serif text-lg opacity-80 leading-relaxed mb-6">
                    {tool.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 justify-center mb-8">
                    {tool.tags.map(tag => (
                        <span key={tag} className="font-mono text-xs text-[#555] bg-[#F2EFE9] px-2 py-1 border border-[#e5e5e5] rounded-full">
                            {tag}
                        </span>
                    ))}
                 </div>

                 <a 
                   href={tool.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="mt-auto flex items-center gap-2 bg-[#1c1c1c] text-white px-6 py-2 font-mono text-sm hover:bg-[#B44C43] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-0.5 hover:shadow-none"
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
