import React from "react";
import Heading from "../elements/Heading.js";
import GoButton from "../elements/GoButton.js";
import Lyric from "../elements/Lyric.js";
import Timer from "../elements/Timer.js";

export default function GamePage() {
    return (
        <>
        <div>
            <Heading>Lyrical</Heading>
            <div>
                <Timer></Timer>
            </div>
            <div>
                <Lyric></Lyric>
            </div>
            <div>
                <GoButton>Got it</GoButton>
            </div>

        </div>
       
        </>
        
    )

}