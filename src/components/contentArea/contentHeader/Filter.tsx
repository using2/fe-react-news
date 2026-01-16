import type { FilterOptionProps } from '@/components/contentArea/contentHeader/ContentHeader';
import type { filterType } from '@/types/contentHeaderTypes';

interface FilterProps {
  badge: number;
}

const Filter = ({
  filter,
  setFilter,
  badge,
}: FilterOptionProps & FilterProps) => {
  function handleFilterChange(curFilter: filterType) {
    setFilter(curFilter);
  }

  function getColor(curFilter: filterType) {
    return curFilter === filter ? '#14212b' : '#879298';
  }

  return (
    <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6'>
      <p
        onClick={() => handleFilterChange('all')}
        className={`flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[${getColor('all')}]`}
      >
        전체 언론사
      </p>
      <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1'>
        <p
          onClick={() => handleFilterChange('subscribe')}
          className={`flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[${getColor('subscribe')}]`}
        >
          내가 구독한 언론사
        </p>
        <div className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-5 h-5 relative rounded-lg bg-[#7890e7]'>
          <p className='flex-grow-0 flex-shrink-0 w-3.5 h-3.5 text-xs font-medium text-center text-white/70'>
            {badge}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
