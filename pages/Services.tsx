
import React from 'react';
import { Shield, Coins, FileText, LayoutDashboard, Globe, Lightbulb, ArrowUpRight, Briefcase } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

const services: (ServiceItem & { color: string })[] = [
  {
    id: 'ip',
    title: '기술 IP 컨설팅',
    description: '기업의 독보적인 기술 가치를 평가받고 지식재산권을 확보하여 무형 자산의 가치를 극대화합니다.',
    icon: Lightbulb,
    color: 'bg-slate-800',
    details: ['기술평가', '기술신용보증', '상표권 등록', '지식재산권', '기술가치평가', 'IP 전략']
  },
  {
    id: 'funding',
    title: '자금 컨설팅',
    description: '신용보증기금, 기술보증기금, 정책자금 등 최적의 조건으로 자금을 조달합니다.',
    icon: Coins,
    color: 'bg-slate-800',
    details: ['신용/기술보증기금', '지역신용보증재단', '중진공/소진공', '초창패/예창패', '사옥/공장취득', '시설/운전자금', '정책자금', '이차보전', 'C1자금', '유동화']
  },
  {
    id: 'management',
    title: '경영 컨설팅',
    description: '기업신용등급관리, 재무구조개선, 가업승계, IPO, M&A 등 전방위적 경영 자문을 제공합니다.',
    icon: Briefcase,
    color: 'bg-amber-600',
    details: ['기업신용등급관리', '결산보고서', '정관작성', '가수금/가지급금 해결', '재무비율개선', '세무조사대응', '중대재해처벌대응', '주총컨서류', '주식평가', '가업승계', '엑싯전략', '홀딩스설립', 'IPO', 'M&A']
  },
  {
    id: 'government',
    title: '정부지원 컨설팅',
    description: '고용지원금, 정부지원사업, 수출/혁신바우처 등 각종 지자체 바우처 지원사업을 매칭합니다.',
    icon: FileText,
    color: 'bg-slate-800',
    details: ['고용지원금', '년간 일정표', '정부지원사업', '수출바우처', '혁신바우처', '지자체바우처', '사업계획서', '마케팅/인테리어 지원']
  },
  {
    id: 'certification',
    title: '기업인증 컨설팅',
    description: '벤처, 이노비즈, 연구소, ISO 등 기업 신뢰도를 높이는 각종 공인 인증을 취득 지원합니다.',
    icon: Shield,
    color: 'bg-slate-800',
    details: ['연구소', 'ISO', '벤처/이노비즈', '메인비즈', '여성기업', '뿌리/소부장기업', '공장등록', '직접생산', '병역특례', '나라장터', '조달인증', 'ESG', '녹색인증', 'HACCP']
  },
  {
    id: 'global',
    title: '해외진출 / 판로개척',
    description: '코트라 지원부터 해외 바이어 매칭, 수출박람회까지 글로벌 시장 진출을 전방위 지원합니다.',
    icon: Globe,
    color: 'bg-slate-800',
    details: ['코트라 지원', '한인무역협회', '해외박람회', '로컬바이어 컨택', '수출박람회', '나라장터', 'SNS마케팅', '유튜브 관리']
  },
  {
    id: 'marketing',
    title: '마케팅 / 조달 컨설팅',
    description: '홈페이지, IR자료, 영상제작부터 나라장터 등록, SNS계정 관리까지 마케팅을 지원합니다.',
    icon: LayoutDashboard,
    color: 'bg-slate-800',
    details: ['홈페이지 제작', 'IR자료 제작', '영상제작', '바우처활용', '나라장터 등록', 'MAS 등록', 'SNS계정관리', '커머스 관리', '해외바이어 매칭', '박람회 지원']
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
          <div className="relative flex justify-center items-center min-h-[800px] md:min-h-[1000px]">
            {/* Desktop Honeycomb Layout with increased gutter */}
            <div className="hidden md:block relative w-[1100px] h-[850px]">
              {services.map((s, idx) => {
                // Optimized positions for readability (X and Y gap increased)
                const positions = [
                  { top: '20%', left: '32%' },    // 1: Top Left
                  { top: '20%', left: '68%' },    // 2: Top Right
                  { top: '50%', left: '15%' },    // 3: Mid Left
                  { top: '50%', left: '50%' },    // 4: CENTER (Management)
                  { top: '50%', left: '85%' },    // 5: Mid Right
                  { top: '80%', left: '32%' },    // 6: Bottom Left
                  { top: '80%', left: '68%' }     // 7: Bottom Right
                ];
                
                // Mapping: ip(0), funding(1), management(2), gov(3), cert(4), global(5), mkt(6)
                // Center Management (idx 2) at positions[3]
                const mapping = [0, 1, 3, 4, 2, 5, 6]; 
                const pos = positions[mapping[idx]];

                return (
                  <div 
                    key={s.id}
                    className="absolute w-[290px] h-[330px] transition-all duration-700 hover:z-40 group"
                    style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Outer glow effect */}
                    <div className="absolute inset-2 bg-amber-500/0 group-hover:bg-amber-500/10 blur-2xl transition-all duration-500 rounded-full"></div>
                    
                    <div className={`w-full h-full ${s.id === 'management' ? 'bg-amber-600' : 'bg-slate-900'} clip-hexagon flex flex-col items-center justify-center p-12 text-center shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-amber-500 border border-white/5`}>
                      <s.icon size={48} className={`${s.id === 'management' ? 'text-white' : 'text-amber-500'} mb-6 group-hover:text-white transition-colors duration-300`} strokeWidth={1.2} />
                      <h4 className="text-white font-black text-xl mb-4 tracking-tight leading-tight">{s.title}</h4>
                      <div className="w-10 h-px bg-white/30 mb-5 group-hover:bg-white/50 transition-colors"></div>
                      <p className="text-white/60 text-xs leading-relaxed font-light group-hover:text-white/90 transition-colors line-clamp-3 px-1">{s.description}</p>
                      
                      {/* Detailed Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/95 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-10 transition-all duration-500 clip-hexagon">
                         <div className="mb-5 p-3 bg-amber-500 rounded-lg text-slate-950">
                            <s.icon size={24} strokeWidth={2} />
                         </div>
                         <h4 className="text-white font-black mb-6 text-sm tracking-widest uppercase">{s.title} 상세</h4>
                         <ul className="text-white/80 text-[11px] space-y-2.5 text-left w-full max-w-[180px]">
                           {s.details.slice(0, 6).map((d, i) => (
                             <li key={i} className="flex items-start gap-2 font-medium">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-1.5"></span>
                                <span className="line-clamp-1 leading-tight">{d}</span>
                             </li>
                           ))}
                         </ul>
                         <Link to="/contact" className="mt-8 text-xs font-black text-amber-500 hover:text-white transition-colors border-b border-amber-500/30 pb-1">사전 검토 신청</Link>
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
