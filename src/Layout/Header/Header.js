import React from 'react';
import {ImageContainerStyled} from "../../components/ImageContainer/ImageContainer.styles";
import {H1} from "../../components/H1/H1";
import {H2} from "../../components/H2/H2";

export const Header = () => {
    return <ImageContainerStyled>
        <H1 title={"Koh Phangan"}/>
        <H2 isYellow={'isYellow'} title={"Thailand"} color={({theme}) => theme.colors.header}/>
    </ImageContainerStyled>
}
