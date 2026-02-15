import React, { useState } from 'react';

export const Threads: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-12">

      {/* Header */}
      <section className="pt-8">
        <h1 className="font-serif text-3xl font-bold text-[var(--text-main)] mb-2">
          Threads
        </h1>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          Living document — thought process, working notes, open questions
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border-main)]" />

      {/* Embedded Doc */}
      <section className="relative">
        {!loaded && (
          <div
            className="absolute inset-0 flex items-center justify-center border border-[var(--border-main)]"
            style={{ height: 'calc(100vh - 260px)', minHeight: '600px' }}
          >
            <span className="font-mono text-xs text-[var(--text-muted)]">Loading document...</span>
          </div>
        )}
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTOODDHqSPQhd0pN4e7NJolVK0BnCb1ngZL2l3xU92EForVEtzdklMH30lMHgrvzd5ttK5PGIIq6tyd/pub?embedded=true"
          className="w-full border border-[var(--border-main)] rounded-sm"
          style={{
            height: 'calc(100vh - 260px)',
            minHeight: '600px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          title="Threads — Living Document"
          onLoad={() => setLoaded(true)}
        />
      </section>

    </div>
  );
};
