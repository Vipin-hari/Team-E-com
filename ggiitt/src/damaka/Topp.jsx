import React from 'react';
import "./topp.css";

export const Topp = () => {
        const connectWallet = async () => {
          if (window.ethereum) {
            console.log('Detected');
            try {
              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error) {
              console.log('Error connecting');
            }
          } else {
            console.log('Not detected');
          }
      };
        return (
          <div className="navbarrr">
            <div className="icon">
              <img className='app-logo' src='Zordlogo2.png' alt='' />
            </div>
            <div className="menu">
              <ul>
                <li> <a className='menu-content' href="#home">HOME</a></li>
                <li> <a className='menu-content' href="#about2">ABOUT</a></li>
                <li> <a className='menu-content' href="#footer">HELP</a></li>  
                <button className='bttn-Loginn' onClick={connectWallet} type='submit'>Login</button>
              </ul>
            </div>
          </div>
      
          
        )
      };
