import React from "react";
import {InputStyled} from "./Input.styles";

const Input = ({width, placeholder}) => {
    return (
            <InputStyled type="text" width={width} placeholder={placeholder}/>
    )
}

export default Input;
