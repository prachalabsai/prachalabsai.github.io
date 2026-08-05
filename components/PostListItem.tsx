import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../content/posts';
import { formatDate } from '../utils/markdown';

export const PostListItem: React.FC<{ post: Post }> = ({ post }) => (
  <Link to={`/writing/${post.slug}`} className="block group py-5">
    <div className="flex items-baseline gap-4 mb-1">
      <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
        {formatDate(post.date)}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
        {post.type}
      </span>
    </div>
    <h3 className="font-display text-3xl font-semibold text-[var(--text-main)] group-hover:text-accent transition-colors leading-snug">
      {post.title}
    </h3>
    {post.excerpt && (
      <p className="font-serif text-lg text-[var(--text-muted)] leading-snug mt-1">
        {post.excerpt}
      </p>
    )}
  </Link>
);
