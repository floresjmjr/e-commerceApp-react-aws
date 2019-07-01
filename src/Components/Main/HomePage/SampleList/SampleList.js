import React from 'react'

import './SampleList.css';

const sampleList = () => {
  
  return (
  
    <ul className='FrontSamplesList'>
      <li>
        <img src={'https://via.placeholder.com/175x200'} alt='a'/>
        <h6 className='SampleTitle'>Himalayan Spring Lot J28</h6>
        <p className='SampleParagraph'>Garden Direct Organic Black Tea</p>
      </li>
      <li>
        <img src={'https://via.placeholder.com/175x200'} alt='a'/>
        <h6 className='SampleTitle'>Darjeeling First Flush Tumsong EX1</h6>
        <p className='SampleParagraph'>Garden Direct Organic Black Tea</p>
      </li>
      <li>
        <img src={'https://via.placeholder.com/175x200'}  alt='a'/>
        <h6 className='SampleTitle'>White Peony King</h6>
        <p className='SampleParagraph'>Garden Direct Organic White Tea</p>
      </li>
      <li>
        <img src={'https://via.placeholder.com/175x200'} alt='a'/>
        <h6 className='SampleTitle'>Dong Fang Hong</h6>
        <p className='SampleParagraph'>Garden Direct Black Tea</p>
      </li>
    </ul> 
  )
}



export default sampleList;