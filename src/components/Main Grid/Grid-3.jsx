'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import HoveredButton from "@/components/HoveredButton";

function Grid3(props) {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, [hover]);

    return (
        <Link href={'/about'}
              className="py-8 px-6 col-span-8 lg:col-span-3 row-span-2 bg-pattern2 bg-bottom bg-no-repeat bg-contain"
              onMouseEnter={()=>{
                  setHover(true);
              }} onMouseLeave={()=>{
                  setHover(false)
        }}>
            <div className="flex justify-start content-between flex-wrap text-gry grow h-full">
                <div className='flex flex-wrap'>
                    <span className="[font-size:1.5rem] w-full">✺</span>
                    <h2 className="text-[1.25rem] font-normal">I’m Aria, a Front-End Developer with a passion for crafting seamless user experiences and
                        bringing designs to life through clean, efficient code.</h2>
                </div>
                <div className="w-full flex items-center justify-between">
                    <h3 className='[font-size:0.75rem] font-semibold'>• ABOUT ME</h3>
                    <HoveredButton hovered={hover}/>
                </div>
            </div>
        </Link>
    );
}

export default Grid3;