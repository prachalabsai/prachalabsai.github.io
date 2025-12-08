
import React, { useRef, useEffect } from 'react';
import { RetroCard } from '../components/RetroCard';
import { Globe, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

// Generative Pixel Animation Component
const PixelMind = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.offsetWidth || 800;
    let height = canvas.height = canvas.parentElement?.offsetHeight || 300;
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
    }
    
    const particles: Particle[] = [];
    
    // Theme-aware colors helper
    const getComputedColor = (varName: string) => {
        return getComputedStyle(document.body).getPropertyValue(varName).trim();
    };

    // Need to re-init particles if theme changes significantly, but simplest is to just pull colors each frame or setup
    const initParticles = () => {
        const colors = [
            getComputedColor('--accent-secondary'), 
            getComputedColor('--accent-primary'), 
            getComputedColor('--border-main'), 
            getComputedColor('--text-main')
        ];
        
        particles.length = 0;
        for(let i=0; i<60; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.floor(Math.random() * 3) + 2
            });
        }
    };
    
    // Initial load might miss CSS vars if not ready, retry slightly
    setTimeout(initParticles, 100);

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Draw Connections
        // Using getComputedColor inside loop is expensive, assume static for now or reload on theme toggle via React key
        // We'll use a semi-transparent stroke based on border color
        ctx.strokeStyle = getComputedColor('--border-main') + '33'; // 20% opacity approx
        
        ctx.beginPath();
        for(let i=0; i<particles.length; i++) {
            for(let j=i+1; j<particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 100) {
                   ctx.moveTo(particles[i].x, particles[i].y);
                   ctx.lineTo(particles[j].x, particles[j].y);
                }
            }
        }
        ctx.stroke();

        // Draw Particles
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            // Bounce
            if(p.x < 0 || p.x > width) p.vx *= -1;
            if(p.y < 0 || p.y > height) p.vy *= -1;
            
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size); // Square pixels
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();

    const handleResize = () => {
        if(canvas.parentElement) {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            width = canvas.width;
            height = canvas.height;
            initParticles();
        }
    };
    
    // Observer for theme changes to redraw colors
    const observer = new MutationObserver(() => {
        initParticles();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50" />;
}

export const Home: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section with Generative Animation */}
      <section className="relative h-[50vh] flex flex-col justify-center border border-[var(--border-main)] bg-[var(--bg-card)] p-8 overflow-hidden group">
        <PixelMind />
        
        <div className="relative z-10 pointer-events-none">
            <div className="font-pixel text-xl text-[var(--accent-secondary)] mb-2 animate-pulse">
            // SYSTEM_INIT: PRACHALABS.AI
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl font-light leading-[0.9] text-[var(--text-main)] mix-blend-normal">
            Emergence<br/>
            <span className="text-[var(--text-muted)]">to</span> Convergence
            </h1>
            
            <p className="mt-8 font-mono text-sm md:text-base max-w-xl text-[var(--text-muted)] border-l-2 border-[var(--accent-primary)] pl-4">
                An independent laboratory at the intersection of Design, Research, and Engineering. 
                Exploring the humans, AI and their co-existing ecosystems.
            </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Core Philosophy */}
        <div className="md:col-span-8">
          <RetroCard title="Manifesto" className="h-full">
            <div className="prose prose-invert prose-lg max-w-none font-serif text-[var(--text-main)]">
              <p>
                <span className="font-pixel text-4xl text-[var(--accent-primary)] float-left mr-2 mt-[-8px]">I</span>
                 am interested in AI and humans as a collective ecosystem. We look to human intelligence to solve AI research problems, framing solutions that align with real-world phenomena.
              </p>
              <p>
                My goal is to pursue interesting research directions in ML/AI. I do not want to confine myself to just NLP or just Coding-LLMs, but rather follow where the problems lead. This is an effort to learn, and to reinforce better industrial practices through interdisciplinary learning.
              </p>
              <h3 className="font-pixel text-2xl text-[var(--accent-secondary)] mt-6 mb-2">From Pixels to Proofs</h3>
              <p className="text-[var(--text-muted)]">
                This lab is an expression of thoughts. It is where raw hypotheses (emergence) are tested, iterated upon, and eventually solidified into proofs or solutions (convergence). It is about confidence, collaboration, and the depth of the inquiry.
              </p>
            </div>
          </RetroCard>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-6">
           <RetroCard title="Status_Log" className="bg-[var(--bg-main)]">
              <ul className="space-y-4 font-mono text-xs">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-primary)] animate-pulse">●</span>
                  <span className="text-[var(--text-main)]">Masters in Data Science @ Columbia University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-secondary)]">●</span>
                  <span className="text-[var(--text-main)]">Collaborations Open</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--border-main)]">●</span>
                  <span className="text-[var(--text-muted)]">Est. 2025</span>
                </li>
              </ul>
           </RetroCard>

           <RetroCard title="Connect" className="bg-[var(--bg-card)]">
              <div className="flex flex-col gap-3">
                 <a href="https://pracha.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm text-[var(--text-muted)] hover:text-[var(--accent-secondary)] transition-colors group">
                    <Globe size={16} className="text-[var(--border-main)] group-hover:text-[var(--accent-secondary)]" />
                    pracha.me
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all ml-auto" />
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm text-[var(--text-muted)] hover:text-[var(--accent-secondary)] transition-colors group">
                    <Twitter size={16} className="text-[var(--border-main)] group-hover:text-[var(--accent-secondary)]" />
                    Twitter
                 </a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm text-[var(--text-muted)] hover:text-[var(--accent-secondary)] transition-colors group">
                    <Linkedin size={16} className="text-[var(--border-main)] group-hover:text-[var(--accent-secondary)]" />
                    LinkedIn
                 </a>
                 <a href="mailto:hello@prachalabs.ai" className="flex items-center gap-3 font-mono text-sm text-[var(--text-muted)] hover:text-[var(--accent-secondary)] transition-colors group">
                    <Mail size={16} className="text-[var(--border-main)] group-hover:text-[var(--accent-secondary)]" />
                    Email
                 </a>
              </div>
           </RetroCard>
        </div>
      </div>
    </div>
  );
};
