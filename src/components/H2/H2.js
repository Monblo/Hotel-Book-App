import React from 'react';
import {H2Styled} from "./H2.styles";
import propTypes from "prop-types";

export const H2 = ({title, isYellow, color}) => {
    return <H2Styled isYellow={isYellow} color={color}>{title}</H2Styled>
}

H2.propTypes = {
    text: propTypes.string,
    primary: propTypes.bool
}

H2.defaultProps = {
    text: 'title',
    primary: false
}