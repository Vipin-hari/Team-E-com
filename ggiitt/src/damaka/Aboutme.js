import React from 'react';
import "./aboutme.css";

const Aboutme = () => {
    return (
        <div id="about" className='about' style={{ margin: { left: -10, right: -10 } }}>
          <div className='about-container'>
          <div className='about-image'>
          <img className='image' src='shirts.gif' alt='' />
            </div>
              <div className='about-text'>
                <h1 className='text'>
                  The e-commerce Website<br />
                </h1>
                <div className='container-a'>
                  <h1 className='text-animate'>
                  That Cares!!!
                  </h1>
                </div>
              </div>
              
              <div className='about-image'>
                <img className='image' src='about-img.gif' alt='' />  
              </div>
          
          </div>
          {/* <hr></hr> */}
        <div className='about-container2' id='about2'>
        <div className='about-image2'>
          <img className='image' src='About-add.jpg' alt='' />
            </div>
            <div className='about-text2'>
              
              <h3>Welcome to ZORDSHOP!!!By this, we are revolutionizing the way you<br />
                shop online by leveraging the transparent technology of blockchain.<br />
                Our mission is to provide a seamless shopping experience, where every<br />
                transaction is recorded immutably, ensuring utmost integrity for our <br />
                valued customers. Join us in embracing the future of ecommerce</h3>
              </div>
      </div>
        </div>
      )
};

export default Aboutme;
