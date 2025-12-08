
import React from 'react';
import { EXPERIMENTS } from '../data';
import { Microscope, Activity, Clock, GitCommit } from 'lucide-react';

export const Lab: React.FC = () => {

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* Dashboard Header */}
      <section className="flex flex-col md:flex-row justify-between items-end border-b border-[var(--border-main)] pb-6">
        <div>
           <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 flex items-center gap-3 text-[var(--text-main)]">
             <Activity className="text-[var(--accent-primary)]" size={36} />
             Experiment Tracker
           </h1>
           <p className="font-mono text-xs text-[var(--text-muted)] max-w-xl">
             // MONITORING ACTIVE RESEARCH NODES<br/>
             // FROM HYPOTHESIS TO EXECUTION
           </p>
        </div>
        <div className="hidden md:flex gap-6">
            <div className="text-right">
                <span className="block font-pixel text-lg text-[var(--text-muted)] uppercase tracking-wider">Active Exp.</span>
                <span className="font-pixel text-4xl text-[var(--accent-secondary)] leading-none">{EXPERIMENTS.length}</span>
            </div>
            <div className="text-right">
                <span className="block font-pixel text-lg text-[var(--text-muted)] uppercase tracking-wider">System</span>
                <span className="font-pixel text-4xl text-[var(--accent-primary)] leading-none">ONLINE</span>
            </div>
        </div>
      </section>

      {/* Dashboard List View */}
      <section className="space-y-6">
        {EXPERIMENTS.map((exp) => (
          <div key={exp.id} className="bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-secondary)] transition-colors duration-200">
            
            {/* Top Bar: Meta Info */}
            <div className="bg-[var(--bg-main)] border-b border-[var(--border-main)] px-4 py-2 flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <span className={`font-pixel text-lg px-2 leading-none pt-1
                        ${exp.status === 'In Progress' ? 'text-[var(--accent-secondary)]' : 
                        exp.status === 'Published' ? 'text-green-500' : 
                        'text-[var(--text-muted)]'}
                    `}>
                        [{exp.status}]
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                        <Clock size={12} /> {exp.lastUpdate}
                    </span>
                </div>
                <div className="font-mono text-[10px] text-[var(--border-main)]">ID: {exp.id}</div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: Core Identity + Hypothesis */}
                <div className="lg:col-span-8 space-y-6">
                    <div>
                        <h3 className="font-serif text-3xl font-bold leading-tight text-[var(--text-main)] mb-2">{exp.title}</h3>
                        <p className="font-serif text-lg text-[var(--text-muted)] leading-snug">{exp.description}</p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-mono text-[10px] font-bold text-[var(--accent-primary)] uppercase tracking-widest flex items-center gap-2">
                            <Microscope size={14} /> Core Hypothesis
                        </h4>
                        <p className="font-serif text-lg italic text-[var(--text-main)] bg-[var(--bg-main)] p-4 border-l-2 border-[var(--accent-primary)]">
                            "{exp.hypothesis}"
                        </p>
                    </div>
                </div>

                {/* Right: Actions & Tags */}
                <div className="lg:col-span-4 lg:border-l border-[var(--border-main)] border-dashed lg:pl-6 flex flex-col justify-between">
                    <div>
                         <h4 className="font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2">Research Tags</h4>
                         <div className="flex flex-wrap gap-2">
                            {exp.tags.map(tag => (
                                <span key={tag} className="font-mono text-[10px] text-[var(--accent-secondary)] bg-[var(--bg-main)] border border-[var(--border-main)] px-2 py-1">#{tag}</span>
                            ))}
                         </div>
                    </div>
                    
                    <div className="pt-8">
                         <a href={exp.link || '#'} target="_blank" rel="noopener noreferrer" className="w-full border border-[var(--border-main)] hover:border-[var(--accent-secondary)] bg-[var(--bg-main)] text-[var(--text-main)] hover:text-[var(--accent-secondary)] transition-colors py-3 font-mono text-xs uppercase flex items-center justify-center gap-2">
                            <GitCommit size={14} /> View Repo
                         </a>
                    </div>
                </div>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
};
