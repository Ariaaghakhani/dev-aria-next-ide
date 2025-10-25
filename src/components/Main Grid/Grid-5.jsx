'use client'
import React, {useState} from 'react';
import Link from "next/link";
import HoveredButtonDark from "@/components/HoveredButtonDark";

function Grid4() {
    const [hover, setHover] = useState(false);
    return (
        <Link href={'/project/vue'} className="col-span-8 lg:col-span-3 row-span-2 py-8 px-6 h-full flex content-between flex-wrap
        bg-vueBg bg-no-repeat bg-cover bg-center"
              onMouseEnter={()=>{
                  setHover(true);
              }}
              onMouseLeave={()=>{
                  setHover(false);
              }}
        >
            <span className="p-8  w-full"></span>
            <div className="w-full flex items-center justify-between h-fit ">
                <div className="rounded-lg py-2 ">
                    <h3 className='[font-size:0.85rem]'>• Vue</h3>
                </div>
                <HoveredButtonDark hovered={hover}/>
            </div>
        </Link>
);
}

export default Grid4;