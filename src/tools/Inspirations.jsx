import React from 'react'
import InspirationsNav from './InspirationsNav';
import InspirationsPhoto from './InspirationsPhoto';
import InspirationsProducts from './InspirationsProducts';
function Inspirations() {
    return (  
        <section className="inspirations">
            <div className="wrapper">
            <InspirationsNav/>
            <InspirationsPhoto/>
            <InspirationsProducts/>

            </div>
        </section>
    );
}

export default Inspirations;