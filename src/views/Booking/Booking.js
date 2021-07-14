import React, {useContext} from "react";
import {theme} from "../../Utils/Theme";
import {ThemeProvider} from "styled-components";
import {HeaderBooking} from "../../Layout/Header/HeaderBooking";
import {Form} from "../../components/Form/Form";
import {RoomContext} from "../../Layout/Context/RoomContext";

const Booking = () => {
    // const contextValue = useContext(RoomContext)
    // console.log(contextValue)
    return (
        <ThemeProvider theme={theme}>
            <HeaderBooking />
            <Form />
        </ThemeProvider>
    )
}

export {Booking};