import { useEffect, useState } from 'react';
import RollingItem from '@/components/rolling/RollingItem';

const ROLLINGBAR_LENGTH = 2;

const RollingNews = () => {
  const [currentTarget, setCurrentTarget] = useState(-1);

  useEffect(() => {
    function recursiveSettingCurTarget(length: number) {
      // current target 변경
      setCurrentTarget((prev) => (prev + 1) % ROLLINGBAR_LENGTH);

      // 재귀함수 종료 조건
      if (length === ROLLINGBAR_LENGTH - 1) return;

      // 1초 뒤 재귀 호출
      setTimeout(() => {
        recursiveSettingCurTarget(length + 1);
      }, 1000);
    }

    function startRollingCycle() {
      setTimeout(() => {
        // current target 변경 재귀 함수 호출
        recursiveSettingCurTarget(0);

        // 5초 timeout 재귀 실행
        startRollingCycle();
      }, 5000);
    }

    startRollingCycle();
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
