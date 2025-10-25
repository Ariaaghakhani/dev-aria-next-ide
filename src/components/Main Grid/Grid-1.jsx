import React from 'react';
import SocialLinks from "@/components/SocialLinks";

function Grid1() {
    return (
        <section
            className="flex flex-wrap content-between py-8 px-6 col-span-8 lg:col-span-3 row-span-2 bg-grid1 bg-right-bottom bg-no-repeat bg-contain font-medium [font-size:3.5rem] leading-[1.2]">
            <h1 className="text-blck w-full">
                Front-end
                <br/>
                <span className="text-gry">Developer</span>
            </h1>
            <SocialLinks />
        </section>
    );
}

export default Grid1;