import React from "react";
import './elements.css';

export default function GoButton(props) {
    return (
        <button className="button">{props.children}</button>
    )
}