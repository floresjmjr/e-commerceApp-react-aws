import React, {Component} from 'react'
import CartItems from './CartItems/CartItems';
import OrderSummary from './OrderSummary/OrderSummary';
import './ShoppingCart.css';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

class ShoppingCart extends Component {

  state = {
    cart: [],
    doneLoading: false,
    totalItems: 0,
  }

  componentDidMount() {
    axios.get('https://e-commerce-jf.firebaseio.com/cart.json')
    .then((response)=>{
      const updatedCart = [];
      for(var key in response.data){
        updatedCart.push(response.data[key])
      }
      const cartItems = this.findNumOfItems(updatedCart);
      this.setState({cart: updatedCart, doneLoading: true, totalItems: cartItems})
    })
  }

  findNumOfItems = (arr) =>{
    return arr.reduce((acc, item)=> {
      return acc + Number(item.qty);
    },0)
  }

  quantityChangeHandler = (event) =>{
    let updatedCart = []
    if(event.target.value === 'Delete'){
      updatedCart = this.deleteItem(event)
    } else {
      updatedCart = this.updateItems(event)
    }
    const cartItems = this.findNumOfItems(updatedCart)
    this.setState({cart: updatedCart, totalItems: cartItems}, ()=>{
      const jsonData = JSON.stringify(this.state.cart)
      axios.put(`https://e-commerce-jf.firebaseio.com/cart.json`, jsonData)
      .then((response)=>{
        console.log('posted')
      })
    })
  }

  deleteItem = (event) =>{
    let index = ''
    this.state.cart.forEach((item, idx)=>{
      if(item.asin === event.target.name) {
        index = idx
      }
    })
    console.log('delete', index)
    let updatedCart = this.state.cart.slice()
    updatedCart.splice(index, 1)
    return updatedCart;
  }

  updateItems = (event) =>{
    return this.state.cart.map((item)=>{
      if(item.asin === event.target.name){
        item.qty = event.target.value
        return item;
      } else {
        return item;
      }
    })
  }

  render() {

    if(this.state.doneLoading) {
      return (
        <section className='ShoppingCartContainer'>
          <h2 className='ShoppingCartTitle'>Shopping Cart ({this.state.totalItems} items)</h2>
          <CartItems quantityChange={this.quantityChangeHandler} cart={this.state.cart}/>
          <OrderSummary cart={this.state.cart}/>
        </section>
      )
    } else {
      return <Spinner/>
    }
  }
}


export default ShoppingCart;