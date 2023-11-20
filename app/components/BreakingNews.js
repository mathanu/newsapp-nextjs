import React from 'react';
const BreakingNews = () => {
    
    return <div className="md:p-1 md:border-b md:border-gray-400 md:flex md:scroll-auto md:motion-safe:overflow-x-hidden mt-2 md:mt-0" >
    <div className="absolute visible sm:invisible md:invisible lg:invisible md:ml-0 ml-7 md:mt-0 mt-12 md:m-0">
      {/* <img src='https://tpc.googlesyndication.com/simgad/707352686305895210' /> */}
    </div>
    <div className="md:bg-yellow-400 md:p-2 md:mb-0 font-bold invisible md:relative sm:visible md:visible lg:visible"><h1>BREAKING NEWS </h1></div>
    <div className="pt-1 text-center bg-red-600 w-[80%] invisible sm:visible md:visible lg:visible">
    {/* <span className="text-sm text-white font-bold mx-2 animate-pulse">{newsData[index]?.title}</span> */}
  </div>
    </div>;
}


export default BreakingNews;