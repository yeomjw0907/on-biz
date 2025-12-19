
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white text-slate-900 flex items-center justify-center font-black text-xl">
                ON
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">온비즈</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 font-medium uppercase tracking-widest">
              Strategic Partner for Business Growth.<br/>
              창업부터 IPO, EXIT까지 모든 단계를 함께합니다.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8">Navigation</h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">회사소개</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">컨설팅 분야</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors text-white">사전검토 의뢰</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8">Main Portfolio</h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li>기업인증 & 공인인증</li>
              <li>정책자금 조달 전략</li>
              <li>IP 지식재산권 자문</li>
              <li>해외진출 & 판로개척</li>
              <li>경영전략 & 세무/재무</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8">Contact Information</h3>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest">
              <li className="flex items-start gap-4">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">서울특별시 강남구 테헤란로 123,<br/>온빌딩 5층</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} className="text-amber-500 shrink-0" />
                <span className="text-white">02-1234-5678</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={16} className="text-amber-500 shrink-0" />
                <span>contact@onbiz-consulting.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-20 pt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} OnBiz Consulting. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
