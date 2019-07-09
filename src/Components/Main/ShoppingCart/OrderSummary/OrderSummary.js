import React from 'react';
import { Link } from 'react-router-dom'
import './OrderSummary.css';

const orderSummary = (props) =>{

  return (
    <section className='OrderSummaryContainer'>
      <h4 className='OrderSummaryTitle'>Order Summary</h4>
      <div className='OrderSummarySubtotal'>
        <p>Subtotal:</p>
        <p>$200.00</p>
      </div>
      <Link className='ProceedToCheckoutBtn' to='/Checkout'>Checkout</Link>
    </section>
  )

}



export default orderSummary;
