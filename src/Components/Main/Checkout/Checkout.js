import React from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import './Checkout.css';
import { Link } from 'react-router-dom';

const checkout = (props) => {

  const calculateTax = () => {
    return (Number(props.location.state.subTotal) * .075).toFixed(2)
  }

  const calcTotal = () =>{
    return (Number(calculateTax()) + Number(props.location.state.subTotal)).toFixed(2)
  }

  const processPayment = (event) =>{
    event.preventDefault()
    alert('Payment processing comming soon!')
  }

  return (
    <div className='CheckoutContainer'>
      <CheckoutForm/>
      <section className='CheckoutSummary'>
        <div className='CheckoutSummaryHeader'>
          <h4 className='CheckoutSummaryTitle'>Order Summary</h4>
          <Link className='EditCart' to='/ShoppingCart'>Edit Cart</Link>
        </div>
        <ul className='OrderBreakdown'>
          <li>
            <p>Subtotal</p><p>{props.location.state.subTotal}</p>
          </li>
          <li>
            <dt>Shipping</dt><dd>---</dd>
          </li>
          <li>
            <dt>Tax</dt><dd>{calculateTax()}</dd>
          </li>
          <li>
            <dt>Total</dt><dd>{calcTotal()}</dd>
          </li>
        </ul>
        <button type='submit' className='PlaceOrderBtn' onClick={processPayment}>Place Order</button>
      </section>
    </div>
  )
}



export default checkout;