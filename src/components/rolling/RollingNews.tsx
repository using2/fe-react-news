import { useEffect, useState } from 'react';
import RollingItem from '@/components/rolling/RollingItem';

const ROLLINGBAR_LENGTH = 2;

const RollingNews = () => {
  const [currentTarget, setCurrentTarget] = useState(-1);

  useEffect(() => {
    let currentIndex = 0;
    let isMounted = true;

    async function runCycle() {
      while (isMounted) {
        // 5초 대기 (사이클 시작 전)
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // ROLLINGBAR_LENGTH만큼 반복
        for (let i = 0; i < ROLLINGBAR_LENGTH && isMounted; i++) {
          setCurrentTarget(currentIndex % ROLLINGBAR_LENGTH);
          currentIndex++;

          // 마지막이 아니면 1초 대기
          if (i < ROLLINGBAR_LENGTH - 1) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        }
      }
    }

    runCycle();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='flex gap-8 mb-12'>
      {Array.from({ length: ROLLINGBAR_LENGTH }, (_, i) => (
        <RollingItem key={i} itemNumber={i} currentTarget={currentTarget} />
      ))}
    </div>
  );
};

export default RollingNews;
