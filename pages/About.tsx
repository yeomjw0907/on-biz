
import React from 'react';
import { Target, Lightbulb, Users, User, CheckCircle2, Mail } from 'lucide-react';
import { teamMembers } from '../data';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Intro Hero */}
      <div className="relative bg-slate-900 py-32 md:py-48 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Office Background"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
            고객의 성공이 곧<br />
            <span className="text-amber-500 uppercase">우리의 자부심입니다</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto tracking-wide">
            온비즈는 급변하는 비즈니스 환경 속에서<br/>
            기업이 나아가야 할 올바른 방향을 제시하는 <span className="text-white font-medium underline decoration-amber-500/50 underline-offset-8">나침반</span>이 되겠습니다.
          </p>
        </div>
      </div>

      {/* CEO Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row gap-16 items-center border border-slate-100">
          <div className="md:w-5/12 relative">
             <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-500 -translate-x-4 -translate-y-4 rounded-tl-3xl opacity-50"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-slate-900 translate-x-4 translate-y-4 rounded-br-3xl opacity-50"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200 flex items-center justify-center transition-all duration-700 hover:bg-slate-300">
              <User size={120} className="text-slate-400 opacity-50" />
            </div>
          </div>
          <div className="md:w-7/12">
            <h2 className="text-amber-600 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Leadership</h2>
            <div className="mb-10">
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-2 tracking-tighter">박희락 <span className="text-2xl font-medium text-slate-400">대표이사</span></h3>
              <div className="w-12 h-1.5 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
              {[
                '기술신용평가사',
                'ISO 선임 심사원',
                '월드비지니스싱크탱크 초대회장',
                '한국식품산업클러스터진흥원 자문위원',
                '소비자진흥원 이사',
                '소상공인연구원 자문위원',
                '고양축구협회 부회장',
                '세계한인무역협회 회원',
                '하나은행 출신'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-sm md:text-base font-semibold tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-slate-50">
               <p className="text-slate-500 text-sm leading-relaxed font-light mb-6">
                 "온비즈는 단순한 지식 전달을 넘어, 기업의 상황에 맞는 최적의 실행 방안을 <br className="hidden lg:block"/>함께 고민하고 만들어가는 진정한 비즈니스 파트너가 되겠습니다."
               </p>
               <span className="font-bold text-slate-950 text-lg">온비즈 임직원 일동</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Updated with full list */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-amber-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Our Professionals</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">분야별 전문가 위원회</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 shadow-lg bg-slate-100">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200">
                        <User size={64} className="text-slate-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white/80 text-xs mb-4 leading-relaxed line-clamp-4 font-light">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-amber-600 font-bold text-[10px] uppercase tracking-widest mb-3">{member.position}</p>
                  
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {member.expertise.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] rounded font-bold border border-slate-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
