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
    qty: 1,
    cart: [],
  }

  componentDidMount() {
    console.log('compnent mount prps', this.props)
    this.getProductData();
    this.getCartData();
  }

  getProductData = () => {
    const formattedCat = encodeURI(this.props.location.state.category)
    const id = this.props.match.params.id;
    const url = `https://e-commerce-jf.firebaseio.com/${formattedCat}/${id}.json`
    axios.get(url)
    .then((response)=>{
      console.log('product page data', response.data)
      if(response.data.title.includes('&quot;')){
        let titles = response.data.title.split('&quot;');
        response.data.title = titles[1];
        response.data.subtitle = titles[0];
      }
      const productProperties = {...this.state.product, ...response.data}
      this.setState({
        product: productProperties, 
      })
    })
  }

  getCartData = () =>{
    axios.get('https://e-commerce-jf.firebaseio.com/cart.json')
    .then((response)=>{
      const cart = []
      for(var key in response.data){
        cart.push(response.data[key])
      }
      this.setState({cart: cart, doneLoading: true},()=>{
        console.log('cartdata', this.state.cart)
      })
    })
  }



  addItemToCart = (event) =>{
    event.preventDefault();
    const item = {
      asin: this.state.product.asin,
      title: this.state.product.title,
      price: this.state.product.price,
      image: this.state.product.imUrl,
      qty: this.state.qty,
      category: this.props.location.state.category,
    }
    const updatedCart = [...this.state.cart, item]
    console.log('updatedcart', updatedCart);
    this.setState({cart: updatedCart},()=>{
      console.log('cart', this.state.cart);
      const jsonData = JSON.stringify(this.state.cart)
      axios.put(`https://e-commerce-jf.firebaseio.com/cart.json`, jsonData)
      .then((response)=>{
        console.log('posted')
      })
    })
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
    let sentences = string.split('. ');
    sentences = sentences.map((sentence)=>{
      let string = sentence.toLowerCase()
      return string.substring(0,1).toUpperCase() + string.slice(1);
    })
    return sentences.join('. ')
  }

  render(){

    if(this.state.doneLoading){
      return (
        <div className='ProductPage'>
          <div className='ProductPageImages'>
            <SlideShow sliderClass='ProductPageSlider' slides={[{image: this.state.product.imUrl}, {image: 'https://via.placeholder.com/600x400'}]}/>
          </div>
          <section className='ProductPageText'>
            <ProductDetails 
              description={this.capitalize(this.state.product.description)}/>
            <ProductProfile
              product={this.state.product}
              addItem={this.addItemToCart}
              qty={this.state.qty}
              subtract={this.subtractQty}
              add={this.addQty}/>
          </section>
        </div>
      )
    } else {
      return <Spinner />
    }
  }
}



export default ProductPage;