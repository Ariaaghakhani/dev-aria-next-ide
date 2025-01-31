'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import HoveredButton from "@/components/HoveredButton";

function AboutGrid2(props) {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, [hover]);

    return (
        <Link href={'/contact'} className="col-span-8 row-span-1 flex items-center justify-center"
              onMouseEnter={() => {
                  setHover(true);
              }} onMouseLeave={() => {
            setHover(false)
        }}
        >
            <span className="me-4 text-gry tracking-[1px] [font-size:.875rem]">GET IN TOUCH</span>
            <HoveredButton hovered={hover}/>
        </Link>
    );
}

export default AboutGrid2;