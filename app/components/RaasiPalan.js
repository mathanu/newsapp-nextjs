import React from 'react';
import RaasiPalanDetail from "./RaasiPalanDetail";
const RaasiPalan = ({data}) => {


  return (
    <div className="mt-[60px]">
      <div className="visible md:mx-auto md:w-[50%] mt-16 md:m-2 ml-8">
        <img src="https://tpc.googlesyndication.com/simgad/707352686305895210" />
      </div>
      <div>
        <div className="md:mx-52 md:border md:border-red-400 md:flex shadow-md flex">
          <ul className="flex">
            <li className="p-2 m-2 ml-6 cursor-pointer font-semibold">
            தினசரி ராசிபலன்
            </li>
            <li className="p-2 m-2 cursor-pointer font-semibold">
              Weekly 
            </li>
            <li className="p-2 m-2 cursor-pointer font-semibold">
              Monthly 
            </li>
            <li className="p-2 m-2 cursor-pointer font-semibold">
              Yearly 
            </li>
            <li className="p-2 m-2 cursor-pointer font-semibold">
              Ragu-Kedhu 
            </li>
            <li className="p-2 m-2 cursor-pointer font-semibold">
              Guru Peyarchi  
            </li>
            
            <li className="p-2 m-2 cursor-pointer font-semibold">
              Sani Peyarchi 
            </li>
          </ul>
        </div>
        <div className="text-center border shadow-inner md:mx-52 border-b-slate-800">
          <h1 className="md:font-bold md:m-2 text-red-600">தினசரி ராசி பலன் : { new Date().toDateString() }</h1>
        </div>
        <div className="md:mx-48 md:flex m-">
    
          <div className="w-3/2">
            <RaasiPalanDetail horoData={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaasiPalan;
