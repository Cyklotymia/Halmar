import React from "react";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";

function Header() {
    return (  
        <header className="header">
            <div className="wrapper">
            <LogoSection/>
            <MenuSection/>
            </div>
        </header>
    );
}

export default Header
