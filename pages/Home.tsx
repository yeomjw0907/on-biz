
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
              <div className="animate-fade-up delay-100 flex items-center justify-center gap-4">
                <span className="text-white font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase">OnBiz</span>
                <span className="text-white/40 font-thin text-3xl md:text-5xl lg:text-6xl tracking-widest uppercase">the best</span>
              </div>
              <div className="animate-fade-up delay-200 flex items-center justify-center gap-4">
                <span className="text-white font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase">OnBiz</span>
                <span className="text-white/40 font-thin text-3xl md:text-5xl lg:text-6xl tracking-widest uppercase">the special</span>
              </div>
            </h1>
            
            <div className="flex justify-center mb-10 animate-fade-up delay-300">
              <div className="h-px bg-white/20 animate-line w-[40px]"></div>
            </div>

            <div className="animate-fade-up delay-300 mb-12">
              <p className="text-slate-100 text-base md:text-xl font-medium tracking-wide leading-relaxed max-w-2xl mx-auto">
                창업부터 IPO, EXIT 기업성장의 모든단계에 꼭 필요한<br/>
                전략적 맞춤 솔루션과 전문 컨설팅을 제공합니다.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
              <Link 
                to="/services" 
                className="group px-12 py-4 bg-white text-slate-950 font-bold text-sm tracking-widest uppercase transition-all hover:bg-amber-500 hover:text-slate-950 flex items-center gap-3"
              >
                Services
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b border-slate-100 pb-12 gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 shadow-2xl">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`group bg-white p-10 md:p-12 transition-all duration-300 hover:bg-slate-950 hover:text-white ${index === 6 ? 'lg:col-span-2' : ''}`}>
                <div className="text-amber-600 mb-8 transition-colors group-hover:text-amber-500">
                  <item.icon size={40} strokeWidth={1} />
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-400 mb-10 leading-relaxed text-sm font-light h-12">
                  {item.desc}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] border-b border-current pb-1 transition-all">
                  Read More <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
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
