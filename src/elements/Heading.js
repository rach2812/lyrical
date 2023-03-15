import React from "react";
import './elements.css';

export default function Heading(props) {
    return (
        <h1 className="default">{props.children}</h1>
    )

}