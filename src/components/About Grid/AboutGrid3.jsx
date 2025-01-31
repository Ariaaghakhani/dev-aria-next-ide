import React from 'react';

function AboutGrid3(props) {
    return (
        <div className="col-span-3 row-span-2 grid grid-cols-2 grid-rows-2 py-8 px-6 gap-4 bg-about3 bg-no-repeat bg-contain bg-right">
            <div className="col-span-1 row-span-1 flex justify-start content-start  flex-wrap">
                <div className="w-full text-left text-[3.75rem] leading-[1]">4<span className='text-gry'>+</span></div>
                <span className="[font-size:14px] text-gry text-wrap">YEARS OF EXPERIENCE</span>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start content-start  flex-wrap">
                <div className="w-full text-left text-[3.75rem] leading-[1]">00</div>
                <span className="[font-size:14px] text-gry text-wrap">UNHAPPY CLIENTS</span>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start content-start  flex-wrap">
                <div className="w-full text-left text-[3.75rem] leading-[1]">06</div>
                <span className="[font-size:14px] text-gry text-wrap">RECOGNITIONS</span>
            </div>
            <div className="col-span-1 row-span-1 flex justify-start content-start  flex-wrap">
                <div className="w-full text-left text-[3.75rem] leading-[1]">30<span className='text-gry'>+</span></div>
                <span className="[font-size:14px] text-gry text-wrap">PROJECTS DONE</span>
            </div>
        </div>
    );
}

export default AboutGrid3;