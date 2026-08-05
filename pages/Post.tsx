import React, { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../content/posts';
import { STREAMS } from '../content/streams';
import { NotFound } from './NotFound';
import { formatDate } from '../utils/markdown';
import { usePageTitle } from '../utils/usePageTitle';

const MarkdownRenderer = React.lazy(() =>
  import('../components/MarkdownRenderer').then((m) => ({ default: m.MarkdownRenderer }))
);

export const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  usePageTitle(post?.title);

  if (!post) return <NotFound />;

  const streamNames = post.streams
    .map((n) => STREAMS.find((s) => s.number === n)?.name)
    .filter(Boolean);

  return (
    <article>
      <header className="pt-8 mb-10">
        <div className="flex items-baseline gap-4 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[var(--text-muted)]">{formatDate(post.date)}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
            {post.type}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] text-[var(--text-muted)]">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-[var(--text-main)]">
          {post.title}
        </h1>
        {streamNames.length > 0 && (
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)] mt-4">
            Stream{streamNames.length > 1 ? 's' : ''}: {streamNames.join(' · ')}
          </p>
        )}
      </header>

      <Suspense fallback={<p className="font-mono text-xs text-[var(--text-muted)]">Loading…</p>}>
        <MarkdownRenderer content={post.content} />
      </Suspense>

      <footer className="mt-16 pt-6 border-t border-[var(--border-main)]">
        <Link
          to="/writing"
          className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-accent transition-colors"
        >
          ← All writing
        </Link>
      </footer>
    </article>
  );
};
