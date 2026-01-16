import Filter from '@/components/contentArea/contentHeader/Filter';
import ViewOption from '@/components/contentArea/contentHeader/ViewOption';
import type { viewType, filterType } from '@/types/contentHeaderTypes';

export interface ViewOptionProps {
  view: viewType;
  setView: (view: viewType) => void;
}

export interface FilterOptionProps {
  filter: filterType;
  setFilter: (filter: filterType) => void;
}

interface ContentHeaderProps {
  badge: number;
}

const ContentHeader = ({
  view,
  setView,
  filter,
  setFilter,
  badge,
}: ViewOptionProps & FilterOptionProps & ContentHeaderProps) => {
  return (
    <div className='flex justify-between mb-8'>
      <Filter filter={filter} setFilter={setFilter} badge={badge} />
      <ViewOption view={view} setView={setView} />
    </div>
  );
};

export default ContentHeader;
