import React from 'react';
import './SubCatList.css'
import { Link } from 'react-router-dom';


const subCatList = (props) =>{

  let list = [];

  switch(props.category) {
    case "Kitchen & Dining":
      list = ["Dining & Entertaining","Serveware","Beverage Serveware","Carafes & Pitchers"]
      break;
    case "Artwork":
      list = ["Posters & Prints"]
      break;
    case "Storage & Organization":
      list = ["Home Storage Hooks","Utility Hooks"]
      break;
    case "Bath":
      list = ["Bathroom Accessories","Holders & Dispensers","Soap Dishes"]
      break;
    case "Heating, Cooling & Air Quality":
      list = ["Household Fans","Table Fans"]
      break;
    case "Vacuums & Floor Care":
      list = ["Vacuums","Handheld Vacuums"]
      break;
    case "Furniture":
      list = ["Kids' Furniture","Armoires & Dressers"]
      break;
    default:
      list = [];
  }
  
  let navLinks;

  if(window.innerWidth <= 500) {
    


    if(props.show) {
      list = list.map((subCat)=>{
        return ( 
          <li key={subCat} className='subcatListItem' onClick={props.closeMenu}>
            <Link to={`/Category/${props.category}/Subcategory/${subCat}`} 
              className='subcatLink' >
              {subCat}
            </Link>
          </li>
        )
      })
    } else {
      list = '';
    }

    navLinks = (
      <div>
        <h5 onClick={props.toggle} className='SelectSubcategory'>Select Subcategory</h5>
        <ul value='Select Subcategory'>
          {list}
        </ul>
      </div>
    )

  } else {

    list = list.map((subCat)=>{
      return (
        <li className='NavLink'>
          <Link to={`/Category/${props.category}/Subcategory/${subCat}`}>
            {subCat}
          </Link>
        </li>
      )
    })

    navLinks = (
      <ul className='NavLinks'>
        {list}
      </ul>

    )
  }


  return (
    <nav>
      <div className='NavLinksContainer'>
        {navLinks}
      </div>
    </nav>
  )

}


export default subCatList;
