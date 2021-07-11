import React from "react";
import {ImageStyled} from "../../components/Image/Image.styles";
import {Price} from "../../components/Price/Price";
import {ContainerStyled} from "../../components/Container/Container.styles";
import room1 from '../../images/room1.jpg';
import room2 from '../../images/room2.jpg';

export const FormImages = () => {
    return (
        <ContainerStyled flex={'flex'} justify={'center'}>
            <div className={'image__form__container'}>
                <ImageStyled src={room1} />
                <Price price={'50 '}/>
            </div>
            <div className={'image__form__container'}>
                <ImageStyled src={room2}/>
                <Price price={'100 '}/>
            </div>
        </ContainerStyled>
    )
};