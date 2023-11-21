import BreakingNews from "./components/BreakingNews";
import Header from "./components/HeaderCmp";
import MainNews from "./components/MainNews";
import SecondaryMainNews from "./components/SecondaryMainNews";
import {newsData } from "./Sanity/Api"

export default async function Home({ children }) {

  const res = await newsData()  
  return (
    <div>
      <div className="sm:md:mx-auto sm:md:w-[50%]">
      <BreakingNews />
        <div className="sm:md:flex">
        {res.MainData?.map((resultData) => 
          <MainNews data={resultData}/>
        )}
        </div>
        <div>
          <SecondaryMainNews data={res.SecondaryData}/>
        </div>
      </div>

     
    </div>
  );
}
