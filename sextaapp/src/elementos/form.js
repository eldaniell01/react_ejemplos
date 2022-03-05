import styled from "styled-components";

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

`;

const Groupinputs = styled.div`
    position: relative;
    z-index: 90;
`;

const Inputs = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 4px;
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
`;

const P = styled.p`
    font-size: 12px;
    margin bottom: 0px;
    color: ${colres.error};
`;

const Checkvalidate = styled.img`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
`;

export {Form, Label, Groupinputs, Inputs, P, Checkvalidate};