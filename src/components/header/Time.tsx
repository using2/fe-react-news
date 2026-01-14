import { formatted } from '@/lib/utils/date';

const Time = () => {
  return (
    <p className='text-base font-medium text-right text-[#5f6e76]'>
      {formatted}
    </p>
  );
};

export default Time;
