import React from 'react'
import { useRef,useEffect } from 'react';




function StatsElement({img,number,unit,text,isScrolled}) {
 let startNumber=0
const elementOfStats = useRef()
useEffect(() => {
    
    const count= setInterval(()=>{
        if (number>startNumber && isScrolled) {
          startNumber+=number/100
          startNumber=parseInt(startNumber)
            
               elementOfStats.current.textContent=`${startNumber} ${unit}`
           }
       },10)
            
        
    
    return () => {
       clearInterval(count)
    }
}, [isScrolled])
    
   


    return ( 
        <div className="stats__element">
            <img src={img} className="stats__element-img"></img>
            <span ref={elementOfStats} className="stats__element-number">{`${startNumber} ${unit}`}</span>
            <span className="stats__element-text">{text}</span>
        </div>
     );
}

export default StatsElement;