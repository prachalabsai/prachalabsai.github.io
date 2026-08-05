import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../utils/usePageTitle';

export const NotFound: React.FC = () => {
  usePageTitle('404');
  return (
    <div className="pt-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">404</p>
      <h1 className="font-display text-3xl font-bold text-[var(--text-main)] mb-4">
        There's nothing at this address.
      </h1>
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-accent transition-colors"
      >
        ← Back home
      </Link>
    </div>
  );
};
