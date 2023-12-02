import React from "react";
import dateFormat from 'dateformat';
import SecondaryMainNews from "./SecondaryMainNews";

const NewsDetails = (props) => {
  const newsContent = props.data?.list?.content?.split("###");
  return (
    <div className="mx-6 md:mx-20 md:w-[60%] md:mt-[70px] mt-[100px]">
      <div className="visible md:ml-0 md:mt-4 mt-12 md:m-0">
        {/* <img src='https://tpc.googlesyndication.com/simgad/707352686305895210' /> */}
      </div>
      <div className="md:mt-10 mt-20">
        <span className="font-bold m-2 border border-b-gray-400 text-white md:p-2 p-1 bg-red-600">
          {props.data?.list?.type}
        </span> 
        <span className="font-thin text-xs">
          Published: { dateFormat( new Date(props.data?.list?.createdon), "mmmm dS, yyyy - h:MM TT") } - {" "}
          {props.data?.list?.createdby}
        </span>
        <h1 className="font-extrabold md:text-[21px] md:leading-10 leading-7 text-lg mt-4">
          {props.data?.list?.title}
        </h1>
        <span className="text-[11px] font-extralight">Total Views - {100 + props?.data?.list?.ReadCount} </span>
        {/* <SocialMediaButtons data={data}/> */}
      </div>

      <div className="md:ml-20 mt-6">
        <img
          className="w-96 rounded-xl object-contain"
          alt="content-img"
          src={props.data?.list?.image}
        ></img>
      </div>
      {newsContent?.map((news, index) => (
        <div key={index}>
          <div className="md:ml-20 md:mt-6">
            <p className="mt-2 p-2 md:text-[17px] leading-7 md:font-[18px]">
              {news}
            </p>
          </div>

          { index === 1 && props?.data?.list?.SocialPreview && <div className="md:ml-20 md:mt-10 rounded-xl"> <div className=" rounded-xl" dangerouslySetInnerHTML={{ __html: props?.data?.list?.SocialPreview }} /> </div>  }

          {  index%2 === 0 && props.data?.list?.additionalimage && <div className="md:ml-20 md:mt-10"><img className="rounded-xl object-contain" src={props.data?.list?.additionalimage[index]} /> </div> }
          <div className="md:ml-20 md:mt-10">
            {/* <img src='https://tpc.googlesyndication.com/simgad/707352686305895210' /> */}
          </div>
    
        </div>
      ))}
      <div className="md:ml-20 md:mt-10 ml-5 mt-10">
        <h1 className="font-semibold">
          Tags<hr></hr>
        </h1>
        <div className="mt-2 flex flex-wrap">
          {props.data?.list?.tag?.map((tags, index) => (
            <span className="p-2 ml-2 mt-2 bg-blue-400 h-12 md:font-medium text-base">
              {tags}
            </span>
          ))}
        </div>
      </div>
      <div className="md:ml-20 md:mt-10 ml-5 mt-10">
        <h1 className="font-semibold">
          Read More News<hr></hr>
        </h1>
       { props?.data?.readMore && <SecondaryMainNews route ="/news/" data={props?.data?.readMore} /> }
      </div>
    </div>
  );
};

export default NewsDetails;
