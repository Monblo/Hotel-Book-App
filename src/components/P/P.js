import React from "react";
import {PStyled} from "./P.styles";

export const P = ({text, align, color}) => {
    return <PStyled align={align} color={color}>{text}</PStyled>
}