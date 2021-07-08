import React from 'react';
import {ButtonStyled} from './Button.styles'

const Button = ({size}) => {
    return (<div>
            <ButtonStyled> {size}</ButtonStyled>
        </div>
    );
};

export {Button};