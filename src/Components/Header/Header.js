import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import Nav from './Nav/Nav';

const header = () => {

  return (
    <header>
      <div className='HeaderContainer'>
          <div className='TopHeader'>
            <div className='Logo'>
              <p className='fas fa-utensils'><Link to='/'><span>Home Kitchen</span></Link></p>
            </div>
            <div className='UserOptions'>
              <div className='Search'>
                Search<input className='fas fa-search'/>
              </div>
              <div className='UserAccount'>
                <p className='fas fa-user'>Account </p>
              </div>
                <div className='ShoppingCart'>
                  <Link to='/ShoppingCart' className='fas fa-shopping-cart'></Link>
                  <div className='ShoppingCartSummary'>
                  </div>
                </div>
            </div>
          </div>
          <Nav />
      </div>
    </header>
  )

}



export default header;