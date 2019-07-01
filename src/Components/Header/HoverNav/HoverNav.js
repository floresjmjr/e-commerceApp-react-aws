import React from 'react';
import { Link } from 'react-router-dom';
import './HoverNav.css';

const hoverNav = (props) => {

  let list = [];

  switch(props.data) {
    case 'Category-1':
      list = ["subcategory-1", "subcategory-2", "subcategory-3", "subcategory-4", "subcategory-5"]
      break;
    case 'Category-2':
      list = ["subcategory-6", "subcategory-7", "subcategory-8", "subcategory-9", "subcategory-10", "subcategory-11", "subcategory-1", "subcategory-1"]
      break;
    case 'Category-3':
      list = ["subcategory-12", "subcategory-13", "subcategory-14", "subcategory-15"] 
      break;
    case 'Category-4':
      list = ["subcategory-16", "subcategory-17"]
      break;
    case 'Category-5':
      list = ["subcategory-18", "subcategory-19", "subcategory-20"]
      break;
    case 'Category-6':
      list = ["subcategory-21", "subcategory-22", "subcategory-23", "subcategory-24", "subcategory-25", "subcategory-26"]
      break;
    case 'Category-7':
      list = ["subcategory-27", "subcategory-28", "subcategory-29", "subcategory-30", "subcategory-31", "subcategory-32", "subcategory-33"]
    break;
      default:
      list = [];
  }

  list = list.map((string)=>{
    return (<li key={string}
        className='NavSubListItem'>
        <Link to={`/${props.data}/${string}`}>{string}</Link>
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