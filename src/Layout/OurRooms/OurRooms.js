import React from "react";
import {H2} from "../../components/H2/H2";
import {P} from "../../components/P/P";
import {ContainerStyled} from "../../components/Container/Container.styles";
import {TextContainerStyled} from "../../components/TextContainer/TextContainer.styles";
import {Li} from "../../components/Li/Li";
import {FaUmbrellaBeach, FaParking} from 'react-icons/fa';
import {MdFreeBreakfast, MdWifi, MdPets} from 'react-icons/md';
import {GiSoap} from 'react-icons/gi';
import {RiSafe2Line} from 'react-icons/ri';
import {BiBath} from 'react-icons/bi';
import {ImageStyled} from "../../components/Image/Image.styles";
import room1 from '../../images/room1.jpg';
import room2 from '../../images/room2.jpg';


export const OurRooms = () => {
    return <ContainerStyled color={({theme}) => theme.colors.background}>

        <H2 title={'Our Rooms'} color={({theme}) => theme.colors.basic}/>

        <TextContainerStyled>
            <div style={{margin:'0 1rem', maxWidth:'20.625rem'}}>
            <P align={'right'} text={`Our 14 elegant guest rooms completely enveloped by nature, are juxtaposed around an epic tropical pool.`}/>
            </div>
            <ul style={{padding: '0 2rem'}}>
                <Li icon={<FaUmbrellaBeach/>} text={'Jungle Pool & Bar'} />
                <Li icon={<MdFreeBreakfast/>} text={'Breakfast included'}/>
                <Li icon={<GiSoap/>} text={'All natural soaps, shampoos, and lotions'}/>
                <Li icon={<MdWifi/>} text={'Free Wifi'}/>
                <Li icon={<MdPets/>} text={'Pets'}/>
                <Li icon={<FaParking/>} text={'Parking'}/>
                <Li icon={<RiSafe2Line/>} text={'Safe'}/>
                <Li icon={<BiBath/>} text={'Hairdryer'}/>
            </ul>
        </TextContainerStyled>
        <TextContainerStyled>
            <div style={{padding: '0 1.25rem', maxWidth:'30.125rem'}}>
                <ImageStyled src={room1}/>
                <P align={'left'} text={'STANDARD ROOM'} />
                <P align={'left'} text={'PETITE JUNGLE PEACE'}/>
                <P align={'left'} text={'Peaceful and private, kick back in comfort with lush views just steps away from our sun deck and a tropical pool.'}/>
                <br />
                <Li text={'View: Jungle'}/>
                <br />
                <Li text={'Floor: Ground'}/>
                <br />
                <Li text={'Size:  22 Sqm / 235 sqft'}/>
                <br />
                <Li text={'Bed: King'}/>
                <br />
                <Li text={'Sleeps: 2 guests'}/>
                <br />
                <Li text={'Bathroom: Shower'}/>
                <br />
                <Li text={'A/C 24-Hour'}/>
            </div>
            <div style={{padding: '0 1.25rem', maxWidth:'30.125rem'}}>
                <ImageStyled src={room2}/>
                <P align={'left'} text={'SUITE DELUXE'} />
                <P align={'left'} text={'HIDDEN REFUGE'}/>
                <P align={'left'} text={'STANDARD ROOM'} />
                <P align={'left'} text={'Our most spacious rooms offer the utmost in privacy and comfort, adorned with bohemian textiles, tropical woods, and modern furnishings.'}/>
                <br />
                <Li text={'View: Pool & Jungle'}/>
                <br />
                <Li text={'Floor: Ground'}/>
                <br />
                <Li text={'Size:  40 Sqm / 430 sqft'}/>
                <br />
                <Li text={'Bed: King'}/>
                <br />
                <Li text={'Sleeps: 3 guests'}/>
                <br />
                <Li text={'Bathroom: Shower'}/>
                <br />
                <Li text={'A/C 24-Hour'}/>
                <br />
                <Li text={'Terrace: 9 Sqm / 100 sqft'}/>
            </div>
        </TextContainerStyled>
    </ContainerStyled>
}