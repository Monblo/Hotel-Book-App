import React, {useState} from 'react';
import {CarouselStyled} from "../../components/CarouselContainer/Carousel.styles";
import hotel1 from "../../images/hotel1.jpg";
import hotel2 from "../../images/hotel2.jpg";
import hotel3 from "../../images/hotel3.jpg";
import hotel4 from "../../images/hotel4.jpg";
import hotel5 from "../../images/hotel5.jpg";
import hotel6 from "../../images/hotel6.jpg";
import {ImageStyled} from "../../components/Image/Image.styles";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';
import {ArrowStyled} from "../../components/Arrow/Arrow.styles";
import styled from "styled-components";

const images = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];

const ImageWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
    `;

export const CarouselContainer = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex + 1)
    };

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex - 1)
    };

    return <CarouselStyled>
        {currentImageIndex !== 0 && <ArrowStyled onClick={prevImage}>
            <MdKeyboardArrowLeft />
        </ArrowStyled>}
        <ImageWrapper>
            <ImageStyled src={images[currentImageIndex]} />
            <ImageStyled src={images[currentImageIndex + 1]} />
        </ImageWrapper>
        {currentImageIndex !== images.length - 2 && <ArrowStyled onClick={nextImage}>
            <MdKeyboardArrowRight />
        </ArrowStyled>}
    </CarouselStyled>
}
