import { useState } from 'react';
import ContentHeader from '@/components/contentArea/contentHeader/ContentHeader';
import GridView from '@/components/contentArea/grid/GridView';
import ListView from '@/components/contentArea//list/ListView';
import type { viewType } from '@/types/contentHeaderTypes';

const ContentArea = () => {
  const [view, setView] = useState<viewType>('grid');

  return (
    <>
      <ContentHeader view={view} setView={setView} />
      <div className='relative w-full h-full'>
        {view === 'grid' ? <GridView /> : <ListView />}
      </div>
    </>
  );
};

export default ContentArea;
