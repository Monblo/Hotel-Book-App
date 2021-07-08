import React from "react";
import {OurHotel} from "../../Layout/OurHotel/OurHotel";
import {Header} from "../../Layout/Header/Header";
import Layout from "../../Layout/Layout";
import {OurRooms} from "../../Layout/OurRooms/OurRooms";
import {Restaurants} from "../../Layout/Restaurants/Restaurants";

const Home = () => {
    return (
        <Layout>
            <Header />
            <OurHotel />
            <OurRooms />
            <Restaurants />
        </Layout>
    )
}

export {Home};