import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Eye, Share2, Printer, ChevronRight } from 'lucide-react';
import { boardPosts } from '../data';

export const BoardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = boardPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-900">게시물을 찾을 수 없습니다.</h2>
        <button onClick={() => navigate('/board')} className="text-blue-600 hover:underline">
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  // Find prev/next posts
  const currentIndex = boardPosts.findIndex(p => p.id === Number(id));
  const prevPost = boardPosts[currentIndex + 1]; // Older post
  const nextPost = boardPosts[currentIndex - 1]; // Newer post

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-32 md:py-40 overflow-hidden">
        
        {/* Conditional Background */}
        {post.image ? (
            <div className="absolute inset-0">
                <img src={post.image} className="w-full h-full object-cover opacity-40 blur-sm scale-105" alt="Post Background" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
            </div>
        ) : (
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>
            </div>
        )}
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <Link to="/board" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group text-sm font-medium">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                목록으로 돌아가기
            </Link>

            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full shadow-lg shadow-amber-500/20">
                    {post.category}
                </span>
                <span className="text-white/60 text-sm font-medium">
                    {post.date}
                </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-10 text-white drop-shadow-lg">
                {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 ring-2 ring-slate-700/50">
                        <User size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Written by</div>
                        <div className="text-sm font-bold text-white">{post.author}</div>
                    </div>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                 <div className="flex items-center gap-6 text-sm text-slate-300 font-medium">
                    <div className="flex items-center gap-2">
                        <Eye size={18} className="text-slate-400" />
                        <span>{post.views} Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Share2 size={18} className="text-slate-400 cursor-pointer hover:text-white transition-colors" />
                        <Printer size={18} className="text-slate-400 cursor-pointer hover:text-white transition-colors" onClick={() => window.print()}/>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            
            {/* Show image inside content as well if needed, or rely on Hero. 
                Let's keep it simple and clean, but if there is an image, maybe show it clear at top of content?
                Actually, the blur background hero is nice. Let's add the clear image inside the card if desired, 
                or just stick to text since the hero sets the mood.
                Let's stick to text to avoid duplication, or add a distinct featured image block if requested.
                For now, the hero background is a good touch.
            */}
            
            <div className="p-8 md:p-16 min-h-[300px]">
                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-loose prose-a:text-blue-600 hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-img:rounded-2xl prose-img:shadow-lg">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="bg-slate-50 border-t border-slate-100 p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prevPost ? (
                    <Link to={`/board/${prevPost.id}`} className="flex flex-col p-6 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all group h-full">
                        <span className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-amber-500">
                             <ArrowLeft size={12} /> 이전글
                        </span>
                        <span className="text-slate-800 font-bold text-lg line-clamp-2 group-hover:text-slate-900">{prevPost.title}</span>
                    </Link>
                ) : <div/>}

                {nextPost ? (
                    <Link to={`/board/${nextPost.id}`} className="flex flex-col p-6 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all group h-full text-right items-end">
                         <span className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-amber-500">
                             다음글 <ChevronRight size={12} />
                        </span>
                        <span className="text-slate-800 font-bold text-lg line-clamp-2 group-hover:text-slate-900">{nextPost.title}</span>
                    </Link>
                ) : <div/>}
                </div>
                
                <div className="mt-12 text-center">
                    <Link to="/board" className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        목록으로 돌아가기
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};