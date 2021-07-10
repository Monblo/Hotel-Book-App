import React from 'react';
import {H2Styled, H2YellowStyled} from "./H2.styles";
import propTypes from "prop-types";

export const H2 = ({title, color, size}) => {
    return <H2Styled color={color} size={size}>{title}</H2Styled>
}

export const H2Yellow = ({title, color, size}) => {
    return <H2YellowStyled color={color} size={size}>{title}</H2YellowStyled>
}

H2.propTypes = {
    text: propTypes.string,
    primary: propTypes.bool
}

H2.defaultProps = {
    text: 'title',
    primary: false
}