
import React, { useState, useEffect } from 'react';
import { ARTICLE_MANIFEST } from '../data';
import { fetchContent } from '../utils/markdown';
import { ContentItem } from '../types';
import { RetroCard } from '../components/RetroCard';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

export const Articles: React.FC = () => {
  const [posts, setPosts] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<ContentItem | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const loadedPosts = await Promise.all(
        ARTICLE_MANIFEST.map((path, index) => fetchContent(path, `article-${index}`))
      );
      setPosts(loadedPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  if (loading) {
     return (
        <div className="flex justify-center items-center h-64">
           <Loader2 className="animate-spin text-[var(--accent-primary)]" size={32} />
           <span className="ml-2 font-mono text-sm text-[var(--text-muted)]">LOADING_PUBLICATIONS...</span>
        </div>
     );
  }

  if (selectedPost) {
    return (
      <div className="animate-fade-in max-w-3xl mx-auto">
         <button 
           onClick={() => setSelectedPost(null)}
           className="group flex items-center gap-2 font-mono text-sm text-[var(--text-muted)] mb-8 hover:text-[var(--accent-secondary)] transition-colors"
         >
           <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
           RETURN_TO_INDEX
         </button>
         
         <article>
            <header className="mb-10 border-b border-[var(--border-main)] pb-10">
               <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4">
                  <span>{selectedPost.date}</span>
                  {selectedPost.tags.map(tag => (
                      <span key={tag}>// {tag}</span>
                  ))}
               </div>
               <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-[var(--text-main)] mb-6">
                 {selectedPost.title}
               </h1>
            </header>
            
            <div className="prose prose-xl prose-invert max-w-none text-[var(--text-main)]">
               <MarkdownRenderer content={selectedPost.content} />
            </div>
            
            <div className="mt-16 pt-8 border-t border-dashed border-[var(--border-main)] flex justify-between font-mono text-xs text-[var(--text-muted)]">
               <span>END_OF_ARTICLE</span>
               <span>ID: {selectedPost.id}</span>
            </div>
         </article>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="text-center py-10 border-b border-[var(--border-main)]">
        <h1 className="font-serif text-5xl font-bold italic mb-4 text-[var(--text-main)]">Articles</h1>
        <p className="font-serif text-xl text-[var(--text-muted)]">Convergence. Polished thoughts and proofs.</p>
      </section>

      <div className="space-y-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} onClick={() => setSelectedPost(post)} className="group cursor-pointer">
            <RetroCard className="bg-[var(--bg-card)] hover:bg-[var(--bg-card)]" noPadding>
              <div className="flex flex-col md:flex-row h-full">
                 {/* Date Col */}
                 <div className="md:w-32 bg-[var(--bg-main)] p-6 border-b md:border-b-0 md:border-r border-[var(--border-main)] flex flex-row md:flex-col justify-between md:justify-start gap-2">
                    <span className="font-mono text-xs font-bold text-[var(--accent-secondary)]">{post.date}</span>
                    <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 1).map(tag => (
                            <span key={tag} className="font-mono text-[10px] uppercase text-[var(--text-muted)] break-all">{tag}</span>
                        ))}
                    </div>
                 </div>
                 
                 {/* Content Col */}
                 <div className="p-6 md:p-8 flex-1">
                    <h2 className="font-serif text-3xl font-bold mb-3 text-[var(--text-main)] group-hover:text-[var(--accent-secondary)] transition-colors">{post.title}</h2>
                    <p className="font-serif text-lg text-[var(--text-muted)] leading-relaxed line-clamp-2 group-hover:text-[var(--text-main)] transition-colors">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[var(--accent-primary)] font-mono text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-200">
                       READ_ARTICLE <ArrowRight size={12} />
                    </div>
                 </div>
              </div>
            </RetroCard>
          </div>
        ))}
         {posts.length === 0 && (
            <div className="text-center font-mono text-sm opacity-50 p-10 border border-dashed border-[var(--border-main)]">
                NO_ARTICLES_FOUND
            </div>
        )}
      </div>
    </div>
  );
};
