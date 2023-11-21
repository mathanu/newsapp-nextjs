import React from "react";
import Link from "next/link";
const SecondaryMainNews = (props) => {
  return (
      <div className="md:flex md:flex-wrap md:m-0 m-4 border-b border-gray-400 grid grid-cols-2 md:grid-cols-5">
      { props.data?.map((data) => 
        <div className="md:m-1  md:mt-1 md:h-56 md:w-[143px] md:rounded-lg hover:bg-yellow-200 shadow-lg">
          <img
            className="p-1 rounded-lg  md:w-40 md:h-24 w-40 h-24"
            alt="news1"
            src={data?.image}
          />{" "}
          <div className="m-1">
          <Link href={"news/"+data?._id}>
              <p className="md:text-[12px] text-[11px] font-bold md:leading-5 md:line-clamp-5 line-clamp-5 leading-2">
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
