import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-slate-300 text-lg md:text-xl font-light">성공적인 비즈니스를 위한 첫걸음, 지금 시작하세요.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in-up delay-100">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full">
              <h2 className="text-xl font-bold text-slate-900 mb-10 flex items-center gap-2">
                <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                상담 안내
              </h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">전화 문의</h3>
                    <p className="text-3xl font-black text-blue-700 tracking-tight">02-1234-5678</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium bg-slate-100 inline-block px-2 py-1 rounded">평일 09:00 ~ 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">이메일 문의</h3>
                    <p className="text-slate-700 font-medium text-lg">contact@on-biz.kr</p>
                    <p className="text-sm text-slate-500 mt-1">24시간 접수 가능</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">오시는 길</h3>
                    <p className="text-slate-700 leading-relaxed text-sm">서울특별시 강남구 테헤란로 123,<br/>온빌딩 5층</p>
                  </div>
                </div>
              </div>

               <div className="mt-10 bg-slate-100 w-full h-48 rounded-2xl flex items-center justify-center text-slate-400 text-sm overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 bg-slate-200 transition-colors group-hover:bg-slate-300"></div>
                  <span className="relative z-10 flex items-center gap-2"><MapPin size={16}/> 지도 보기</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 animate-fade-in-up delay-200">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 h-full">
              <h2 className="text-2xl font-black text-slate-900 mb-8">온라인 상담 신청</h2>
              
              {isSubmitted ? (
                <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 animate-bounce">
                    <Check size={48} strokeWidth={3} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">신청이 완료되었습니다</h3>
                  <p className="text-slate-500 mb-10 text-lg">담당자가 내용 확인 후 신속하게 연락드리겠습니다.</p>
                  <button 
                    type="button" 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block group-focus-within:text-blue-600">회사명</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all placeholder:text-slate-400 font-medium"
                        placeholder="회사명을 입력해주세요"
                      />
                    </div>
                    <div className="group">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block group-focus-within:text-blue-600">담당자명</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all placeholder:text-slate-400 font-medium"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block group-focus-within:text-blue-600">연락처</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all placeholder:text-slate-400 font-medium"
                        placeholder="010-0000-0000"
                      />
                    </div>
                    <div className="group">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block group-focus-within:text-blue-600">이메일</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all placeholder:text-slate-400 font-medium"
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block group-focus-within:text-blue-600">관심 분야</label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all appearance-none cursor-pointer font-medium"
                      >
                        <option value="기업인증">기업인증 (벤처/이노비즈 등)</option>
                        <option value="정책자금">정책자금 조달</option>
                        <option value="세무재무">세무/재무 컨설팅</option>
                        <option value="인사노무">인사/노무 컨설팅</option>
                        <option value="기타">기타 문의</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block group-focus-within:text-blue-600">문의 내용</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none transition-all resize-none placeholder:text-slate-400 font-medium"
                      placeholder="구체적인 문의 내용을 적어주시면 더 정확한 상담이 가능합니다."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
                      {!isSubmitting && <Send size={20} />}
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-6">
                      보내주신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
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