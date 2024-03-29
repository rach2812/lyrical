import React from "react";
import Link from "../elements/Link.js";
import Heading from "../elements/Heading.js";
import Input from "../elements/Input.js";
import GoButton from "../elements/GoButton.js";
import Timer from "../elements/Timer.js";

export default function LandingPage() {
    return (
        <>
        <div>
            <Heading>Lyrical</Heading>
            <div>
                <Link href="http://google.com">Settings</Link>
            </div>
            <div>
                <Input>Player name</Input>
            </div>
            <div>
                <GoButton>Got it</GoButton>
            </div>
            <div>
                <Timer></Timer>
            </div>

        </div>
       
        </>
        
    )

}