import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";
import HeaderCmp from "./components/HeaderCmp";
import Header from "./components/HeaderCmp";
import MainNews from "./components/MainNews";
import SecondaryMainNews from "./components/SecondaryMainNews";
import {newsData } from "./Sanity/Api"

export default async function Home({ children }) {

  const res = await newsData()
  console.log("___________________________", res.MainData)

  
  return (
    <div>
      <HeaderCmp />
      <div className="mx-auto w-[50%] ">
      <BreakingNews />
        <div className="flex">
        {res.MainData?.map((resultData) => 
          <MainNews data={resultData}/>
        )}
        </div>
        <div>
          <SecondaryMainNews data={res.SecondaryData}/>
        </div>
      </div>

      <Footer />
    </div>
  );
}
