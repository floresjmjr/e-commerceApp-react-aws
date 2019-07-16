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
        title: "Etiam nec",
        link: '/Blank',
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, tortor non efficitur luctus, massa urna venenatis tortor, ac lobortis magna purus ut nisi."}, 
      { image: 'https://via.placeholder.com/900x400', 
        title: 'Aliquam pharetra ac',
        link: '/Blank',
        paragraph: "Mauris iaculis, nisl eget mollis molestie, nunc est tincidunt lectus, volutpat faucibus lectus risus vitae ante."},
      { image: "https://via.placeholder.com/900x400", 
        title: "Duis a ipsum",
        link: '/Blank',
        paragraph: "Sed augue velit, congue eu fringilla non, aliquam vel lorem."},
      { image: 'https://via.placeholder.com/900x400', 
        title: "Donec id ornare enim",
        link: '/Blank',
        paragraph: "Maecenas risus mi, ornare et elit nec, tempor placerat augue. Fusce volutpat eget enim in semper."}, 
      { image: 'https://via.placeholder.com/900x400', 
        title: "Curabitur lacinia",
        link: '/Blank',
        paragraph: "Nulla elementum erat et libero porta varius. "},
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