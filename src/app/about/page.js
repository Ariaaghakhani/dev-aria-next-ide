
import AboutGrid1 from "@/components/About Grid/AboutGrid1";
import AboutGrid2 from "@/components/About Grid/AboutGrid2";
import AboutGrid3 from "@/components/About Grid/AboutGrid3";
import AboutGrid4 from "@/components/About Grid/AboutGrid4";
import AboutGrid5 from "@/components/About Grid/AboutGrid5";
import AboutGrid6 from "@/components/About Grid/AboutGrid6";
import AboutGrid7 from "@/components/About Grid/AboutGrid7";
import {Metadata} from "next";
export const metadata = {
    title: "DEV Aria - About",
    description: "About page",
}
export default function About(){
    return(
        <div>
            <div className="grid grid-cols-8 grid-rows-10 *:rounded-[2rem] gap-4 *:bg-white *:border">
                <AboutGrid1/>
                <AboutGrid2/>
                <AboutGrid3/>
                <AboutGrid4/>
                <AboutGrid5/>
                <AboutGrid6/>
                <AboutGrid7/>
            </div>
        </div>
    )
}