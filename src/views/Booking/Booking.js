import React from "react";
import {theme} from "../../Utils/Theme";
import {ThemeProvider} from "styled-components";
import {HeaderBooking} from "../../Layout/Header/HeaderBooking";
import {Form} from "../../components/Form/Form";

const Booking = () => {

    return (
        <ThemeProvider theme={theme}>
            <HeaderBooking />
            <Form />
        </ThemeProvider>
    )
}

export {Booking};