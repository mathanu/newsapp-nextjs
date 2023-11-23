import BreakingNews from "./components/BreakingNews";
import Header from "./components/HeaderCmp";
import MainNews from "./components/MainNews";
import SecondaryMainNews from "./components/SecondaryMainNews";
import {newsData } from "./Sanity/Api"
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const res = await newsData()  
  return (
    <div className={inter.className}>
      <div className="sm:md:mx-auto sm:md:w-[60%]">
      <BreakingNews />
        <div className="sm:md:flex md:mt-0 mt-16">
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
