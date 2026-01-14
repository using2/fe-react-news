import { NEWS_HEADLINE_DATAS } from '@/lib/constants/constants';
import { useEffect, useState } from 'react';

const RollingNews = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);

  const countHeadline = NEWS_HEADLINE_DATAS.length;

  useEffect(() => {
    // useRef 활용
    const leftTimerId = setTimeout(() => {
      setLeftIndex((idx) => (idx + 2) % countHeadline);
      const rightTimerId = setTimeout(() => {
        setRightIndex((idx) => (idx + 2) % countHeadline);
      }, 1000);

      return () => clearTimeout(rightTimerId);
    }, 5000);

    return () => clearTimeout(leftTimerId);
  }, [leftIndex, rightIndex, countHeadline]);

  const leftHeadline = NEWS_HEADLINE_DATAS[leftIndex];
  const rightHeadline = NEWS_HEADLINE_DATAS[rightIndex];

  return (
    <div className='flex gap-8 mb-12'>
      <RollingItem press={leftHeadline.press} title={leftHeadline.title} />
      <RollingItem press={rightHeadline.press} title={rightHeadline.title} />
    </div>
  );
};

export default RollingNews;

// function increaseIndex(wrapper: { index: number }) {
//   const countOfHeadlines = NEWS_HEADLINE_DATAS.length;
//   wrapper.index = (wrapper.index + 1) % countOfHeadlines;
// }

// function getHeadline(wrapper: { index: number }) {
//   const headline = NEWS_HEADLINE_DATAS[wrapper.index];
//   increaseIndex(wrapper);

//   return headline;
// }

// headline.ts의 인터페이스와 합쳐야함
interface RollingItemProps {
  press: string;
  title: string;
}

const RollingItem = ({ press, title }: RollingItemProps) => {
  return (
    <div className='flex justify-start items-start gap-2 flex-1'>
      <div className='flex justify-start items-start flex-grow relative gap-4 p-4 bg-[#f5f7f9] border border-[#d2dae0] w-full'>
        <p className='flex-shrink-0 text-sm font-bold text-left text-[#14212b]'>
          {press}
        </p>
        <p className='flex-grow text-sm font-medium text-left text-[#5f6e76]'>
          {title}
        </p>
      </div>
    </div>
  );
};
