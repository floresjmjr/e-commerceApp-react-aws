import React from 'react';
import { Link } from 'react-router-dom'
import './ProductList.css';



const productList = (props) => {

  const priceGenerator = () =>{
    const first = Math.floor(Math.random() * 10 + 5)
    const second = Math.floor(Math.random() * 10)
    const third = Math.floor(Math.random() * 10)
    return `${first}.${second}${third}` 
  }


  const list = props.products.slice(0,20).map((productObj)=>{
    const destination = `/Product/${productObj.asin}`
    const obj = {
      pathname: destination,
      state: {
        category: props.category,
      }
    }
    return (
      <Link className='ProductItem' key={productObj.asin} to={obj}>
        <li>
          <img className='ProductImage' src={productObj.imUrl} alt=''/>
          <h5 className='ProductTitle'>{productObj.title}</h5>
          <h6 className='ProductSubTitle'>{productObj.subtitle || productObj.brand}</h6>
          <p className='ProductPrice'>${productObj.price || priceGenerator()}</p>
        </li>
      </Link>
    )
  }) 



  return (
    <ul className='ProductList'>
      {list}
    </ul>
  )
}

export default productList;