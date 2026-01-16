import { useState, useEffect, useMemo } from 'react';
import CategoryTab from '@/components/contentArea/list/CategoryTab';
import ListItem from '@/components/contentArea/list/ListItem';
import ArrowButton from '@/components/common/ArrowButton';
import type { category, press } from '@/types/pressTypes';
import type { viewType, filterType } from '@/types/contentHeaderTypes';

const categoryList: category[] = [
  '종합/경제',
  '방송/통신',
  'IT',
  '영자지',
  '스포츠/연예',
  '매거진/전문지',
  '지역',
];

const categoryListLength = categoryList.length;

// 데이터를 이미 받은 상태
interface ListViewProps {
  data: press[];
  setFilter: (filter: filterType) => void;
  setView: (view: viewType) => void;
  subscriptions: string[];
  updateSubscriptions: (press: string, isSubscribe: boolean) => void;
}

const ListView = ({
  data,
  setFilter,
  setView,
  subscriptions,
  updateSubscriptions,
}: ListViewProps) => {
  const [curPage, setCurPage] = useState<number>(0);
  const [categoryState, setCategoryState] = useState<number>(0);

  const sortedData: press[][] = useMemo(() => {
    const grouped = data.reduce<Record<string, press[]>>((acc, item) => {
      const category = item.category;

      if (!category) {
        return acc;
      }

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(item);
      return acc;
    }, {});

    return categoryList
      .map((category) => grouped[category] || [])
      .filter((arr) => arr.length > 0);
  }, [data]);

  function handlePrevPage() {
    if (curPage === 0) {
      const nowCategoryStatus = (categoryState + 6) % categoryListLength;
      setCategoryState(nowCategoryStatus);
      setCurPage(sortedData[nowCategoryStatus].length - 1);
    } else {
      setCurPage((idx) => idx - 1);
    }
  }

  function handleNextPage() {
    if (curPage === sortedData[categoryState].length - 1) {
      setCategoryState((idx) => (idx + 1) % categoryListLength);
      setCurPage(0);
    } else {
      setCurPage((idx) => idx + 1);
    }
  }

  // function handleAutoNextPage() {

  // }

  useEffect(() => {
    if (!sortedData) return;

    const intervalId = setInterval(() => {
      handleNextPage();
    }, 20000);

    return () => clearInterval(intervalId);
  }, [curPage, categoryState, sortedData]);

  function handleCategory(idx: number) {
    setCategoryState(idx);
    setCurPage(0);
  }

  if (sortedData.length === 0) {
    return <></>;
  }

  return (
    <div className='w-full flex flex-col justify-start items-start bg-white'>
      <CategoryTab
        categoryList={categoryList}
        categoryState={categoryList[categoryState]}
        handleCategory={handleCategory}
        curPage={curPage + 1}
        totalPage={Number(sortedData[categoryState][curPage]?.totalPage)}
      />
      <ListItem
        listItem={sortedData[categoryState][curPage]}
        setFilter={setFilter}
        setView={setView}
        isSubscribed={subscriptions.includes(
          sortedData[categoryState][curPage]?.press,
        )}
        updateSubscriptions={updateSubscriptions}
      />
      {!(curPage === 0 && categoryState === 0) && (
        <div className='absolute top-1/2 -left-20 -translate-y-1/2'>
          <ArrowButton direction='left' handlePage={handlePrevPage} />
        </div>
      )}
      <div className='absolute top-1/2 -right-20 translate-y-1/2'>
        <ArrowButton direction='right' handlePage={handleNextPage} />
      </div>
    </div>
  );
};

export default ListView;
