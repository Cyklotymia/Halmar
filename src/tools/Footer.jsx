import React from 'react'
import FooterMenuElements from './FooterMenuElements';


function Footer() {
    return ( 
        <div className="wrapper">
            <div className="footer__content">
                <div className="footer__menu">
                <FooterMenuElements/>
                
                </div>
                <div className="footer__contact">

                </div>
            </div>
        </div>
     );
}

export default Footer;