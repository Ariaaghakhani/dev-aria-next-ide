import React, {useEffect, useState} from 'react';
import Link from "next/link";
import HoveredButton from "@/components/HoveredButton";

function Grid6(props) {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, [hover]);
    return (
        <Link href={'/contact'}
              className="flex flex-wrap content-between py-8 px-6 col-span-8 lg:col-span-4 row-span-2 bg-pattern4 bg-left-bottom bg-no-repeat bg-contain font-medium [font-size:2.5rem] leading-[1.2] group"
              onMouseEnter={() => {
                  setHover(true);
              }}
              onMouseLeave={() => {
                  setHover(false);
              }}>
            <h2 className="text-blck w-full group-hover:text-gry duration-500">
                Let's work
                <span className="text-gry ms-2">together</span>
            </h2>
            <div className="w-full flex items-center justify-between">
                <h3 className='[font-size:0.75rem] font-semibold text-gry'>• GET IN TOUCH</h3>
                <HoveredButton hovered={hover}/>
            </div>
        </Link>
    )
        ;
}

export default Grid6;