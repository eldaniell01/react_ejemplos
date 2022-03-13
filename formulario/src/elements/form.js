import styled, {css} from "styled-components";


const colres ={

    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Form = styled.form`
    font-weight: 700;
    font-size: 1.1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media(max-width:800px){
        grid-template-columns: 1fr;
    }
`;

const Title = styled.label`
    display: block ;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    transition: 0.5s ease all;
    ${props => props.valido === 'false' && css`
        color: ${colres.error};
    `}

    ${props => props.valido === 'true' && css`
        color: ${colres.exito};
    `}
`;

const Groupinputs = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background-color: transparent ;
    border: 0;
    font-weight: 400;
    font-size: 1em;
    height: 50px;
    line-height: 50px;
    padding: 0 40px 0 10px;
    transition: 0.5s ease all;
    border-bottom: 3px solid #B4BEC9;
    &:focus{
        
        outline: none;
        box-shadow: 0px 5px 30px rgba(163,163,163,0.4); 
    }
    ${props => props.valido === 'false' && css`
        border-bottom: 3px solid ${colres.error};
    `}
    ${props => props.valido === 'true' && css`
        border-bottom: 3px solid ${colres.exito};
    `}
`;

const Checkvalidate = styled.img`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    opacity: 0;
    transition: 0.5s;
    ${props=>props.valido === 'true'&&css`
        display: block;
        opacity: 1;
    `}
    ${props=>props.valido === 'false'&&css`
        display: block;
        opacity: 1;
    `}
`;

const Checkerror = styled.img`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    display: none ;
`;

const Passview = styled.img`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    
`;

const P = styled.p`
    font-size: 12px;
    margin bottom: 0px;
    color: ${colres.error};
    display: none;
    transition: 0.5s;
    ${props => props.valido ==='true' && css`
        color: ${colres.exito}
        
    `}
    ${props => props.valido === 'false' && css`
        color: ${colres.error};
        display: block;
    `}
    
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
const Groupemail = styled.div`
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
        box-shadow: 3px 0px 10px rgba(13, 13, 13, 0.5);
        
    }
    
    @media(max-width:800px){
        font-weight: 400;
        font-size: 0.2em;
    }
`;

const Grouperror = styled.div`
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



export {P, Groupemail, Grouperror, Form, Button, Groupbutton, Groupinputs, Checkvalidate, Checkerror, Input, Title};