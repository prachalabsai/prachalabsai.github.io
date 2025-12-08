
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1: ({node, ...props}) => <h1 className="font-serif text-4xl font-bold mt-8 mb-4 text-[var(--text-main)]" {...props} />,
        h2: ({node, ...props}) => <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-[var(--text-main)] border-b border-[var(--border-main)] pb-2" {...props} />,
        h3: ({node, ...props}) => <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-[var(--accent-primary)]" {...props} />,
        p: ({node, ...props}) => <p className="font-serif text-xl leading-relaxed mb-6 text-[var(--text-muted)]" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 font-serif text-lg text-[var(--text-muted)]" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 font-serif text-lg text-[var(--text-muted)]" {...props} />,
        li: ({node, ...props}) => <li className="pl-1" {...props} />,
        blockquote: ({node, ...props}) => (
          <blockquote className="border-l-4 border-[var(--accent-primary)] bg-[var(--bg-card)] pl-4 py-2 italic my-6 pr-4 text-[var(--text-main)]" {...props} />
        ),
        code: ({node, inline, className, children, ...props}: any) => {
          return !inline ? (
            <pre className="bg-[#111] text-[#e8e6e3] p-4 rounded-sm overflow-x-auto font-mono text-sm my-6 border border-[var(--border-main)]">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          ) : (
            <code className="font-mono text-sm bg-[var(--bg-main)] px-1 py-0.5 rounded text-[var(--accent-secondary)] border border-[var(--border-main)]" {...props}>
              {children}
            </code>
          )
        },
        img: ({node, ...props}) => (
          <div className="my-8 border border-[var(--border-main)] p-2 bg-[var(--bg-main)] shadow-[4px_4px_0px_0px_var(--shadow-color)]">
            <img className="w-full h-auto" {...props} />
            {props.title && <p className="text-center font-mono text-xs mt-2 text-[var(--text-muted)]">{props.title}</p>}
          </div>
        ),
        a: ({node, ...props}) => <a className="text-[var(--accent-secondary)] underline decoration-1 hover:decoration-2 underline-offset-2 transition-all" {...props} />
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
