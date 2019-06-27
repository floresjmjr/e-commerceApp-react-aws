import React, {Component} from 'react'
import './HomePage.css'

import SampleList from './SampleList/SampleList';
import SlideShow from '../SlideShow/SlideShow';

class HomePage extends Component {
  
  
  render() {
    return (
      <div>
        <div className='FrontPicture'>
          <SlideShow />
        </div>
        <div className='CoffeeTypesDouble'>
          <img className='FrontCoffeeImg' src={'https://via.placeholder.com/450'} alt='a'/>
          <img className='FrontCoffeeImg' src={'https://via.placeholder.com/450'} alt='a'/>
        </div>
        <section className='CoffeeTypesSingle'>
          <h4>Lorem Ipsum</h4>
          <img className='BottomCoffeeImg' src={'https://via.placeholder.com/450x250'} alt='a'/>
        </section>
        <section>
          <h4 className='FrontSamplesTitle'>Fresh From Origin</h4>
          <SampleList />
        </section>
        <section>
          <h4 className='FrontSamplesTitle'>Latest Journal Entries</h4>
          <div>
            <img src={'https://via.placeholder.com/900x400'} alt='a'/>
            <h3>Carousel Title 1</h3>
            <p>sdjklf jasdlkjd skljdfas lkfjsadljsal js dflkjsadsfjsd kalf sd fklsa sdjflk</p>
            <button>View Journal</button>
          </div>
        </section>
        <aside>
          <form className='emailSubscription'>
            <input type='email' name='email' placeholder='Enter your email address to subscribe for updates'/>
            <button type='submit' name='submitButton'>Submit</button>
          </form>
        </aside>
      </div>
    )
  }
}



export default HomePage;