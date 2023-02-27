import React from "react";
import './style.css';

export default function Link(props) {
    return (
        <a href={props.href} className="default">{props.children}</a>
    )

}