import React from "react";
import {ContainerStyled} from "../../components/Container/Container.styles";
import {H2} from "../../components/H2/H2";
import {P} from "../../components/P/P";
import {ImageContainerStyled} from "../../components/ImageContainer/ImageContainer.styles";
import restaurant from "../../images/restaurant.jpg"

export const Restaurants = () => {
    return (
        <>
        <ContainerStyled>
            <H2 title={'OUR RESTAURANTS AND BARS'} color={({theme}) => theme.colors.title} size={'1.875rem'}/>
            <H2 title={'POOLSIDE & BAR'} color={({theme}) => theme.colors.dark} size={'1rem'}/>
            <P text={'Enjoy local cuisine and refreshing cocktails Poolside from the comfort of your lounge chair with something to suit your every mood all day long.'}
               color={({theme}) => theme.colors.title}/>
        </ContainerStyled>
        <ImageContainerStyled url={restaurant} height={'70vh'}/>
        </>
    )
}
