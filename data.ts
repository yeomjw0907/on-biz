
import { BoardPost, TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '박희락',
    position: '대표이사',
    role: 'CEO',
    image: '/images/team/박희락.jpg',
    expertise: ['기술신용평가', '경영전략', '자금조달'],
    description: '하나은행 출신. 기술신용평가사, ISO 선임 심사원, 월드비지니스싱크탱크 초대회장 등을 역임하며 기업 성장의 전략적 기틀을 마련합니다.'
  },
  {
    id: 2,
    name: '김윤식',
    position: '이사',
    role: 'Director',
    image: '/images/team/김윤식.jpg',
    expertise: ['경영 진단', '성장 로드맵'],
    description: '기업의 내외부 환경을 정밀 분석하여 지속 가능한 성장을 위한 맞춤형 전략을 제시합니다.'
  },
  {
    id: 3,
    name: '배준식',
    position: '이사',
    role: 'Director',
    image: '',
    expertise: ['재무 전략', '기업 투자'],
    description: '안정적인 재무 구조 구축과 효율적인 자산 운용을 자문합니다.'
  },
  {
    id: 4,
    name: '이준석',
    position: '변리사',
    role: 'Patent Attorney',
    image: '/images/team/이준석.jpg',
    expertise: ['특허 출원', 'IP 포트폴리오'],
    description: '기업의 핵심 기술과 브랜드를 보호하고, 지식재산권을 통한 가치 창출을 자문합니다.'
  },
  {
    id: 5,
    name: '신동규',
    position: '행정사',
    role: 'Administrative Agent',
    image: '',
    expertise: ['인허가 대행', '정부 사업'],
    description: '각종 복잡한 인허가 절차 및 행정 법률 대응을 전문적으로 지원합니다.'
  },
  {
    id: 6,
    name: '염정원',
    position: '대외전략팀장',
    role: 'External Strategy Leader',
    image: '/images/team/염정원.jpg',
    expertise: ['M&A', '투자 유치', '대외 협력'],
    description: '전략적 파트너십 구축과 투자 유치를 통해 기업의 외연 확장과 도약을 이끕니다.'
  },
  {
    id: 7,
    name: '김혜겸',
    position: '변호사',
    role: 'Lawyer',
    image: '/images/team/김혜겸.png',
    expertise: ['기업 법무', '계약 검토', '분쟁 해결'],
    description: '기업 운영 과정에서 발생할 수 있는 법적 리스크를 사전에 진단하고 예방합니다.'
  },
  {
    id: 8,
    name: '이윤석',
    position: '수출통관본부장',
    role: 'Head of Customs',
    image: '',
    expertise: ['수출입 통관', '글로벌 물류'],
    description: '해외 시장 진출을 위한 통관 절차 및 글로벌 공급망 최적화를 지원합니다.'
  },
  {
    id: 9,
    name: '전보윤',
    position: '세무사',
    role: 'Tax Accountant',
    image: '/images/team/전보윤.jpg',
    expertise: ['세무 기장', '세무 조정'],
    description: '복잡한 세무 이슈를 명쾌하게 해결하고 기업 맞춤형 절세 전략을 수립합니다.'
  },
  {
    id: 10,
    name: '황윤상',
    position: '법무사',
    role: 'Judicial Scrivener',
    image: '/images/team/황윤상.png',
    expertise: ['법인 등기', '부동산 등기'],
    description: '신속하고 정확한 등기 업무 처리를 통해 기업의 원활한 비즈니스 활동을 지원합니다.'
  },
  {
    id: 11,
    name: '박은선',
    position: 'VC선임심사역',
    role: 'Senior VC Analyst',
    image: '',
    expertise: ['스타트업 투자', '기업 가치 평가'],
    description: '벤처 캐피털 투자 심사 경험을 바탕으로 투자 유치를 위한 실무 자문을 제공합니다.'
  },
  {
    id: 12,
    name: '조한준',
    position: '세무사',
    role: 'Tax Accountant',
    image: '/images/team/조한준.png',
    expertise: ['재무 설계', '가업 승계'],
    description: '기업의 재무 건전성을 높이고 안정적인 가업 승계를 위한 플랜을 설계합니다.'
  },
  {
    id: 13,
    name: '최우인',
    position: '행정사',
    role: 'Administrative Agent',
    image: '/images/team/최우인.png',
    expertise: ['행정 심판', '토지 보상'],
    description: '정부 지원 사업 선정 및 기업 운영 행정 절차를 체계적으로 대행합니다.'
  },
  {
    id: 14,
    name: '권민아',
    position: 'DIRECTOR',
    role: 'Director',
    image: '',
    expertise: ['프로젝트 관리', '조직 고도화'],
    description: '핵심 경영 프로젝트의 실행력 강화와 조직의 혁신적 성장을 리딩합니다.'
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
    title: '[현장 리포트] 온비즈, 2024 중소기업 혁신포럼 참석',
    category: '온비즈 소식',
    date: '2024-02-20',
    author: '김윤식 이사',
    views: 734,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
    content: `<div class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">2024 중소기업 혁신포럼 참석 보고</h2>
      <p>온비즈는 지난 2월 18일 코엑스에서 개최된 '2024 중소기업 혁신포럼'에 참석하여 최신 경영 트렌드와 정부 정책을 공유받았습니다.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">포럼 주요 주제</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>2024년 중소기업 지원정책 방향</li>
        <li>ESG 경영과 중소기업의 대응 전략</li>
        <li>디지털 전환 성공 사례 공유</li>
        <li>글로벌 공급망 재편과 수출 기회</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">네트워킹 성과</h3>
      <p>포럼 중 다양한 업종의 중소기업 CEO 및 정부기관 관계자들과 네트워킹을 진행했으며, 향후 협업 가능성을 모색했습니다.</p>
      
      <p class="mt-6 p-4 bg-slate-50 border-l-4 border-slate-500">
        온비즈는 이러한 행사 참여를 통해 얻은 최신 정보와 인사이트를 고객사에 신속하게 전달하고 있습니다.
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
