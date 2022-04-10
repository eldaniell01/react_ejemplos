import React from "react";

function Item(props){
    return(
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>D</span>
        </li>
    )
};
export {Item};