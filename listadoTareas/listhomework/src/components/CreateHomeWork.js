import React from "react";
import '../styleds/createhomework.css'

function CreateHomeWork(props){
    const agregarTarea=()=>{
        props.setOpenModal(prevState =>!prevState)
    }
    return(
        <div className="ButtonGroup">
            <button className="buttonCreate" onClick={agregarTarea}>+</button>
        </div>
    )
};

export {CreateHomeWork};