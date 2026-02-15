import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Pracha: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-20">

      {/* Header */}
      <section className="pt-8">
        <h1 className="font-serif text-3xl font-bold text-[var(--text-main)] mb-2">
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
            className="inline-flex items-center gap-1 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            pracha.me <ExternalLink size={10} />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* Origin */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          Origin
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
            I come from instrumentation and control engineering. Not computer science, not
            statistics&mdash;control systems. Feedback loops, sensors, signals, state estimation.
            That background did something to me that I didn&rsquo;t understand until much later:
            it made me see everything as a system. Not metaphorically. Literally.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            When I joined Mu Sigma in 2019 and started working on pharmaceutical forecasting
            and customer churn, I wasn&rsquo;t thinking &ldquo;data science.&rdquo; I was
            thinking&mdash;this is the same thing. Signals coming in, noise to filter, a state
            to estimate, a decision to make.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            Then Dhiraj used to talk about complexity science in town halls, and Zubin about
            agent-based modeling and decision-making, and something clicked. They said
            consciousness doesn&rsquo;t live inside individual nodes&mdash;it emerges from the
            interactions between them. That one idea changed how I see problems. I stopped
            asking &ldquo;how smart is this model&rdquo; and started asking &ldquo;what happens
            when agents interact in systems they don&rsquo;t fully understand?&rdquo;
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* The Thread */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          The Thread
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            I started reading&mdash;not ML textbooks, but <em>Thinking Fast and Slow</em>,{' '}
            <em>Nudge</em>, <em>Scale</em> by Geoffrey West, <em>The Fabric of Reality</em>,
            behavioral economics, complexity science. These aren&rsquo;t separate fields to me.
            They&rsquo;re all decoder books. Every one of them is saying the same thing: here&rsquo;s
            what&rsquo;s actually happening beneath what you see on the surface.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            Systems, behavior, intelligence&mdash;I didn&rsquo;t plan this as a research theme.
            It emerged. From the projects, from the books, from watching how people make decisions
            in supply chains and markets and hospitals.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* The Path */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          The Path
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            Over six years I kept following that thread wherever it went. Captain Fresh&mdash;they
            were working on fishes and shrimps. Sounds weird? That&rsquo;s exactly why I joined.
            Satellite monitoring of aquaculture ponds, causal inference on water conditions,
            building a computer vision pipeline from scratch. I wasn&rsquo;t optimizing for a
            resume line. I wanted problems nobody around me was solving.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            Then a medical AI startup in deep South Tamil Nadu&mdash;not Chennai, not
            Bangalore&mdash;where I trained frontend engineers to learn ML, built annotation
            pipelines, established an entire AI practice from nothing. Then
            Informatica&mdash;LLMs, transformers, enterprise-scale problems.
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            In every place, the pattern was the same: you drop an algorithm into a system full
            of messy human decisions and real-world constraints, and the interesting thing is
            never the algorithm. It&rsquo;s the gap. The gap between what the solution assumes
            and what the problem actually looks like.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
            I started thinking of research as building cantilever bridges&mdash;you extend from
            the problem side by deeply understanding what&rsquo;s actually going on, and you
            extend from the solution side by knowing your theory well enough to see where its
            assumptions break. The work that matters happens in the overlap, and that overlap
            is never clean.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* Now */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
          Now
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            That&rsquo;s what brought me to Columbia&mdash;questions I&rsquo;d been circling for
            years but couldn&rsquo;t chase while shipping products. Why do agents sometimes
            coordinate without ever talking to each other? What if we forced a neural network to
            respect the physics of the system it&rsquo;s modeling? How do you make decisions when
            interventions are costly and the world won&rsquo;t sit still?
          </p>
          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)]">
            I write about all of this daily at{' '}
            <a
              href="https://daily.pracha.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-main)] hover:opacity-70 transition-opacity"
            >
              daily.pracha.me
            </a>
            &mdash;not as someone with answers, but as someone still figuring it out. Same way I
            approach cooking, actually. The fix is never more heat. It&rsquo;s understanding what
            went wrong and adjusting next time.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
            Learn something from first principles, build something with it, talk to someone who
            sees it differently, repeat. That loop runs whether I&rsquo;m writing a new multi-agent
            RL algorithm, TAing causal inference, or teaching machine learning to students in rural
            Tamil Nadu through a nonprofit I started. I&rsquo;m not chasing AI as a trend.
            I&rsquo;m chasing a question that&rsquo;s been building in me for eight
            years&mdash;how do systems behave, how do agents decide, and what does intelligence
            actually look like when it meets the real world.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="pb-8">
        <div className="flex flex-wrap gap-6">
          <a
            href="https://pracha.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            pracha.me <ExternalLink size={10} />
          </a>
          <a
            href="https://daily.pracha.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            daily.pracha.me <ExternalLink size={10} />
          </a>
        </div>
      </section>

    </div>
  );
};
