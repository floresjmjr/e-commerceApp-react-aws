import React from 'react'
import SampleList from '../../SampleList/SampleList';
import './CategoryPage.css'
import SlideShow from '../../SlideShow/SlideShow';

const categoryPage = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className='ProductListHeader'>{props.match.params.category}</h2>
      <SlideShow slides={[{image: 'https://via.placeholder.com/650x550'}, {image: 'https://via.placeholder.com/700x500'}]}/>
      <section className='PromotionContainer'>
        <h4 className='SectionTitle'>On Sale</h4>
        <SampleList />
      </section>
      <section className='NewArrivalsContainer'>
        <h4 className='SectionTitle'>New Arrivals</h4>
        {props.products}
      </section>
      <section className='FeaturedContainer'>
        <h4 className='SectionTitle'>Featured</h4>
      </section>
    </div>
  )
}



export default categoryPage;