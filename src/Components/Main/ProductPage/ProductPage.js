import React, { Component } from 'react';
import axios from 'axios';

import './ProductPage.css';

import SlideShow from '../SlideShow/SlideShow';
import ProductProfile from './ProductProfile/ProductProfile';
import Spinner from '../Spinner/Spinner';
import ProductDetails from './ProductDetails/ProductDetails.js';


class ProductPage extends Component {
  state = {
    doneLoading: false,
    product: {
      description: 'Omnesque oporteat complectitur mei in. Paulo quodsi ei vis, habeo quaeque pri at. Eum ad putent vulputate percipitur, ne facilisi legendos pri. Usu id sanctus omittam, vis vocent philosophia ei. Errem verear fastidii ex sed, mei ne vidisse honestatis. Eu viderer efficiendi vel. Wisi oportere constituam an pro, pro labore repudiandae an, vis at adhuc adipiscing.',
      brand: 'Brand',
      price: "10.00",
    },
    cart: [],
    qty: 1,
  }

  componentDidMount() {
    const formattedCat = encodeURI(this.props.location.state)
    const id = this.props.match.params.id;
    const url = `https://e-commerce-jf.firebaseio.com/${formattedCat}/${id}.json`
    axios.get(url)
    .then((response)=>{
      console.log('product page data', response.data)
      if(response.data.title.includes('&quot;')){
        let titles = response.data.title.split('&quot;');
        const title = this.capitalize(titles[1])
        response.data.title = titles[1];
        response.data.subtitle = titles[0];
      }
      const productProperties = {...this.state.product, ...response.data}
      this.setState({
        product: productProperties, 
        doneLoading: true
      })
    })
  }

  addItemToCart = (event) =>{
    event.preventDefault();
    const item = {
      asin: this.state.product.asin,
      title: this.state.product.title,
      price: this.state.product.price,
    }
    console.log('addItemtocart', item);
  }

  addQty = (event) =>{
    event.preventDefault();
    let newQty = this.state.qty + 1;
    this.setState({qty: newQty})
  }

  subtractQty = (event) =>{
    event.preventDefault();
    if(this.state.qty <= 1) {
    } else {
      let newQty = this.state.qty - 1;
      this.setState({qty: newQty})
    }
  }

  capitalize = (string) =>{
    const sentence = string.toLowerCase()
    return sentence[0].toUpperCase() + sentence.slice(1);
  }

  render(){

    if(this.state.doneLoading){
      return (
        <div className='ProductPage'>
          <div className='ProductPageImages'>
            <SlideShow sliderClass='ProductPageSlider' slides={[{image: this.state.product.imUrl}, {image: 'https://via.placeholder.com/600x400'}]}/>
          </div>
          <section className='ProductPageText'>
            <ProductDetails description={this.state.product.description}/>
            <ProductProfile 
              title={this.state.product.title} 
              brand={this.state.product.subtitle || this.state.product.brand} 
              price={this.state.product.price}
              qty={this.state.qty}
              subtract={this.subtractQty}
              add={this.addQty}
              addItem={this.addItemToCart}/>
          </section>
        </div>
      )
    } else {
      return <Spinner />
    }
  }
}



export default ProductPage;