import React from 'react';
import {H1BookingStyled, H1Styled} from "./H1.styles";
import propTypes from "prop-types";

export const H1 = ({title}) => {
    return <H1Styled>{title}</H1Styled>
}

export const H1Booking = ({title}) => {
    return <H1BookingStyled>{title}</H1BookingStyled>
}

H1.propTypes = {
    title: propTypes.string
}