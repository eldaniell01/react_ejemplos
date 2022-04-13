import React from "react";
import '.././styleds/item.css';

function Item(props){
    const onComplete = () =>{
        alert('hola'+props.text);
    }

    const onDelete = () =>{
        alert('hola'+props.text);
    }
    return(
        <li>
            <div id="itemList">
                <span className={`icons iconCheck ${props.completed &&'iconactive' }`} onClick={onComplete}>√</span>
                <p className={`${props.completed && 'homeworkactive'}`}>{props.text}</p>
                <span className="delete" onClick={onDelete}>X</span>
            </div>
        </li>
    )
};
export {Item};