import React from "react";
import {PStyled} from "./P.styles";
import propTypes from "prop-types";

export const P = ({text, align, color}) => {
    return <PStyled align={align} color={color}>{text}</PStyled>
}

P.propTypes = {
    text: propTypes.string,
    textAlign: propTypes.string,
    color: propTypes.string
}

P.defaultProps = {
    color: '#fff',
    textAlign: 'center'
}