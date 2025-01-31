import React from 'react';
import Grid1 from "@/components/Main Grid/Grid-1";
import Grid2 from "@/components/Main Grid/Grid-2";
import Grid3 from "@/components/Main Grid/Grid-3";
import Grid4 from "@/components/Main Grid/Grid-4";
import Grid5 from "@/components/Main Grid/Grid-5";
import Grid6 from "@/components/Main Grid/Grid-6";
import Grid7 from "@/components/Main Grid/Grid-7";
import Grid8 from "@/components/Main Grid/Grid-8";

function Main(props) {
    return (
        <div
            className="grid grid-cols-8 grid-rows-6 gap-4 *:h-[22rem] *:lg:h-[45dvh] *:xl:h-[20rem] *:rounded-[2rem] *:bg-white">
            <Grid1/>
            <Grid2/>
            <Grid3/>
            <Grid4/>
            <Grid5/>
            <Grid6/>
            <Grid7/>
            <Grid8/>
        </div>
    );
}
export default Main;