import React from "react";
import '.././styleds/item.css';

function Item(props){
    return(
        <li>
            <div id="itemList">
                <span className={`icons iconCheck ${props.completed &&'iconactive' }`}>√</span>
                <p className={`${props.completed && 'homeworkactive'}`}>{props.text}</p>
                <span className="delete">X</span>
            </div>
        </li>
    )
};
export {Item};