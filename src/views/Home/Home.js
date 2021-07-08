import React from "react";
import {OurHotel} from "../../Layout/OurHotel/OurHotel";
import {Header} from "../../Layout/Header/Header";
import Layout from "../../Layout/Layout";
import {OurRooms} from "../../Layout/OurRooms/OurRooms";

const Home = () => {
    return (
        <Layout>
            <Header />
            <OurHotel />
            <OurRooms />
        </Layout>
    )
}

export {Home};