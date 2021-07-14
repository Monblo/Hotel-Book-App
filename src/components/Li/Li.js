import React from "react";
import {LiStyled} from "./Li.styles";
import propTypes from "prop-types";

export const Li = ({text, icon, padding}) => {
    return <LiStyled padding={padding}>{icon} {text}</LiStyled>
}

Li.propTypes = {
    text: propTypes.string,
    icon: propTypes.string,
    padding: propTypes.number
}
