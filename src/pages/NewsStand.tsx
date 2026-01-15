import Headers from '@/components/header/Header';
import RollingNews from '@/components/rolling/RollingNews';
import ContentArea from '@/components/contentArea/ContentArea';

const NewsStandPage = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col mt-18 mb-20 mr-40 ml-40'>
        <Headers />
        <RollingNews />
        <ContentArea />
      </div>
    </div>
  );
};

export default NewsStandPage;
