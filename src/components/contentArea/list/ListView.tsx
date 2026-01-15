import CategoryTab from '@/components/contentArea/list/CategoryTab';
import ListItem from '@/components/contentArea/list/ListItem';
import ArrowButton from '@/components/common/ArrowButton';
import type { category, listPress } from '@/types/pressTypes';

const listItem: listPress = {
  category: '종합/경제',
  totalPage: '83',
  logo: 'https://s.pstatic.net/static/newsstand/up/2025/0421/nsd111533869.png',
  press: '쿠키뉴스',
  time: '01월 07일 10:40 직접 편집',
  mainTitle: '장동혁, 12·3 비상계엄 사과…“국민께 혼란과 불편 드려”',
  mainLink: 'https://www.kukinews.com/article/view/kuk202601070075',
  mainImg:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2026%2F0107%2Farticle_img%2Fnew_main%2F9155%2F105049_001.jpg%22&type=nf312_208&service=navermain',
  relatedArticles: [
    {
      title: '코스피 사상 첫 장중 ‘4600선’ 돌파…삼전·SK하닉 ‘고공행진’',
      link: 'https://www.kukinews.com/article/view/kuk202601070035',
    },
    {
      title: '부모 상속권 박탈 ‘구하라법’…실제 법정에서 작동할까',
      link: 'https://www.kukinews.com/article/view/kuk202601060267',
    },
    {
      title: '尹 내란 재판 속도전…9일 구형·체포방해 16일 선고',
      link: 'https://www.kukinews.com/article/view/kuk202601070066',
    },
    {
      title: 'HBM4 시계 앞당겼다…삼성·SK ‘2월 승부수’, 200조 시대 열리나',
      link: 'https://www.kukinews.com/article/view/kuk202601060236',
    },
    {
      title: '지역사회 통합돌봄 전환…존립 기로에 놓인 요양병원',
      link: 'https://www.kukinews.com/article/view/kuk202601060238',
    },
    {
      title:
        '정의선 회장, 젠슨 황과 CES서 두 번째 ‘깐부 회동’…AI 협력 강화 논의해',
      link: 'https://www.kukinews.com/article/view/kuk202601070074',
    },
  ],
  darkLogo:
    'https://s.pstatic.net/static/newsstand/up/2025/0421/nsd111551222.png',
};

const ListView = () => {
  const categoryList: category[] = [
    '종합/경제',
    '방송/통신',
    'IT',
    '영자지',
    '스포츠/연예',
    '매거진/전문지',
    '지역',
  ];

  return (
    <div className='w-full flex flex-col justify-start items-start bg-white'>
      <CategoryTab
        categoryList={categoryList}
        curCategory={'종합/경제'}
        curPage={1}
        totalPage={81}
      />
      <ListItem listItem={listItem} />
      <div className='absolute top-2/5 -left-20 translate-y-1/2'>
        <ArrowButton direction='left' />
      </div>
      <div className='absolute top-2/5 -right-20 translate-y-1/2'>
        <ArrowButton direction='right' />
      </div>
    </div>
  );
};

export default ListView;
