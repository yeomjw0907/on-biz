import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Calendar, User, Eye, Newspaper, ArrowRight, Filter } from 'lucide-react';
import { boardPosts } from '../data';

export const Board: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('전체');

  // Extract unique categories
  const categories = ['전체', ...new Set(boardPosts.map(post => post.category))];
  
  const filteredPosts = boardPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === '전체' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-24 px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 relative z-10">인사이트 & 공지사항</h1>
        <p className="text-slate-400 relative z-10">온경영자문의 새로운 소식과 유용한 경영 정보를 확인하세요.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-20">
        
        {/* Controls: Categories & Search */}
        <div className="flex flex-col gap-6 mb-8">
            
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                            activeCategory === category 
                                ? 'bg-amber-500 text-slate-900 shadow-amber-500/20 scale-105' 
                                : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex gap-2 pl-2">
                    <span className="text-slate-500 font-bold text-sm">Total <span className="text-amber-600">{filteredPosts.length}</span> Posts</span>
                </div>
                <div className="relative w-full sm:w-80">
                    <input 
                        type="text" 
                        placeholder="검색어를 입력하세요..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm font-medium"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                </div>
            </div>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link key={post.id} to={`/board/${post.id}`} className="group block">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col md:flex-row">
                            
                            {/* Image Section (if available) */}
                            {post.image ? (
                                <div className="md:w-72 h-56 md:h-auto shrink-0 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                                        {post.category}
                                    </div>
                                </div>
                            ) : (
                                /* Date Box for non-image posts */
                                <div className="hidden md:flex flex-col items-center justify-center w-32 bg-slate-50 border-r border-slate-100 shrink-0 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors">
                                     <span className="text-xs font-bold uppercase tracking-wider mb-1 text-slate-400 group-hover:text-amber-600">{new Date(post.date).toLocaleString('en', { month: 'short' })}</span>
                                    <span className="text-3xl font-black leading-none text-slate-700 group-hover:text-slate-900">{new Date(post.date).getDate()}</span>
                                </div>
                            )}

                            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                                <div className="space-y-3">
                                    {/* Mobile/No-Image Category Badge */}
                                    <div className={`flex items-center gap-3 ${post.image ? 'md:hidden' : ''}`}>
                                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                                            {post.category}
                                        </span>
                                        {!post.image && (
                                             <span className="md:hidden text-xs text-slate-400">{post.date}</span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                        {post.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
                                    <div className="flex items-center text-xs text-slate-400 font-medium gap-4">
                                        <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                                        <span className="flex items-center gap-1"><Eye size={14}/> {post.views}</span>
                                        {post.image && <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>}
                                    </div>
                                    <div className="flex items-center text-slate-900 font-bold text-sm group-hover:text-amber-600 transition-colors">
                                        자세히 보기 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-slate-400 bg-white rounded-3xl border border-dashed border-slate-300">
                <Newspaper size={48} className="mb-4 opacity-20" />
                <p>등록된 게시물이 없습니다.</p>
                <button 
                    onClick={() => {setSearchTerm(''); setActiveCategory('전체');}} 
                    className="mt-4 text-sm font-bold text-blue-600 hover:underline"
                >
                    필터 초기화
                </button>
              </div>
            )}
        </div>

        {/* Pagination */}
        {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
                <div className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors disabled:opacity-50" disabled>
                        &lt;
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 text-white font-bold shadow-md">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors">
                        2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors">
                        3
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors">
                        &gt;
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};