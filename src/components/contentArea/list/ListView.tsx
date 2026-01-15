import CategoryTab from '@/components/contentArea/list/CategoryTab';
import ListItem from '@/components/contentArea/list/ListItem';
import ArrowButton from '@/components/common/ArrowButton';
import type { category, press } from '@/types/pressTypes';
import { useState } from 'react';

// 데이터를 이미 받은 상태
interface ListViewProps {
  data: press[];
}

const ListView = ({ data }: ListViewProps) => {
  const categoryList: category[] = [
    '종합/경제',
    '방송/통신',
    'IT',
    '영자지',
    '스포츠/연예',
    '매거진/전문지',
    '지역',
  ];
  const [curIdx, setCurIdx] = useState<number>(0); // 객체 리스트를 인덱스로 받아옵니다.
  const listItem = data[curIdx];

  const totalListLength = data.length;

  // 서버
  const numTotalPage = Number(listItem?.totalPage);
  // 서버
  const curCategory = categoryList.filter((v) => v === listItem?.category);

  const [curPage, setCurPage] = useState<number>(1);

  // 받아온 리스트를 카테고리별로 맞는지 분류
  // 일단은 분류되어 있다고 가정
  // 시간 복잡도 계산은 나중에

  function handlePrevPage() {
    setCurIdx((idx) => (idx === 0 ? totalListLength - 1 : idx - 1));
    setCurPage((idx) => (idx === 1 ? numTotalPage : idx - 1));
  }

  function handleNextPage() {
    setCurIdx((idx) => (idx === totalListLength - 1 ? 0 : idx + 1));
    setCurPage((idx) => (idx === numTotalPage ? 1 : idx + 1));
  }

  return (
    <div className='w-full flex flex-col justify-start items-start bg-white'>
      <CategoryTab
        categoryList={categoryList}
        curCategory={curCategory[0]} // 수정
        curPage={curPage}
        totalPage={numTotalPage}
      />
      <ListItem listItem={listItem} />
      <div className='absolute top-1/2 -left-20 translate-y-1/2'>
        <ArrowButton direction='left' handlePage={handlePrevPage} />
      </div>
      <div className='absolute top-1/2 -right-20 translate-y-1/2'>
        <ArrowButton direction='right' handlePage={handleNextPage} />
      </div>
    </div>
  );
};

export default ListView;
