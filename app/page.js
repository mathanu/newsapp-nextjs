import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainNews from "./components/MainNews";
import SecondaryMainNews from "./components/SecondaryMainNews";
import {newsData } from "./Sanity/Api"

export default async function Home({ children }) {

  const res = await newsData()
  console.log("___________________________", res.MainData)

  
  return (
    <div>
      <Header />
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
