import React, {Component} from 'react'

import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './RightArrow/RightArrow';

import './SlideShow.css';


class SlideShow extends Component {

  state = {
    slideIndex: 0,
  }

  prevSlideHandler = () =>{
    let newIndex = this.state.slideIndex - 1;
    if(newIndex < 0) {
      newIndex = this.props.slides.length - 1;
    }
    this.setState({slideIndex: newIndex})
  }

  nextSlideHandler = () => {
    let newIndex = this.state.slideIndex + 1;
    if(newIndex > this.props.slides.length - 1) {
      newIndex = 0;
    }
    this.setState({slideIndex: newIndex})
  }


  render() {

    console.log('slides', this.props.slides);

    let extra = '';
    if(this.props.extended) {
      extra = (
        <div>
          <h3 className='SlideTitle'>{this.props.slides[this.state.slideIndex].title}</h3>
          <p className='SlideParagraph'>{this.props.slides[this.state.slideIndex].paragraph}</p>
          <div className='SlideLink'>View All Sales</div>
        </div>
      )
    }


    return (
      <div className='SlideShow'>
        <div className='Slide'>
          <img 
            className='FrontCoffeeImg' 
            src={this.props.slides[this.state.slideIndex].image} alt=''/>
          <LeftArrow clicked={this.prevSlideHandler.bind(this)} />
          <RightArrow clicked={this.nextSlideHandler.bind(this)} />
        </div> 
        {extra}
      </div>
    )
  }
}


export default SlideShow;