import React from 'react';
import {ContainerFooterStyled} from "../../components/Container/Container.styles";
import {H2} from "../../components/H2/H2";
import {P} from "../../components/P/P";
import Input from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {WeatherInfo} from "../../components/Weather/Weather";

export const Footer = () => {
    return (
        <ContainerFooterStyled id='footer' color={({theme}) => theme.colors.footer} flex={'flex'} justify={'space-around'}>
            <div >
                <H2 color={({theme}) => theme.colors.basic} title={'Contact'} size={'1.5rem'}/>
                <P text={'Reservations:  EMAIL | +XX XXX XXX XXX'} />
                <WeatherInfo />
            </div>
            <div style={{maxWidth: '33rem'}}>
                <H2 color={({theme}) => theme.colors.basic} title={'Newsletter'} size={'1.5rem'}/>
                <P text={'If you would like to discover more about Radhoo Tulum, you can receive the\n' +
                'latest news by providing your contact details'} />
                <div style={{display:"flex", justifyContent: 'center'}}>
                <Input placeholder={'email'} width={'21rem'} />
                <Button text={'SIGN UP'}/>
                </div>
            </div>
    </ContainerFooterStyled>
    )
}