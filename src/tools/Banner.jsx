import React from 'react'
import { Link } from 'react-router-dom';
function Banner({headerLight,headerBold,link,width,photo}) {
   
    return ( 
        <Link  to={link} className="banners__element">
            <div className="banners__mask"></div>
        <img src={photo} alt="" className="banners__element-img" />
        <div className="banners__element-text--container">
            <h3 className="banners__element-header">
                <span className="banners__element-header--light">{headerLight}</span>
                <span className="banners__element-header--bold">{headerBold}</span>
            </h3>
            { width>770&&
                <button  className="banners__element-button halmar__button">zobacz więcej</button>}
        </div>
    </Link>
     );
}

export default Banner;