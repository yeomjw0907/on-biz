
import React from 'react';
import { Shield, Coins, FileText, LayoutDashboard, Globe, Lightbulb, ArrowUpRight, Briefcase } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

const services: (ServiceItem & { color: string })[] = [
  {
    id: 'ip',
    title: '기술 / 특허 IP',
    description: '기업의 독보적인 기술 가치를 평가받고 지식재산권을 확보하여 무형 자산의 가치를 극대화합니다.',
    icon: Lightbulb,
    color: 'bg-slate-800',
    details: ['기술 가치 평가(TCB)', '특허/상표권 확보', 'IP 포트폴리오 구축', '기술 사업화 전략']
  },
  {
    id: 'funding',
    title: '자금 컨설팅',
    description: '시설 및 운전 자금 등 기업 경영에 필수적인 자금을 최적의 조건으로 조달합니다.',
    icon: Coins,
    color: 'bg-slate-800',
    details: ['정책자금 조달 전략', '시설/운전 자금', '이차보전 지원사업', '금융 네트워킹']
  },
  {
    id: 'management',
    title: '경영 컨설팅',
    description: '지속 가능한 성장을 위한 재무 구조 개선 및 가업 승계 등 전방위적 자문을 제공합니다.',
    icon: Briefcase,
    color: 'bg-amber-600', // CENTER HIGHLIGHT
    details: ['법인전환/가업승계', '재무구조 개선', '정관 정비/임원보수', 'M&A 전략 자문']
  },
  {
    id: 'government',
    title: '정부지원 사업',
    description: '정부의 다양한 지원 사업을 분석하여 기업에 최적화된 바우처와 지원금을 매칭합니다.',
    icon: FileText,
    color: 'bg-slate-800',
    details: ['수출/혁신 바우처', '고용 지원금 신청', '사업계획서 컨설팅', '제조혁신 지원']
  },
  {
    id: 'certification',
    title: '기업/공인 인증',
    description: '기업의 기술력과 신뢰도를 공인받아 대외 경쟁력 확보 및 세제 혜택을 획득합니다.',
    icon: Shield,
    color: 'bg-slate-800',
    details: ['벤처/이노/메인비즈', 'ISO 심사 인증', '연구소/전담부서 설립', '해외 규격 인증']
  },
  {
    id: 'global',
    title: '해외진출/수출',
    description: '글로벌 시장 진입을 위한 현지화 전략부터 바이어 매칭까지 성공을 지원합니다.',
    icon: Globe,
    color: 'bg-slate-800',
    details: ['글로벌 판로 개척', '해외 바이어 매칭', '수출 행정 지원', '해외 전시회 참가']
  },
  {
    id: 'marketing',
    title: '마케팅/조달',
    description: '온라인 통합 마케팅과 공공 조달 시장 진입을 통해 안정적인 매출을 확보합니다.',
    icon: LayoutDashboard,
    color: 'bg-slate-800',
    details: ['나라장터/MAS 등록', 'SNS 채널 브랜딩', '커머스 운영 대행', '홍보 콘텐츠 제작']
  }
];

const annualSchedule = [
  {
    quarter: '1Q',
    items: ['개정세법/노무 안내', '정기주총/정관검토', '정기배당/법인세', '임원보수/결산', '중진공/R&D/바우처']
  },
  {
    quarter: '2Q',
    items: ['주식가치평가', '신용등급 산출/관리', '지분 계획 수립', '종합소득세 자문', '보증기관 진행']
  },
  {
    quarter: '3Q',
    items: ['개정세법(안) 안내', '중간배당/지분이동', '상반기 경영결과 파악', '하반기 경영계획', '채권기관 진행']
  },
  {
    quarter: '4Q',
    items: ['당해 년도 가결산', '신용등급 집중관리', '개정세법 대비', '임직원 상여/성과급', '가지급금 체크']
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative bg-slate-950 py-48 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block animate-fade-up">Consulting Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter animate-fade-up delay-100 uppercase">Specialized Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed animate-fade-up delay-200">
            온비즈만의 7가지 핵심 솔루션으로 기업의 무한한 성장을 지원합니다.
          </p>
        </div>
      </section>

      {/* Hexagonal Honeycomb Section - Improved Spacing */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Core Competency</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter">온비즈 7대 전문 분야</h3>
            <p className="mt-4 text-slate-400 font-light text-sm">중앙의 경영 컨설팅을 기점으로 유기적인 전문 자문이 이루어집니다.</p>
          </div>

          {/* Honeycomb Grid Container with wider dimensions */}
          <div className="relative flex justify-center items-center min-h-[700px] md:min-h-[900px]">
            {/* Desktop Honeycomb Layout with increased gutter */}
            <div className="hidden md:block relative w-[1000px] h-[750px]">
              {services.map((s, idx) => {
                // Optimized positions for readability (X and Y gap increased)
                const positions = [
                  { top: '22%', left: '32%' },    // 1: Top Left
                  { top: '22%', left: '68%' },    // 2: Top Right
                  { top: '50%', left: '16%' },    // 3: Mid Left
                  { top: '50%', left: '50%' },    // 4: CENTER (Management)
                  { top: '50%', left: '84%' },    // 5: Mid Right
                  { top: '78%', left: '32%' },    // 6: Bottom Left
                  { top: '78%', left: '68%' }     // 7: Bottom Right
                ];
                
                // Mapping: ip(0), funding(1), management(2), gov(3), cert(4), global(5), mkt(6)
                // Center Management (idx 2) at positions[3]
                const mapping = [0, 1, 3, 4, 2, 5, 6]; 
                const pos = positions[mapping[idx]];

                return (
                  <div 
                    key={s.id}
                    className="absolute w-[260px] h-[300px] transition-all duration-700 hover:z-40 group"
                    style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Outer glow effect */}
                    <div className="absolute inset-2 bg-amber-500/0 group-hover:bg-amber-500/10 blur-2xl transition-all duration-500 rounded-full"></div>
                    
                    <div className={`w-full h-full ${s.id === 'management' ? 'bg-amber-600' : 'bg-slate-900'} clip-hexagon flex flex-col items-center justify-center p-10 text-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-500 border border-white/5`}>
                      <s.icon size={44} className={`${s.id === 'management' ? 'text-white' : 'text-amber-500'} mb-6 group-hover:text-white transition-colors duration-300`} strokeWidth={1.2} />
                      <h4 className="text-white font-black text-lg mb-4 tracking-tight leading-tight">{s.title}</h4>
                      <div className="w-8 h-px bg-white/20 mb-4 group-hover:bg-white/40 transition-colors"></div>
                      <p className="text-white/50 text-[10px] leading-relaxed font-light group-hover:text-white/90 transition-colors line-clamp-2 px-2">{s.description}</p>
                      
                      {/* Detailed Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/95 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-8 transition-all duration-500 clip-hexagon">
                         <div className="mb-4 p-2 bg-amber-500 rounded-lg text-slate-950">
                            <s.icon size={20} strokeWidth={2} />
                         </div>
                         <h4 className="text-white font-black mb-6 text-sm tracking-widest uppercase">{s.title} 상세</h4>
                         <ul className="text-white/80 text-[10px] space-y-3 text-left w-full max-w-[160px]">
                           {s.details.map((d, i) => (
                             <li key={i} className="flex items-center gap-2 font-medium">
                                <span className="w-1 h-1 bg-amber-500 rounded-full shrink-0"></span>
                                <span className="line-clamp-1">{d}</span>
                             </li>
                           ))}
                         </ul>
                         <Link to="/contact" className="mt-8 text-[10px] font-black text-amber-500 hover:text-white transition-colors border-b border-amber-500/30 pb-1">사전 검토 신청</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Grid Layout - Clean & Scrollable */}
            <div className="md:hidden grid grid-cols-1 gap-8 w-full px-6">
              {services.map((s) => (
                <div key={s.id} className={`p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col gap-6 transition-all ${s.id === 'management' ? 'bg-amber-600 text-white' : 'bg-white text-slate-900'}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.id === 'management' ? 'bg-white text-amber-600' : 'bg-slate-900 text-amber-500'}`}>
                    <s.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black tracking-tight mb-3">{s.title}</h4>
                    <p className={`text-sm font-light leading-relaxed mb-6 ${s.id === 'management' ? 'text-white/80' : 'text-slate-500'}`}>{s.description}</p>
                    <ul className={`grid grid-cols-1 gap-2 border-t pt-6 ${s.id === 'management' ? 'border-white/20' : 'border-slate-100'}`}>
                        {s.details.map((d, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs font-bold">
                                <div className={`w-1 h-1 rounded-full ${s.id === 'management' ? 'bg-white' : 'bg-amber-500'}`}></div>
                                {d}
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .clip-hexagon {
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          }
        `}} />
      </section>

      {/* Annual Care Schedule */}
      <section className="py-32 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Annual Care Schedule</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase">1년 케어 일정</h3>
              <p className="text-slate-500 mt-6 font-light">분기별 핵심 경영 이슈를 선제적으로 진단하고 밀착 케어합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {annualSchedule.map((quarter, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center font-black text-2xl absolute -top-4 -left-4 shadow-lg ring-8 ring-white">
                    {quarter.quarter}
                  </div>
                  <div className="mt-8 space-y-4">
                    {quarter.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 shrink-0"></div>
                         <span className="text-sm font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-20 tracking-tighter uppercase">Service Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-slate-200 -z-10"></div>
              {[
                { step: '01', title: '사전검토 의뢰', desc: '의뢰서 및 기초 자료 접수' },
                { step: '02', title: '전문가 진단', desc: '분야별 심층 분석 진행' },
                { step: '03', title: '자문 계약', desc: '솔루션 제시 및 과업 확정' },
                { step: '04', title: '컨설팅 수행', desc: '밀착 관리 및 결과 도출' },
                { step: '05', title: '사후 관리', desc: '지속적 피드백 및 고도화' }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="w-20 h-20 bg-white border border-slate-200 rounded flex items-center justify-center mx-auto mb-8 transition-all group-hover:bg-slate-950 group-hover:text-amber-500">
                     <span className="text-2xl font-black">{item.step}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};
