import React from "react";
import Link from "next/link";
const SecondaryMainNews = (props) => {
  return (
      <div className="flex flex-wrap border-b border-gray-400 md:grid md:grid-cols-5">
      { props.data?.map((data) => 
        <div className="md:m-2  md:mt-1 md:h-56 md:w-36 md:rounded-lg hover:bg-yellow-200 shadow-lg">
          <img
            className="p-1 rounded-lg  md:w-40 md:h-24 w-40 h-24"
            alt="news1"
            src={data?.image}
          />{" "}
          <div className="m-1">
            <Link href="/newsd/">
              <p className="text-[12px] font-bold md:leading-5 md:line-clamp-5 line-clamp-5 leading-2">
            {data?.title}
              </p>
            </Link>

            <span className="text-[10px] text-red-700 font-bold p-1">
              2 MINS
            </span>
          </div>
        </div>
      ) }
      
      </div>
  );
};

export default SecondaryMainNews;
