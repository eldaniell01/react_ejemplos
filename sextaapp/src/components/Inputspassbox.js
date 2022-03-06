import React from "react";
import {Label, Groupinputs, Passview, Inputs, P} from "../elementos/form";

const Inputpass = ({tipo, icon, name, error, expresionRegular, label, placeholder})=>{
    return(
        <div>
            <Label htmlFor={name}>{label}</Label>
            <Groupinputs>
                <Inputs type={tipo} placeholder={placeholder} id={name}/>
                <Passview src={icon} width="25px"></Passview>
            </Groupinputs>
            <P>{error}</P>
        </div>
    )
};

export default Inputpass;