import React from "react";

const NewsList = ({data}) => {

  return (
    <div>
    <div className="visible md:mx-auto md:w-[50%] md:m-2 ml-8 mt-16">
      <img src="https://tpc.googlesyndication.com/simgad/707352686305895210" />
    </div>
    <div className="md:mx-52 md:border-b md:w-full md:border-gray-400  md:flex m-4 shadow-xl">
      <div className="w-1/2">
        <h1 className="font-bold p-2 m-2 border-b border-gray-400">
          Top News
        </h1>
        {  data?.map((news, index) => 
        <div className="md:m-2 md:mt-4 mt-4 rounded-lg hover:bg-yellow-200 md:flex flex m-2 shadow-xl">
          <img
            className="rounded-lg w-40 h-24"
            alt="news1"
            src={news?.image}
          />
          <div className="md:m-2 ml-2">
          <span className="text-[10px] text-red-700 font-bold p-1">{news.readmins}</span>
            <p className="text-xs font-semibold line-clamp-4">
              {news?.title}
            </p>
          </div>
        </div>
        )}
  </div>
      
    </div>
  </div>
  );
};

export default NewsList;
