
import { BoardPost, TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '박희락',
    position: '대표이사',
    role: 'CEO',
    image: '/images/team/박희락.jpg',
    expertise: ['기술신용평가', '경영전략', '자금조달'],
    description: '기술신용평가사\nISO 선임 심사원\n월드비지니스싱크탱크 초대회장\n한국식품산업클러스터진흥원 자문위원\n소비자진흥원 이사\n소상공인연구원 자문위원\n고양축구협회 부회장\n세계한인무역협회 회원\n하나은행 출신'
  },
  {
    id: 2,
    name: '김윤식',
    position: '이사',
    role: 'Director',
    image: '/images/team/김윤식.jpg',
    expertise: ['정부지원사업', '사업계획서', '법무서류'],
    description: '• 2012년 군무원 임관\n• 온비즈 창업멤버\n• 정부지원바우처'
  },
  {
    id: 3,
    name: '배준식',
    position: '이사',
    role: 'Director',
    image: '/images/team/배준식.png',
    expertise: ['영상촬영', '홍보영상', '비영리법인'],
    description: '• 촬영감독\n• 뉴웨이프로덕션 대표\n• 유튜브 다수'
  },
  {
    id: 4,
    name: '이준석',
    position: '변리사',
    role: 'Patent Attorney',
    image: '/images/team/이준석.jpg',
    expertise: ['특허출원', '지식재산권'],
    description: '• 경기과학고 졸업\n• 카이스트 졸업\n• 서울대법과대학원 졸업\n• 국가지식재산연수원(직무발명제도)겸임교수\n• 서울대학교 창업지원단 멘토'
  },
  {
    id: 5,
    name: '신동규',
    position: '행정사',
    role: 'Administrative Agent',
    image: '/images/team/신동규.png',
    expertise: ['인허가 대행', '정부 사업'],
    description: '• 정부지원사업\n• 인허가\n• 각종 행정'
  },
  {
    id: 6,
    name: '염정원',
    position: '대외전략팀장',
    role: 'External Strategy Leader',
    image: '/images/team/염정원.jpg',
    expertise: ['마케팅', 'IT개발', '정부사업'],
    description: '• 주식회사 98점7도 대표이사\n• 원케이션 대표\n• 오르비오 공동 대표\n• 테크사피엔스 총괄기술책임자\n• 국민체육진흥공단 전문 멘토\n• 고려대학교 창업지원단 전문 멘토'
  },
  {
    id: 7,
    name: '김혜겸',
    position: '변호사',
    role: 'Lawyer',
    image: '/images/team/김혜겸.png',
    expertise: ['기업 법무', '계약 검토', '분쟁 해결'],
    description: '• 사법연수원 42기\n• 건설법무학과 박사\n• 서울중앙지방법원 / 상근조정위원 / 경기도 공작활동자문단\n• 서울시 공익변호사'
  },
  {
    id: 8,
    name: '이윤석',
    position: '수출통관본부장',
    role: 'Head of Customs',
    image: '/images/team/이윤석.jpg',
    expertise: ['수출입 통관', '글로벌 물류'],
    description: '• 관세 통관 포딩\n• 해외진출사업 수출박람회'
  },
  {
    id: 10,
    name: '황윤상',
    position: '법무사',
    role: 'Judicial Scrivener',
    image: '/images/team/황윤상.png',
    expertise: ['부동산', '법인', '법무'],
    description: '• 디딤법무사합동사무소 대표\n• 잇츠디딤부동산중개법인 대표\n• 서울회생법원 뉴스타트 상담위원\n• 서울동부지방법무사회 창업경영지원단원\n• 서울시 마을법무사'
  },
  {
    id: 11,
    name: '박은선',
    position: 'VC선임심사역',
    role: 'Senior VC Analyst',
    image: '/images/team/박은선.png',
    expertise: ['스타트업', '투자', '해외진출'],
    description: '• 투자 해외투자 모태펀드 IR자료제작'
  },
  {
    id: 12,
    name: '조한준',
    position: '세무사',
    role: 'Tax Accountant',
    image: '/images/team/조한준.png',
    expertise: ['재무설계', '가업승계'],
    description: '• 택스 세무회계사무소 대표 세무사\n• 한국경제 The Pen 필진'
  },
  {
    id: 13,
    name: '최우인',
    position: '행정사',
    role: 'Administrative Agent',
    image: '/images/team/최우인.png',
    expertise: ['인허가', '행정심판'],
    description: '• 행정합동사무소서로 대표행정사'
  },
  {
    id: 14,
    name: '권민아',
    position: 'DIRECTOR',
    role: 'Director',
    image: '/images/team/권민아.png',
    expertise: ['프로젝트', '해외바이어매칭', '국내소싱'],
    description: '• 쇼호스트 수출상품선정위원'
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
