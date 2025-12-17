import React from 'react';
import { Shield, Coins, FileText, LayoutDashboard, Globe, Lightbulb } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'ip',
    title: '기술 / 특허 IP 컨설팅',
    description: '기업의 독보적인 기술 가치를 평가받고 지식재산권을 확보하여 무형 자산의 가치를 극대화합니다.',
    icon: Lightbulb,
    details: [
      '기술 가치 평가 및 기술신용보증(TCB)',
      '상표권, 특허, 디자인권 등 권리 확보',
      '지식재산권(IP) 포트폴리오 구축',
      '기술 사업화 및 IP 자본화 전략'
    ]
  },
  {
    id: 'global',
    title: '해외 진출 컨설팅',
    description: '글로벌 시장 진입을 위한 현지화 전략부터 바이어 매칭까지, 성공적인 해외 진출을 지원합니다.',
    icon: Globe,
    details: [
      '해외 신규 판로 개척 지원',
      '글로벌 바이어 발굴 및 매칭',
      '해외 박람회 및 전시회 참가 지원',
      '수출 관련 행정 및 규제 대응'
    ]
  },
  {
    id: 'certification',
    title: '기업 인증 컨설팅',
    description: '기업의 기술력과 신뢰도를 공인받아 대외 경쟁력을 확보하고 입찰 가점 및 세제 혜택을 획득합니다.',
    icon: Shield,
    details: [
      'ISO 심사 (9001, 14001 등)',
      '벤처기업 / 이노비즈 / 메인비즈 인증',
      '기업부설연구소 및 전담부서 설립',
      '각종 해외 인증 및 인허가 대행'
    ]
  },
  {
    id: 'government',
    title: '정부 지원 컨설팅',
    description: '정부의 다양한 지원 사업을 정밀 분석하여 기업 상황에 최적화된 바우처와 지원금을 매칭합니다.',
    icon: FileText,
    details: [
      '혁신 바우처 및 수출 바우처 활용',
      '각종 고용 지원금 및 장려금 신청',
      '정부 과제 사업계획서 작성 컨설팅',
      '제조 현장 및 근무 환경 개선 사업'
    ]
  },
  {
    id: 'marketing',
    title: '마케팅 / 공공조달',
    description: '온/오프라인 통합 마케팅으로 브랜드 가치를 높이고 공공 시장 진입을 통해 안정적인 매출을 확보합니다.',
    icon: LayoutDashboard,
    details: [
      'SNS 채널 관리 및 커머스 운영',
      '공공조달 등록 (나라장터 / MAS)',
      '기업 홈페이지 및 브랜드 사이트 제작',
      '홍보 영상 촬영 및 콘텐츠 제작'
    ]
  },
  {
    id: 'funding',
    title: '자금 조달 컨설팅',
    description: '사옥 마련, 시설 투자, 원자재 구매 등 기업 경영에 필수적인 자금을 가장 유리한 조건으로 조달합니다.',
    icon: Coins,
    details: [
      '사옥 및 공장 취득 자금',
      '기계 / 설비 등 시설 투자 자금',
      '정부 정책 자금 및 운전 자금',
      '이차보전(금리 우대) 지원 사업'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="relative bg-slate-900 py-40 md:py-52 text-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-slate-900">
             <div className="absolute w-full h-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in-up">
            Total Business Solution
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight animate-fade-in-up delay-100">
            Our Services
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed animate-fade-in-up delay-200">
            기업의 Life-Cycle에 맞춘 <strong>전략적 솔루션</strong>을 제공합니다.<br/>
            성공적인 비즈니스를 위한 최적의 파트너가 되겠습니다.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full animate-fade-in-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 mb-8 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
                  Service Details
                </h4>
                <ul className="space-y-3">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-sm text-slate-600 group/item">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 shrink-0 group-hover/item:bg-amber-500 transition-colors"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-3">Workflow</h2>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">컨설팅 프로세스</h2>
            <p className="text-slate-500 max-w-xl mx-auto">체계적이고 투명한 절차를 통해 최상의 결과를 만들어냅니다.</p>
          </div>

          <div className="relative mt-20">
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 gap-x-8">
              {[
                { step: '01', title: '상담 신청', desc: '온라인/유선 문의 접수' },
                { step: '02', title: '기업 진단', desc: '현황 분석 및 니즈 파악' },
                { step: '03', title: '전략 수립', desc: '맞춤형 솔루션 제안' },
                { step: '04', title: '실행 지원', desc: '전문가 밀착 컨설팅' },
                { step: '05', title: '사후 관리', desc: '결과 분석 및 지속 케어' }
              ].map((item, idx) => (
                <div key={idx} className="relative group text-center md:text-left">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 border-4 border-slate-50 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-amber-100">
                     <span className="text-3xl font-black text-slate-200 group-hover:text-amber-500 transition-colors">{item.step}</span>
                  </div>
                  <div className="px-2 md:px-0">
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};