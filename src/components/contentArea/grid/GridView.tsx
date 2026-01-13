const GridView = () => {
  const publishers = Array(24).fill(null);

  return (
    <div className='w-full grid grid-cols-6 grid-rows-4 bg-[#d2dae0] gap-px border border-[#d2dae0]'>
      {publishers.map((_, index) => (
        <GridItem key={index} />
      ))}
    </div>
  );
};

const GridItem = () => {
  return (
    <div className='bg-white h-28 flex justify-center items-center hover:bg-gray-50 group relative'>
      <img src='logo_path.png' alt='publisher' className='w-[80px]' />
      <button className='hidden group-hover:block bg-blue-500 text-white px-2 py-1 text-xs'>
        + 구독하기
      </button>
    </div>
  );
};

export default GridView;

/*
<div className='flex flex-col justify-start items-start w-[930px] h-[388px]  left-[175px] top-64 gap-px bg-[#d2dae0] border border-[#d2dae0]'>
        <div className='flex justify-start items-start self-stretch flex-grow relative gap-px'>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-24-1.png'
              className='w-[84px] h-5  left-[34px] top-[37px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-25-1.png'
              className='w-9 h-5  left-[58.17px] top-[37px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='930-2.png'
              className='w-[43px] h-5  left-[54.33px] top-[37px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-27-1.png'
              className='w-[53px] h-5  left-[49.5px] top-[37px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-28-1.png'
              className='w-16 h-5  left-[43.67px] top-[37px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-29-1.png'
              className='w-[61.5px] h-5  left-[44.83px] top-[37px] object-cover'
            />
          </div>
        </div>
        <div className='flex justify-start items-start self-stretch flex-grow relative gap-px'>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='032-1.png'
              className='w-[50px] h-5  left-[51px] top-[36.75px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-31-1.png'
              className='w-[85px] h-5  left-[33.17px] top-[36.75px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-32-1.png'
              className='w-[62px] h-5  left-[45.33px] top-[36.75px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='008-1.png'
              className='w-[71.5px] h-5  left-[40.5px] top-[36.75px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-34-1.png'
              className='w-[38.5px] h-5  left-[56.67px] top-[36.75px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-0-1.png'
              className='w-[63px] h-5  left-[43.83px] top-[36.75px] object-cover'
            />
          </div>
        </div>
        <div className='flex justify-start items-start self-stretch flex-grow relative gap-px'>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-36-1.png'
              className='w-[44.5px] h-5  left-[54px] top-[37.5px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-37-1.png'
              className='w-[35.5px] h-5  left-[58.17px] top-[37.5px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-38-1.png'
              className='w-[45.5px] h-5  left-[53.33px] top-[37.5px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-39-1.png'
              className='w-[61.5px] h-5  left-[45.5px] top-[37.5px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-40-1.png'
              className='w-[66px] h-5  left-[42.67px] top-[37.5px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-41-1.png'
              className='w-[61px] h-5  left-[45.83px] top-[37.5px] object-cover'
            />
          </div>
        </div>
        <div className='flex justify-start items-start self-stretch flex-grow relative gap-px'>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-42-1.png'
              className='w-[78.5px] h-5  left-[37px] top-[37.25px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-43-1.png'
              className='w-[62px] h-5  left-[45.17px] top-[37.25px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-44-1.png'
              className='w-[68px] h-5  left-[42.33px] top-[37.25px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-45-1.png'
              className='w-[33px] h-5  left-[59.5px] top-[37.25px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-46-1.png'
              className='w-[49px] h-5  left-[51.67px] top-[37.25px] object-cover'
            />
          </div>
          <div className='self-stretch flex-grow relative bg-white'>
            <img
              src='asset-47-1.png'
              className='w-[79.5px] h-5  left-[35.83px] top-[37.25px] object-cover'
            />
          </div>
        </div>
      </div>
*/
