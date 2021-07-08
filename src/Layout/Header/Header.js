import React from 'react';
import {HeaderContainerStyled} from "../../components/Content/HeaderContainer.styles";
import {H1} from "../../components/H1/H1";
import {H2} from "../../components/H2/H2";

export const Header = () => {
    return <HeaderContainerStyled>
        <H1 title={"Koh Phangan"}/>
        <H2 isYellow={'isYellow'} title={"Thailand"}/>
    </HeaderContainerStyled>
}
