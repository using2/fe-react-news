import type { listPress } from '@/types/pressTypes';

interface ListItemProps {
  listItem: listPress;
}

const ListItem = ({ listItem }: ListItemProps) => {
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
        <button className='flex items-center h-6 gap-0.5 px-1.5 rounded-full bg-[#f5f7f9] border border-[#d2dae0] shrink-0'>
          <svg
            width={12}
            height={12}
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-3 h-3'
          >
            <path
              d='M9.5 6.49902H6.5V9.49902H5.5V6.49902H2.5V5.49902H5.5V2.49902H6.5V5.49902H9.5V6.49902Z'
              fill='#879298'
            />
          </svg>
          <p className='text-xs font-medium text-[#879298] pr-1'>구독하기</p>
        </button>
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
          {listItem.relatedArticles.map((relatedArticle) => (
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
