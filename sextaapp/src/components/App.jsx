import React, {useState} from "react"; // se importa la libre
import {Form, Groupbutton, Grouperror, Button,} from "../elementos/form";
import error1 from "../../img/icons8_error_52px.png";
import Input from "./Inputsbox";
import Inputpass from "./Inputspassbox";
import view from "../../img/icons8_eye_48px.png";
import check from "../../img/icons8_Check_Circle_52px.png";
const App = () =>{// se crea el componente 
    const [usuario, cambiarUsuario] =useState({campo: '', valido: null});
    const [pass, cambiarPass] =useState({campo: '', valido: null});

    const expresiones = {
        usuario: /^[a-zA-Z\_\-]{6,16}$/,
    }

    return(
        <main>
            <Form>
                <Input 
                    estado={usuario}
                    cambiarEstado={cambiarUsuario}
                    label="Usuario"
                    placeholder="Usuario"
                    tipo="text"
                    name="usuario"
                    error="Usuario incorrecto"
                    icon={check}
                    expresionRegular={expresiones.usuario}
                />
                <Inputpass
                    label="Contraseña"
                    placeholder="Contraseña"
                    tipo="password"
                    name="pass"
                    error="Contraseña incorrecta"
                    icon={view}
                    expresionRegular=""
                />
                {false &&<Grouperror>
                    <p>
                        <img src={error1} width="25px"></img>
                        <b>Error:</b> Usuario o contraseña son incorrectos
                    </p>
                </Grouperror>}
                <Groupbutton>
                    <Button type="submit">Inciar Sesión</Button>
                </Groupbutton>
            </Form>
        </main>
    )
}

export default App;// se exporta el componente