import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

function Grid1() {
    return (
        <section
            className="flex flex-wrap content-between py-8 px-6 col-span-8 lg:col-span-3 row-span-2 bg-grid1 bg-right-bottom bg-no-repeat bg-contain font-medium [font-size:3.5rem] leading-[1.2]">
            <h1 className="text-blck w-full">
                Front-end
                <br/>
                <span className="text-gry">Developer</span>
            </h1>
            <ul className="flex items-center *:me-4">
                <li className="menu-hovered">
                    <Link href={'https://github.com/Ariaaghakhani'}
                          className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                        <FontAwesomeIcon icon={faGithub} className="text-gry max-w-[16px] max-h-[16px]"/>
                    </Link>
                </li>
                <li className="menu-hovered">
                    <Link href={'https://instagram.com/aria.agk'}
                          className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                        <FontAwesomeIcon icon={faInstagram} className="text-gry max-w-[16px] max-h-[16px]"/>
                    </Link>
                </li>
                <li className="menu-hovered">
                    <Link href={'https://www.linkedin.com/in/aria-aghakhani/'}
                          className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-gry max-w-[16px] max-h-[16px]"/>
                    </Link>
                </li>
                <li className="menu-hovered">
                    <Link href={'https://wa.me/+989121946210'}
                          className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-gry max-w-[16px] max-h-[16px]"/>
                    </Link>
                </li>
                <li className="menu-hovered">
                    <Link href={'mailto:contact@dev-aria.com'}
                          className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gry max-w-[16px] max-h-[16px]"/>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Grid1;