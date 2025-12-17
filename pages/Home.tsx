import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Office" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/60"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8 animate-fade-in-up shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-slate-200 font-semibold text-xs md:text-sm tracking-wide uppercase">
                Total Business Solution Partner
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight animate-fade-in-up delay-100 drop-shadow-xl">
              성공적인 비즈니스의<br />
              <span className="relative inline-block mr-3">
                확실한 기준
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <span className="text-amber-500">온경영자문</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-normal animate-fade-in-up delay-200">
              창업부터 IPO까지, 기업 성장의 모든 단계에 필요한<br className="hidden md:block"/>
              전략적 솔루션과 전문 컨설팅을 제공하여 귀사의 도약을 함께합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link 
                to="/services" 
                className="group px-8 py-3.5 bg-amber-500 text-slate-900 font-bold text-base rounded-lg transition-all hover:bg-amber-400 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:-translate-y-1"
              >
                서비스 알아보기 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white font-bold text-base rounded-lg transition-all flex items-center justify-center hover:border-white/30"
              >
                무료 상담 신청
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: '누적 컨설팅', value: '500+', sub: 'Partners' },
              { label: '고객 만족도', value: '98%', sub: 'Satisfaction' },
              { label: '전문가 경력', value: '10년+', sub: 'Experience' },
              { label: '재계약율', value: 'No.1', sub: 'Retention' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-blue-900 transition-all">
                  {stat.value}
                </div>
                <div className="flex flex-col items-center">
                   <div className="text-slate-900 font-bold text-lg mb-1">{stat.label}</div>
                   <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-4 flex items-center gap-2">
                <span className="w-12 h-px bg-amber-600"></span>
                Our Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                기업 성장을 위한<br/>핵심 솔루션
              </h3>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-colors group">
              전체 서비스 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">기업 인증 및 연구소</h4>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                벤처기업, 이노비즈 등 기업 인증 취득과 연구소 설립을 통해 대외 신인도를 높이고 세제 혜택을 확보합니다.
              </p>
              <div className="pt-8 border-t border-slate-50">
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 transition-all">
                  자세히 보기 <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 2 - Featured */}
            <div className="group bg-slate-900 p-10 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-800 flex flex-col h-full relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
              <div className="relative z-10 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 backdrop-blur-sm">
                <TrendingUp size={28} />
              </div>
              <h4 className="relative z-10 text-2xl font-bold text-white mb-4">정책자금 조달</h4>
              <p className="relative z-10 text-slate-400 mb-8 leading-relaxed flex-grow">
                정부 지원 사업과 정책 자금을 심층 분석하여 귀사에 가장 적합한 자금을 최적의 조건으로 조달합니다.
              </p>
              <div className="relative z-10 pt-8 border-t border-white/10">
                <Link to="/services" className="inline-flex items-center gap-2 text-amber-400 font-bold group-hover:gap-4 transition-all">
                  자세히 보기 <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                <PieChart size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">재무/세무 컨설팅</h4>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                가업 승계, 법인 전환, 세무 리스크 관리 등 기업의 재무 건전성을 확보하고 절세 전략을 수립합니다.
              </p>
              <div className="pt-8 border-t border-slate-50">
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 transition-all">
                  자세히 보기 <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Consultant" 
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <div className="text-xs uppercase tracking-widest mb-2 opacity-80">Since 2014</div>
                    <div className="text-2xl font-bold">10년의 노하우</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                결과가 다른<br/> 
                <span className="text-slate-900 relative">
                   전문성
                   <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/40 -z-10"></span>
                </span>
                을 경험하세요
              </h3>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                단순한 조언자가 아닌, 실행 가능한 전략을 제시하고 결과를 만들어내는 파트너입니다. 
                수많은 기업들의 성공 사례가 온경영자문의 실력을 증명합니다.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: '1:1 맞춤형 심층 분석', desc: '기업의 현재 상황과 니즈를 정밀하게 분석하여 솔루션을 제공합니다.' },
                  { title: '검증된 전문가 그룹', desc: '각 분야별 10년 이상 경력의 전문가들이 최상의 결과를 도출합니다.' },
                  { title: '평생 파트너십', desc: '일회성 컨설팅에 그치지 않고, 기업의 지속 성장을 함께합니다.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group hover:bg-slate-50 p-4 rounded-xl transition-colors -mx-4">
                    <div className="shrink-0 mt-1 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <CheckCircle2 className="text-slate-400 w-6 h-6 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden flex items-center justify-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-900">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            성공 비즈니스의 시작
          </h2>
          <p className="text-slate-300 mb-12 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            망설이지 마시고 지금 바로 문의하세요. <br/>
            전문가가 직접 찾아가 기업의 현황을 진단해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-amber-500 text-slate-900 text-lg font-bold rounded-lg transition-all hover:bg-amber-400 hover:scale-105 shadow-xl shadow-amber-500/20"
            >
              무료 방문 상담 신청
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};