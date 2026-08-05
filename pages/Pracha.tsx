import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../utils/usePageTitle';

export const Pracha: React.FC = () => {
  usePageTitle('Pracha');
  return (
    <div className="max-w-2xl mx-auto space-y-20">

      {/* Header */}
      <section className="pt-8">
        <h1 className="font-display text-3xl font-bold text-[var(--text-main)] mb-2">
          Pracha
        </h1>
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs text-[var(--text-muted)]">
            The person behind the lab
          </p>
          <a
            href="https://pracha.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-[var(--text-muted)] hover:text-accent transition-colors"
          >
            pracha.me <ExternalLink size={10} />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* Origin */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8">
          Origin
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
            I trained as an instrumentation and control engineer &mdash; not computer science,
            not statistics. Feedback loops, sensors, signals, state estimation. It left me with
            a habit I only recognized years later: I see everything as a system. Not
            metaphorically. Literally.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            So when I joined Mu Sigma in 2019 and started working on pharmaceutical forecasting
            and customer churn, I never thought of it as &ldquo;data science.&rdquo; It was the
            same problem in new clothes: signals coming in, noise to filter, a state to
            estimate, a decision to make.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            Two ideas from those years never let go of me. Dhiraj talked about complexity
            science in town halls; Zubin talked about agent-based modeling and decision-making.
            The thread running through both: intelligence doesn&rsquo;t live inside individual
            nodes &mdash; it emerges from the interactions between them. That reframed every
            problem I&rsquo;ve looked at since. I stopped asking &ldquo;how smart is this
            model?&rdquo; and started asking &ldquo;what happens when agents interact inside
            systems they don&rsquo;t fully understand?&rdquo;
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* The Thread */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8">
          The Thread
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            The reading that shaped me wasn&rsquo;t ML textbooks. It was <em>Thinking, Fast and
            Slow</em>, <em>Nudge</em>, Geoffrey West&rsquo;s <em>Scale</em>, <em>The Fabric of
            Reality</em> &mdash; behavioral economics, complexity science. To me these were
            never separate fields. Each one decodes the same thing from a different angle:
            what is actually happening beneath the surface of what you see.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            Systems, behavior, intelligence. I never planned that as a research theme &mdash;
            it emerged, from the projects, the books, and from watching how people actually
            make decisions in supply chains, markets, and hospitals.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* The Path */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8">
          The Path
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            For six years I followed that thread wherever it led. Captain Fresh &mdash; fish and
            shrimp, which is exactly why I joined: satellite monitoring of aquaculture ponds,
            causal inference on water conditions, a computer vision pipeline built from scratch.
            I wasn&rsquo;t collecting resume lines. I wanted problems nobody around me was
            solving.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            Then a medical AI startup in deep South Tamil Nadu &mdash; not Chennai, not
            Bangalore &mdash; where I taught frontend engineers to do machine learning, built
            annotation pipelines, and set up an AI practice from nothing. Then Informatica:
            LLMs, transformers, problems at enterprise scale.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
            Every place taught the same lesson. Drop an algorithm into a system full of messy
            human decisions and real-world constraints, and the interesting thing is never the
            algorithm &mdash; it&rsquo;s the gap between what the solution assumes and what the
            problem actually is. The work that matters lives in that gap, and it is never
            clean.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* Now */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8">
          Now
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            That gap is what brought me to Columbia &mdash; to the questions I had circled for
            years but couldn&rsquo;t chase while shipping products. Why do agents sometimes
            coordinate without ever communicating? What changes when a neural network is forced
            to respect the physics of the system it models? How do you decide well when
            interventions are costly and the world won&rsquo;t sit still?
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            The loop I run hasn&rsquo;t changed: learn something from first principles, build
            something with it, talk to someone who sees it differently, repeat. It runs whether
            I&rsquo;m working on multi-agent RL, TAing causal inference, or teaching machine
            learning to students in rural Tamil Nadu through a nonprofit I started.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
            I&rsquo;m not chasing AI as a trend. I&rsquo;m chasing a question that has been
            building in me for eight years &mdash; how systems behave, how agents decide, and
            what intelligence actually looks like when it meets the real world.{' '}
            <Link to="/" className="text-accent hover:text-accent-strong transition-colors">
              PrachaLabs
            </Link>{' '}
            is where that question now lives.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="pb-8">
        <a
          href="https://pracha.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-accent transition-colors"
        >
          pracha.me <ExternalLink size={10} />
        </a>
      </section>

    </div>
  );
};
