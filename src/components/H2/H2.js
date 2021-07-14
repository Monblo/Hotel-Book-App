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
    title: propTypes.string,
    color: propTypes.string,
    fontSize: propTypes.number
}

H2.defaultProps = {
    fontSize: '2.25rem'
}