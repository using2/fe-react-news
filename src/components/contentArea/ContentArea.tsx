import { useState, useEffect } from 'react';
import ContentHeader from '@/components/contentArea/contentHeader/ContentHeader';
import GridView from '@/components/contentArea/grid/GridView';
import ListView from '@/components/contentArea//list/ListView';
import { fetchGridPress, fetchListPress } from '@/service/data';
import { shuffleArray, shuffleByCategory } from '@/lib/utils/suffleArray';
import type { viewType, filterType } from '@/types/contentHeaderTypes';
import { FetchError } from '@/types/apiTypes';
import type { press } from '@/types/pressTypes';

const ContentArea = () => {
  const [view, setView] = useState<viewType>('grid');
  const [filter, setFilter] = useState<filterType>('all');
  const [data, setData] = useState<press[]>([]);
  const [subscriptions, setSubscriptions] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('subscriptions') || '[]');
  });
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

        let result: press[];

        if (filter === 'subscribe') {
          const subscriptionSet = new Set(subscriptions);
          const filtered = rawData.filter((item) =>
            subscriptionSet.has(item.press),
          );

          result = filtered.sort((a, b) => {
            return (
              subscriptions.indexOf(a.press) - subscriptions.indexOf(b.press)
            );
          });
        } else {
          result =
            view === 'grid'
              ? shuffleArray(rawData)
              : shuffleByCategory(rawData, (item) => item.category || '미분류');
        }

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
  }, [view, filter, subscriptions]);

  const updateSubscriptions = (press: string, isSubscribe: boolean) => {
    const updated = isSubscribe
      ? [...subscriptions, press]
      : subscriptions.filter((p) => p !== press);

    setSubscriptions(updated);
    localStorage.setItem('subscriptions', JSON.stringify(updated));
  };

  if (loading) {
    return (
      <div className='flex flex-col flex-1'>
        <ContentHeader
          view={view}
          setView={setView}
          filter={filter}
          setFilter={setFilter}
          badge={0}
        />
        <div className='relative w-full flex-1 flex items-center justify-center'>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col flex-1'>
        <ContentHeader
          view={view}
          setView={setView}
          filter={filter}
          setFilter={setFilter}
          badge={0}
        />
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
      <ContentHeader
        view={view}
        setView={setView}
        filter={filter}
        setFilter={setFilter}
        badge={subscriptions.length}
      />
      <div className='relative w-full '>
        {view === 'grid' ? (
          <GridView
            data={data}
            setFilter={setFilter}
            setView={setView}
            subscriptions={subscriptions}
            updateSubscriptions={updateSubscriptions}
          />
        ) : (
          <ListView
            data={data}
            setFilter={setFilter}
            setView={setView}
            subscriptions={subscriptions}
            updateSubscriptions={updateSubscriptions}
          />
        )}
      </div>
    </div>
  );
};

export default ContentArea;
