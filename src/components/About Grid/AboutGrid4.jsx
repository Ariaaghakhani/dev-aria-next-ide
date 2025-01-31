import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

function AboutGrid4(props) {
    return (
        <div className="col-span-2 row-span-2 px-6 py-8 flex flex-wrap font-medium [font-size:2.5rem] leading-[1.2] group content-start bg-about4 bg-right-bottom bg-no-repeat bg-contain">
            <h2 className="text-blck w-full">
                What<span className="text-gry ms-2">I use</span>
            </h2>
            <ul className="*:flex *:justify-start *:items-center mt-8 *:mb-8">
                <li>
                    <FontAwesomeIcon icon={faAnglesRight} width='16' className="text-sm"/>
                    <span className="text-gry ms-1 [font-size:12px]"> HTML 5, CSS 3</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAnglesRight} width='16' className="text-sm"/>
                    <span className="text-gry ms-1 text-sm">Bootstrap, TailwindCss</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAnglesRight} width='16' className="text-sm"/>
                    <span className="text-gry ms-1 [font-size:12px]">Vue.js (and Nuxt)</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAnglesRight} width='16' className="text-sm"/>
                    <span className="text-gry ms-1 [font-size:12px]">React (and Next)</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAnglesRight} width='16' className="text-sm"/>
                    <span className="text-gry ms-1 [font-size:12px]">...</span>
                </li>
            </ul>
        </div>
    );
}

export default AboutGrid4;