import React from 'react'
import CartItems from './CartItems/CartItems';
import OrderSummary from './OrderSummary/OrderSummary';
import './ShoppingCart.css';

const shoppingCart = (props) => {

  return (
    <section className='ShoppingCartContainer'>
      <h2 className='ShoppingCartTitle'>Shopping Cart (2 items)</h2>
      <CartItems />
      <OrderSummary/>
    </section>
  )


}






export default shoppingCart;