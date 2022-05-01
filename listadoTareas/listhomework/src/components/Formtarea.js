import React from "react";
import { TareaContext } from "./Context";
import "../styleds/formtarea.css";
import React from 'react'



function Formtarea(){
    const [newTarea, setTareastate] = React.useState("")
    const{
        addTarea,
        setOpenModal,
    } = React.useContext(TareaContext);

    const cancelarTarea =()=>{
        setOpenModal(false);
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        if(newTarea===""){
            alert("Error: necesita escribir una tarea")
        }else{
            addTarea(newTarea)
            setOpenModal(false);
        }
        
    }

    const onChange=(event)=>{
        setTareastate(event.target.value);
         
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Nombre de la tarea</label>
            <textarea value={newTarea} onChange={onChange} placeholder="escribe tu tarea"/>
            <div className="groupButtonsTareas">
                <button className="buttonsTareas" type="button" onClick={cancelarTarea}>Cancelar</button>
                <button className="buttonsTareas" type="submit" >Crear</button>
            </div>
        </form>
    )
}

export {Formtarea};