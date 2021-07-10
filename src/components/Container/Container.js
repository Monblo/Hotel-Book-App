import React from "react";
import {ContainerStyled} from "./Container.styles";

export const Container = ({color, justify, flex, align}) => {
    return <ContainerStyled color={color} justify={justify} flex={flex} align={align}/>
}