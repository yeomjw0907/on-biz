import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white text-slate-900 flex items-center justify-center font-black text-xl">
                ON
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">온경영자문</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              기업의 지속 가능한 성장을 돕는 신뢰할 수 있는 비즈니스 파트너.<br/>
              귀사의 성공 스토리를 함께 만들어갑니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">바로가기</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ExternalLink size={12}/> 회사소개</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ExternalLink size={12}/> 컨설팅 분야</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ExternalLink size={12}/> 상담신청</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">주요 서비스</h3>
            <ul className="space-y-3 text-sm">
              <li>기업 인증 (벤처/이노비즈)</li>
              <li>정책 자금 조달</li>
              <li>기업 부설 연구소 설립</li>
              <li>세무/노무 자문</li>
              <li>경영 전략 컨설팅</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">문의하기</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 group-hover:text-amber-400 transition-colors" />
                <span>서울특별시 강남구 테헤란로 123<br/>온빌딩 5층</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <span className="font-medium text-white group-hover:text-amber-400 transition-colors">02-1234-5678</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">contact@on-biz.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} On Management Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-400">이용약관</span>
            <span className="cursor-pointer hover:text-slate-400">개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
};