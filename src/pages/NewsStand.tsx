import Headers from '@/components/header/Header';
import RollingNews from '@/components/rolling/RollingNews';
import ContentHeader from '@/components/contentArea/ContentHeader';
import ArrowButton from '@/components/common/ArrowButton';
import GridView from '@/components/contentArea/grid/GridView';

const NewsStandPage = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col mt-18 mb-20 mr-40 ml-40'>
        <Headers />
        <RollingNews />
        <ContentHeader />
        <div className='relative w-full h-full'>
          <GridView />
          <div className='absolute top-2/5 -left-20 translate-y-1/2'>
            <ArrowButton direction='left' />
          </div>
          <div className='absolute top-2/5 -right-20 translate-y-1/2'>
            <ArrowButton direction='right' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsStandPage;
