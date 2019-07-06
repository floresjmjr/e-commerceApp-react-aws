import React from 'react'

const productForm = () =>{
  return (
    <form className='ProductForm'>
      <button className='SubtractQuantity'>-</button>
      <input type='number' value='1' name='quantity' className='InputQuantity'/>
      <button className='AddQuantity'>+</button>
      <button className='SubmitItem'><span className='fas fa-cart-plus'/>Add to Cart</button>
    </form>
  )
}


export default productForm;