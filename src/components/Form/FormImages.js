import React from "react";
import {ImageStyled} from "../Image/Image.styles";
import {Price} from "../Price/Price";
import {ContainerFooterStyled} from "../Container/Container.styles";

export const FormImages = ({rooms, getItems}) => {
    if (rooms.length === 0) {
        return (
            <div >
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }

    //get images
    let images = getItems(rooms, 'image')

    return (
        <ContainerFooterStyled flex={'flex'} justify={'center'}>
            {images.map((item, index) => {
                return (
                    <div className={'image__form__container'} key={index}>
                        <ImageStyled src={item}/>
                        <Price price={rooms[index].price}/>
                    </div>
                )
            })}
        </ContainerFooterStyled>
    )
};