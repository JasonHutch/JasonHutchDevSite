import { Outlet } from "react-router-dom";
import Homepage from "../homepage/homepage";
import Header from "../../components/header/header";

import './layout.css';
import React from "react";

const Layout = () => {
    const [pathname, setPathname] = React.useState(window.location.pathname);

    const handleNavigation = (pathname:string) => {
        window.history.pushState({}, pathname, window.location.origin + pathname);
        setPathname(pathname);
    }

    return (
        <div className="layout">
            <header>
                <Header handleNavigation={handleNavigation}/>
            </header>
            <div className="layout__content">
                {
                    pathname === "/" ? <Homepage/> : <Outlet/>
                }
            </div>
        </div>
    );
};

export default Layout;