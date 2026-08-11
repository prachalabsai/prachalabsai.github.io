import React from 'react';
import { Link } from 'react-router-dom';
import { StreamsGrid } from '../components/StreamsGrid';
import { THROUGHLINES } from '../content/streams';
import { PostListItem } from '../components/PostListItem';
import { getAllPosts } from '../content/posts';
import { WORK } from '../content/work';
import { NOW } from '../content/now';
import { usePageTitle } from '../utils/usePageTitle';

const Overline: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-4">{children}</p>
);

export const Home: React.FC = () => {
  usePageTitle();
  const recentPosts = getAllPosts().slice(0, 3);
  const recentWork = WORK.slice(0, 2);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
          Downstream of Intelligence
        </h1>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-[var(--text-main)] mb-4">
          Intelligence is becoming abundant — and the greatest opportunity of our time is not
          automating what we already do, but discovering what we can now attempt.
        </p>
        <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)] mb-4">
          PrachaLabs — an independent lab, and for now a personal project rather than a company —
          works in both directions. Upstream: how frontier intelligence is actually made.
          Downstream: how real value gets created with it — research, engineering, product, and
          strategy practiced as one intertwined motion, with problem solving as the craft that
          binds them.
        </p>
        <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)] mb-8">
          The downstream is for everyone — the independent thinker, the data scientist, the founder
          starting with almost nothing, the family business, the enterprise that will never build
          its own frontier models. Value creation at every scale — and the lab's role is to
          multiply that impact, not merely add to it.
        </p>
        <div className="flex gap-6 flex-wrap">
          <Link
            to="/charter"
            className="font-mono text-xs uppercase tracking-[0.15em] text-accent hover:text-accent-strong transition-colors"
          >
            Read the charter →
          </Link>
          <Link
            to="/writing/downstream-of-intelligence"
            className="font-mono text-xs uppercase tracking-[0.15em] text-accent hover:text-accent-strong transition-colors"
          >
            The position essay →
          </Link>
        </div>
      </section>

      {/* Six Streams */}
      <section>
        <Overline>The six streams</Overline>
        <StreamsGrid />
        <div className="mt-4 text-right">
          <Link
            to="/charter"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-accent transition-colors"
          >
            Why these six →
          </Link>
        </div>
      </section>

      {/* Throughlines */}
      <section>
        <Overline>Throughlines</Overline>
        <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)] mb-6">
          Some commitments run across every stream rather than living in one.
        </p>
        <div className="space-y-4">
          {THROUGHLINES.map((t) => (
            <div key={t.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent shrink-0 sm:w-44">
                {t.name}
              </span>
              <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Working notes */}
      <section>
        <Overline>Working notes</Overline>
        <div className="border border-[var(--border-main)] border-l-2 border-l-accent bg-[var(--accent-tint)] p-6">
          <p className="font-mono text-xs text-accent-soft mb-2">{NOW.season}</p>
          <p className="font-serif text-xl leading-relaxed text-[var(--text-main)] mb-2">
            {NOW.focus}
          </p>
          <p className="font-serif italic text-base leading-relaxed text-[var(--text-muted)]">
            {NOW.note}
          </p>
        </div>
      </section>

      {/* How the lab thinks */}
      <section>
        <Overline>How the lab thinks</Overline>
        <div className="space-y-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">
              The motion
            </p>
            <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
              Explore and build what the downstream of AGI could look like — and how it becomes
              beneficial to the world — while continuously working toward the upstream frontier of
              intelligence. Everything produced along the way — experiments, essays, products,
              playbooks — is published for others to use.
            </p>
          </div>
          <blockquote className="border-l-2 border-accent bg-[var(--accent-tint)] pl-5 py-3 pr-4">
            <p className="font-serif text-xl italic leading-relaxed text-[var(--text-main)]">
              “If it could have been made by anyone with model access, it doesn't ship.”
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mt-2">
              The standard
            </p>
          </blockquote>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">
              The cadence
            </p>
            <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
              The curriculum is the map, not the commitment. Each season selects a few units and
              works them in public.
            </p>
          </div>
        </div>
      </section>

      {/* Why a lab */}
      <section>
        <Overline>Why a lab</Overline>
        <div className="space-y-4">
          <p className="font-serif text-lg leading-relaxed text-[var(--text-main)]">
            PrachaLabs is one person, and the name is deliberate. A lab is not a headcount — it is
            a way of working: questions held long enough to compound, experiments run honestly,
            results published either way. Calling it a lab sets the standard the work has to meet.
            For now it is a project, not a company — and that is on purpose.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)]">
            It is also a bet on evolution. Everything has to start somewhere, and this is an
            evolving canvas — a place to learn, think, build, and scale toward real impact and
            value. Structures that begin as one person's mission can grow into something larger —
            collaborations, ventures, a shared practice of research and building — but only if the
            foundations exist before the people arrive. The name holds the space the mission
            intends to grow into.
          </p>
          <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)]">
            And it is an open door. If you are a problem solver drawn to the same questions —
            creating value downstream, curious about the frontier — I would genuinely like to hear
            from you:{' '}
            <a
              href="https://pracha.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-strong transition-colors"
            >
              pracha.me
            </a>
            .
          </p>
        </div>
      </section>

      {/* Recent output */}
      <section>
        <Overline>Recent</Overline>
        <div className="divide-y divide-[var(--border-main)] border-t border-b border-[var(--border-main)]">
          {recentPosts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
          {recentWork.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group py-5"
            >
              <div className="flex items-baseline gap-4 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  {item.type}
                </span>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">{item.status}</span>
              </div>
              <h3 className="font-display text-3xl font-semibold text-[var(--text-main)] group-hover:text-accent transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="font-serif text-lg text-[var(--text-muted)] leading-snug mt-1">
                {item.description}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-4 flex gap-6 justify-end">
          <Link
            to="/writing"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-accent transition-colors"
          >
            All writing →
          </Link>
          <Link
            to="/work"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-accent transition-colors"
          >
            All work →
          </Link>
        </div>
      </section>
    </div>
  );
};
