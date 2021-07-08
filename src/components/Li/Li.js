import React from "react";
import {LiStyled} from "./Li.styles";

export const Li = ({text, icon}) => {
    return <LiStyled>{icon} {text}</LiStyled>
}