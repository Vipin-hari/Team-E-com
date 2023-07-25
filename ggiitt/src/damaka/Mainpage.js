import React from 'react';
import { Link } from 'react-router-dom';
import CarouseLL from './CarouseLL';
import Footerbody from './Footerbody';
import Aboutme from './Aboutme';
import { Topp } from './Topp';

const Mainpage = () => {
    return (   
        <div className="main">
            <Topp />
            <CarouseLL />
        <div className="content" id="content">
          <Link to ='imptpage'>
            <button className="cn cn1">Become a Seller</button>
            </Link >
            <Link to = 'buyer'>
               <button className="cn cn2">Start buying</button>
            </Link>
            </div>
            <Aboutme />
            <Footerbody />
        </div>     

  )
}

export default Mainpage
