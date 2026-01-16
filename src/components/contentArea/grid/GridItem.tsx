import SubscribeButton from '@/components/common/SubscribeButton';
import UnsubscribeButton from '@/components/common/UnsubscribeButton';
import type { press } from '@/types/pressTypes';
import type { viewType, filterType } from '@/types/contentHeaderTypes';

interface GridItemProps {
  data: press | null;
  setFilter: (filter: filterType) => void;
  setView: (view: viewType) => void;
  isSubscribed: boolean;
  updateSubscriptions: (press: string, isSubscribe: boolean) => void;
}

const GridItem = ({
  data,
  setView,
  setFilter,
  isSubscribed,
  updateSubscriptions,
}: GridItemProps) => {
  if (!data) {
    return <div className='bg-white h-full' />;
  }

  return (
    <div className='bg-white h-full flex justify-center items-center hover:bg-gray-50 group relative'>
      <img
        src={data.logo || 'default_logo.png'}
        alt={data.press || 'publisher'}
        className='w-[4.5rem] h-5 object-contain group-hover:hidden m-10'
      />
      {!isSubscribed ? (
        <SubscribeButton
          className='absolute hidden group-hover:block px-3 rounded-full bg-[#f5f7f9] border border-[#d2dae0]'
          handleSubscribe={() => {
            updateSubscriptions(data.press, true);
            setView('list');
            setFilter('subscribe');
          }}
        />
      ) : (
        <UnsubscribeButton
          additialnalText=' 해지하기'
          className='absolute hidden group-hover:block px-3 rounded-full bg-[#f5f7f9] border border-[#d2dae0]'
          handleUnsubscribe={() => {
            updateSubscriptions(data.press, false);
          }}
        />
      )}
    </div>
  );
};

export default GridItem;
