import React from "react"; // se importa la libre
import {Form, Label, Groupinputs, Inputs, P, Checkvalidate} from "../elementos/form";
import check from "../../img/icons8_Check_Circle_52px.png";

const App = () =>{// se crea el componente 
    return(
        <main>
            <Form>
                <div>
                    <Label>Usuario</Label>
                    <Groupinputs>
                        <Inputs type="text" placeholder="Usuario"/>
                        <Checkvalidate src={check} width="25px"></Checkvalidate>
                    </Groupinputs>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </div>
            </Form>
        </main>
    )
}

export default App;// se exporta el componente