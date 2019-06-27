import React from 'react'

import './Header.css';

const header = () => {

  return (
    <header>
      <div className='HeaderAnnouncement'>
        <p>Free Domestic Shipping on Orders over $29</p>
      </div>
      <div className='NavContainer'>
        <nav>
          <div className='Logo'>
            <p>Rishi</p>
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