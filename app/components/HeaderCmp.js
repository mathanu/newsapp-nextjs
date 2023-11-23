import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'
const HeaderCmp = () => {
    return <div className="w-full md:h-12 md:flex md:justify-between md:border-b md:border-gray-400 h-9 border-b border-gray-400">
    <div className="m-4 -mt-1 md:mx-12 md:p-2 h-10 w-24">
    <Link href="/">
    <img src="https://i.ibb.co/VT0gnCb/Whats-App-Image-2023-11-14-at-9-43-18-PM.jpg" alt="logo" className="md:h-12 md:w-20 h-8 mt-1 md:mt-0 w-10" border="0" /></Link>
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
    <div className="visible -mt-40 p-2 m-2 overflow-x-hidden sm:invisible md:invisible lg:invisible border-b border-gray-400">
        <ul className="flex ">
            <li className="hover:text-yellow-500 cursor-pointer"><Link href="/">முகப்பு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/sports">விளையாட்டு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/cinema">சினிமா</Link></li>
        </ul>
    </div>
    <div className="md:p-1 md:-mt-0 flex -mt-[85px] justify-end">
    <SocialIcon url="https://www.facebook.com/profile.php?id=61553449097172" style={{height:"25px", width:"30px"}}/>
    <SocialIcon url="https://twitter.com/reach2newsapp" style={{height:"25px", width:"30px"}} />
    <SocialIcon url="https://www.youtube.com/channel/UCvRdeCsdOspBsDoL6sITmNQ" style={{height:"25px", width:"30px"}} />
    </div>
    </div>;
}

export default HeaderCmp;
