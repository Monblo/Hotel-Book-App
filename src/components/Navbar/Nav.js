import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {SidebarData} from "./SidebarData";
import '../../App.scss'
import {AiOutlineClose} from "react-icons/all";
import {HashLink as Link} from "react-router-hash-link";

export const Navbar = () => {
    const [sideBar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sideBar);

    return (
        <>
        <div className={'navbar'}>
            <Link to='#' className={sideBar ? 'menu__bars hidden' : 'menu__bars'} >
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sideBar ? 'nav__menu active' : 'nav__menu'} >
                <ul style={{padding: '0'}}>
                    <Link to='#' className={'menu__bars'} >
                        <AiOutlineClose onClick={showSidebar}/>
                    </Link>
                    {SidebarData.map((item, index) => {
                        return (
                              <li key={index} className={item.cName}>
                                 <Link smooth to={item.path} >
                                     {item.title}
                              </Link>
                            </li>
                        )
                    })}
                </ul>
        </nav>
        </>
    )
}