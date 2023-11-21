import React from "react";
const RaasiPalanDetail = (props) => {
  return (
    <div>
      {  props.horoData?.map((horoDetails, index) => 
    <div className="md:p-2 md:m-2 border shadow-inner p-2 m-4 md:flex">
      <div className="md:p-2 md:m-2 shadow-xl items-center md:w-3/12 md:ml-0 ml-10 md:mt-0 mt-6">
        <img src="https://tamil.oneindia.com/img/2023/11/q166derm-down-1700135947.jpg" height={300} width={150}/> 
      </div>
      <div className="p-2 m-2 shadow-xl md:w-9/12 md:font-normal">
      <h1>{horoDetails?.Daily}
      </h1>
      </div>
    </div>
    )}
    </div>
  );
};

export default RaasiPalanDetail;
