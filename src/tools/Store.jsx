import React from 'react'

import StoreElements from './StoreElements';




function Store() {
  
    return ( 
        <section className="store">
            <div className="wrapper">
            <h3 className="store__header halmar__header--bold halmar__header">schowek</h3>
            <div className="store__content">
                <StoreElements/>
            </div>

            </div>
        </section>
     );
}

export default Store;