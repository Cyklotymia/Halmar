import React,{useRef} from 'react'
import Banner from './Banner';
import { useContainerDimensions } from './customHooks/resize';
import bannerPhoto from "../assets/images/banner_01.jpg"
import bannerPhoto2 from "../assets/images/banner_02.jpg"

function Banners() {
  
    const componentRef = useRef();
    const { width } = useContainerDimensions(componentRef);
    return (
        <section ref={componentRef} className="banners">
                <div className="wrapper">
            <div className="banners__container">
             <Banner photo ={bannerPhoto} width={width} link ={"/dla_architektów"}headerLight={"dla"} headerBold={"architektów"}/>
             <Banner photo ={bannerPhoto2} width={width} link={"/gdzie_kupic"} headerLight={"gdzie"} headerBold={"kupić"}/>
             </div>
            </div>
        </section>
      );
}

export default Banners;