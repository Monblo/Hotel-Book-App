import React from "react";
import {OurHotel} from "../../Layout/OurHotel/OurHotel";
import {Header} from "../../Layout/Header/Header";
import Layout from "../../Layout/Layout";
import {OurRooms} from "../../Layout/OurRooms/OurRooms";
import {Restaurants} from "../../Layout/Restaurants/Restaurants";
import {Footer} from "../../Layout/Footer/Footer";

const Home = () => {
    return (
        <Layout>
            <Header />
            <OurHotel />
            <OurRooms />
            <Restaurants />
            <Footer />
        </Layout>
    )
}

export {Home};