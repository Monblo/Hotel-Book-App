import React from 'react';
import {H1} from "../../components/H1/H1";
import {H2Yellow} from "../../components/H2/H2";
import header from "../../images/header.jpg";
import {ImageContainerStyled} from "../../components/ImageContainer/ImageContainer.styles";
import {Navbar} from "../../components/Navbar/Nav";

export const Header = () => {
    return <ImageContainerStyled url={header} height={'100vh'}>
        <Navbar />
        <H1 title={"Koh Phangan"}/>
        <H2Yellow title={"Thailand"} color={({theme}) => theme.colors.header} />
    </ImageContainerStyled>
}
