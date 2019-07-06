import React from 'react';
import SlideShow from '../SlideShow/SlideShow';
import './ProductPage.css'
import ProductForm from './ProductForm/ProductForm';


const productPage = (props) =>{



  let list = "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna"

  list = list.split('.').map((string)=>{
    return ( <li>{string}.</li> )
  })


  return (
    <div className='ProductPage'>
      <div className='ProductImages'>
        <SlideShow sliderClass='ProductSlider' slides={[{image: 'https://via.placeholder.com/850x500'}, {image: 'https://via.placeholder.com/800x600'}]}/>
      </div>
      <section className='ProductText'>
        <div className='ProductDetails'>
          <div className='ProductDescriptionContainer'>
            <h4 className='ProductDescriptionTitle'>Product Description</h4>
            <p className='ProductDescription'>Nullam bibendum nec eros eu tincidunt. Aliquam ut vestibulum arcu. Ut consequat nec massa sed tempus. Pellentesque lobortis egestas justo vel fermentum. Sed id gravida mi, ornare consectetur tellus. Donec porttitor lorem quis mi ultrices sodales. Ut interdum in ligula in auctor. Mauris rutrum semper quam at fermentum. Donec bibendum neque sem, vel convallis turpis vestibulum vel. Ut tincidunt tortor id cursus pharetra. Phasellus sit amet turpis a purus lobortis semper. Nulla at lobortis diam.</p>
          </div>
          <div className='ProductSpecContainer'>
            <h4 className='ProductSpecTitle'>Product Specs</h4>
            <ul className='ProductSpecList'>
              {list}
            </ul>
          </div>
        </div>
        <div className='ProductProfile'>
          <section className='ProductHeader'>
            <h3 className='ProductTitle'>Product Title 1</h3>
            <h5 className='Subtitle'>Item # 1</h5>
            <p className='ProductPrice'>$10.00</p>
            <a href='##' className='Rating'>
              <i className='far fa-star'/>
              <i className='far fa-star'/>
              <i className='far fa-star'/>
              <i className='far fa-star'/>
              <i className='far fa-star'/>
            </a>
          </section>
          <ProductForm />
        </div>
      </section>
    </div>
  )

}



export default productPage;