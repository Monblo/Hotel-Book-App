import React from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "../Utils/Theme";

const Layout = ({children}) => {
    return <ThemeProvider theme={theme}>
        <div>
            {children}
        </div>
    </ThemeProvider>
}

export default Layout;