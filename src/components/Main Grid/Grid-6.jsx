import React, {useEffect, useState} from 'react';
import Link from "next/link";
import HoveredButton from "@/components/HoveredButton";

function Grid6(props) {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, [hover]);
    return (
        <Link href={'/project'}
            className="flex flex-wrap content-between py-8 px-6 col-span-8 row-span-2 lg:col-span-2 bg-grid1 bg-right-bottom bg-no-repeat bg-contain  [font-size:2.5rem] leading-[1.2] group"  onMouseEnter={()=>{
            setHover(true);
        }}
              onMouseLeave={()=>{
                  setHover(false);
              }}>
            <h2 className="text-blck w-full group-hover:text-gry duration-500">
                See my
                <br/>
                latest
                <br/>
                <span className="text-gry">projects</span>
            </h2>
            <div className="w-full flex items-center justify-between">
                <h3 className='[font-size:0.75rem] font-semibold text-gry'>• ALL PROJECTS</h3>
                <HoveredButton hovered={hover}/>
            </div>
        </Link>
    )
        ;
}

export default Grid6;