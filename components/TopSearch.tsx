const TopSearch = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="lg:px-20 md:px-20 sm:px-10 xs:px-7  xxs:px-5 relative OtherContent  bg-[#e3e1dc] w-full lg:h-[52%] md:h-[63%] sm:h-[60%] xs:h-[62%] xxs:h-[65%] rounded-b-3xl pt-8">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[#4d270c]">Most Searched Breeds</p>
          <div className="w-14 border-b-4 border-[#4d270c] rounded-full" />
        </div>
        <div className="flex w-full  items-center justify-between">
    <p className="text-[#291507] lg:text-4xl md:text-xl font-bold lg:w-[35%] md:w-[45%] pt-8">
      66+ Breeds For you to discover
    </p>
    <div className="lg:flex md:flex sm:flex xs:hidden xxs:hidden  items-center gap-3">
      <p
        className="lg:text-lg md:text-lg sm:text-md xs:text-sm xxs:text-xs font-semibold cursor-pointer text-[#73675c] "
      >
        SEE MORE
      </p>
    </div>
  </div>
      </div>



     
    </div>
    
  );
};

export default TopSearch;
