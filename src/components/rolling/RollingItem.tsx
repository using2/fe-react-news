import { NEWS_HEADLINE_DATAS } from '@/lib/constants/constants';
import { useEffect, useState, useEffectEvent } from 'react';

interface RollingItemProps {
  itemNumber: number;
  currentTarget: number | null;
}
const headlineLength = NEWS_HEADLINE_DATAS.length;

const RollingItem = ({ itemNumber, currentTarget }: RollingItemProps) => {
  const [currentPressIndex, setCurrentPressIndex] = useState(itemNumber);

  const rolling = () => {
    setCurrentPressIndex((idx) => (idx + 2) % headlineLength);
  };
  const onRolling = useEffectEvent(rolling);

  useEffect(() => {
    if (itemNumber !== currentTarget) return;
    onRolling();
  }, [currentTarget, itemNumber]);

  return (
    <div className='flex justify-start items-start gap-2 flex-1'>
      <div className='flex justify-start items-start flex-grow relative gap-4 p-4 bg-[#f5f7f9] border border-[#d2dae0] w-full'>
        <p className='flex-shrink-0 text-sm font-bold text-left text-[#14212b]'>
          {NEWS_HEADLINE_DATAS[currentPressIndex].press}
        </p>
        <p className='flex-grow text-sm font-medium text-left text-[#5f6e76]'>
          {NEWS_HEADLINE_DATAS[currentPressIndex].title}
        </p>
      </div>
    </div>
  );
};

export default RollingItem;
