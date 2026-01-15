import { DIRECTION } from '@/lib/constants/constants';

interface ArrowButtonProp {
  direction: string;
  handlePage: () => void;
  className?: string;
}

const ArrowButton = ({ direction, handlePage, className }: ArrowButtonProp) => {
  return (
    <button onClick={handlePage}>
      <svg
        viewBox='0 0 26 41'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`w-[26px] h-[41px] ${
          direction === DIRECTION.RIGHT ? 'rotate-180' : ''
        } ${className}`}
      >
        <path
          d='M24.781 0.384155L0.781006 20.3842L24.781 40.3842'
          stroke='#6E8091'
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
