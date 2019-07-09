import React from 'react';
import './CartItems.css';

const cartItems = (props) =>{

  
  let qtyOptions = []
  for(var i= 1; i <= 20; i +=1){
    qtyOptions.push(<option value={i}>{i}</option>)
  }

  const itemList = [1,2].map((item)=>{
    return (
      <tr className='CartItem'>
        <td className='CartItemDescription'>
          <img className='CartImg'src="https://via.placeholder.com/650x550"/>
          <h5 className='CartItemTitle'>Product Title</h5>
        </td>
        <td className='CartPrice'>
          <p>$60.00</p>
        </td>
        <td className='CartQty'>
          <select>
            {qtyOptions}
            <option value='Delete'>Delete</option>
          </select>
        </td>
        <td className='CartTotalPrice'>
          <p>$120.00</p>
        </td>
      </tr>
    )
  })


  return (
    <div>
      <table className='CartTable'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itemList}
        </tbody>
      </table>
    </div>
  )

}



export default cartItems;
