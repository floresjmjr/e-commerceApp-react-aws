import React from 'react';

import './ProductList.css';

const productList = (props) => {

  const list = (
    <li className='ProductItem'>
      <img src={"https://via.placeholder.com/175x200"} alt=''/>
      <div className='ProductText'>
        <h5 className='ProductTitle'>{props.title}</h5>
        <h6 className='ProductSubTitle'>Subtitle of First</h6>
        <p className='ProductPrice'>$10.00</p>
      </div>
    </li>
  )

  return (
    <div>
    <h2 className='ProductListHeader'>{props.title} - Product Page</h2>
    <ul className='ProductList'>
      {list}
    </ul>
  </div>

  )
}

export default productList;