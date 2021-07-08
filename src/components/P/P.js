import React from "react";
import {PStyled} from "./P.styles";

export const P = ({text, underImg}) => {
    return <PStyled underImg={underImg}>{text}</PStyled>
}