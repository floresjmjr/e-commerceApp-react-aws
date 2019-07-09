import React from 'react';
import './ProductProfile.css';

const productProfile = (props) =>{


  return (
    <div className='ProductPageProfile'>
      <section className='ProductPageHeader'>
        <h3 className='ProductPageTitle'>{props.title}</h3>
        <h5 className='ProductPageSubtitle'>{props.brand}</h5>
        <p className='ProductPagePrice'>${props.price}</p>
        <a href='##' className='ProductPageRating'>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
          <i className='far fa-star'/>
        </a>
      </section>
      <form className='ProductPageForm'>
        <button onClick={props.subtract} className='SubtractQuantity'>-</button>
        <input type='number' value={props.qty} name='quantity' className='InputQuantity'/>
        <button onClick={props.add} className='AddQuantity'>+</button>
        <button onClick={props.addItem} className='SubmitItem'><span className='fas fa-cart-plus'/>Add to Cart</button>
      </form>
    </div>
  )
}

export default productProfile;