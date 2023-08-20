import { Outlet } from "react-router-dom";
import Homepage from "../homepage/homepage";
import Header from "../../components/header/header";

import './layout.css';
import React from "react";
import AboutPageAlt from "../aboutAlt/aboutPageAlt";

const Layout = () => {
    const [pathname, setPathname] = React.useState(window.location.pathname);

    const handleNavigation = (pathname:string) => {
        window.history.pushState({}, pathname, window.location.origin + pathname);
        setPathname(pathname);
    }

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