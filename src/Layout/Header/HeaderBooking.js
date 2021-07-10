import React from 'react';
import './header__boking.scss'
import {H1Booking} from "../../components/H1/H1";
import {Link} from "react-router-dom";

export const HeaderBooking = () => {
    return (
            <div className={'header__booking'}>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <H1Booking title={"Koh Phangan"}/>
                </Link>
            </div>
    )
}