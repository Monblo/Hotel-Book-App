import React from "react";
import {PriceStyled} from "./Price.styles";

export const Price = ({price}) => {
    return <PriceStyled>
        <span>{price}&#8364;</span>
    </PriceStyled>
}