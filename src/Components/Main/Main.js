import React from 'react'
import { Route } from 'react-router-dom'
import './Main.css'

import HomePage from './HomePage/HomePage';
import ProductPage from './ProductPage/ProductPage';
import SubcategoryPage from './ProductsPage/SubcategoryPage/SubcategoryPage';
import CategoryPage from './ProductsPage/CategoryPage/CategoryPage';
import Checkout from './CheckoutPage/CheckoutPage';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const main = (props) => {
  console.log('main', props)

  return (  
    <main> 
      <Route path='/' exact component={HomePage}/>
      <Route exact path='/Category/:category' 
        render={(props)=> <CategoryPage {...props} />}/>
      <Route exact path='/Category/:category/Subcategory/:subcategory' 
        render={(props)=> <SubcategoryPage {...props}/>}/>
      <Route path='/Product/:id' 
        render={(props)=> <ProductPage {...props}/>}/>
      <Route path='/ShoppingCart' exact component={ShoppingCart}/>
      <Route path='/Checkout' exact component={Checkout}/>
    </main>

  )

}



export default main;