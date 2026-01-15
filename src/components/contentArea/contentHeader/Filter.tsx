const Filter = () => {
  return (
    <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6'>
      <p className='flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#14212b]'>
        전체 언론사
      </p>
      <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1'>
        <p className='flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#879298]'>
          내가 구독한 언론사
        </p>
        <div className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-5 h-5 relative rounded-lg bg-[#7890e7]'>
          <p className='flex-grow-0 flex-shrink-0 w-3.5 h-3.5 text-xs font-medium text-center text-white/70'>
            8
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
