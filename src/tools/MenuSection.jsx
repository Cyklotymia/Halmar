import React from 'react';
import MenuHamburger from './MenuHamburger';
import MenuList from './MenuList';

function MenuSection() {
    return (  
        <div className="menu">
            <div className="wrapper">
                <div className="menu__container">
            <MenuHamburger/>
            <MenuList/>
                </div>
            </div>
        </div>
        
    );
}

export default MenuSection;