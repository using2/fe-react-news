import { NEWS_HEADLINE_DATAS } from '@/lib/constants/constants';
import { useEffect, useState } from 'react';

const headlineLength = NEWS_HEADLINE_DATAS.length;

const RollingItem = ({
  initialIndex,
  parentalCommand,
}: {
  initialIndex: number;
  parentalCommand: boolean;
}) => {
  const [currentPressIndex, setCurrentPressIndex] = useState(initialIndex);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const rolling = () => {
    setCurrentPressIndex((idx) => (idx + 2) % headlineLength);
  };

  useEffect(() => {
    if (!parentalCommand) return;

    if (isHovering) return;

    const timerId = setTimeout(rolling, 500);

    return () => clearTimeout(timerId);
  }, [parentalCommand, isHovering]);

  return (
    <div className='flex justify-start items-start gap-2 flex-1 min-w-0'>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex justify-start items-start flex-grow relative gap-4 p-4 bg-[#f5f7f9] border border-[#d2dae0] w-full hover:cursor-pointer`}
      >
        <p className='flex-shrink-0 text-sm font-bold text-left text-[#14212b]'>
          {NEWS_HEADLINE_DATAS[currentPressIndex].press}
        </p>
        <p
          className={`flex-grow text-sm font-medium text-left text-[#5f6e76] truncate hover:underline`}
        >
          {NEWS_HEADLINE_DATAS[currentPressIndex].title}
        </p>
      </div>
    </div>
  );
};

export default RollingItem;
