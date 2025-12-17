import { BoardPost, TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '박희락',
    position: '최고전략책임자 / 기술신용평가사',
    role: 'Chief Strategy Officer',
    image: '',
    expertise: ['기술신용평가', '경영전략', '자금조달'],
    description: '하나은행 출신. 사)소비자진흥원 이사, 사)소상공인연구원 자문위원, 세계한인무역협회 정회원, 마포구 청년위원장을 역임하며 금융과 실물 경제에 대한 폭넓은 네트워크를 보유하고 있습니다.'
  },
  {
    id: 2,
    name: '김윤식',
    position: '전략책임자',
    role: 'Strategy Director',
    image: '',
    expertise: ['경영 진단', '성장 로드맵'],
    description: '기업의 내외부 환경을 정밀 분석하여 지속 가능한 성장을 위한 맞춤형 전략을 제시합니다.'
  },
  {
    id: 3,
    name: '김수현',
    position: '전략책임자',
    role: 'Strategy Director',
    image: '',
    expertise: ['시장 분석', '사업 기획'],
    description: '트렌드 분석과 시장 조사를 기반으로 차별화된 비즈니스 모델 구축을 지원합니다.'
  },
  {
    id: 4,
    name: '안상용',
    position: '수석컨설턴트',
    role: 'Senior Consultant',
    image: '',
    expertise: ['기업 인증', '정책 자금'],
    description: '다양한 산업군에서의 컨설팅 경험을 바탕으로 기업 현장에 최적화된 솔루션을 제공합니다.'
  },
  {
    id: 5,
    name: '김혜경',
    position: '자문변호사',
    role: 'Advisory Lawyer',
    image: '',
    expertise: ['기업 법무', '계약 검토', '분쟁 해결'],
    description: '기업 운영 과정에서 발생할 수 있는 법적 리스크를 사전에 진단하고 예방합니다.'
  },
  {
    id: 6,
    name: '이준석',
    position: '자문변리사',
    role: 'Patent Attorney',
    image: '',
    expertise: ['특허 출원', 'IP 포트폴리오'],
    description: '기업의 핵심 기술과 브랜드를 보호하고, 지식재산권을 통한 가치 창출을 자문합니다.'
  },
  {
    id: 7,
    name: '염정원',
    position: '대외전략이사',
    role: 'External Strategy Director',
    image: '',
    expertise: ['M&A', '투자 유치', '대외 협력'],
    description: '전략적 파트너십 구축과 투자 유치를 통해 기업의 외연 확장과 도약을 이끕니다.'
  },
  {
    id: 8,
    name: '박남진',
    position: '법무팀장',
    role: 'Legal Team Leader',
    image: '',
    expertise: ['법무 행정', '채권 관리'],
    description: '체계적인 법무 시스템 구축을 지원하여 기업 경영의 안정성을 확보합니다.'
  },
  {
    id: 9,
    name: '전보송',
    position: '자문세무사',
    role: 'Advisory Tax Accountant',
    image: '',
    expertise: ['세무 기장', '세무 조정'],
    description: '복잡한 세무 이슈를 명쾌하게 해결하고 기업 맞춤형 절세 전략을 수립합니다.'
  },
  {
    id: 10,
    name: '이지원',
    position: '이사',
    role: 'Director',
    image: '',
    expertise: ['인사 노무', '조직 문화'],
    description: '효율적인 인적 자원 관리와 조직 문화 개선을 위한 실질적인 솔루션을 제공합니다.'
  },
  {
    id: 11,
    name: '조한준',
    position: '세무사',
    role: 'Tax Accountant',
    image: '',
    expertise: ['재무 설계', '가업 승계'],
    description: '기업의 재무 건전성을 높이고 안정적인 가업 승계를 위한 플랜을 설계합니다.'
  },
  {
    id: 12,
    name: '황윤상',
    position: '법무사',
    role: 'Judicial Scrivener',
    image: '',
    expertise: ['법인 등기', '부동산 등기'],
    description: '신속하고 정확한 등기 업무 처리를 통해 기업의 원활한 비즈니스 활동을 지원합니다.'
  },
  {
    id: 13,
    name: '최유민',
    position: '행정사',
    role: 'Administrative Agent',
    image: '',
    expertise: ['인허가 대행', '행정 심판'],
    description: '각종 인허가 및 행정 절차를 전문적으로 대행하여 기업의 행정 부담을 덜어드립니다.'
  }
];

export const boardPosts: BoardPost[] = [
  {
    id: 1,
    title: '2024년 중소기업 정책자금 지원 공고 핵심 정리',
    category: '정책자금',
    date: '2024-03-15',
    author: '김태훈 대표',
    views: 1240,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    content: `
      <p>2024년도 중소기업 정책자금 지원 계획이 공고되었습니다. 올해는 특히 혁신 성장 분야와 수출 기업에 대한 지원이 대폭 확대되었습니다.</p>
      <br/>
      <h3>1. 중진공 정책자금 주요 변경 사항</h3>
      <p>올해 정책자금은 금리 인하보다는 한도 확대와 상환 기간 연장에 초점이 맞춰져 있습니다. 특히 시설 자금의 경우 최대 10년까지 상환 기간이 연장되어 기업의 부담을 줄였습니다.</p>
      <br/>
      <h3>2. 혁신 성장 지원 확대</h3>
      <p>미래차, 반도체, 바이오 등 3대 신산업 분야 영위 기업에 대해서는 운전 자금 한도가 기존 5억원에서 10억원으로 상향 조정되었습니다.</p>
      <br/>
      <p>자세한 사항은 온경영자문으로 문의 주시면 기업 상황에 맞는 맞춤형 상담을 도와드리겠습니다.</p>
    `
  },
  {
    id: 2,
    title: '[성공사례] 제조업 B사의 벤처인증 및 5억 자금 조달 사례',
    category: '성공사례',
    date: '2024-03-10',
    author: '박준영 수석',
    views: 856,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    content: `
      <p>경기도 화성에 위치한 자동차 부품 제조업체 B사는 기술력은 있었으나 자금 부족으로 설비 투자에 어려움을 겪고 있었습니다.</p>
      <br/>
      <h3>솔루션</h3>
      <p>온경영자문은 먼저 B사의 특허 기술을 분석하여 기술보증기금의 벤처나라 등록을 추진하였고, 동시에 기업부설연구소를 설립하여 R&D 역량을 입증했습니다.</p>
      <br/>
      <h3>결과</h3>
      <p>벤처기업 인증 획득에 성공하였으며, 이를 바탕으로 운전 자금 2억원과 시설 자금 3억원, 총 5억원의 정책 자금을 2%대 저금리로 조달하는 데 성공하였습니다.</p>
    `
  },
  {
    id: 3,
    title: '가업 승계 시 증여세 과세 특례 제도의 활용',
    category: '세무/회계',
    date: '2024-02-28',
    author: '이수진 이사',
    views: 630,
    content: `
      <p>가업 승계는 단순히 경영권을 넘기는 것이 아니라 기업의 영속성을 유지하는 중요한 과정입니다. 하지만 막대한 상속세와 증여세 부담으로 인해 고민하는 대표님들이 많습니다.</p>
      <br/>
      <p>증여세 과세 특례 제도를 활용하면 최대 600억원 한도 내에서 10%(과표 60억 초과분 20%)의 낮은 세율로 가업을 승계할 수 있습니다. 단, 사후 관리 요건이 까다로우므로 전문가의 도움을 받아 철저하게 준비해야 합니다.</p>
    `
  },
  {
    id: 4,
    title: '해외 진출을 위한 수출 바우처 사업 신청 가이드',
    category: '해외진출',
    date: '2024-02-15',
    author: '최유리 선임',
    views: 542,
    image: 'https://images.unsplash.com/photo-1526304640152-92e9e62f53ce?auto=format&fit=crop&q=80&w=1000',
    content: `
      <p>수출 바우처 사업은 기업이 자사의 수출 역량에 맞는 서비스를 메뉴판에서 자유롭게 선택하여 이용할 수 있는 사업입니다.</p>
      <br/>
      <p>디자인 개발, 홍보 동영상 제작, 해외 규격 인증, 통번역 등 다양한 분야에서 활용 가능하며, 선정 시 최대 1억원까지 바우처를 지원받을 수 있습니다.</p>
    `
  },
  {
    id: 5,
    title: '기업 신용등급 관리의 중요성과 개선 방안',
    category: '경영일반',
    date: '2024-02-01',
    author: '김태훈 대표',
    views: 920,
    content: `
      <p>기업 신용등급은 공공 입찰 참여, 협력업체 등록, 자금 조달 등 기업 경영의 모든 활동에 영향을 미칩니다.</p>
      <br/>
      <p>재무제표가 확정되기 전인 결산 시즌에 미리 가결산을 통해 재무 비율을 점검하고, 비재무적 요소를 보완하여 신용등급을 관리하는 것이 중요합니다.</p>
    `
  }
];