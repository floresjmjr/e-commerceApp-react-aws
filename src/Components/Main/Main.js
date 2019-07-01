import React from 'react'
import { Route } from 'react-router-dom'
import './Main.css'

import HomePage from './HomePage/HomePage';
import Products from './ProductsPage/ProductsPage';

const main = () => {

  return (
  
    <main> 
      <Route path='/' exact component={HomePage}/>
      <Route path='/Category-1' 
        render={(props)=> <Products {...props} page='Category 1'/>}/>
      <Route path='/Category-2' 
        render={(props)=> <Products {...props} page='Category 2'/>}/>
      <Route path='/Category-3' 
        render={(props)=> <Products {...props} page='Category 3'/>}/>
      <Route path='/Category-4' 
        render={(props)=> <Products {...props} page='Category 4'/>}/>
      <Route path='/Category-5' 
        render={(props)=> <Products {...props} page='Category 5'/>}/>
      <Route path='/Category-6' 
        render={(props)=> <Products {...props} page='Category 6'/>}/>
      <Route path='/Category-7' 
        render={(props)=> <Products {...props} page='Category 7'/>}/>
    </main>
  
  )

}



export default main;