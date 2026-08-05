import { parseMarkdown } from '../utils/markdown';

export type PostType = 'article' | 'note';

export interface Post {
  slug: string;
  title: string;
  date: string; // ISO: 2026-08-03
  tags: string[];
  excerpt: string;
  type: PostType;
  streams: number[];
  content: string;
}

/*
  All markdown under /posts is compiled in at build time — no manifests, no
  runtime fetches. To publish: drop a .md file in posts/articles/ (or
  posts/journal/ for notes) with frontmatter:

  ---
  title: The Title
  date: 2026-08-03
  tags: [Position, AI]
  excerpt: One sentence shown in lists.
  type: article        (optional — defaults from directory)
  streams: [2, 6]      (optional — which of the six streams it belongs to)
  ---
*/
const files = import.meta.glob('/posts/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const toStringArray = (v: string | string[] | undefined): string[] =>
  Array.isArray(v) ? v : v ? [v] : [];

const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { metadata, content } = parseMarkdown(raw);
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const type: PostType =
      metadata.type === 'note' || (!metadata.type && path.includes('/journal/'))
        ? 'note'
        : 'article';
    return {
      slug,
      title: typeof metadata.title === 'string' ? metadata.title : slug,
      date: typeof metadata.date === 'string' ? metadata.date : '',
      tags: toStringArray(metadata.tags),
      excerpt: typeof metadata.excerpt === 'string' ? metadata.excerpt : '',
      type,
      streams: toStringArray(metadata.streams)
        .map(Number)
        .filter((n) => !isNaN(n)),
      content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const getAllPosts = (): Post[] => posts;

export const getPost = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);
