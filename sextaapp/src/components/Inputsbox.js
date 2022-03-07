import React from "react";
import {Label, Groupinputs, Checkvalidate, Inputs, P} from "../elementos/form";

const Input = ({estado, cambiarEstado, tipo, icon, name, error, expresionRegular, label, placeholder}) =>{
    const onChange =(e)=>{
        cambiarEstado({...estado, campo: e.target.value})
    }

    const validation = () =>{
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
            }else{
                cambiarEstado({...estado, valido: 'false'});
            }
        }
    }
    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <Groupinputs>
                <Inputs 
                    type={tipo} 
                    placeholder={placeholder} 
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validation}
                    onBlur={validation}
                    valido={estado.valido}
                    />
                <Checkvalidate valido={estado.valido} src={icon} width="25px" ></Checkvalidate>
            </Groupinputs>
            <P valido={estado.valido}>{error}</P>
        </div>
    )
};

export default Input;