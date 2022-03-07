import React from "react";
import {Label, Groupinputs, Passview, Inputs, P} from "../elementos/form";

const Inputpass = ({estado, cambiarEstado, tipo, icon, name, error, expresionRegular, label, placeholder})=>{
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
    const changePass = () =>{
        var tipo = document.getElementById(name);
        if(tipo.type == "password"){
            tipo.type ="text";
        }else{
            tipo.type ="password";
        }
    }
    return(
        <div>
            <Label htmlFor={name}>{label}</Label>
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
                <Passview 
                    src={icon} 
                    width="25px" 
                    onClick={changePass}
                />
            </Groupinputs>
            <P valido={estado.valido}>{error}</P>
        </div>
    )
};

export default Inputpass;