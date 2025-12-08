
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
        h1: ({node, ...props}) => <h1 className="font-serif text-4xl font-bold mt-8 mb-4 text-[#1c1c1c]" {...props} />,
        h2: ({node, ...props}) => <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-[#1c1c1c] border-b border-[#1c1c1c] pb-2" {...props} />,
        h3: ({node, ...props}) => <h3 className="font-serif text-2xl font-bold mt-6 mb-3 text-[#B44C43]" {...props} />,
        p: ({node, ...props}) => <p className="font-serif text-xl leading-relaxed mb-6 opacity-90" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 font-serif text-lg" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 font-serif text-lg" {...props} />,
        li: ({node, ...props}) => <li className="pl-1" {...props} />,
        blockquote: ({node, ...props}) => (
          <blockquote className="border-l-4 border-[#B44C43] bg-[#F2EFE9] pl-4 py-2 italic my-6 pr-4" {...props} />
        ),
        code: ({node, inline, className, children, ...props}: any) => {
          return !inline ? (
            <pre className="bg-[#1c1c1c] text-[#FDFBF7] p-4 rounded-sm overflow-x-auto font-mono text-sm my-6 border border-[#333]">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          ) : (
            <code className="font-mono text-sm bg-[#e5e5e5] px-1 py-0.5 rounded text-[#B44C43]" {...props}>
              {children}
            </code>
          )
        },
        img: ({node, ...props}) => (
          <div className="my-8 border-2 border-[#1c1c1c] p-2 bg-white shadow-[4px_4px_0px_0px_rgba(28,28,28,0.2)]">
            <img className="w-full h-auto" {...props} />
            {props.title && <p className="text-center font-mono text-xs mt-2 text-[#555]">{props.title}</p>}
          </div>
        ),
        a: ({node, ...props}) => <a className="text-[#B44C43] underline decoration-1 hover:decoration-2 underline-offset-2 transition-all" {...props} />
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
