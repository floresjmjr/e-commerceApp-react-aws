import React from 'react';
import HoverNav from '../HoverNav/HoverNav'
import { NavLink } from 'react-router-dom'


const nav = () =>{

  const categories = [
    "Kitchen & Dining", 
    "Artwork", 
    "Furniture", 
    "Bedding", 
    "Storage & Organization", 
    "Bath", 
    "Heating, Cooling & Air Quality", 
    "Irons & Steamers", 
    "Vacuums & Floor Care",
  ]

  const navLinks = categories.map((cat)=>{
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