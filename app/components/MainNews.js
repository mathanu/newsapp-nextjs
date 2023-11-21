import React from "react";
import Link from "next/link";
const MainNews = (props) => {

  
  return (
    <div className="md:m-1 md:w-1/2">
    <div>
        <div className="md:m-1 md:w-[100%] md:h-56 rounded-xl m-4 md:mt-24">
          <img
            className="rounded-lg w-[100%] md:h-56"
            alt="Main"
            src={props.data.image}
          />
          
        </div>
        <div className="md:p-2 m-4 md:bg-gradient-to-t z-30 relative md:-mt-20 -mt-20 md:m-1 md:from-black md:w-[100%] md:relative p-2 bg-gradient-to-t from-black rounded-lg ">
            <Link href="news/">
              <p className="text-white md:font-bold md:text-sm text-[11px]">
              {props.data.title}
              </p>
            </Link>
          </div>
          </div>
    </div>
  );
};

export default MainNews;
