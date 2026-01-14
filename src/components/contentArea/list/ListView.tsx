const ListView = () => {
  return (
    <div className='flex flex-col justify-start items-start bg-white'>
      <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 w-[930px] h-10 relative py-4 bg-[#f5f7f9] border border-[#d2dae0]'>
        <div className='flex-grow-0 flex-shrink-0 w-[166px] h-10 relative bg-[#7890e7]'>
          <div className='w-12 h-10 absolute left-[-1px] top-[-1px] bg-[#4362d0]' />
          <div className='flex justify-start items-center w-[166px] h-10 absolute left-0 top-0 gap-2 px-4'>
            <p className='flex-grow w-[97.77px] text-sm font-bold text-left text-white'>
              종합/경제
            </p>
            <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5'>
              <p className='flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white'>
                1
              </p>
              <svg
                width={5}
                height={11}
                viewBox='0 0 5 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='flex-grow-0 flex-shrink-0'
                preserveAspectRatio='none'
              >
                <path
                  d='M4.23047 0H2.73047L0 10.1602H1.48828L4.23047 0Z'
                  fill='white'
                  fill-opacity='0.7'
                />
              </svg>
              <p className='flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white/70'>
                81
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2 px-4'>
          <p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#879298]'>
            방송/통신
          </p>
        </div>
        <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2 px-4'>
          <p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#879298]'>
            IT
          </p>
        </div>
        <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2 px-4'>
          <p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#879298]'>
            영자지
          </p>
        </div>
        <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2 px-4'>
          <p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#879298]'>
            스포츠/연예
          </p>
        </div>
        <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2 px-4'>
          <p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#879298]'>
            매거진/전문지
          </p>
        </div>
        <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2 px-4'>
          <p className='flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#879298]'>
            지역
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[930px] gap-4 p-6 border border-[#d2dae0]'>
        <div className='flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4'>
          <div className='flex-grow-0 flex-shrink-0 w-[53px] h-5 relative'>
            <img
              src='asset-35-1.png'
              className='w-[52.5px] h-5 absolute left-[-1px] top-[-1px] object-cover'
            />
          </div>
          <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#5f6e76]'>
            2026.01.14. 18:27 편집
          </p>
          <div className='flex justify-center items-center flex-grow-0 flex-shrink-0 h-6 relative gap-0.5 px-1.5 rounded-[999px] bg-[#f5f7f9] border border-[#d2dae0]'>
            <svg
              width={12}
              height={12}
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='flex-grow-0 flex-shrink-0 w-3 h-3 relative'
              preserveAspectRatio='none'
            >
              <path
                d='M9.5 6.49902H6.5V9.49902H5.5V6.49902H2.5V5.49902H5.5V2.49902H6.5V5.49902H9.5V6.49902Z'
                fill='#879298'
              />
            </svg>
            <div className='flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pr-1'>
              <p className='flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#879298]'>
                구독하기
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8'>
          <div className='flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-80 relative gap-4'>
            <img
              src='thumbnail.png'
              className='flex-grow-0 flex-shrink-0 w-80 h-[200px] object-none border border-[#d2dae0]'
            />
            <pre>
              Failed to transform TEXT Title{'\n'}TypeError: cannot read
              property 'className' of undefined
            </pre>
          </div>
          <div className='flex flex-col justify-start items-start flex-grow relative gap-4'>
            <p className='self-stretch flex-grow-0 flex-shrink-0 w-[530px] text-base font-medium text-left text-[#4b5966]'>
              반려동물 수제 간식 시장 확대… 소규모 창업도 증가세
            </p>
            <p className='self-stretch flex-grow-0 flex-shrink-0 w-[530px] text-base font-medium text-left text-[#4b5966]'>
              직장인 대상 ‘점심 산책 구독’ 서비스 등장… 수요 확인 단계
            </p>
            <p className='self-stretch flex-grow-0 flex-shrink-0 w-[530px] text-base font-medium text-left text-[#4b5966]'>
              소상공인, 단골 관리 프로그램 도입 확대… 매출 안정화 기대
            </p>
            <p className='self-stretch flex-grow-0 flex-shrink-0 w-[530px] text-base font-medium text-left text-[#4b5966]'>
              핸드메이드 굿즈 플랫폼 성장… 취미·부업 시장 동반 확대
            </p>
            <p className='self-stretch flex-grow-0 flex-shrink-0 w-[530px] text-base font-medium text-left text-[#4b5966]'>
              재택근무 확산에 ‘홈 오피스’ 용품 매출 증가세
            </p>
            <p className='self-stretch flex-grow-0 flex-shrink-0 w-[530px] text-base font-medium text-left text-[#4b5966]'>
              직원 복지 확대 기업 늘며 ‘조직문화 투자’ 확산
            </p>
            <p className='self-stretch flex-grow-0 flex-shrink-0 w-[530px] text-sm font-medium text-left text-[#879298]'>
              서울경제 언론사에서 직접 편집한 뉴스입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
