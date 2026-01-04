
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
            for (let i = 0; i < 60; i++) {
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
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
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
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size); // Square pixels
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            if (canvas.parentElement) {
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
                        Emergence<br />
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

            {/* Agentic Decision Sciences - Convergence Document */}
            <section className="mt-16">
                <RetroCard title="Agentic Decision Sciences" className="bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-main)]">
                    <div className="prose prose-invert max-w-none font-serif text-[var(--text-main)]">

                        {/* Header */}
                        <div className="mb-8 pb-6 border-b border-[var(--border-main)]">
                            <p className="font-pixel text-sm text-[var(--accent-secondary)] uppercase tracking-wider mb-2">
                                A Convergence Document
                            </p>
                            <p className="text-lg italic text-[var(--text-muted)] leading-relaxed">
                                A canvas for understanding, modeling, and nurturing agents—human, artificial, and hybrid—from the atomic individual to the coexisting ecosystem, with prosperity as the through-line.
                            </p>
                        </div>

                        {/* The Substrate */}
                        <div className="mb-10">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">The Substrate</h2>
                            <p className="leading-relaxed">
                                Agentic Decision Sciences is not a method. It is not a technique. It is not a product category or a business vertical. It is a <strong>canvas</strong>—a way of seeing the problem space that emerges when we take seriously the idea that the world consists of <em>agents making decisions under uncertainty</em>, and that these agents are increasingly both human and artificial, existing in shared ecosystems where their fates intertwine.
                            </p>
                            <p className="leading-relaxed">
                                This canvas does not prescribe how to solve problems. It identifies where problems live. It offers a lens through which a particular class of challenges becomes visible, nameable, and tractable. The methods will vary. They will evolve. What persists is the problem space itself: <strong>agents, decisions, ecosystems, prosperity</strong>.
                            </p>
                        </div>

                        {/* Why This Name */}
                        <div className="mb-10">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">Why "Agentic Decision Sciences"</h2>

                            <div className="grid md:grid-cols-3 gap-6 my-6">
                                <div className="border border-[var(--border-main)] p-5 bg-[var(--bg-main)]">
                                    <h3 className="font-pixel text-lg text-[var(--accent-secondary)] mb-3">Agents</h3>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        An agent is something that <em>decides and acts</em>. Not a passive data point. Not a row in a table. Not a user to be optimized. An entity with states, goals, constraints, behaviors, and consequences.
                                    </p>
                                </div>

                                <div className="border border-[var(--border-main)] p-5 bg-[var(--bg-main)]">
                                    <h3 className="font-pixel text-lg text-[var(--accent-secondary)] mb-3">Decision</h3>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        Decisions are the atomic unit of agency. Every agent, at every moment, faces choices under uncertainty—incomplete information, unpredictable consequences, bounded resources, conflicting values.
                                    </p>
                                </div>

                                <div className="border border-[var(--border-main)] p-5 bg-[var(--bg-main)]">
                                    <h3 className="font-pixel text-lg text-[var(--accent-secondary)] mb-3">Sciences (Plural)</h3>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        Not a single discipline with unified methodology, but an interdisciplinary convergence zone. Methodological pluralism is strength. What binds us: shared commitment to understanding agents and their flourishing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Problem Space */}
                        <div className="mb-10">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">The Problem Space</h2>

                            <h3 className="font-pixel text-xl text-[var(--accent-secondary)] mb-3">From the Atomic to the Ecosystem</h3>
                            <p className="leading-relaxed mb-4">
                                The canvas spans scales. At one end: the atomic agent—a single human facing a choice, a single AI processing inputs. At the other: the coexisting ecosystem—millions of humans and AI systems interacting on platforms, in markets, across institutions.
                            </p>

                            <div className="bg-[var(--bg-main)] border border-[var(--border-main)] p-6 my-6">
                                <p className="font-mono text-sm text-[var(--accent-secondary)] mb-3">Examples across scales:</p>
                                <ul className="space-y-2 text-sm">
                                    <li>• Individual struggles with doom-scrolling—decision pathology amplified by AI</li>
                                    <li>• Family navigates financial planning—sequential choices under uncertainty</li>
                                    <li>• Marketplace matches buyers and sellers—coordination among self-interested agents</li>
                                    <li>• Healthcare system allocates treatments—decisions affecting population outcomes</li>
                                    <li>• Democracy deliberates policy—collective decision-making, increasingly AI-mediated</li>
                                </ul>
                            </div>

                            <h3 className="font-pixel text-xl text-[var(--accent-secondary)] mb-3">The Bidirectional Dynamic</h3>
                            <p className="leading-relaxed">
                                Problems exist on both sides of the human-AI relationship. <strong>Human agents</strong> bring biases, vulnerabilities, limitations—they can be manipulated, misled, addicted. <strong>AI agents</strong> bring misalignment, emergent goals, brittleness, opacity, inherited biases, capacity for deception.
                            </p>
                            <p className="leading-relaxed">
                                But both can also be part of solutions. AI can help humans decide better. Humans can guide AI toward beneficial behavior. We take this bidirectionality seriously.
                            </p>
                        </div>

                        {/* What This Is and Is Not */}
                        <div className="mb-10">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">A Big Tent with Sharp Focus</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-pixel text-lg text-[var(--accent-secondary)] mb-3">What It Is</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li>✓ Agent-centric problems where decisions under uncertainty affect prosperity</li>
                                        <li>✓ Research and practice, understanding and building</li>
                                        <li>✓ Multi-scale: individual → ecosystem</li>
                                        <li>✓ Methodologically pluralist</li>
                                        <li>✓ Prosperity-oriented, not extraction-oriented</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-pixel text-lg text-[var(--accent-secondary)] mb-3">What It's Not</h3>
                                    <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                                        <li>✗ Domain-agnostic data science</li>
                                        <li>✗ Just human-centered AI design</li>
                                        <li>✗ Only alignment or safety research</li>
                                        <li>✗ Pure theory or pure products</li>
                                        <li>✗ Engagement optimization for extraction</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The Prosperity Orientation */}
                        <div className="mb-10">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">The Prosperity Orientation</h2>

                            <div className="bg-[var(--bg-main)] border-l-4 border-[var(--accent-primary)] p-6 my-6">
                                <p className="font-pixel text-sm text-[var(--accent-secondary)] mb-2">Not Engagement, Not Extraction</p>
                                <p className="text-sm leading-relaxed">
                                    Much of contemporary technology optimizes for engagement—time on platform, clicks, conversions. These metrics extract value <em>from</em> users rather than provide value <em>to</em> them. We orient differently: <strong>How do we help agents flourish?</strong>
                                </p>
                            </div>

                            <p className="leading-relaxed">
                                Prosperity is multidimensional: security, agency, wellbeing, meaning, connection, growth, resilience. It's harder to measure than engagement, harder to optimize, harder to attribute. This is not a reason to abandon the orientation but a call for better methods.
                            </p>
                        </div>

                        {/* The Convergence */}
                        <div className="mb-10">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">The Convergence</h2>

                            <h3 className="font-pixel text-xl text-[var(--accent-secondary)] mb-3">Why Now</h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--accent-primary)] mt-1">→</span>
                                    <span><strong>AI agents are becoming real.</strong> Not metaphorical software but systems with genuine autonomy, learning, adaptive behavior.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--accent-primary)] mt-1">→</span>
                                    <span><strong>Human-AI coexistence is already here.</strong> Every feed, recommendation, assistant, marketplace is a human-AI ecosystem shaping billions of lives.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--accent-primary)] mt-1">→</span>
                                    <span><strong>The fragmentation is costly.</strong> Insights sit disconnected. Psychology doesn't talk to AI research. Alignment researchers and behavioral economists rarely meet.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--accent-primary)] mt-1">→</span>
                                    <span><strong>The post-AGI horizon demands preparation.</strong> We need frameworks for navigating this transition before it arrives.</span>
                                </li>
                            </ul>

                            <h3 className="font-pixel text-xl text-[var(--accent-secondary)] mb-3">What Converges</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div className="border border-[var(--border-main)] p-4 bg-[var(--bg-main)]">
                                    <p className="font-mono text-[var(--accent-secondary)] mb-2">Behavioral & Decision Sciences</p>
                                    <p className="text-[var(--text-muted)]">How humans actually decide—heuristics, biases, emotions, social influences</p>
                                </div>
                                <div className="border border-[var(--border-main)] p-4 bg-[var(--bg-main)]">
                                    <p className="font-mono text-[var(--accent-secondary)] mb-2">AI & Machine Learning</p>
                                    <p className="text-[var(--text-muted)]">Building, understanding, controlling artificial agents</p>
                                </div>
                                <div className="border border-[var(--border-main)] p-4 bg-[var(--bg-main)]">
                                    <p className="font-mono text-[var(--accent-secondary)] mb-2">Game Theory & Mechanism Design</p>
                                    <p className="text-[var(--text-muted)]">Strategic interaction—equilibria, incentives, coordination</p>
                                </div>
                                <div className="border border-[var(--border-main)] p-4 bg-[var(--bg-main)]">
                                    <p className="font-mono text-[var(--accent-secondary)] mb-2">Complex Systems & Networks</p>
                                    <p className="text-[var(--text-muted)]">Emergent phenomena in large agent populations</p>
                                </div>
                                <div className="border border-[var(--border-main)] p-4 bg-[var(--bg-main)]">
                                    <p className="font-mono text-[var(--accent-secondary)] mb-2">Alignment & Safety</p>
                                    <p className="text-[var(--text-muted)]">Ensuring AI agents remain beneficial</p>
                                </div>
                                <div className="border border-[var(--border-main)] p-4 bg-[var(--bg-main)]">
                                    <p className="font-mono text-[var(--accent-secondary)] mb-2">Wellbeing & Positive Psychology</p>
                                    <p className="text-[var(--text-muted)]">What constitutes human flourishing</p>
                                </div>
                            </div>
                        </div>

                        {/* The Invitation */}
                        <div className="mb-10">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">The Invitation</h2>

                            <p className="leading-relaxed mb-4">
                                Agentic Decision Sciences is for anyone who recognizes that agents and their decisions are central to the challenges and opportunities of our time.
                            </p>

                            <div className="bg-[var(--bg-main)] border border-[var(--accent-secondary)] p-6 my-6">
                                <p className="font-pixel text-sm text-[var(--accent-secondary)] mb-3">This canvas is for you if:</p>
                                <div className="space-y-2 text-sm">
                                    <p>→ You study how people make choices and want to connect to the AI systems reshaping choice architectures</p>
                                    <p>→ You build AI systems and want to ground your work in realistic human models</p>
                                    <p>→ You work on multi-agent systems and want to extend beyond abstract formulations to real humans with real stakes</p>
                                    <p>→ You care about AI safety and want to situate it within broader human-AI coexistence</p>
                                    <p>→ You build products that help people navigate decisions and want deeper research grounding</p>
                                    <p>→ You sense something important happening at the intersection of human agency, AI, and collective dynamics</p>
                                </div>
                            </div>

                            <h3 className="font-pixel text-xl text-[var(--accent-secondary)] mb-3">What Contribution Looks Like</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• <strong>Identifying problems</strong> — Making challenges visible, articulable</li>
                                <li>• <strong>Understanding phenomena</strong> — Empirical investigation of how agents decide, ecosystems evolve</li>
                                <li>• <strong>Developing methods</strong> — Creating tools that expand what can be studied, modeled, designed</li>
                                <li>• <strong>Building systems</strong> — Products, platforms, interventions that help agents concretely</li>
                                <li>• <strong>Shaping policy</strong> — Translating insights into governance frameworks at scale</li>
                                <li>• <strong>Building community</strong> — Creating venues, networks, traditions for collaboration</li>
                            </ul>
                        </div>

                        {/* Closing */}
                        <div className="mt-12 pt-8 border-t-2 border-[var(--accent-primary)]">
                            <h2 className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">The Work Begins</h2>
                            <p className="leading-relaxed mb-4">
                                We are living through a transformation in the nature of agency. For all of human history, humans were the only agents that mattered—the only entities that perceived, decided, and acted with consequences. That era is ending. Artificial agents are emerging that will increasingly share our world, shape our choices, and determine our collective fate.
                            </p>
                            <p className="leading-relaxed mb-6">
                                This transformation could go well or badly. It could enhance human flourishing or undermine it. The outcome is not predetermined. It depends on <em>choices</em>—choices made by the humans and AI systems designing these futures, choices made by societies navigating them, choices made by individuals living within them.
                            </p>

                            <div className="p-8 border-2 border-[var(--accent-primary)] bg-[var(--bg-main)] text-center">
                                <p className="font-pixel text-2xl text-[var(--accent-primary)] mb-4">
                                    Humans. AI. Co-Existence. Prosperity.
                                </p>
                                <p className="font-mono text-lg text-[var(--accent-secondary)] mb-2">
                                    A Big Tent with Sharp Focus
                                </p>
                                <p className="font-serif italic text-sm text-[var(--text-muted)]">
                                    The canvas is here. The work begins.
                                </p>
                            </div>
                        </div>

                    </div>
                </RetroCard>
            </section>
        </div>
    );
};
