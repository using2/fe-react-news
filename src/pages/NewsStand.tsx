import Headers from '@/components/header/Header';
import RollingNews from '@/components/rolling/RollingNews';
import ContentArea from '@/components/contentArea/ContentArea';

const NewsStandPage = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
      <div className='flex flex-col mt-18 mb-20 mr-44 ml-44 flex-1'>
        <Headers />
        <RollingNews />
        <ContentArea />
      </div>
    </div>
  );
};

export default NewsStandPage;
