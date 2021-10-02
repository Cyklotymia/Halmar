import React from 'react';
import MenuHamburger from './MenuHamburger';
import MenuList from './MenuList';

function MenuSection() {
    return (  
        <div className="menu">
            <MenuHamburger/>
            <MenuList/>
        </div>
        
    );
}

export default MenuSection;