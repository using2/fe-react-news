import { formatted } from '@/utils/date';

const Time = () => {
  return (
    <p className='absolute left-[968px] top-[65px] text-base font-medium text-right text-[#5f6e76]'>
      {formatted}
    </p>
  );
};

export default Time;
