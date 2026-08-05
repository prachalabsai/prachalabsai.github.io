import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface MarkdownRendererProps {
  content: string;
}

/* Heavy module (react-markdown + KaTeX) — always import via React.lazy so it
   loads only on pages that render markdown (Charter, Post). */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          a: ({ href, children }) => {
            const external = typeof href === 'string' && /^https?:\/\//.test(href);
            return (
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {children}
              </a>
            );
          },
          img: ({ src, alt, title }) => (
            <figure className="my-8">
              <img
                src={src}
                alt={alt ?? ''}
                className="w-full border border-[var(--border-main)]"
                loading="lazy"
              />
              {title && (
                <figcaption className="font-mono text-xs text-[var(--text-muted)] mt-2 text-center">
                  {title}
                </figcaption>
              )}
            </figure>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
