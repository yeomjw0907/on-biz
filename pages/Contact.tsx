
import React, { useState } from 'react';
// Fix: Added missing ArrowRight import
import { Phone, Mail, MapPin, Send, Check, FileText, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
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
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-slate-900 text-white pt-40 pb-32 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-700/20 blur-[80px] rounded-full"></div>
        <div className="relative z-10 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Pre-screening Request</h1>
          <p className="text-slate-400 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            귀사의 기본 정보를 바탕으로 전문 자문팀이 사전 검토를 진행합니다.<br/>
            성공적인 경영 전략의 첫걸음을 지금 시작하세요.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Information */}
          <div className="lg:col-span-4 space-y-6 animate-fade-up delay-100">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h2 className="text-sm font-black text-slate-950 mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                의뢰 프로세스
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-5">
                    <div className="text-amber-500 font-black text-lg opacity-30">01</div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">의뢰서 접수</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">온라인을 통해 귀사의 기본 현황과 필요 분야를 접수합니다.</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="text-amber-500 font-black text-lg opacity-30">02</div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">기초 현황 분석</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">담당 전문가가 해당 산업군 및 기업 컨디션을 사전 분석합니다.</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="text-amber-500 font-black text-lg opacity-30">03</div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">검토 의견 전달</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">가능성 여부 및 전략적 제언이 포함된 검토 내용을 안내드립니다.</p>
                    </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-50">
                 <div className="flex items-center gap-4 text-slate-400 group cursor-pointer hover:text-slate-950 transition-colors">
                    <Phone size={18} />
                    <span className="text-sm font-bold tracking-tight">유선 문의 : 02-1234-5678</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 animate-fade-up delay-200">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-100">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-slate-950 text-amber-500 flex items-center justify-center rounded">
                    <FileText size={24} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tighter">사전검토의뢰서 접수</h2>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-950 text-amber-500 rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">접수가 완료되었습니다</h3>
                  <p className="text-slate-500 mb-10 text-lg font-light">담당 전문가가 의뢰하신 내용을 검토 후 신속히 연락드리겠습니다.</p>
                  <button 
                    type="button" 
                    onClick={() => setIsSubmitted(false)}
                    className="px-10 py-4 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all"
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
                        className="w-full px-0 py-3 bg-transparent border-b border-slate-200 text-slate-900 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 font-medium"
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
                        className="w-full px-0 py-3 bg-transparent border-b border-slate-200 text-slate-900 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 font-medium"
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
                        className="w-full px-0 py-3 bg-transparent border-b border-slate-200 text-slate-900 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 font-medium"
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
                        className="w-full px-0 py-3 bg-transparent border-b border-slate-200 text-slate-900 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300 font-medium"
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
                      className="w-full px-0 py-3 bg-transparent border-b border-slate-200 text-slate-900 focus:border-amber-500 outline-none transition-all cursor-pointer font-medium appearance-none"
                    >
                      <option value="기업인증">기업인증 (벤처/이노비즈 등)</option>
                      <option value="정책자금">정책자금 조달</option>
                      <option value="세무재무">세무/재무 컨설팅</option>
                      <option value="인사노무">인사/노무 컨설팅</option>
                      <option value="기타">기타 경영 자문</option>
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
                      className="w-full px-0 py-3 bg-transparent border-b border-slate-200 text-slate-900 focus:border-amber-500 outline-none transition-all resize-none placeholder:text-slate-300 font-medium leading-relaxed"
                      placeholder="기업의 현재 상황이나 고민하시는 내용을 자유롭게 적어주세요."
                    ></textarea>
                  </div>

                  <div className="pt-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-950 text-white font-black text-xs uppercase tracking-[0.3em] py-5 transition-all hover:bg-amber-600 shadow-2xl disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      {/* Fix: ArrowRight icon is used here but was not imported */}
                      {!isSubmitting && <ArrowRight size={16} />}
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-widest">
                      Your information is protected and encrypted.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
