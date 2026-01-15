import type { category } from '@/types/pressTypes';

interface CategoryTabProps {
  categoryList: category[];
  curCategory: category;
  curPage: number;
  totalPage: number;
}

const CategoryTab = ({
  categoryList,
  curCategory,
  curPage,
  totalPage,
}: CategoryTabProps) => {
  return (
    <div className='w-full flex items-center overflow-x-auto bg-[#f5f7f9] border border-[#d2dae0] scrollbar-hide'>
      {categoryList.map((category) => {
        const isActive = category === curCategory;

        return (
          <div
            key={category}
            className={`flex-shrink-0 py-2 ${isActive ? 'bg-[#7890e7]' : ''}`}
          >
            <div className='flex items-center gap-14 px-4 whitespace-nowrap'>
              <p
                className={`text-sm ${
                  isActive
                    ? 'font-bold text-white'
                    : 'font-medium text-[#879298]'
                }`}
              >
                {category}
              </p>
              {isActive && (
                <div className='flex items-center gap-0.5'>
                  <p className='text-xs font-bold text-white'>{curPage}</p>
                  <svg
                    width={5}
                    height={11}
                    viewBox='0 0 5 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='none'
                  >
                    <path
                      d='M4.23047 0H2.73047L0 10.1602H1.48828L4.23047 0Z'
                      fill='white'
                      fillOpacity='0.7'
                    />
                  </svg>
                  <p className='text-xs font-bold text-white/70'>{totalPage}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryTab;
