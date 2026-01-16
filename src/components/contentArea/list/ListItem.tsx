import SubscribeButton from '@/components/common/SubscribeButton';
import UnsubscribeButton from '@/components/common/UnsubscribeButton';
import type { press } from '@/types/pressTypes';
import type { viewType, filterType } from '@/types/contentHeaderTypes';

interface ListItemProps {
  listItem: press;
  setFilter: (filter: filterType) => void;
  setView: (view: viewType) => void;
  isSubscribed: boolean;
  updateSubscriptions: (press: string, isSubscribe: boolean) => void;
}

const ListItem = ({
  listItem,
  setView,
  setFilter,
  isSubscribed,
  updateSubscriptions,
}: ListItemProps) => {
  return (
    <div className='w-full flex flex-col gap-4 border border-[#d2dae0] p-6'>
      <div className='flex flex-wrap items-center gap-4'>
        <img
          src={listItem.logo}
          alt={listItem.press}
          className='w-[52.5px] h-5 object-cover shrink-0'
        />
        <p className='text-xs font-medium text-[#5f6e76] shrink-0'>
          {listItem.time}
        </p>
        {!isSubscribed ? (
          <SubscribeButton
            className='absolute group-hover:block px-3 rounded-full bg-[#f5f7f9] border border-[#d2dae0]'
            handleSubscribe={() => {
              updateSubscriptions(listItem.press, true);
              setView('list');
              setFilter('subscribe');
            }}
          />
        ) : (
          <UnsubscribeButton
            additialnalText=' 해지하기'
            className='absolute group-hover:block px-3 rounded-full bg-[#f5f7f9] border border-[#d2dae0]'
            handleUnsubscribe={() => {
              updateSubscriptions(listItem.press, false);
            }}
          />
        )}
      </div>

      <div className='flex gap-8 min-w-0'>
        <div
          className='flex flex-col gap-4 shrink-0'
          style={{ width: 'min(320px, 40%)' }}
        >
          <img
            src={listItem.mainImg}
            alt={listItem.mainTitle}
            className='w-full h-[200px] object-cover border border-[#d2dae0]'
          />
          <h3 className='text-base font-bold text-[#4b5966] truncate w-full'>
            {listItem.mainTitle}
          </h3>
        </div>

        <div className='flex flex-col flex-grow gap-4 min-w-0'>
          {listItem.relatedArticles?.map((relatedArticle) => (
            <a
              key={relatedArticle.link}
              href={relatedArticle.link}
              className='w-full text-sm font-medium text-[#4b5966] truncate hover:text-[#4362d0] transition-colors'
            >
              {relatedArticle.title}
            </a>
          ))}
          <p className='w-full text-sm font-medium text-[#879298]'>
            {listItem.press} 언론사에서 직접 편집한 뉴스입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
