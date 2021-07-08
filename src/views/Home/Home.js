import React from "react";
import {OurHotel} from "../../Layout/OurHotel/OurHotel";
import {Header} from "../../Layout/Header/Header";
import Layout from "../../Layout/Layout";

const Home = () => {
    return (
        <Layout>
            <Header />
            <OurHotel />
        </Layout>
    )
}

export {Home};