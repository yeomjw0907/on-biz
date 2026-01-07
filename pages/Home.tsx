
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Users, 
  Briefcase, 
  Trophy,
  Lightbulb,
  Coins,
  FileText,
  Globe,
  ShieldCheck,
  LayoutDashboard
} from 'lucide-react';

export const Home: React.FC = () => {
  const portfolioItems = [
    {
      icon: Lightbulb,
      title: '기술 / 특허 IP',
      desc: '기업의 독보적인 기술 가치를 평가하고 지식재산권을 확보하여 권리를 극대화합니다.',
    },
    {
      icon: Coins,
      title: '자금 컨설팅',
      desc: '시설 및 운전 자금 등 기업 경영에 필수적인 자금을 최적의 조건으로 조달합니다.',
    },
    {
      icon: Briefcase,
      title: '경영 컨설팅',
      desc: '가업 승계, 법인 전환 등 기업의 지속 가능한 성장을 위한 전략 자문을 제공합니다.',
    },
    {
      icon: FileText,
      title: '정부지원 컨설팅',
      desc: '정부의 다양한 지원 사업과 바우처를 정밀 분석하여 최적의 혜택을 매칭합니다.',
    },
    {
      icon: ShieldCheck,
      title: '기업인증 컨설팅',
      desc: '벤처, 이노비즈 등 기업 신뢰도를 높이는 공인 인증 취득과 연구소 설립을 지원합니다.',
    },
    {
      icon: Globe,
      title: '해외진출 / 수출',
      desc: '글로벌 시장 진입을 위한 현지화 전략과 바이어 매칭 등 성공적 진출을 돕습니다.',
    },
    {
      icon: LayoutDashboard,
      title: '마케팅 / 조달',
      desc: '브랜드 가치를 높이는 마케팅과 공공 조달 시장 진입으로 신규 매출을 창출합니다.',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-up">
              <span className="text-amber-500 font-bold text-[10px] md:text-xs tracking-[0.5em] uppercase border-b border-amber-500/30 pb-1">
                OnBiz Strategy Consulting Firm
              </span>
            </div>
            
            <h1 className="flex flex-col gap-4 mb-10">
              <div className="animate-fade-up delay-100">
                <span className="text-white font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase">ON THE BEST</span>
              </div>
              <div className="animate-fade-up delay-200">
                <span className="text-white font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase">ON THE SPECIAL</span>
              </div>
            </h1>
            
            <div className="flex justify-center mb-10 animate-fade-up delay-300">
              <div className="h-px bg-white/20 animate-line w-[40px]"></div>
            </div>

            <div className="animate-fade-up delay-300 mb-12">
              <p className="text-slate-100 text-base md:text-xl font-medium tracking-wide leading-relaxed max-w-2xl mx-auto">
                창업부터 IPO, EXIT 까지<br/>
                기업성장의 모든 단계에 꼭 필요한 전략적 맞춤 솔루션과 전문 컨설팅을 제공합니다.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group px-12 py-4 bg-white text-slate-950 font-bold text-sm tracking-widest uppercase transition-all hover:bg-amber-500 hover:text-slate-950 flex items-center gap-3"
              >
                서비스 항목
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <Link 
                to="/contact" 
                className="px-12 py-4 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase transition-all hover:bg-white hover:text-slate-950"
              >
                사전검토 의뢰
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section - Now 7 items */}
      <section id="services-section" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b border-slate-200 pb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-amber-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Core Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
                성공적인 경영을 위한 <br/>전략적 전문 자문
              </h3>
            </div>
            <p className="text-slate-400 text-sm md:max-w-xs leading-relaxed font-medium">
              각 분야 최고의 전문가 그룹이 귀사의 성장을 위한 <br className="hidden md:block"/> 최적화된 로드맵을 설계합니다.
            </p>
          </div>

          {/* Hexagonal Grid Layout */}
          <div className="relative flex justify-center items-center min-h-[800px] md:min-h-[900px]">
            {/* Desktop Hexagonal Layout */}
            <div className="hidden md:block relative w-[1000px] h-[800px]">
              {portfolioItems.map((item, idx) => {
                const positions = [
                  { top: '15%', left: '30%' },
                  { top: '15%', left: '70%' },
                  { top: '45%', left: '10%' },
                  { top: '45%', left: '50%' },
                  { top: '45%', left: '90%' },
                  { top: '75%', left: '30%' },
                  { top: '75%', left: '70%' }
                ];
                const pos = positions[idx];

                return (
                  <div 
                    key={idx}
                    className="absolute w-[240px] h-[280px] transition-all duration-700 hover:z-40 group"
                    style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="absolute inset-2 bg-amber-500/0 group-hover:bg-amber-500/10 blur-2xl transition-all duration-500 rounded-full"></div>
                    
                    <div className="w-full h-full bg-slate-900 clip-hexagon flex flex-col items-center justify-center p-8 text-center shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-amber-500 border border-white/5">
                      <item.icon size={40} className="text-amber-500 mb-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.2} />
                      <h4 className="text-white font-black text-lg mb-3 tracking-tight leading-tight">{item.title}</h4>
                      <div className="w-8 h-px bg-white/30 mb-4 group-hover:bg-white/50 transition-colors"></div>
                      <p className="text-white/60 text-xs leading-relaxed font-light group-hover:text-white/90 transition-colors line-clamp-3 px-2">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Grid Layout */}
            <div className="md:hidden grid grid-cols-1 gap-6 w-full px-4">
              {portfolioItems.map((item, idx) => (
                <div key={idx} className="group p-8 rounded-3xl shadow-xl border border-slate-200 flex flex-col gap-4 transition-all bg-white hover:bg-amber-500 hover:text-white">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-900 text-amber-500 group-hover:bg-white group-hover:text-amber-500">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black tracking-tight mb-3">{item.title}</h4>
                    <p className="text-sm font-light leading-relaxed text-slate-500 group-hover:text-white/90">{item.desc}</p>
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

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                경험으로 증명된 <br className="hidden md:block"/>전문 지식의 힘
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-light mb-12 max-w-xl">
                온비즈는 수많은 프로젝트 성공 경험을 바탕으로, 단순한 자문을 넘어 실질적인 비즈니스 성과를 창출해냅니다.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                    <div className="text-3xl font-black text-slate-950 mb-1">1,200+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Successful Projects</div>
                </div>
                <div>
                    <div className="text-3xl font-black text-slate-950 mb-1">10Y+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Industry Know-how</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                { icon: Trophy, title: '결과 지향적 자문', desc: '현장에서 즉시 작동하는 실질적인 해결책을 제시합니다.' },
                { icon: Users, title: '전문가 협업 시스템', desc: '분야별 전문가들이 유기적으로 협력하여 최선의 결과를 도출합니다.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 border border-slate-200 shadow-sm flex gap-6 items-start transition-transform hover:-translate-x-2">
                  <div className="w-10 h-10 bg-slate-950 text-amber-500 flex items-center justify-center shrink-0">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-950 relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter">
            귀사의 가치를 <br/>온전히 실현하십시오.
          </h2>
          <div className="w-10 h-px bg-amber-600 mx-auto mb-10"></div>
          <p className="text-slate-400 mb-12 text-lg font-light tracking-wide">
            전문 자문팀이 귀사의 현황을 정밀하게 진단해 드립니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-14 py-5 bg-amber-600 text-white text-xs font-black tracking-[0.3em] uppercase hover:bg-amber-500 transition-all shadow-2xl"
          >
            사전검토의뢰서 접수 <ArrowRight size={18}/>
          </Link>
        </div>
      </section>
    </div>
  );
};
