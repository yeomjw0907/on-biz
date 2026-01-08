import React, { useState } from 'react';
import { Check, FileText, ArrowRight } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    category: '기업인증',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ company: '', name: '', phone: '', email: '', category: '기업인증', message: '' });
    }, 1500);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Contact Us</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">사전검토 의뢰</h3>
        <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          귀사의 기본 정보를 바탕으로 전문 자문팀이 사전 검토를 진행합니다.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-amber-500 text-white rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl">
            <Check size={40} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">접수가 완료되었습니다</h3>
          <p className="text-slate-400 mb-10 text-lg font-light">담당 전문가가 의뢰하신 내용을 검토 후 신속히 연락드리겠습니다.</p>
          <button 
            type="button" 
            onClick={() => setIsSubmitted(false)}
            className="px-10 py-4 bg-amber-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-amber-600 transition-all"
          >
            새 의뢰 작성하기
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">기업명</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-slate-700 text-white focus:border-amber-500 outline-none transition-all placeholder:text-slate-500 font-medium"
                placeholder="정확한 상호를 입력해주세요"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">담당자명</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-slate-700 text-white focus:border-amber-500 outline-none transition-all placeholder:text-slate-500 font-medium"
                placeholder="성함을 입력해주세요"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">연락처</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-slate-700 text-white focus:border-amber-500 outline-none transition-all placeholder:text-slate-500 font-medium"
                placeholder="010-0000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">이메일</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-slate-700 text-white focus:border-amber-500 outline-none transition-all placeholder:text-slate-500 font-medium"
                placeholder="example@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">검토 희망 분야</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-b border-slate-700 text-white focus:border-amber-500 outline-none transition-all cursor-pointer font-medium appearance-none"
            >
              <option value="기업인증" className="bg-slate-950">기업인증 (벤처/이노비즈 등)</option>
              <option value="정책자금" className="bg-slate-950">정책자금 조달</option>
              <option value="세무재무" className="bg-slate-950">세무/재무 컨설팅</option>
              <option value="인사노무" className="bg-slate-950">인사/노무 컨설팅</option>
              <option value="기타" className="bg-slate-950">기타 경영 자문</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">의뢰 상세 내용</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-0 py-3 bg-transparent border-b border-slate-700 text-white focus:border-amber-500 outline-none transition-all resize-none placeholder:text-slate-500 font-medium leading-relaxed"
              placeholder="기업의 현재 상황이나 고민하시는 내용을 자유롭게 적어주세요."
            ></textarea>
          </div>

          <div className="pt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-500 text-white font-black text-xs uppercase tracking-[0.3em] py-5 transition-all hover:bg-amber-600 shadow-2xl disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isSubmitting ? '제출 중...' : '의뢰서 제출'}
              {!isSubmitting && <ArrowRight size={16} />}
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-6 font-bold uppercase tracking-widest">
              Your information is protected and encrypted.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};



