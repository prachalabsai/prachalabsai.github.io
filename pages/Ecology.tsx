import React from 'react';
import { Link } from 'react-router-dom';
import { ECOLOGY_LAYERS, POSSIBILITIES } from '../content/ecology';
import { usePageTitle } from '../utils/usePageTitle';

/* The downstream basin as a cross-section: layers stacked top to bottom. */
export const Ecology: React.FC = () => {
  usePageTitle('Ecology');

  return (
    <div>
      <section className="pt-8 mb-12">
        <h1 className="font-display text-3xl font-bold text-[var(--text-main)] mb-2">Ecology</h1>
        <p className="font-mono text-xs text-[var(--text-muted)] mb-4">
          A living map of the downstream — its layers, elements, and possibilities.
        </p>
        <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)]">
          When intelligence becomes abundant, it doesn't land as a product — it forms an
          ecosystem. This page maps that ecosystem the way you would map a river basin: what
          enters it, how it moves, what it deposits, who lives in it, what grows, and the
          climate that decides whether it flourishes. It is deliberately unfinished — elements
          get added, merged, and retired as thinking sharpens.
        </p>
      </section>

      {/* The basin, layer by layer */}
      <div className="border border-[var(--border-main)]">
        {ECOLOGY_LAYERS.map((layer, i) => (
          <section
            key={layer.id}
            className={`p-6 ${i > 0 ? 'border-t border-[var(--border-main)]' : ''} ${
              i % 2 === 1 ? 'bg-[var(--accent-tint)]' : ''
            }`}
          >
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-main)]">
                {layer.name}
              </h2>
            </div>
            <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)] mb-4">
              {layer.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {layer.elements.map((el) => (
                <span
                  key={el}
                  className="font-mono text-[11px] text-[var(--text-main)] border border-[var(--border-main)] px-2.5 py-1"
                >
                  {el}
                </span>
              ))}
            </div>
            {layer.question && (
              <p className="font-serif italic text-base leading-relaxed text-accent-soft">
                {layer.question}
              </p>
            )}
          </section>
        ))}
      </div>

      {/* Possibilities */}
      <section className="mt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-4">
          Open territories
        </p>
        <p className="font-serif text-lg leading-relaxed text-[var(--text-muted)] mb-6">
          Possibilities under active exploration — some will become experiments, case studies,
          and proofs of value; others will be retired. That churn is the point.
        </p>
        <ul className="space-y-3">
          {POSSIBILITIES.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="text-accent shrink-0">—</span>
              <span className="font-serif text-lg leading-relaxed text-[var(--text-main)]">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 pt-6 border-t border-[var(--border-main)] flex gap-6 flex-wrap">
        <Link
          to="/charter"
          className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-accent transition-colors"
        >
          The charter →
        </Link>
        <Link
          to="/writing/downstream-of-intelligence"
          className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-accent transition-colors"
        >
          The position essay →
        </Link>
      </footer>
    </div>
  );
};
