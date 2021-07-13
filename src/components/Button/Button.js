import React from 'react';
import {ButtonFormStyled, ButtonStyled} from './Button.styles'
import propTypes from "prop-types";

export const Button = ({text}) => {
    return (
        <ButtonStyled> {text}</ButtonStyled>
    );
};

export const ButtonForm = ({text}) => {
    return (
        <ButtonFormStyled> {text}</ButtonFormStyled>
    );
};

Button.propTypes = {
    children: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func
}

Button.defaultProps = {
    children: require,
    color: '#C4C4C4',
    onClick: Function
}
