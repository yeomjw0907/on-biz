import React from 'react';
import { Target, Lightbulb, Users, Award, Zap, Linkedin, Mail, User } from 'lucide-react';
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
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            고객의 성공이 곧<br />
            <span className="text-amber-500">우리의 자부심입니다</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            온경영자문은 급변하는 비즈니스 환경 속에서<br/>
            기업이 나아가야 할 올바른 방향을 제시하는 <span className="text-white font-medium">나침반</span>이 되겠습니다.
          </p>
        </div>
      </div>

      {/* CEO Message / About Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 relative">
             <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-500 -translate-x-4 -translate-y-4 rounded-tl-3xl"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-blue-900 translate-x-4 translate-y-4 rounded-br-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
              alt="Consulting Meeting" 
              className="rounded-xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-amber-600 font-bold tracking-wider uppercase mb-3 text-sm">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">신뢰와 전문성을 바탕으로<br/>동반 성장을 추구합니다.</h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                안녕하십니까, <strong className="text-slate-900">온경영자문</strong>을 찾아주신 여러분을 진심으로 환영합니다.
              </p>
              <p>
                저희 온경영자문은 다년간의 현장 경험과 전문 지식을 갖춘 컨설턴트들이 모여,
                기업이 직면한 다양한 문제들을 해결하고 새로운 성장 동력을 발굴해 드리고 있습니다.
              </p>
              <p>
                단순히 지식을 전달하는 것에 그치지 않고, 기업의 상황에 맞는 최적의 실행 방안을
                함께 고민하고 만들어가는 진정한 비즈니스 파트너가 되겠습니다.
              </p>
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div>
                   <p className="font-medium text-slate-500 text-sm mb-1">언제나 고객과 함께하겠습니다.</p>
                   <span className="font-bold text-slate-900 text-xl font-serif">온경영자문 임직원 일동</span>
                </div>
                {/* Signature-like graphic could go here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">핵심 가치 (Core Values)</h2>
            <p className="text-slate-500">우리가 일하는 방식이자 고객에게 약속하는 가치입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl rotate-3 flex items-center justify-center text-blue-900 mx-auto mb-8 group-hover:rotate-6 transition-transform">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">신뢰 (Trust)</h3>
              <p className="text-slate-600 leading-relaxed">
                고객과의 약속을 최우선으로 여기며,<br/>투명하고 정직한 컨설팅을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-amber-50 rounded-2xl -rotate-3 flex items-center justify-center text-amber-600 mx-auto mb-8 group-hover:-rotate-6 transition-transform">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">전문성 (Expertise)</h3>
              <p className="text-slate-600 leading-relaxed">
                끊임없는 연구와 학습을 통해<br/>최고 수준의 전문 지식을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl rotate-3 flex items-center justify-center text-emerald-600 mx-auto mb-8 group-hover:rotate-6 transition-transform">
                <Lightbulb size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">혁신 (Innovation)</h3>
              <p className="text-slate-600 leading-relaxed">
                현실에 안주하지 않고<br/>새로운 가치와 솔루션을 창출합니다.
              </p>
            </div>
          </div>
      </div>

      {/* Team Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-3">Our Professionals</h2>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">전문가 소개</h2>
            <p className="text-slate-500 max-w-xl mx-auto">각 분야 최고의 전문가들이 기업의 성공을 위해 함께합니다.</p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-4">
                      {member.description}
                    </p>
                    <div className="flex gap-3">
                      <button className="p-2 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full transition-colors backdrop-blur-sm">
                        <Linkedin size={16} />
                      </button>
                      <button className="p-2 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full transition-colors backdrop-blur-sm">
                        <Mail size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-2">{member.position}</p>
                  <p className="text-slate-500 text-sm font-medium">{member.role}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
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