import React from 'react';
import HoverNav from '../HoverNav/HoverNav'
import { NavLink } from 'react-router-dom'


const nav = (props) =>{

  const navLinks = props.categories.map((cat)=>{
    const encodedCat = encodeURI(cat)
    var location = `/Category/${encodedCat}`
    return (
      <li className='NavLink' key={cat}>
        <NavLink to={location}>{cat}</NavLink>
        <HoverNav data={cat}/>
      </li>
    )
  })

  return (
    <nav>
      <div className='NavLinksContainer'>
        <ul className='NavLinks'>
          {navLinks}
        </ul>
      </div>
    </nav>
  )
}

export default nav;