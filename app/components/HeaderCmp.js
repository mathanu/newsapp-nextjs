import React from 'react';
import Link from 'next/link';
const HeaderCmp = () => {
    return <div className="w-full md:h-16 md:flex md:justify-between md:border-b md:border-gray-400 h-9 border-b border-gray-400">
    <div className="m-4 -mt-1 md:mx-12 md:p-2 h-10 w-24">
    <img src="https://i.ibb.co/VT0gnCb/Whats-App-Image-2023-11-14-at-9-43-18-PM.jpg" alt="logo" className="md:h-14 md:w-20 h-10 mt-1 md:mt-0 w-10"  border="0" />
    </div>
    <div className="invisible sm:visible md:visible lg:visible">
        <ul className="md:flex md:p-2 md:mx-56 md:m-2 md:text-sm md:font-extrabold">
            <li className="px-4  hover:text-yellow-500 cursor-pointer">முகப்பு</li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/newsl/sports">விளையாட்டு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/newsl/cinema">சினிமா</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/newsl/lifestyle">லைஃப்ஸ்டைல்</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/newsl/technology">தொழில்நுட்பம்</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/newsl/raasipalan">ராசிபலன்</Link></li>
        </ul>
    </div>
    <div className="visible -mt-40 p-2 m-2 overflow-x-hidden sm:invisible md:invisible lg:invisible border-b border-gray-400">
        <ul className="flex ">
            <li className="hover:text-yellow-500 cursor-pointer"><Link href="">முகப்பு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer"><Link href="/newsl/sports">விளையாட்டு</Link></li>
            <li className="px-4  hover:text-yellow-500 cursor-pointer">சினிமா</li>
        </ul>
    </div>
    </div>;
}

export default HeaderCmp;