import React from "react";
import './elements.css';

export default function Input(props) {
    return (
        <>
        <label className="default label">{props.children}</label>
        <input />
        </>
       
    )

}