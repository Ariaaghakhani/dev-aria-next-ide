'use client'
import React, {useEffect, useState} from 'react';
import HoveredButton from "@/components/HoveredButton";
import Link from "next/link";

function AboutGrid7(props) {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, [hover]);
    return (
        <Link href={'/contact'} className="col-span-8 lg:col-span-4 row-span-2 flex flex-wrap content-between py-8 px-6 font-medium [font-size:2.5rem] leading-[1.2] group bg-about7 bg-no-repeat bg-contain bg-right-top"
              onMouseEnter={() => {
                  setHover(true);
              }}
              onMouseLeave={() => {
                  setHover(false);
              }}>
            <h2 className="text-blck w-full group-hover:text-gry duration-200">
                Services
                <span className="text-gry ms-2">I offer</span>
            </h2>
            <div className="w-full flex items-center justify-between">
                <h3 className='[font-size:0.75rem] font-semibold text-gry'>• ALL SERVICES</h3>
                <HoveredButton hovered={hover}/>
            </div>
        </Link>
    );
}

export default AboutGrid7;