import React from 'react'

import './Header.css';

const header = () => {

  return (
    <header>
      <div className='HeaderAnnouncement'>
        <p>Free Shipping on Order over $30!</p>
      </div>
      <div className='NavContainer'>
        <nav>
          <div className='Logo'>
            <p>LOGO</p>
          </div>
          <div className='NavLinksContainer'>
            <ul className='NavLinks'>
              <li>New</li>
              <li>Loose Leaf</li>
              <li>Sachets</li>
              <li>Chai</li>
              <li>Matcha</li>
              <li>Teaware</li>
              <li>Learn</li>
            </ul>
          </div>
          <div className='UserIcons'>
            <div className='UserAccount'>
              <p>MyAccount</p>
            </div>
            <div className='Search'>
              <p>Search</p>
            </div>
          </div> 
        </nav>
        </div>
    </header>
  )

}



export default header;