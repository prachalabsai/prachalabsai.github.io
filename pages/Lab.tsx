
import React from 'react';
import { EXPERIMENTS } from '../data';
import { Microscope, Activity, Clock, GitCommit } from 'lucide-react';

export const Lab: React.FC = () => {

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* Dashboard Header */}
      <section className="flex flex-col md:flex-row justify-between items-end border-b-2 border-[#1c1c1c] pb-6">
        <div>
           <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 flex items-center gap-3">
             <Activity className="text-[#B44C43]" size={36} />
             Experiment Tracker
           </h1>
           <p className="font-mono text-sm text-[#555] max-w-xl">
             // MONITORING ACTIVE RESEARCH NODES<br/>
             // FROM HYPOTHESIS TO EXECUTION
           </p>
        </div>
        <div className="hidden md:flex gap-6">
            <div className="text-right">
                <span className="block font-mono text-[10px] text-[#555] uppercase tracking-wider">Active Experiments</span>
                <span className="font-mono text-2xl font-bold text-[#1c1c1c]">{EXPERIMENTS.length}</span>
            </div>
            <div className="text-right">
                <span className="block font-mono text-[10px] text-[#555] uppercase tracking-wider">System Status</span>
                <span className="font-mono text-2xl font-bold text-[#2e4a3d]">OPERATIONAL</span>
            </div>
        </div>
      </section>

      {/* Dashboard List View */}
      <section className="space-y-6">
        {EXPERIMENTS.map((exp) => (
          <div key={exp.id} className="bg-[#FDFBF7] border-2 border-[#1c1c1c] shadow-[4px_4px_0px_0px_rgba(28,28,28,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(28,28,28,1)] transition-all duration-200">
            
            {/* Top Bar: Meta Info */}
            <div className="bg-[#F2EFE9] border-b-2 border-[#1c1c1c] px-4 py-2 flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <span className={`font-mono text-[10px] px-2 py-1 border border-[#1c1c1c] uppercase font-bold
                        ${exp.status === 'In Progress' ? 'bg-[#E6B325] text-white' : 
                        exp.status === 'Published' ? 'bg-[#2e4a3d] text-white' : 
                        'bg-white text-[#1c1c1c]'}
                    `}>
                        {exp.status}
                    </span>
                    <span className="font-mono text-xs text-[#555] flex items-center gap-1">
                        <Clock size={12} /> UPDATED: {exp.lastUpdate}
                    </span>
                </div>
                <div className="font-mono text-xs text-[#1c1c1c] opacity-50">ID: {exp.id}</div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: Core Identity + Hypothesis */}
                <div className="lg:col-span-8 space-y-6">
                    <div>
                        <h3 className="font-serif text-3xl font-bold leading-tight text-[#1c1c1c] mb-2">{exp.title}</h3>
                        <p className="font-serif text-lg opacity-80 leading-snug">{exp.description}</p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-mono text-xs font-bold text-[#B44C43] uppercase tracking-widest flex items-center gap-2">
                            <Microscope size={14} /> Core Hypothesis
                        </h4>
                        <p className="font-serif text-lg italic bg-[#F2EFE9] p-4 border-l-4 border-[#B44C43]">
                            "{exp.hypothesis}"
                        </p>
                    </div>
                </div>

                {/* Right: Actions & Tags */}
                <div className="lg:col-span-4 lg:border-l border-dashed border-[#1c1c1c] lg:pl-6 flex flex-col justify-between">
                    <div>
                         <h4 className="font-mono text-xs font-bold text-[#1c1c1c] uppercase tracking-widest mb-2">Research Tags</h4>
                         <div className="flex flex-wrap gap-2">
                            {exp.tags.map(tag => (
                                <span key={tag} className="font-mono text-[10px] text-[#555] bg-white border border-[#e5e5e5] px-2 py-1">#{tag}</span>
                            ))}
                         </div>
                    </div>
                    
                    <div className="pt-8">
                         <a href={exp.link || '#'} target="_blank" rel="noopener noreferrer" className="w-full border-2 border-[#1c1c1c] bg-[#1c1c1c] text-white hover:bg-[#333] transition-colors py-3 font-mono text-xs uppercase flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none">
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
