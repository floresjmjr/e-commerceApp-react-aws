import React from 'react';
import { Link } from 'react-router-dom'
import './OrderSummary.css';

const orderSummary = (props) =>{

  const calculateSubTotal = () =>{
    return props.cart.reduce((acc, item)=> {
      return acc + (Number(item.price) * Number(item.qty));
    },0).toFixed(2)
  }

  return (
    <section className='OrderSummaryContainer'>
      <h4 className='OrderSummaryTitle'>Order Summary</h4>
      <div className='OrderSummarySubtotal'>
        <p>Subtotal:</p>
        <p>{calculateSubTotal()}</p>
      </div>
      <Link className='ProceedToCheckoutBtn' to='/Checkout'>Checkout</Link>
    </section>
  )

}



export default orderSummary;
