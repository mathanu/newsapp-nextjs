import React from "react";
import Link from "next/link";
const MainNews = (props) => {

  
  return (
    <div className="m-1  w-1/2">
    <div>
        <div className="md:m-1 md:w-[100%] md:h-56 rounded-xl m-4 mt-24">
          <img
            className="rounded-lg w-[100%] md:h-56"
            alt="Main"
            src={props.data.image}
          />
          
        </div>
        <div className="md:p-2 md:bg-gradient-to-t z-30 relative -mt-20 m-1 md:from-black md:w-[100%] md:relative p-2 bg-gradient-to-t from-black w-[100%] rounded-lg ">
            <Link href="news/">
              <p className="text-white font-bold text-sm">
              {props.data.title}
              </p>
            </Link>
          </div>
          </div>
    </div>
  );
};

export default MainNews;
