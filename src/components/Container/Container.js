import React from "react";
import {ContainerStyled} from "./Container.styles";
import propTypes from "prop-types";

export const Container = ({color, justify, flex, align}) => {
    return <ContainerStyled color={color} justify={justify} flex={flex} align={align}/>
}

Container.propTypes = {
    color: propTypes.string,
    justifyContent: propTypes.string,
    display: propTypes.string,
    alignItems: propTypes.string
}

Container.defaultProps = {
    color: '#fff'
}