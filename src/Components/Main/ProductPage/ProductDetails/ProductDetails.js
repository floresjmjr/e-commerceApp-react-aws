import React from 'react';
import './ProductDetails.css';

const productDetails = (props) =>{

  let list = "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna"

  list = list.split('.').map((string)=>{
    return ( <li key={string}>{string}.</li> )
  })
  // const formatText = (string) =>{
  //   // const regex = "/.|!|?/g"
  //   return string.split(".").map((sentence)=>{
  //     return sentence[0].toUpperCase() + sentence.slice(1)
  //   }).join(' ')
  // }

  return (
    <div className='ProductPageDetails'>
      <div className='ProductPageDescriptionContainer'>
        <h4 className='ProductPageDescriptionTitle'>Product Description</h4>
        <p className='ProductPageDescription'>{props.description || "Sorry, no product description."}</p>
      </div>
      <div className='ProductPageSpecContainer'>
        <h4 className='ProductPageSpecTitle'>Product Specs</h4>
        <ul className='ProductPageSpecList'>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default productDetails;