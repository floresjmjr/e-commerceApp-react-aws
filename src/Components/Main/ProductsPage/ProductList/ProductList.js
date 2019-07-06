import React from 'react';

import './ProductList.css';



const productList = (props) => {

  const priceGenerator = () =>{
    const first = Math.floor(Math.random() * 10 + 5)
    const second = Math.floor(Math.random() * 10)
    const third = Math.floor(Math.random() * 10)
    return `${first}.${second}${third}` 
  }


  const list = props.products.slice(0,20).map((productObj)=>{
    return (
      <li className='ProductItem' key={productObj.asin}>
        <img src={productObj.imUrl} alt=''/>
        <h5 className='ProductTitle'>{productObj.title}</h5>
        <h6 className='ProductSubTitle'>{productObj.brand}</h6>
        <p className='ProductPrice'>${productObj.price || priceGenerator()}</p>
      </li>
    )
  }) 



  return (
    <ul className='ProductList'>
      {list}
    </ul>
  )
}

export default productList;