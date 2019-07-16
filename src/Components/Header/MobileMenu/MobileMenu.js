import React from 'react';
import './MobileMenu.css';
import { Link } from 'react-router-dom';


const mobileMenu = (props) => {


  let mobileMenu = <React.Fragment></React.Fragment>
  if(props.show) {
    
    let categories = props.categories.map((cat)=>{
      const link = `/Category/${encodeURI(cat)}`;
      return (
        <li key={cat} className='MobileCat'>
          <Link to={link}>{cat}</Link>
        </li>
      )
    })
    
    mobileMenu = (
      <ul className='MobileMenuList'>
        <li className='MobileHome'>
          <div className='fas fa-home'></div>
          <Link to='/'>Home</Link>
        </li>
        {categories}
      </ul>
    )
  }

  return (
    <div onClick={props.toggleMenu}className='MobileMenu'>
      <div className='fas fa-bars'></div>
      {mobileMenu}
    </div>
  )


}



export default mobileMenu;