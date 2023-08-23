import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";

import './layout.css';
import React from "react";
import AboutPageAlt from "../aboutAlt/aboutPageAlt";

const Layout = () => {
    const [pathname] = React.useState(window.location.pathname);


    return (
        <div className="layout">
            <header>
                <Header/>
            </header>
            <div className="layout__content">
                {
                    pathname === "/" ? <AboutPageAlt/> : <Outlet/>
                }
            </div>
        </div>
    );
};

export default Layout;