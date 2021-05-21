import React from 'react';
import './CartItems.css';

const cartItems = (props) =>{

  
  let qtyOptions = []
  for(var i= 1; i <= 20; i +=1){
    qtyOptions.push(<option key={i} value={i}>{i}</option>)
  }
  
  const calculateTotal = (price, qty) => {
    return (price * qty).toFixed(2);
  }

  const itemList = props.cart.map((item)=>{
    return (
      <tr key={item.asin} className='CartItem'>
        <td className='CartItemDescription'>
          <img className='CartImg'src={item.image} alt='ds'/>
          <h5 className='CartItemTitle'>{item.title}</h5>
        </td>
        <td className='CartPrice'>
          <p>{item.price}</p>
        </td>
        <td className='CartQty'>
          <select value={item.qty} name={item.asin} onChange={props.quantityChange}>
            {qtyOptions}
            <option value='Delete'>Delete</option>
          </select>
        </td>
        <td className='CartTotalPrice'>
          <p>{calculateTotal(item.price, item.qty)}</p>
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
