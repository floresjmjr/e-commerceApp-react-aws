import React from 'react';

const slide = (props) => {

  return (
    <div className='Slide'>
      <img className={props.cssClass}src={props.image} alt=''/>
    </div> 
  )

}



export default slide;