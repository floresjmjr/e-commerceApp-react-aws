import React, { Component } from 'react';
import MyContext from './Context';

class MyProvider extends Component {
  state = {
    cart: [
      { asin: '12', 
        qty: '1', 
        title: 'title', 
        category: 'category', 
        imUrl: 'l', 
        price: '10'}
    ],
    totalQty: 0,

  }

  render() {
    return (
      <MyContext.Provider value={this.state}> 
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


export default MyProvider;