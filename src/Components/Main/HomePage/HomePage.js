import React, {Component} from 'react'
import './HomePage.css'

import SampleList from '../SampleList/SampleList';
import SlideShow from '../SlideShow/SlideShow';
// eslint-disable-next-line
import first from '../SlideShow/Images/quincy-alivio-UvgzVZimyWU-unsplash.svg';
// eslint-disable-next-line
import second from '../SlideShow/Images/karl-chor-UvWlksgZGPE-unsplash.jpg';

class HomePage extends Component {
  
  state = {
    products: [
      { image: 'https://via.placeholder.com/900x400', 
        title: "Sourcing Vanilla - Rishi's Origin Story to San Luis Potosi",
        link: 'www.google.com',
        paragraph: "In 2018, the Rishi team had the opportunity to visit our vanilla farming partners in San Luis Potosí, Mexico. Read on to learn more about this incredible spice."}, 
      { image: 'https://via.placeholder.com/900x400', 
        title: 'Makers Spotlight: The Nishi Family',
        link: 'www.google.com',
        paragraph: "Learn more about Rishi's 15 year sustainable farming partnership with the Nishi Family."},
      { image: "https://via.placeholder.com/900x400", 
        title: "Schisandra Berry - A Traditional Adaptogen with a Modern Twist",
        link: 'www.google.com',
        paragraph: "Schisandra is renowned for its balanced flavor profile, simultaneously being sweet, tart, salty, spicy, and bitter. Read on on to learn more about this multifaceted adaptogen."},
      { image: 'https://via.placeholder.com/900x400', 
        title: "Makers Spotlight: Tsuji-san's Matcha",
        link: 'www.google.com',
        paragraph: "This Spring of 2019, Joshua visited the 5th generation tea master, Tsuji San, who is the recipient of many prestigious awards for his matcha."}, 
      { image: 'https://via.placeholder.com/900x400', 
        title: "Majestic Himalaya Teas Pt.2: Innovations in Nepa.",
        link: 'www.google.com',
        paragraph: "We end our first round of Himalaya travels in the Jun Chiyabari where the growth of cultivars from many origins is explored in the gardens on the high slopes."},
    ]  
  }
  
  render() {
    return (
      <div>
        <section>
          <h4 className='FrontSamplesTitle'>Latest Sales</h4>
          <SlideShow 
            slides={this.state.products}
            extended={true}/>
        </section>
        <section>
          <h4 className='FrontSamplesTitle'>Featured Products</h4>
          <SampleList />
        </section>
      </div>
    )
  }
}



export default HomePage;