
import React, { useState, useEffect } from 'react';
import { RetroCard } from '../components/RetroCard';
import { Globe, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0); // 0: typing, 1: waiting, 2: deleting
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["DESIGN", "RESEARCH", "ENGINEERING"];
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[wordIndex];

    if (phase === 0) { // Typing
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setPhase(1), PAUSE_DURATION);
      }
    } else if (phase === 1) { // Waiting
      setPhase(2);
    } else if (phase === 2) { // Deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        setPhase(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex]);

  return (
    <span className="text-[#B44C43] font-mono font-bold">
      {text}
      <span className="animate-pulse">_</span>
    </span>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section with Retro Animation */}
      <section className="relative min-h-[40vh] flex flex-col justify-center border-b-2 border-dashed border-[#1c1c1c] pb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-[#555] mb-4">
          // SYSTEM_INIT: PRACHALABS.AI
        </div>
        
        <h1 className="font-serif text-5xl md:text-8xl font-light leading-tight text-[#1c1c1c]">
          The Intersection of<br/>
          <TypewriterText />
        </h1>
        
        <p className="mt-8 text-xl md:text-2xl font-serif max-w-2xl leading-relaxed opacity-90 border-l-4 border-[#1c1c1c] pl-6 py-2 bg-[#F2EFE9]">
            PrachaLabs is an independent research laboratory. 
            A playground, a think tank, and a canvas for human-AI ecosystems.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Core Philosophy */}
        <div className="md:col-span-8">
          <RetroCard title="The Manifesto" className="h-full bg-white">
            <div className="prose prose-stone max-w-none font-serif">
              <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                I am interested in AI and humans as a collective ecosystem. We look to human intelligence to solve AI research problems, framing solutions that align with real-world phenomena.
              </p>
              <p>
                My goal is to pursue interesting research directions in ML/AI. I do not want to confine myself to just NLP or just Coding-LLMs, but rather follow where the problems lead. This is an effort to learn, and to reinforce better industrial practices through interdisciplinary learning.
              </p>
              <h3 className="font-bold italic mt-6">Emergence to Convergence</h3>
              <p>
                This lab is an expression of thoughts. It is where raw hypotheses (emergence) are tested, iterated upon, and eventually solidified into proofs or solutions (convergence). It is about confidence, collaboration, and the depth of the inquiry.
              </p>
            </div>
          </RetroCard>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-6">
           <RetroCard title="Lab Status" className="bg-[#E6B325]/10">
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#B44C43] animate-pulse">●</span>
                  <span>Masters in Data Science @ Columbia University</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700">●</span>
                  <span>Collaborations Open</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700">●</span>
                  <span>Est. 2025</span>
                </li>
              </ul>
           </RetroCard>

           <RetroCard title="Communication Channels" className="bg-[#FDFBF7]">
              <div className="flex flex-col gap-3">
                 <a href="https://pracha.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm hover:text-[#B44C43] hover:underline transition-all group">
                    <Globe size={16} className="text-[#1c1c1c] group-hover:text-[#B44C43]" />
                    pracha.me
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm hover:text-[#B44C43] hover:underline transition-all group">
                    <Twitter size={16} className="text-[#1c1c1c] group-hover:text-[#B44C43]" />
                    Twitter
                 </a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm hover:text-[#B44C43] hover:underline transition-all group">
                    <Linkedin size={16} className="text-[#1c1c1c] group-hover:text-[#B44C43]" />
                    LinkedIn
                 </a>
                 <a href="mailto:hello@prachalabs.ai" className="flex items-center gap-3 font-mono text-sm hover:text-[#B44C43] hover:underline transition-all group">
                    <Mail size={16} className="text-[#1c1c1c] group-hover:text-[#B44C43]" />
                    Email
                 </a>
              </div>
           </RetroCard>

           <div className="border-2 border-dashed border-[#1c1c1c] p-6 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className="font-mono text-xs uppercase tracking-widest mb-2">Motto</span>
              <p className="font-serif italic text-lg">"From Emergence to Convergence."</p>
           </div>
        </div>
      </div>
    </div>
  );
};
