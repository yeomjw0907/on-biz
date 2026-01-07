
import { BoardPost, TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '박희락',
    position: '대표이사',
    role: 'CEO',
    image: '/images/team/박희락.jpg',
    expertise: ['기술신용평가', '경영전략', '자금조달'],
    description: '하나은행 출신으로 금융권에서 다년간의 경험을 쌓았습니다. 기술신용평가사 자격을 보유하고 있으며, ISO 선임 심사원으로 품질경영시스템 인증 업무를 수행했습니다. 월드비지니스싱크탱크 초대회장을 역임하며 글로벌 비즈니스 네트워크를 구축했고, 중소기업의 기술 가치 평가와 자금 조달, 경영 전략 수립에 전문성을 발휘합니다. 기업 성장의 전략적 기틀을 마련하고 지속 가능한 성장을 위한 맞춤형 솔루션을 제공합니다.'
  },
  {
    id: 2,
    name: '김윤식',
    position: '이사',
    role: 'Director',
    image: '/images/team/김윤식.jpg',
    expertise: ['경영 진단', '성장 로드맵'],
    description: '기업 경영 진단 및 성장 전략 수립 전문가입니다. 다수의 중소기업과 스타트업의 경영 컨설팅 경험을 보유하고 있으며, 기업의 내외부 환경을 정밀 분석하여 지속 가능한 성장을 위한 맞춤형 전략을 제시합니다. 재무 구조 개선, 조직 혁신, 시장 진입 전략 등 다양한 경영 이슈에 대한 실무적 해결책을 제공하며, 기업의 단계별 성장 로드맵을 설계합니다.'
  },
  {
    id: 3,
    name: '배준식',
    position: '이사',
    role: 'Director',
    image: '',
    expertise: ['재무 전략', '기업 투자'],
    description: '재무 전략 및 기업 투자 분야의 전문가입니다. 다년간의 재무 분석 및 투자 자문 경험을 바탕으로 기업의 재무 구조를 진단하고 개선 방안을 제시합니다. 자금 조달 전략 수립, 투자 유치 지원, M&A 자문 등 다양한 재무 이슈를 다루며, 안정적인 재무 구조 구축과 효율적인 자산 운용을 자문합니다. 기업의 재무 건전성 향상과 가치 극대화를 위한 전략을 수립합니다.'
  },
  {
    id: 4,
    name: '이준석',
    position: '변리사',
    role: 'Patent Attorney',
    image: '/images/team/이준석.jpg',
    expertise: ['특허 출원', 'IP 포트폴리오'],
    description: '특허법원 출신 변리사로 지식재산권 분야의 전문가입니다. 특허, 상표, 디자인 등 다양한 지식재산권 출원 및 등록 업무를 수행하며, 기업의 핵심 기술과 브랜드를 보호합니다. IP 포트폴리오 구축 전략 수립, 특허 침해 대응, 라이선스 계약 자문 등 지식재산권을 통한 가치 창출을 지원합니다. 기술 기반 기업의 무형 자산 가치 극대화를 위한 종합적인 IP 전략을 제공합니다.'
  },
  {
    id: 5,
    name: '신동규',
    position: '행정사',
    role: 'Administrative Agent',
    image: '',
    expertise: ['인허가 대행', '정부 사업'],
    description: '행정사 자격을 보유한 인허가 및 정부 사업 전문가입니다. 각종 복잡한 인허가 절차 및 행정 법률 대응을 전문적으로 지원하며, 기업의 원활한 사업 운영을 돕습니다. 정부 지원 사업 신청 및 관리, 행정 심판 대행, 각종 허가 및 인가 업무를 수행합니다. 행정 절차의 복잡성을 이해하고 기업이 집중할 수 있도록 행정 업무를 효율적으로 대행합니다.'
  },
  {
    id: 6,
    name: '염정원',
    position: '대외전략팀장',
    role: 'External Strategy Leader',
    image: '/images/team/염정원.jpg',
    expertise: ['M&A', '투자 유치', '대외 협력'],
    description: '대외 전략 및 비즈니스 개발 전문가입니다. M&A 거래 구조 설계 및 실행, 투자 유치 전략 수립 및 실행, 글로벌 파트너십 구축 등 다양한 대외 전략 업무를 수행합니다. 호주상공회의소 등 해외 기관과의 전략적 협력 관계를 구축하며, 기업의 해외 진출 및 글로벌 네트워크 확장을 지원합니다. 전략적 파트너십 구축과 투자 유치를 통해 기업의 외연 확장과 도약을 이끕니다.'
  },
  {
    id: 7,
    name: '김혜겸',
    position: '변호사',
    role: 'Lawyer',
    image: '/images/team/김혜겸.png',
    expertise: ['기업 법무', '계약 검토', '분쟁 해결'],
    description: '변호사 자격을 보유한 기업 법무 전문가입니다. 기업 운영 과정에서 발생할 수 있는 법적 리스크를 사전에 진단하고 예방하며, 각종 계약서 검토 및 작성, 분쟁 해결 등을 지원합니다. M&A 법무 자문, 노동 법무, 지적재산권 분쟁, 계약 분쟁 등 다양한 법적 이슈를 다루며, 기업이 안전하게 비즈니스를 수행할 수 있도록 법적 보호막을 제공합니다.'
  },
  {
    id: 8,
    name: '이윤석',
    position: '수출통관본부장',
    role: 'Head of Customs',
    image: '',
    expertise: ['수출입 통관', '글로벌 물류'],
    description: '수출입 통관 및 글로벌 물류 분야의 전문가입니다. 다년간의 통관 업무 경험을 바탕으로 수출입 신고, 관세 신고, 원산지 증명서 발급 등 각종 통관 절차를 지원합니다. FTA 활용 전략, 관세 절감 방안, 수출입 규제 대응 등 해외 시장 진출을 위한 통관 절차 및 글로벌 공급망 최적화를 지원합니다. 기업의 해외 진출을 위한 실무적 통관 솔루션을 제공합니다.'
  },
  {
    id: 9,
    name: '전보윤',
    position: '세무사',
    role: 'Tax Accountant',
    image: '/images/team/전보윤.jpg',
    expertise: ['세무 기장', '세무 조정'],
    description: '세무사 자격을 보유한 세무 전문가입니다. 복잡한 세무 이슈를 명쾌하게 해결하고 기업 맞춤형 절세 전략을 수립합니다. 세무 기장, 세무 조정, 세무 조사 대응, 가업 승계 세무 자문 등 다양한 세무 업무를 수행하며, 기업의 세무 부담을 최소화하고 세무 리스크를 관리합니다. 기업의 재무 건전성 향상을 위한 세무 전략을 제공합니다.'
  },
  {
    id: 10,
    name: '황윤상',
    position: '법무사',
    role: 'Judicial Scrivener',
    image: '/images/team/황윤상.png',
    expertise: ['법인 등기', '부동산 등기'],
    description: '법무사 자격을 보유한 등기 전문가입니다. 법인 설립 등기, 법인 사항 변경 등기, 주식 양도 등기 등 각종 법인 등기 업무를 신속하고 정확하게 처리합니다. 부동산 등기, 담보 설정 등기 등 다양한 등기 업무를 수행하며, 기업의 원활한 비즈니스 활동을 지원합니다. 등기 절차의 복잡성을 이해하고 기업이 쉽게 등기 업무를 처리할 수 있도록 지원합니다.'
  },
  {
    id: 11,
    name: '박은선',
    position: 'VC선임심사역',
    role: 'Senior VC Analyst',
    image: '',
    expertise: ['스타트업 투자', '기업 가치 평가'],
    description: '벤처 캐피털에서 선임 심사역으로 활동하며 다수의 스타트업 투자 심사 경험을 보유한 투자 전문가입니다. 기업 가치 평가, 투자 유치 전략 수립, 투자 계약서 검토 등 투자 관련 전반적인 업무를 수행합니다. 스타트업의 성장 단계별 투자 유치 전략을 수립하고, 투자자와의 협상 및 계약을 지원합니다. 투자 유치를 위한 실무 자문을 제공하며 기업의 성장 자금 확보를 돕습니다.'
  },
  {
    id: 12,
    name: '조한준',
    position: '세무사',
    role: 'Tax Accountant',
    image: '/images/team/조한준.png',
    expertise: ['재무 설계', '가업 승계'],
    description: '세무사 자격을 보유한 재무 설계 및 가업 승계 전문가입니다. 기업의 재무 건전성을 높이고 안정적인 가업 승계를 위한 플랜을 설계합니다. 가업 승계 세무 전략, 재무 구조 개선, 자산 관리 전략 등 다양한 재무 이슈를 다루며, 기업의 지속 가능한 성장을 위한 재무 기반을 마련합니다. 세대 간 원활한 사업 승계를 위한 종합적인 재무 전략을 제공합니다.'
  },
  {
    id: 13,
    name: '최우인',
    position: '행정사',
    role: 'Administrative Agent',
    image: '/images/team/최우인.png',
    expertise: ['행정 심판', '토지 보상'],
    description: '행정사 자격을 보유한 행정 절차 및 정부 사업 전문가입니다. 정부 지원 사업 선정 및 기업 운영 행정 절차를 체계적으로 대행하며, 행정 심판, 토지 보상 등 복잡한 행정 업무를 처리합니다. 각종 허가 및 인가 업무, 정부 사업 신청 및 관리, 행정 분쟁 해결 등을 지원하며, 기업이 행정 절차에 소모하는 시간과 비용을 최소화합니다.'
  },
  {
    id: 14,
    name: '권민아',
    position: 'DIRECTOR',
    role: 'Director',
    image: '',
    expertise: ['프로젝트 관리', '조직 고도화'],
    description: '프로젝트 관리 및 조직 고도화 전문가입니다. 핵심 경영 프로젝트의 실행력 강화와 조직의 혁신적 성장을 리딩합니다. 전략 수립부터 실행까지 전 과정을 관리하며, 조직의 역량 강화와 프로세스 개선을 통해 기업의 경쟁력을 향상시킵니다. 다양한 이해관계자와의 협업을 통해 프로젝트의 성공적 완수를 이끌고, 조직의 지속 가능한 성장을 위한 변화를 주도합니다.'
  }
];

export const boardPosts: BoardPost[] = [
  {
    id: 1,
    title: '2024년 중소기업 정책자금 지원 공고 핵심 정리',
    category: '공고',
    date: '2024-03-15',
    author: '온비즈 전략팀',
    views: 1240,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    content: `<div class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">2024년 중소기업 정책자금 지원 계획</h2>
      <p>2024년도 중소기업 정책자금 지원 계획이 공고되었습니다. 올해는 특히 혁신형 중소기업과 수출 기업에 대한 지원이 대폭 강화되었습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">주요 지원 내용</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>시설자금: 연 2.0% 고정금리, 최대 30억원</li>
        <li>운전자금: 연 2.5% 고정금리, 최대 10억원</li>
        <li>혁신성장자금: 연 1.5% 우대금리, 최대 50억원</li>
        <li>수출기업 특별자금: 연 1.8%, 최대 20억원</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">신청 자격</h3>
      <p>중소기업기본법상 중소기업으로서 업력 3년 이상, 최근 3개년 평균 매출액 1,000억원 이하 기업이 대상입니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">신청 기간</h3>
      <p>2024년 3월 20일부터 12월 31일까지 연중 상시 접수</p>
      
      <p class="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500">
        <strong>온비즈 컨설팅:</strong> 정책자금 신청 전략부터 서류 작성, 심사 대응까지 전문가가 함께 합니다.
      </p>
    </div>`
  },
  {
    id: 2,
    title: '2024년 상반기 정부지원사업 일정 총정리',
    category: '공고',
    date: '2024-02-28',
    author: '온비즈 전략팀',
    views: 987,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    content: `<div class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">2024년 상반기 주요 정부지원사업 일정</h2>
      <p>중소기업 및 스타트업이 활용할 수 있는 주요 정부지원사업 일정을 정리했습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">3월</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>초기창업패키지: 3/4 ~ 3/29</li>
        <li>예비창업패키지: 3/11 ~ 4/5</li>
        <li>수출바우처: 3/15 ~ 4/15</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">4월</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>중소기업 R&D: 4/1 ~ 4/30</li>
        <li>혁신바우처: 4/10 ~ 5/10</li>
        <li>고용지원금(청년): 연중 상시</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">5-6월</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>창업성장기술개발: 5/1 ~ 5/31</li>
        <li>팁스(TIPS): 6/3 ~ 6/21</li>
        <li>소부장 특화 R&D: 6/15 ~ 7/15</li>
      </ul>
      
      <p class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
        자세한 상담 및 사업계획서 작성 지원이 필요하시면 온비즈로 문의주세요.
      </p>
    </div>`
  },
  {
    id: 3,
    title: '온비즈, 호주상공회의소와 MOU 체결 - 글로벌 비즈니스 네트워크 확장',
    category: '온비즈 소식',
    date: '2024-03-10',
    author: '염정원 팀장',
    views: 856,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000',
    content: `<div class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">온비즈-호주상공회의소 전략적 업무협약 체결</h2>
      <p>온비즈는 2024년 3월 8일, 호주상공회의소(Australian Chamber of Commerce)와 전략적 업무협약(MOU)을 체결했습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">협약 주요 내용</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>한-호 중소기업 간 비즈니스 매칭 지원</li>
        <li>호주 시장 진출 컨설팅 협력</li>
        <li>양국 기업의 투자 유치 및 M&A 자문</li>
        <li>정기적인 비즈니스 교류회 개최</li>
      </ul>
      
      <p class="mt-6">박희락 대표는 "이번 협약을 통해 온비즈 고객사들이 호주 시장에 보다 쉽게 진출할 수 있는 발판을 마련했다"며 "앞으로도 글로벌 네트워크 확장을 통해 고객사의 성공적인 해외 진출을 지원하겠다"고 밝혔습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">향후 계획</h3>
      <p>오는 5월에는 호주 시드니에서 한-호 비즈니스 매칭 행사가 예정되어 있으며, 온비즈 고객사 중 희망 기업은 참가 지원을 받을 수 있습니다.</p>
      
      <p class="mt-6 text-sm text-slate-600">
        <strong>참고 링크:</strong> 
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7404037343013511168" target="_blank" class="text-blue-600 hover:underline ml-2">
          호주상공회의소 보도자료 (LinkedIn)
        </a>
      </p>
    </div>`
  },
  {
    id: 4,
    title: '[보도자료] 2025 비즈니스 리더스 나이트, 14개국 경제인 130여 명 한자리에 모여',
    category: '온비즈 소식',
    date: '2024-12-03',
    author: '온비즈 대외전략팀',
    views: 1023,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000',
    content: `<div class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">2025 비즈니스 리더스 나이트, 14개국 경제인 130여 명 한자리에 모여</h2>
      <p class="text-slate-600 text-sm">2024년 12월 3일 | 호주상공회의소 보도자료</p>
      
      <p>2024년 12월 3일, 서울 서초구 대한변리사회에서 열린 '2025 비즈니스 리더스 나이트'에 세계 14개국의 경제인 130여 명이 참석했습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">행사 개요</h3>
      <p>이번 행사는 '스킨십'을 주제로 기업들과 경제인들의 활발한 교류를 장려하였으며, 호주상공회의소(AustCham Korea) JACCO ZWETSOOT 상임 이사의 축사와 함께 다양한 세션이 마련되었습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">주요 프로그램</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>호주상공회의소 JACCO ZWETSOOT 상임 이사 축사</li>
        <li>국내 정책지원 세션</li>
        <li>기업 ESG 방안 세션</li>
        <li>투자사의 해외 진출 세션</li>
        <li>14개국 경제인 네트워킹 타임</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">온비즈의 참여</h3>
      <p>온비즈(대표 박희락)는 이번 행사에 참석하여 글로벌 비즈니스 네트워크를 확장하고, 호주를 비롯한 해외 시장 진출 기회를 모색했습니다. 특히 호주상공회의소와의 전략적 파트너십을 통해 한-호 중소기업 간 비즈니스 교류를 지원하는 방안을 논의했습니다.</p>
      
      <p class="p-4 bg-slate-50 border-l-4 border-amber-500 italic">
        "이번 행사를 통해 글로벌 비즈니스 리더들과의 소중한 네트워킹 기회를 얻었습니다. 특히 호주상공회의소와의 협력을 통해 온비즈 고객사들의 해외 시장 진출을 더욱 효과적으로 지원할 수 있을 것입니다."
      </p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">향후 계획</h3>
      <p>온비즈는 이번 행사를 계기로 호주상공회의소와의 협력을 더욱 강화하고, 분기별로 양국 기업 간 네트워킹 행사와 비즈니스 매칭 행사를 개최할 예정입니다.</p>
      
      <p class="mt-6 text-sm text-slate-600">
        <strong>출처:</strong> 
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7404037343013511168" target="_blank" class="text-blue-600 hover:underline ml-2">
          호주상공회의소 보도자료 (LinkedIn)
        </a>
      </p>
    </div>`
  },
  {
    id: 5,
    title: '[보도자료] 2025 비즈니스 리더스 나이트, 14개국 경제인 130여 명 한자리에 모여',
    category: '온비즈 소식',
    date: '2024-12-03',
    author: '온비즈 전략팀',
    views: 892,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
    content: `<div class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">2025 비즈니스 리더스 나이트, 14개국 경제인 130여 명 한자리에 모여</h2>
      <p class="text-slate-600 text-sm">2024년 12월 3일 | 중앙뉴스 보도자료</p>
      
      <p>2024년 12월 3일, 서울 서초구 대한변리사회에서 열린 '2025 비즈니스 리더스 나이트'에 세계 14개국의 경제인 130여 명이 참석하여 활발한 네트워킹과 비즈니스 교류를 진행했습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">행사 개최 배경</h3>
      <p>이번 행사는 '스킨십'을 주제로 기업들과 경제인들의 활발한 교류를 장려하기 위해 마련되었으며, 호주상공회의소(AustCham Korea)를 비롯한 다양한 국제 기관과 기업들이 참여했습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">주요 참석 기관 및 인사</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>호주상공회의소(AustCham Korea) JACCO ZWETSOOT 상임 이사</li>
        <li>14개국 경제인 및 비즈니스 리더 130여 명</li>
        <li>온비즈 박희락 대표이사</li>
        <li>각국 상공회의소 및 경제 단체 관계자</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">주요 세션 내용</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>국내 정책지원 세션:</strong> 한국 정부의 중소기업 지원 정책 및 해외 진출 지원 방안</li>
        <li><strong>기업 ESG 방안 세션:</strong> ESG 경영의 중요성과 글로벌 기업의 ESG 실천 사례</li>
        <li><strong>투자사의 해외 진출 세션:</strong> 해외 투자 유치 전략 및 글로벌 시장 진출 방안</li>
        <li><strong>네트워킹 타임:</strong> 14개국 경제인 간 비즈니스 교류 및 협업 기회 모색</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">온비즈의 참여 및 성과</h3>
      <p>온비즈(대표 박희락)는 이번 행사에 참석하여 호주상공회의소와의 전략적 파트너십을 강화하고, 글로벌 비즈니스 네트워크를 확장했습니다. 특히 한-호 중소기업 간 비즈니스 매칭 및 해외 진출 지원 방안에 대해 심도 있는 논의를 진행했습니다.</p>
      
      <p class="p-4 bg-slate-50 border-l-4 border-amber-500 italic">
        "이번 행사를 통해 14개국 경제인들과의 소중한 네트워킹 기회를 얻었습니다. 특히 호주상공회의소와의 협력을 통해 온비즈 고객사들의 해외 시장 진출을 더욱 효과적으로 지원할 수 있을 것입니다. 앞으로도 이러한 글로벌 네트워크를 활용하여 고객사의 성공적인 해외 진출을 지원하겠습니다."
      </p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">향후 계획</h3>
      <p>온비즈는 이번 행사를 계기로 호주상공회의소와의 협력을 더욱 강화하고, 분기별로 양국 기업 간 네트워킹 행사와 비즈니스 매칭 행사를 개최할 예정입니다. 또한 14개국 경제인들과의 네트워크를 활용하여 고객사의 글로벌 시장 진출을 지원하겠습니다.</p>
      
      <p class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
        <strong>행사 정보:</strong> 2025 비즈니스 리더스 나이트는 매년 개최되는 글로벌 비즈니스 네트워킹 행사로, 각국 경제인들의 교류와 협업을 촉진하는 플랫폼 역할을 하고 있습니다.
      </p>
      
      <p class="mt-6 text-sm text-slate-600">
        <strong>관련 기사:</strong> 
        <a href="https://jungannews.com/news/article.html?no=634355" target="_blank" class="text-blue-600 hover:underline ml-2">
          중앙뉴스 보도자료
        </a>
      </p>
    </div>`
  }
];
