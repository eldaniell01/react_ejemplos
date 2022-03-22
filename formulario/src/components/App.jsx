import React, {useState} from "react";
import { Form, Groupsuccess, Groupcheck, Grouperror, Button, Groupbutton, Title, Groupemail} from "../elements/form";
import V from "../img/icons8_ok_96px.png";
import Error from "../img/icons8_error_52px_1.png";
import Success from '../img/icons8_checked_checkbox_60px.png';
import Inputs from "./Inputs";

const App = () =>{
    const [firtsname, changefirtsName] =useState({campo: '', valido: null});
    const [lastname, changeLastname] =useState({campo: '', valido: null});
    const [address, changeAddress] =useState({campo: '', valido: null});
    const [phone, changePhone] =useState({campo: '', valido: null});
    const [email, changeEmail] =useState({campo: '', valido: null});
    const [pass, changePass] =useState({campo: '', valido: null});
    const [pass2, changePass2] =useState({campo: '', valido: null});
    const [validation, changeValidation] =useState(false);
    const [formvalidation, changeFormvalidation] = useState(null);
    
    const regularExpr = {
        user: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
        password: /^.{6,25}$/,
        email: /^[a-z0-9_.+-]+@[gmail]+\.[com.]+$/,
        numPhone: /^\d{8,14}$/

    }
    const valuePass = ()=>{
        if(pass.campo.length>0){
            if(pass.campo!==pass2.campo){
                changePass2((prev)=>{
                    return {...prev, valido: 'false'}
                })
            }else{
                changePass2((prev)=>{
                    return {...prev, valido: 'true'}
                })
            }
        }
    }
    const terminosN =(e)=>{
        changeValidation(e.target.checked);
        console.log(e);
    }
    const onsumit=(e)=>{
        e.preventDefault();
        if( firtsname.valido==='true'&&
            lastname.valido==='true' &&
            address.valido==='true' &&
            phone.valido === 'true' &&
            email.valido === 'true' &&
            pass.valido === 'true' &&
            pass2.valido === 'true' &&
            validation
            ){
            changeFormvalidation(true);
            changeAddress({campo: '', valido: null});
            changefirtsName({campo: '', valido: null});
            changeLastname({campo: '', valido: null});
            changePhone({campo: '', valido: null});
            changeEmail({campo: '', valido: null});
            changePass({campo: '', valido: null});
            changePass2({campo: '', valido: null});
            changeValidation(false);
            console.log("correcto");

        }else{
            changeFormvalidation(false);
            console.log("incorrecto")
        }
    }
    return(
        <main>
            <Title><center>REGISTRO DE USUARIO</center></Title>
            <Form action="" onSubmit={onsumit}>
                <Inputs
                    state={firtsname}
                    changeState={changefirtsName}
                    title="Nombre"
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    error="Error en el campo"
                    expresionRegular={regularExpr.user}
                />
                <Inputs
                    state={lastname}
                    changeState={changeLastname}
                    title="Apellido"
                    id="apellido"
                    type="text"
                    placeholder="Apellido"
                    error="Error en el campo"
                    expresionRegular={regularExpr.user}
                />

                <Inputs
                    state={address}
                    changeState={changeAddress}
                    title="Dirección"
                    id="direccion"
                    type="text"
                    placeholder="Dirección"
                    error="Error en el campo"
                    expresionRegular={regularExpr.user}
                />
                <Inputs
                    state={phone}
                    changeState={changePhone}
                    title="Teléfono"
                    id="telefono"
                    type="text"
                    placeholder="Teléfono"
                    error="Error en el campo"
                    expresionRegular={regularExpr.numPhone}
                />
                <Groupemail>
                    <Inputs
                        state={email}
                        changeState={changeEmail}
                        title="Email"
                        id="email"
                        type="text"
                        placeholder="Email@ejempl0.com"
                        error="Error en el campo"
                        expresionRegular={regularExpr.email}
                    />
                </Groupemail>      
                <Inputs
                    state={pass}
                    changeState={changePass}
                    title="Contraseña"
                    id="password"
                    type="password"
                    placeholder="*******"
                    error="Error en el campo"
                    expresionRegular={regularExpr.password}
                />

                <Inputs
                    state={pass2}
                    changeState={changePass2}
                    title="Contraseña"
                    id="password2"
                    type="password"
                    placeholder="*******"
                    error="Error en el campo"
                    fun={valuePass}
                    
                />

                <Groupcheck>
                    <label>
                        <input type="checkbox" name="terminos" id="terminos" checked={validation} onChange={terminosN}/>
                        Aceptar terminos y condiciones
                    </label>

                </Groupcheck>
                
                {formvalidation===true && <Groupsuccess>
                    <p>
                        <img src={Success} width="25px"/>
                        <b>Exito: </b>Formulairo Compeltado
                    </p>
                </Groupsuccess>}

                {formvalidation===false && <Grouperror>
                    <p>
                        <img src={Error} width="25px"/>
                        <b>Error: </b>Formulario no completado
                    </p>
                </Grouperror>}
                <Groupbutton>
                    <Button type="submit">Registrar Usuario</Button>
                </Groupbutton>
            </Form>
        </main>
    )
};

export default App;