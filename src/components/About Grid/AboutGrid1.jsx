import React from 'react';
import Image from "next/image";
import ariaImg from "@/assets/images/aria.webp";
import textSvg from "@/assets/images/about-circle-text.svg";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

function AboutGrid1(props) {
    return (
        <div
            className="col-span-8 row-span-5 bg-blck text-white flex pt-20 content-center justify-center flex-wrap py-8 px-6 bg-about">
            <div className="w-full flex justify-center relative items-center mb-20">
                <Image src={ariaImg} alt="" className="w-[200px] h-[200px] max-w-[200px] max-h-[200px] border rounded-full " width="200"
                       height="200"/>
                <Image src={textSvg} alt=""
                       className="w-[220px] h-[220px] max-w-[220px] max-h-[220px] absolute scale-[1.25] rounded-full opacity-35 rotate-text saturate-50"
                       width="200" height="200"/>
            </div>
            <h1 className="text-[3.5rem] font-inter text-gry text-center container font-[500]">I'm Aria<span
                className="text-black">, a Front-end Developer <br></br>based</span> in Tehran<span
                className="text-black">.</span></h1>
            <h3 className="container px-40 text-gry text-center mt-16 text-[1.25rem] leading-[1.5]">
                Since starting my career as a front-end developer, I’ve built fast, responsive, and user-friendly web
                applications, helping businesses create seamless digital experiences.
            </h3>
            <ul className="flex items-center *:me-4 mt-20 *:overflow-hidden">
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
        </div>
    );
}

export default AboutGrid1;