import React from 'react'

import './CategoryPage.css'

const categoryPage = () => {
  return (
    <div>
      {/* Slider Picture */}
      <section className='PromotionContainer'>
        <h4>On Sale</h4>
      </section>
      <section className='NewArrivalsContainer'>
        <h4>New Arrivals</h4>
      </section>
      <section className='FeaturedContainer'>
        <h4>Featured</h4>
      </section>
    </div>
  )
}



export default categoryPage;