import React from "react";
import '.././styleds/list.css'

function List(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
};

export {List};