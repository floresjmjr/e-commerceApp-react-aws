import React from 'react';
import './ProductProfile.css';
const productProfile = (props) =>{


  return (
    <div className='ProductPageProfile'>
      <section className='ProductPageHeader'>
        <h3 className='ProductPageTitle'>{props.product.title}</h3>
        <a href='##' className='ProductPageRating'>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
        </a>
        <h5 className='ProductPageSubtitle'>{props.product.subtitle || props.product.brand}</h5>
        <p className='ProductPagePrice'>${props.product.price}</p>
      </section>
      <form className='ProductPageForm'>
        <button onClick={props.subtract} className='SubtractQuantity'>-</button>
        <p className='ProductPageQuantity'>{props.qty}</p>
        <button onClick={props.add} className='AddQuantity'>+</button>
        <button type='submit' onClick={props.addItem} className='SubmitItem'><span className='fas fa-cart-plus'/>Add to Cart</button>
      </form>
    </div>
  )
}

export default productProfile;