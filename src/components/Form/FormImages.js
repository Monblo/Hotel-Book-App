import React from "react";
import {ImageStyled} from "../Image/Image.styles";
import {Price} from "../Price/Price";
import {ContainerFooterStyled} from "../Container/Container.styles";
import room1 from '../../images/room1.jpg';
import room2 from '../../images/room2.jpg';

export const FormImages = () => {
    return (
        <ContainerFooterStyled flex={'flex'} justify={'center'}>
            <div className={'image__form__container'}>
                <ImageStyled src={room1} />
                <Price price={'50 '}/>
            </div>
            <div className={'image__form__container'}>
                <ImageStyled src={room2}/>
                <Price price={'100 '}/>
            </div>
        </ContainerFooterStyled>
    )
};