import React from "react";
import {InputStyled} from "./Input.styles";
import propTypes from 'prop-types';

const Input = ({width, placeholder}) => {
    return (
            <InputStyled type="text" width={width} placeholder={placeholder}/>
    )
}

export default Input;

Input.propTypes = {
    placeholder: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func,
    name: propTypes.string,
    width: propTypes.number
}