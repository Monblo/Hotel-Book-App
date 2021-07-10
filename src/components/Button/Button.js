import React from 'react';
import {ButtonFormStyled, ButtonStyled} from './Button.styles'

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
