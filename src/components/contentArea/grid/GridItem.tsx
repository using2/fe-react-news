import SubscribeButton from '@/components/common/SubscribeButton';
import type { press } from '@/types/pressTypes';

interface GridItemProps {
  data: press | null;
}

const GridItem = ({ data }: GridItemProps) => {
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
      <SubscribeButton className='absolute hidden group-hover:block px-3 rounded-full bg-[#f5f7f9] border border-[#d2dae0]' />
    </div>
  );
};

export default GridItem;
