import React, { Suspense } from 'react';
import { usePageTitle } from '../utils/usePageTitle';
import charter from '@/LAB.md?raw';

const MarkdownRenderer = React.lazy(() =>
  import('../components/MarkdownRenderer').then((m) => ({ default: m.MarkdownRenderer }))
);

const Loading = (
  <p className="font-mono text-xs text-[var(--text-muted)]">Loading…</p>
);

export const Charter: React.FC = () => {
  usePageTitle('Charter');
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-2 pt-8">
        The charter
      </p>
      <p className="font-mono text-xs text-[var(--text-muted)] mb-10">
        The lab's operating document — thesis, streams, curriculum, standard.
      </p>
      <Suspense fallback={Loading}>
        <MarkdownRenderer content={charter} />
      </Suspense>
    </div>
  );
};
