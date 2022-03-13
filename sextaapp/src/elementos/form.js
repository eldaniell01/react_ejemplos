import styled, {css} from "styled-components";

const colres ={

    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Form = styled.form`
    font-weight: 600;
    font-size: 1.1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media(max-width:800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block ;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    ${props => props.valido === 'false' && css`
        color: ${colres.error};
    `}
    
`;

const Groupinputs = styled.div`
    position: relative;
    z-index: 90;
`;

const Inputs = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 4px;
    font-weight: 400;
    font-size: 1em;
    height: 50px;
    line-height: 50px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 3px solid transparent;
    &:focus{
        border: 3px solid ${colres.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4); 
    }

    ${props => props.valido==='true' && css`
        border: 3px solid ${colres.exito} !important;
    `}

    ${props => props.valido==='false' && css`
        border: 3px solid ${colres.error} !important;
    `}
    
`;

const P = styled.p`
    font-size: 12px;
    margin bottom: 0px;
    color: ${colres.error};
    display: none;
    ${props => props.valido==='true'&&css`
        display: none ;
    `}
    ${props => props.valido==='false'&&css`
        display: block ;
    `}
`;

const Checkvalidate = styled.img`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    display: block ;
    ${props => props.valido==='true'&&css`
        display: block;
    `}
    ${props => props.valido==='false'&&css`
        display: none;
    `}
`;

const Passview = styled.img`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    
`;

const Grouperror =styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colres.error};
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    
    p{
        margin: 0px;
    }
    b{
        margin-left: 30px;
    }
    img{
        position: absolute;
        margin-top: 10px;
    }
    @media(max-width:800px){
        grid-column: span 1;
    }
`;

const Groupbutton =styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    @media(max-width:800px){
        grid-column: span 1;
    }
`;

const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #005C53;
    font-weight: 400;
    font-size: 1em;
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    
    transition: 0.3s ease all;
    &:hover{
        box-shadow: 3px 0px 10px rgba(13, 13, 13, 1);
    }
`;

const Titulo = styled.label`
    font-weight: 700;
    font-size: 1.2em;
`;



export {Titulo, Form, Label, Groupinputs, Inputs, P, Checkvalidate, Groupbutton, Grouperror, Button, Passview};