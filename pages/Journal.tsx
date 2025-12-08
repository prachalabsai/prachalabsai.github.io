
import React, { useState, useEffect } from 'react';
import { JOURNAL_MANIFEST } from '../data';
import { fetchContent } from '../utils/markdown';
import { ContentItem } from '../types';
import { RetroCard } from '../components/RetroCard';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

export const Journal: React.FC = () => {
  const [posts, setPosts] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<ContentItem | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const loadedPosts = await Promise.all(
        JOURNAL_MANIFEST.map((path, index) => fetchContent(path, `journal-${index}`))
      );
      setPosts(loadedPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  if (loading) {
     return (
        <div className="flex justify-center items-center h-64">
           <Loader2 className="animate-spin text-[#B44C43]" size={32} />
           <span className="ml-2 font-mono text-sm opacity-50">LOADING_ARCHIVES...</span>
        </div>
     );
  }

  if (selectedPost) {
    return (
      <div className="animate-fade-in max-w-3xl mx-auto">
         <button 
           onClick={() => setSelectedPost(null)}
           className="group flex items-center gap-2 font-mono text-sm text-[#555] mb-8 hover:text-[#B44C43] transition-colors"
         >
           <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
           RETURN_TO_INDEX
         </button>
         
         <article>
            <header className="mb-10 border-b border-[#1c1c1c] pb-10">
               <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-[#B44C43] mb-4">
                  <span>{selectedPost.date}</span>
                  {selectedPost.tags.map(tag => (
                      <span key={tag}>// {tag}</span>
                  ))}
               </div>
               <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-[#1c1c1c] mb-6">
                 {selectedPost.title}
               </h1>
            </header>
            
            <div className="prose prose-xl prose-stone max-w-none">
               <MarkdownRenderer content={selectedPost.content} />
            </div>
            
            <div className="mt-16 pt-8 border-t border-dashed border-[#1c1c1c] flex justify-between font-mono text-xs opacity-50">
               <span>END_OF_LOG</span>
               <span>ID: {selectedPost.id}</span>
            </div>
         </article>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="text-center py-10">
        <h1 className="font-serif text-5xl font-bold italic mb-4">Research Journal</h1>
        <p className="font-serif text-xl opacity-70">Raw notes. The emergence of ideas.</p>
      </section>

      <div className="space-y-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} onClick={() => setSelectedPost(post)} className="group cursor-pointer">
            <RetroCard className="bg-white group-hover:bg-[#FDFBF7]" noPadding>
              <div className="flex flex-col md:flex-row">
                 {/* Date Col */}
                 <div className="md:w-32 bg-[#F2EFE9] p-6 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-row md:flex-col justify-between md:justify-start gap-2">
                    <span className="font-mono text-xs font-bold text-[#1c1c1c]">{post.date}</span>
                    <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 1).map(tag => (
                            <span key={tag} className="font-mono text-[10px] uppercase text-[#B44C43] break-all">{tag}</span>
                        ))}
                    </div>
                 </div>
                 
                 {/* Content Col */}
                 <div className="p-6 md:p-8 flex-1">
                    <h2 className="font-serif text-3xl font-bold mb-3 group-hover:underline decoration-[#B44C43] decoration-2 underline-offset-4">{post.title}</h2>
                    <p className="font-serif text-lg opacity-80 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[#B44C43] font-mono text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-200">
                       OPEN_LOG <ArrowRight size={12} />
                    </div>
                 </div>
              </div>
            </RetroCard>
          </div>
        ))}
        {posts.length === 0 && (
            <div className="text-center font-mono text-sm opacity-50 p-10 border border-dashed border-[#1c1c1c]">
                NO_ENTRIES_FOUND
            </div>
        )}
      </div>
    </div>
  );
};
