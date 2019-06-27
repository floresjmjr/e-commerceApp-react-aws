import React, {Component} from 'react'
import Slide from './Slide/Slide';
import oceanCoffee from './Images/quincy-alivio-UvgzVZimyWU-unsplash.svg'
import otherCoffee from './Images/karl-chor-UvWlksgZGPE-unsplash.jpg'



class SlideShow extends Component {

  state = {
    images: [oceanCoffee, otherCoffee],
    currentImageIndex: 0,
  }

  prevSlideHandler = () =>{
    let newIndex = this.state.currentImageIndex - 1;
    if(newIndex < 0) {
      newIndex = this.state.images.length - 1;
    }
    this.setState({currentImageIndex: newIndex})
  }

  nextSlideHandler = () => {
    let newIndex = this.state.currentImageIndex + 1;
    if(newIndex > this.state.images.length - 1) {
      newIndex = 0;
    }
    this.setState({currentImageIndex: newIndex})
  }

  render() {
    return (
      <div className='Slider'>
        <Slide cssClass={'FrontCoffeeImg'} image={this.state.images[this.state.currentImageIndex]}/>
        <div className="leftArrow" onClick={this.prevSlideHandler}>
          <i className="fas fa-chevron-left fa-2x" aria-hidden="true"></i>
        </div>
        <div className="rightArrow" onClick={this.nextSlideHandler}>
          <i className="fas fa-chevron-right fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}


export default SlideShow;