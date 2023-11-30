import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'
const HeaderCmp = () => {
    return <div className="w-full z-20 md:h-12 md:flex md:justify-between fixed top-0 bg-white border-b border-gray-400 h-10">
    <div className="m-2 -mt-1 md:mx-12 md:p-2 md:h-full md:w-full">
    <Link href="/">
    <img src="https://i.ibb.co/0JmSXKs/ed1ef1058adf.jpg" alt="ed1ef1058adf"className=" mt-1 md:mt-0 w-10" /></Link>
    </div>
    <div className="invisible sm:visible md:visible lg:visible">
        <ul className="md:flex md:p-2 md:mx-56 md:m-2 md:text-sm md:font-extrabold">
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/">முகப்பு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/sports"> விளையாட்டு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/cinema">சினிமா</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/lifestyle">லைஃப்ஸ்டைல்</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/technology">தொழில்நுட்பம்</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/raasipalan">ராசிபலன்</Link></li>
        </ul>
    </div>
    <div className="visible -mt-[152px] z-20 font-bold bg-white p-2 m-2 overflow-x-hidden sm:invisible md:invisible lg:invisible border-b border-gray-400">
        <ul className="flex ">
            <li className="hover:text-yellow-500 cursor-pointer"><Link href="/">முகப்பு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/sports">விளையாட்டு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/cinema">சினிமா</Link></li>
        </ul>
    </div>
    <div className="md:p-1 md:-mt-0  flex -mt-[80px] justify-end">
    <SocialIcon url="https://www.facebook.com//profile.php?100067295215196" style={{height:"25px", width:"30px"}}/>
    <SocialIcon url="https://twitter.com/reach2newsapp" style={{height:"25px", width:"30px"}} />
    <SocialIcon url="https://www.youtube.com/channel/UCvRdeCsdOspBsDoL6sITmNQ" style={{height:"25px", width:"30px"}} />
    </div>
    </div>;
}

export default HeaderCmp;
