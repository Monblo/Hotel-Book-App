import React from "react";
import {ImageStyled} from "./Image.styles";

export const Image = () => {
    return <ImageStyled />
}

Image.propTypes = {
    type: ([
        'header',
        'hotel1',
        'hotel2',
        'hotel3',
        'hotel4',
        'hotel5',
        'hotel6',
        'restaurant',
        'room1',
        'room2'
        ]
    ),
}