import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart, CheckCircle2, Award, ArrowUpRight, Users, Briefcase, Trophy } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-10 animate-fade-in-up shadow-xl">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
                Premium Business Consulting
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight animate-fade-in-up delay-100 drop-shadow-2xl">
              비즈니스의<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                새로운 기준
              </span>
              <span className="text-amber-500">.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
              창업부터 IPO까지, 기업 성장의 모든 단계에 필요한<br className="hidden md:block"/>
              <strong>전략적 솔루션</strong>과 <strong>전문 컨설팅</strong>을 제공합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up delay-300">
              <Link 
                to="/services" 
                className="group px-10 py-4 bg-amber-500 text-slate-900 font-bold text-lg rounded-xl transition-all hover:bg-amber-400 flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:-translate-y-1"
              >
                서비스 알아보기 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center hover:border-white/30"
              >
                무료 상담 신청
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-b border-slate-100 relative z-20 -mt-8 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-slate-100">
            {[
              { label: '누적 컨설팅', value: '500+', sub: 'Partners' },
              { label: '고객 만족도', value: '98%', sub: 'Satisfaction' },
              { label: '전문가 경력', value: '10년+', sub: 'Experience' },
              { label: '재계약율', value: 'Top', sub: 'Retention' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group p-4">
                <div className="text-4xl lg:text-6xl font-black text-slate-900 mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-300 origin-center">
                  {stat.value}
                </div>
                <div className="flex flex-col items-center">
                   <div className="text-slate-800 font-bold text-lg">{stat.label}</div>
                   <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-1">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              기업 성장을 위한<br/>핵심 솔루션
            </h3>
            <p className="text-slate-500 text-lg">
              각 분야 최고의 전문가들이 기업의 상황에 맞는 최적의 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-blue-50"></div>
              <div className="relative w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                <ShieldCheck size={28} strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">기업 인증 및 연구소</h4>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                벤처기업, 이노비즈 등 기업 인증 취득과 연구소 설립을 통해 대외 신인도를 높이고 세제 혜택을 확보합니다.
              </p>
              <div className="pt-8 border-t border-slate-50">
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 transition-all hover:text-blue-700">
                  자세히 보기 <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 2 - Featured */}
            <div className="group bg-slate-900 p-10 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-800 flex flex-col h-full relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
              <div className="relative z-10 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 backdrop-blur-sm shadow-inner">
                <TrendingUp size={28} strokeWidth={2} />
              </div>
              <h4 className="relative z-10 text-2xl font-bold text-white mb-4">정책자금 조달</h4>
              <p className="relative z-10 text-slate-400 mb-8 leading-relaxed flex-grow">
                정부 지원 사업과 정책 자금을 심층 분석하여 귀사에 가장 적합한 자금을 최적의 조건으로 조달합니다.
              </p>
              <div className="relative z-10 pt-8 border-t border-white/10">
                <Link to="/services" className="inline-flex items-center gap-2 text-amber-400 font-bold group-hover:gap-4 transition-all hover:text-amber-300">
                  자세히 보기 <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-emerald-50"></div>
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                <PieChart size={28} strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">재무/세무 컨설팅</h4>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                가업 승계, 법인 전환, 세무 리스크 관리 등 기업의 재무 건전성을 확보하고 절세 전략을 수립합니다.
              </p>
              <div className="pt-8 border-t border-slate-50">
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 transition-all hover:text-emerald-700">
                  자세히 보기 <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 font-medium hover:text-slate-900 transition-colors border-b border-transparent hover:border-slate-900 pb-1">
                전체 서비스 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned Grid Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] bg-amber-100/50 rounded-full blur-[100px]"></div>
            <div className="absolute -right-[10%] bottom-[20%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              결과가 다른 전문성
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              단순한 조언자가 아닌, 실행 가능한 전략을 제시하고 결과를 만들어내는 파트너입니다.
              수많은 기업들의 성공 사례가 온경영자문의 실력을 증명합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Trophy, 
                title: '10년의 노하우', 
                desc: '2014년부터 축적된 풍부한 현장 경험과 데이터베이스를 바탕으로 실패 없는 컨설팅을 제공합니다.',
                color: 'text-amber-500',
                bg: 'bg-amber-50'
              },
              { 
                icon: Users, 
                title: '검증된 전문가 그룹', 
                desc: '각 분야별 10년 이상 경력의 전문 컨설턴트, 세무사, 변호사, 변리사가 최상의 팀을 구성합니다.',
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },
              { 
                icon: Briefcase, 
                title: '맞춤형 토탈 솔루션', 
                desc: '기업의 성장 단계와 특성에 맞춰 자금, 인증, 세무, 마케팅 등 One-Stop 솔루션을 제공합니다.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} className={item.color} strokeWidth={2} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden flex items-center justify-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-900">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
             <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent top-0"></div>
             <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent bottom-0"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-amber-400 text-sm font-bold tracking-wide backdrop-blur-sm animate-bounce">
              지금이 가장 빠른 성장의 기회입니다
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            성공 비즈니스의 시작,<br/>온경영자문과 함께하세요.
          </h2>
          <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            망설이지 마시고 지금 바로 문의하세요. <br/>
            전문가가 직접 찾아가 기업의 현황을 무료로 진단해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link 
              to="/contact" 
              className="px-12 py-5 bg-amber-500 text-slate-900 text-lg font-bold rounded-xl transition-all hover:bg-amber-400 hover:scale-105 shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              무료 방문 상담 신청 <ArrowRight size={20}/>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};