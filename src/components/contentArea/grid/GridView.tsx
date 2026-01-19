import { useState } from 'react';
import ArrowButton from '@/components/common/ArrowButton';
import { GRID_VIEW_ITEM_COUNT } from '@/lib/constants/constants';
import GridItem from '@/components/contentArea/grid/GridItem';
import type { press } from '@/types/pressTypes';
import type { viewType, filterType } from '@/types/contentHeaderTypes';

interface GridViewProps {
  data: press[];
  setFilter: (filter: filterType) => void;
  setView: (view: viewType) => void;
  subscriptions: string[];
  updateSubscriptions: (press: string, isSubscribe: boolean) => void;
}

const GridView = ({
  data,
  setFilter,
  setView,
  subscriptions,
  updateSubscriptions,
}: GridViewProps) => {
  const [curPage, setCurPage] = useState(0);
  const pageLength = Math.ceil(data.length / GRID_VIEW_ITEM_COUNT);

  const startIndex = curPage * GRID_VIEW_ITEM_COUNT;
  const endIndex = startIndex + GRID_VIEW_ITEM_COUNT;
  const currentPageData = data.slice(startIndex, endIndex);

  const displayItems = [
    ...currentPageData,
    ...Array(GRID_VIEW_ITEM_COUNT - currentPageData.length).fill(null),
  ];

  function handlePrevPage() {
    setCurPage((prev) => Math.max(0, prev - 1));
  }

  function handleNextPage() {
    setCurPage((prev) => Math.min(pageLength - 1, prev + 1));
  }

  return (
    <div className='h-full flex-1'>
      <div className='w-full h-full grid grid-cols-6 grid-rows-4 bg-[#d2dae0] gap-px border border-[#d2dae0]'>
        {displayItems.map((item, index) => (
          <GridItem
            key={index}
            data={item}
            setFilter={setFilter}
            setView={setView}
            isSubscribed={item ? subscriptions.includes(item.press) : false}
            updateSubscriptions={updateSubscriptions}
          />
        ))}
      </div>

      {curPage > 0 && (
        <div className='absolute top-1/2 -left-20 -translate-y-1/2'>
          <ArrowButton direction='left' handlePage={handlePrevPage} />
        </div>
      )}

      {curPage < pageLength - 1 && (
        <div className='absolute top-1/2 -right-20 -translate-y-1/2'>
          <ArrowButton direction='right' handlePage={handleNextPage} />
        </div>
      )}
    </div>
  );
};

export default GridView;
