import React from "react";
import './elements.css';

export default function Link(props) {
    return (
        <a href={props.href} className="default">{props.children}</a>
    )

}