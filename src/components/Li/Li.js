import React from "react";
import {LiStyled} from "./Li.styles";

export const Li = ({text, icon, padding}) => {
    return <LiStyled padding={padding}>{icon} {text}</LiStyled>
}