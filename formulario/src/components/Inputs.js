import React from "react";
import { P, Title, Input, Groupinputs, Checkvalidate } from "../elements/form";
import V from "../img/icons8_ok_96px.png";
import E from "../img/icons8_cancel_96px.png";

const Inputs = ({fun, expresionRegular, state, changeState, title, id, error, type, placeholder, img}) =>{
    const write = (e) =>{
        changeState({...state, campo: e.target.value})
    }
    const validation = ()=>{
        if(expresionRegular){
            if(expresionRegular.test(state.campo)){
                changeState({...state, valido: 'true'});
            }else{
                changeState({...state, valido: 'false'});
            }
        }
        if(fun){
            fun();
        }else{

        }
    }
    return(
        <div>
            <Title htmlFor={id} valido={state.valido}>{title}</Title>
                <Groupinputs>
                    <Input 
                        type={type} 
                        placeholder={placeholder} 
                        id={id}
                        value={state.campo}
                        onChange={write}
                        onKeyUp={validation}
                        onBlur={validation}
                        valido={state.valido}
                    />
                    <Checkvalidate 
                        src={state.valido==='true' ? V:E} 
                        width="25px"
                        valido={state.valido}
                    />
                </Groupinputs>
            <P valido={state.valido}>{error}</P>
        </div>
    )
};

export default Inputs;