import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Image as ImageIcon, X, Upload } from 'lucide-react';
import { useBoard } from '../context/BoardContext';

export const BoardEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { posts, updatePost, addPost } = useBoard();
  
  const isEditMode = Boolean(id);
  const post = isEditMode ? posts.find(p => p.id === Number(id)) : null;

  const [formData, setFormData] = useState({
    title: '',
    category: '정책자금',
    content: '',
    author: '관리자',
    image: undefined as string | undefined,
    date: new Date().toISOString().split('T')[0]
  });

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (isEditMode && post) {
      setFormData({
        title: post.title,
        category: post.category,
        content: post.content,
        author: post.author,
        image: post.image,
        date: post.date
      });
      setPreview(post.image || null);
    }
  }, [isEditMode, post]);

  if (isEditMode && !post) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">게시물을 찾을 수 없습니다.</h2>
                <button onClick={() => navigate('/board')} className="text-blue-600 font-bold hover:underline">목록으로 돌아가기</button>
            </div>
        </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setFormData(prev => ({ ...prev, image: result }));
            setPreview(result);
        };
        reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
      setFormData(prev => ({ ...prev, image: undefined }));
      setPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode && post) {
        updatePost(post.id, formData);
        navigate(`/board/${post.id}`);
    } else {
        addPost(formData);
        navigate('/board');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors"
            >
                <ArrowLeft size={20} /> 취소하고 돌아가기
            </button>
            <h1 className="text-2xl font-black text-slate-900">{isEditMode ? '게시물 수정' : '새 글 작성'}</h1>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Title */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">제목</label>
                    <input 
                        type="text" 
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full text-xl md:text-2xl font-bold text-slate-900 placeholder:text-slate-300 border-b-2 border-slate-100 focus:border-amber-500 outline-none py-2 transition-colors bg-transparent"
                        placeholder="제목을 입력하세요"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Category */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">카테고리</label>
                        <select 
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        >
                            <option value="정책자금">정책자금</option>
                            <option value="성공사례">성공사례</option>
                            <option value="세무/회계">세무/회계</option>
                            <option value="해외진출">해외진출</option>
                            <option value="경영일반">경영일반</option>
                        </select>
                    </div>

                    {/* Author */}
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">작성자</label>
                        <input 
                            type="text" 
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                            placeholder="작성자명"
                            required
                        />
                    </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                        <ImageIcon size={16} /> 대표 이미지
                    </label>
                    
                    {!preview ? (
                        <div className="relative group">
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="w-full h-40 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-slate-400 group-hover:border-amber-500 group-hover:bg-amber-50 transition-all">
                                <Upload size={32} className="mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">클릭하거나 이미지를 드래그하여 업로드</span>
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                            <button 
                                type="button"
                                onClick={removeImage}
                                className="absolute top-2 right-2 p-2 bg-slate-900/80 text-white rounded-full hover:bg-red-500 transition-colors shadow-lg"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">내용 (HTML 허용)</label>
                    <textarea 
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows={15}
                        className="w-full p-6 bg-slate-50 border border-slate-200 rounded-2xl font-medium text-slate-600 leading-relaxed focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-y font-mono text-sm"
                        placeholder="내용을 입력하세요..."
                        required
                    />
                    <p className="text-xs text-slate-400 text-right">HTML 태그를 사용할 수 있습니다.</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
                    <button 
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                    >
                        취소
                    </button>
                    <button 
                        type="submit"
                        className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                    >
                        <Save size={18} /> {isEditMode ? '수정사항 저장' : '게시물 등록'}
                    </button>
                </div>

            </form>
        </div>
      </div>
    </div>
  );
};
