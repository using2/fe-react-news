import Filter from '@/components/common/Filter';
import ViewOption from '@/components/common/ViewOption';

const ContentHeader = () => {
  return (
    <div className='flex justify-between mb-8'>
      <Filter />
      <ViewOption />
    </div>
  );
};

export default ContentHeader;
