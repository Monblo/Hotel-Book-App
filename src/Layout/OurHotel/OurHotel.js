import React from "react";
import {CarouselContainer} from "./CarouselContainer";
import {H2} from "../../components/H2/H2";
import {ContainerStyled} from "../../components/Container/Container.styles";

export const OurHotel = () => {
    return (
        <ContainerStyled>
            <H2 title={"Our Hotel"} color={({theme}) => theme.colors.title}/>
            <CarouselContainer />
        </ContainerStyled>
    )
}