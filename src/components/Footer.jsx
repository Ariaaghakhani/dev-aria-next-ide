'use client'

import Link from "next/link";
import {useEffect, useState} from "react";

export default function Footer() {
    let dateYear = new Date
    const [date, setDate] = useState(dateYear.getFullYear())
    useEffect(() => {
    }, []);
    return (
        <footer className="max-w-[80rem] py-[2.25rem] px-10 mx-auto text-gry [font-size:14px] font-medium">
            <div className="w-full flex justify-between flex-wrap lg:flex-nowrap">
                <div className="w-full lg:max-w-1/4 flex justify-start lg:justify-center my-4 lg:my-0">
                    <Link href={"https://dev-aria.com"}
                          className="text-[1.25rem] font-medium flex justify-center lg:justify-start w-full">
                        <span className="text-blck">DEV</span>
                        <span className="text-gry">ARIA
                        <sup className="box-decoration-clone">©</sup>
                    </span>
                    </Link>
                </div>
                <ul className="w-full my-4 lg:my-0 lg:w-1/3 text-gry flex items-center justify-center lg:justify-between *:flex *:items-center *:h-full *:mx-4 *:text-sm *:font-medium *:flex-wrap ">
                    <Link href={"/"} className="group">
                        <li className="duration-300 relative">
                            <div className="group-hover:text-black duration-300 block group-hover:-translate-y-1">HOME</div>
                            <span
                                className="text-black absolute -bottom-2 flex justify-center items-center [font-size:24px] w-full text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300">.</span>
                        </li>
                    </Link>

                    <Link href="/about" className="group">
                        <li className="duration-300 relative">
                            <div className="group-hover:text-black duration-300 block group-hover:-translate-y-1">ABOUT
                            </div>
                            <span
                                className="text-black absolute -bottom-2 flex justify-center items-center [font-size:24px] w-full text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300">.</span>
                        </li>
                    </Link>
                    <Link href="/project" className="group">
                        <li className="duration-300 relative">
                            <div className="group-hover:text-black duration-300 block group-hover:-translate-y-1">WORK
                            </div>
                            <span
                                className="text-black absolute -bottom-2 flex justify-center items-center [font-size:24px] w-full text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300">.</span>
                        </li>
                    </Link>
                    <Link href="/service" className="group">
                        <li className="duration-300 relative">
                            <div className="group-hover:text-black duration-300 block group-hover:-translate-y-1">SERVICE
                            </div>
                            <span
                                className="text-black absolute -bottom-2 flex justify-center items-center [font-size:24px] w-full text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300">.</span>
                        </li>
                    </Link>
                    <Link href="/contact" className="group">
                        <li className="duration-300 relative">
                            <div className="group-hover:text-black duration-300 block group-hover:-translate-y-1">CONTACT
                            </div>
                            <span
                                className="text-black absolute -bottom-2 flex justify-center items-center [font-size:24px] w-full text-center opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300">.</span>
                        </li>
                    </Link>
                </ul>
                <span className="w-full my-4 lg:my-0 justify-center lg:justify-end flex items-center lg:max-w-1/4">All Rights Reserved - {date}
                    <sup>®</sup></span>
            </div>
        </footer>
    )
}