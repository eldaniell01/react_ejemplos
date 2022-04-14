import React from "react";
import '.././styleds/item.css';

function Item(props){
    
    return(
        <li>
            <div id="itemList">
                <span className={`icons iconCheck ${props.completed &&'iconactive' }`} onClick={props.onCompleted}>√</span>
                <p className={`${props.completed && 'homeworkactive'}`}>{props.text}</p>
                <span className="delete" onClick={props.onDelete}>X</span>
            </div>
        </li>
    )
};
export {Item};