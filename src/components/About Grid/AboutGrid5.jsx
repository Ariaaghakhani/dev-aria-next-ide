import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

function AboutGrid5(props) {
    return (
        <div className="col-span-3 row-span-2  px-6 py-8 flex flex-wrap font-medium [font-size:2.5rem] leading-[1.2] group content-start bg-about5 bg-no-repeat bg-cover bg-bottom">
            <h2 className="text-blck w-full">
                My<span className="text-gry ms-2">Experience</span>
            </h2>
            <ul className="flex content-between *:w-full flex-wrap *:flex *:justify-start *:items-center mt-8 *:mb-8">
                <li>
                    <FontAwesomeIcon icon={faAnglesRight} width='16' className="text-sm"/>
                    <span className="text-gry ms-1 [font-size:12px]">2023 // Now <span>___</span> Front End Dev ___ TDA inc.</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAnglesRight} width='16' className="text-sm"/>
                    <span className="text-gry ms-1 [font-size:12px]">2022 // 2023 <span>___</span> Front End Dev ___ Freelance</span>
                </li>
            </ul>
        </div>
    );
}

export default AboutGrid5;