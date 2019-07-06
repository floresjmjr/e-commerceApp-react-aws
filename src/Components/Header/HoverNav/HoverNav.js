import React from 'react';
import { Link } from 'react-router-dom';
import './HoverNav.css';

const hoverNav = (props) => {

  let list = [];

  switch(props.data) {
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

  list = list.map((string)=>{
    return (<li key={string}
        className='NavSubListItem'>
        <Link to={`/Category/${props.data}/Subcategory/${string}`}>{string}</Link>
      </li>)
  })

  return (
    <div className='HoverNavContainer'>
      <ul className='NavSubList'>
        {list}
      </ul>
    </div>
  )

}





export default hoverNav;