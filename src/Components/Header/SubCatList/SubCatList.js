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
    case "Bedding":
      list = ["Kids' Bedding","Pillows"] 
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
    case "Irons & Steamers":
      list = ["Irons","Automatic Turnoff Irons"]
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
    
    list = list.map((subCat)=>{
      return ( 
        <option key={subCat} className='NavOption' value={`/Category/${props.category}/Subcategory/${subCat}`}>{subCat}</option>
      )
    })

    navLinks = (
      <select value='Select Subcategory' className='NavSelect' onChange={props.subcategoryPage}>
        <option value={`/Category/${props.category}`}>Select Subcategory</option>
        {list}
      </select>
    )

  } else {

    list = list.map((subCat)=>{
      return (
        <li className='NavLink'>
          <Link to={`/Category/${props.category}/Subcategory/${subCat}`}>{subCat}</Link>
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
