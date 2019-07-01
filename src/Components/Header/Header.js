import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

import HoverNav from './HoverNav/HoverNav';

const header = () => {

  return (
    <header>
      <div className='NavContainer'>
        <nav>
          <div className='Logo'>
            <p className='fas fa-leaf'><Link to='/'>Brand</Link></p>
          </div>
          <div className='NavLinksContainer'>
            <ul className='NavLinks'>
              <li className='NavLink'>
                <Link to='/Category-1'>Category1</Link>
                <HoverNav data={'Category-1'}/>
              </li>
              <li className='NavLink'>
                <Link to='/Category-2'>Category2</Link>
                <HoverNav data={'Category-2'}/>
              </li>
              <li className='NavLink'>
                <Link to='/Category-3'>Category3</Link>
                <HoverNav data={'Category-3'}/>
              </li>
              <li className='NavLink'>
                <Link to='/Category-4'>Category4</Link>
                <HoverNav data={'Category-4'}/>
              </li>
              <li className='NavLink'>
                <Link to='/Category-5'>Category5</Link>
                <HoverNav data={'Category-5'}/>
              </li>
              <li className='NavLink'>
                <Link to='/Category-6'>Category6</Link>
                <HoverNav data={'Category-6'}/>
              </li>
              <li className='NavLink'>
                <Link to='/Category-7'>Category7</Link>
                <HoverNav data={'Category-7'}/>
              </li>
            </ul>
          </div>
          <div className='UserIcons'>
            <div className='UserAccount'>
              <p className='fas fa-user'>MyAccount </p>
              <p className='fas fa-shopping-cart'>(0)</p>
            </div>
            <div className='Search'>
              <p>Search</p>
              <div  className='fas fa-search'></div>
            </div>
          </div> 
        </nav>
      </div>
    </header>
  )

}



export default header;