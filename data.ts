
import { BoardPost, TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '박희락',
    position: '대표이사',
    role: 'CEO',
    image: '',
    expertise: ['기술신용평가', '경영전략', '자금조달'],
    description: '하나은행 출신. 기술신용평가사, ISO 선임 심사원, 월드비지니스싱크탱크 초대회장 등을 역임하며 기업 성장의 전략적 기틀을 마련합니다.'
  },
  {
    id: 2,
    name: '김윤식',
    position: '이사',
    role: 'Director',
    image: '',
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
    image: '',
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
    image: '',
    expertise: ['M&A', '투자 유치', '대외 협력'],
    description: '전략적 파트너십 구축과 투자 유치를 통해 기업의 외연 확장과 도약을 이끕니다.'
  },
  {
    id: 7,
    name: '김혜겸',
    position: '변호사',
    role: 'Lawyer',
    image: '',
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
    image: '',
    expertise: ['세무 기장', '세무 조정'],
    description: '복잡한 세무 이슈를 명쾌하게 해결하고 기업 맞춤형 절세 전략을 수립합니다.'
  },
  {
    id: 10,
    name: '황윤상',
    position: '법무사',
    role: 'Judicial Scrivener',
    image: '',
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
    image: '',
    expertise: ['재무 설계', '가업 승계'],
    description: '기업의 재무 건전성을 높이고 안정적인 가업 승계를 위한 플랜을 설계합니다.'
  },
  {
    id: 13,
    name: '최우인',
    position: '행정사',
    role: 'Administrative Agent',
    image: '',
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
    category: '정책자금',
    date: '2024-03-15',
    author: '온비즈 전략팀',
    views: 1240,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    content: `<p>2024년도 중소기업 정책자금 지원 계획이 공고되었습니다...</p>`
  },
  {
    id: 2,
    title: '[성공사례] 제조업 B사의 벤처인증 및 5억 자금 조달 사례',
    category: '성공사례',
    date: '2024-03-10',
    author: '김윤식 이사',
    views: 856,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    content: `<p>경기도 화성에 위치한 자동차 부품 제조업체 B사 사례입니다...</p>`
  }
];
