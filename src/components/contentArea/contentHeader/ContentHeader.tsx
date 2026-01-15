import Filter from '@/components/contentArea/contentHeader/Filter';
import ViewOption from '@/components/contentArea/contentHeader/ViewOption';
import type { viewType } from '@/types/contentHeaderTypes';

export interface ViewOptionProps {
  view: viewType;
  setView: (view: viewType) => void;
}

const ContentHeader = ({ view, setView }: ViewOptionProps) => {
  return (
    <div className='flex justify-between mb-8'>
      <Filter />
      <ViewOption view={view} setView={setView} />
    </div>
  );
};

export default ContentHeader;
