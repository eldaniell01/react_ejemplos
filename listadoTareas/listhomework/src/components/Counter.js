import React from "react";
import '.././styleds/counter.css'
import { TareaContext } from "./Context";
function Counter(){
    const {total, completedHomework} = React.useContext(TareaContext)
    return(
        <h2 className="counter">Haz completado {completedHomework} de {total} tareas</h2>
    )
}

export default Counter;