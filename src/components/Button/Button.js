import React from 'react';
import {ButtonStyled} from './Button.styles'

const Button = ({text}) => {
    return (
        <ButtonStyled> {text}</ButtonStyled>
    );
};

export {Button};