import React from "react";
import Link from "next/link";

const NewsList = ({ data }) => {
  return (
    <div className="mt-[60px]">
      <div className="md:mx-auto  md:m-2 ml-8 mt-[100px] mx-2 w-[50%]">
        <img src="https://tpc.googlesyndication.com/simgad/707352686305895210" />
      </div>
      <div className="md:mx-52 md:border-b md:w-full md:border-gray-400  md:flex m-4 shadow-xl">
        <div>
          <h1 className="font-bold p-2 m-2 border-b border-gray-400">
            Top News
          </h1>
          {data?.map((news, index) => (
            <div className="md:m-2 md:mt-4 mt-4  md:w-[50%] rounded-lg hover:bg-yellow-200 md:flex flex m-2 justify-evenly  shadow-xl">
            <div className="flex p-2 w-3/12">
              <img
                className="rounded-lg md:w-40 md:h-24 w-64 h-20 object-cover overflow-hidden"
                alt="news1"
                src={news?.image}
              />
              </div>
              <div className="md:m-2 ml-2 w-9/12">
                <span className="text-[10px] text-red-700 font-bold p-1">
                  {news.readmins}
                </span>
                <Link href={"news/"+news._id}>
                <p className="text-xs font-semibold line-clamp-4">
                  {news?.title}
                </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
