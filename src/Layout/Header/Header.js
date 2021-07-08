import React from 'react';
import {H1} from "../../components/H1/H1";
import {H2} from "../../components/H2/H2";
import header from "../../images/header.jpg";
import {ImageContainerStyled} from "../../components/ImageContainer/ImageContainer.styles";

export const Header = () => {
    return <ImageContainerStyled url={header} height={'100vh'}>
        <H1 title={"Koh Phangan"}/>
        <H2 isYellow={'isYellow'} title={"Thailand"} color={({theme}) => theme.colors.header} />
    </ImageContainerStyled>
}
