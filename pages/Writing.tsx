import React from 'react';
import { getAllPosts } from '../content/posts';
import { PostListItem } from '../components/PostListItem';
import { usePageTitle } from '../utils/usePageTitle';

export const Writing: React.FC = () => {
  usePageTitle('Writing');
  const posts = getAllPosts();

  return (
    <div>
      <section className="pt-8 mb-12">
        <h1 className="font-display text-3xl font-bold text-[var(--text-main)] mb-2">Writing</h1>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          Essays and working notes — polished articles and raw thinking alike.
        </p>
      </section>

      {posts.length > 0 ? (
        <div className="divide-y divide-[var(--border-main)] border-t border-b border-[var(--border-main)]">
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="font-mono text-xs text-[var(--text-muted)]">Nothing here yet.</p>
      )}
    </div>
  );
};
