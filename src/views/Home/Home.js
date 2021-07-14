import React, {useContext} from "react";
import {OurHotel} from "../../Layout/OurHotel/OurHotel";
import {Header} from "../../Layout/Header/Header";
import {OurRooms} from "../../Layout/OurRooms/OurRooms";
import {Restaurants} from "../../Layout/Restaurants/Restaurants";
import {Footer} from "../../Layout/Footer/Footer";
import {theme} from "../../Utils/Theme";
import {ThemeProvider} from "styled-components";
// import {RoomContext} from "../../Layout/Context/RoomContext";

const Home = () => {
    // const contextValue = useContext(RoomContext)
    // console.log(contextValue)
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <OurHotel />
            <OurRooms />
            <Restaurants />
            <Footer />
        </ThemeProvider>
    )
}

export {Home};