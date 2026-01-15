import { useState, useEffect } from 'react';
import ContentHeader from '@/components/contentArea/contentHeader/ContentHeader';
import GridView from '@/components/contentArea/grid/GridView';
import ListView from '@/components/contentArea//list/ListView';
import { fetchGridPress, fetchListPress } from '@/service/data';
import { shuffleArray, shuffleByCategory } from '@/lib/utils/suffleArray';
import type { viewType } from '@/types/contentHeaderTypes';
import { FetchError } from '@/types/apiTypes';
import type { press } from '@/types/pressTypes';

const ContentArea = () => {
  const [view, setView] = useState<viewType>('grid');
  const [data, setData] = useState<press[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const rawData =
          view === 'grid'
            ? ((await fetchGridPress()) as press[])
            : ((await fetchListPress()) as press[]);

        const result =
          view === 'grid'
            ? shuffleArray(rawData)
            : shuffleByCategory(rawData, (item) => item.category || '미분류');

        setData(result);
      } catch (error) {
        console.error('[loadData] Failed to load press data:', error);
        setError(
          error instanceof FetchError
            ? error.message
            : '데이터를 불러오는데 실패했습니다',
        );
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [view]);

  if (loading) {
    return (
      <div className='flex flex-col flex-1'>
        <ContentHeader view={view} setView={setView} />
        <div className='relative w-full flex-1 flex items-center justify-center'>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col flex-1'>
        <ContentHeader view={view} setView={setView} />
        <div className='relative w-full flex-1 flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-red-500 mb-4'>{error}</p>
            <button
              onClick={() => setView(view)}
              className='px-4 py-2 bg-blue-500 text-white rounded'
            >
              다시 시도
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <ContentHeader view={view} setView={setView} />
      <div className='relative w-full '>
        {view === 'grid' ? <GridView data={data} /> : <ListView data={data} />}
      </div>
    </div>
  );
};

export default ContentArea;
