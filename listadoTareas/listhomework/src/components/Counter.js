import React from "react";
import '.././styleds/counter.css'
function Counter({total, completed}){
    
    return(
        <h2 className="counter">Haz completado {completed} de {total} tareas</h2>
    )
}

export default Counter;