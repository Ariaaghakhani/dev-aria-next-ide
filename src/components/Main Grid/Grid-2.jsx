'use client'

import React from 'react';
import Image from 'next/image';
import ariaImg from '@/assets/images/aria.webp';
import textSvg from '@/assets/images/circle-text.svg';
function Grid2(props) {
    return (
        <section className="col-span-8 lg:col-span-2 row-span-2 flex justify-center items-center">
            <Image src={ariaImg} alt="" className="w-[18dvh] h-[18dvh] border rounded-full" width="200" height="200"/>
            <Image src={textSvg} alt="" className="w-[20dvh] h-[20dvh] absolute scale-[1.25] rounded-full opacity-35 rotate-text saturate-50" width="200" height="200"/>
        </section>
    );
}

export default Grid2;