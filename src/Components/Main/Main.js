import React from 'react'
import { Route } from 'react-router-dom'
import './Main.css'

import HomePage from './HomePage/HomePage';
import ProductPage from './ProductPage/ProductPage';
import SubcategoryPage from './ProductsPage/SubcategoryPage/SubcategoryPage';
import CategoryPage from './ProductsPage/CategoryPage/CategoryPage';


const main = (props) => {
  return (
  
    <main> 
      <Route path='/' exact component={HomePage}/>
      <Route exact path='/Category/:category' 
        render={(props)=> <CategoryPage {...props} />}/>
      <Route exact path='/Category/:category/Subcategory/:subcategory/' 
        render={(props)=> <SubcategoryPage {...props} sub={true}/>}/>
      <Route path='/Product/:id' component={ProductPage}/>
    </main>
  
  )

}



export default main;