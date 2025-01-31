import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

function HoveredButton({hovered}) {
    const [hover, setHover] = useState(false);
    useEffect(() => {
        setHover(hovered);
    }, [hovered]);
    return (
        <button
            className={` text-gry border p-4 rounded-full w-16 h-10 flex justify-center items-center group-hover:bg-[#dee2e54d] overflow-hidden ${hover ? 'hovered-btn' : 'exited-btn'}` }>
            <FontAwesomeIcon icon={faArrowRightLong} className={`w-[14px] ${hover ? 'animation-fade':''}`}/>
        </button>
    );
}

export default HoveredButton;